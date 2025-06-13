// Games Rendering Logic for TOKEN4PLAY™

// Global variables for filtering and sorting
let currentGames = [...gamesDatabase];
let activeFilters = {
  platform: 'all',
  tag: 'all',
  popular: false,
  sort: 'default'
};

// DOM elements
const gamesGrid = document.getElementById('games-grid');
const gamesCount = document.getElementById('games-count');
const loadingState = document.getElementById('loading-state');
const emptyState = document.getElementById('empty-state');

// === GAME CARD TEMPLATE ===
function createGameCard(game) {
  const extensionPrices = calculateExtensionPrices(game.fullPrice);
  
  const card = document.createElement('div');
  card.className = 'game-card scroll-reveal';
  card.setAttribute('data-slug', game.slug);
  card.setAttribute('data-id', game.id);
  
  // Add popular and new badges
  const badges = [];
  if (game.isPopular) badges.push('<span class="game-badge popular">★ Популярна</span>');
  if (game.isNew) badges.push('<span class="game-badge new">Нова</span>');
  
  // Create tags HTML
  const tagsHTML = game.tags.map(tag => `<span class="game-tag">${tag}</span>`).join('');
  
  card.innerHTML = `
    <div class="game-image">
      <img src="${game.image}" alt="${game.title}" loading="lazy">
      <div class="game-badges">
        ${badges.join('')}
      </div>
      <div class="game-overlay">
        <div class="game-platform">${game.platform}</div>
      </div>
    </div>
    <div class="game-info">
      <h3 class="game-title">${game.title}</h3>
      <p class="game-description">${game.description}</p>
      <div class="game-tags">
        ${tagsHTML}
      </div>
      <div class="game-pricing">
        <div class="price-main">
          <span class="rental-price orange-text">${game.price} ₴</span>
          <span class="rental-period">${game.days} днів</span>
        </div>
        <div class="price-details">
          <span class="full-price">Повна: ${game.fullPrice} ₴</span>
          <div class="extension-prices">
            <span class="extension-option">+4 дні: ${extensionPrices.halfTime} ₴</span>
            <span class="extension-option">+8 днів: ${extensionPrices.fullTime} ₴</span>
          </div>
        </div>
      </div>
      <div class="game-actions">
        <button class="game-reserve-btn orange-text" data-game-title="${game.title}" data-game-price="${game.price}">
          Запит в Direct →
        </button>
        <a href="game.html?slug=${game.slug}" class="game-details-link">
          Детальніше
        </a>
      </div>
    </div>
  `;
  
  return card;
}

// === RENDER GAMES ===
function renderGames(games = currentGames) {
  // Show loading state
  showLoading();
  
  // Clear existing cards
  gamesGrid.innerHTML = '';
  
  // Handle empty state
  if (games.length === 0) {
    showEmptyState();
    return;
  }
  
  // Hide loading and empty states
  hideLoading();
  hideEmptyState();
  
  // Create and append game cards
  games.forEach((game, index) => {
    const card = createGameCard(game);
    gamesGrid.appendChild(card);
    
    // Add staggered animation delay
    card.style.animationDelay = `${index * 0.1}s`;
  });
  
  // Update games count
  updateGamesCount(games.length);
  
  // Reinitialize scroll animations
  initScrollAnimations();
  
  // Add event listeners to reserve buttons
  addReserveButtonListeners();
}

// === FILTER FUNCTIONS ===
function filterByPlatform(games, platform) {
  if (platform === 'all') return games;
  return games.filter(game => game.platform === platform);
}

function filterByTag(games, tag) {
  if (tag === 'all') return games;
  return games.filter(game => game.tags.includes(tag));
}

function filterByPopular(games, popularOnly) {
  if (!popularOnly) return games;
  return games.filter(game => game.isPopular);
}

// === SORT FUNCTIONS ===
function sortGames(games, sortType) {
  const sortedGames = [...games];
  
  switch (sortType) {
    case 'price-low':
      return sortedGames.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sortedGames.sort((a, b) => b.price - a.price);
    case 'name-az':
      return sortedGames.sort((a, b) => a.title.localeCompare(b.title));
    case 'name-za':
      return sortedGames.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return sortedGames;
  }
}

// === APPLY ALL FILTERS ===
function applyFilters() {
  let filteredGames = [...gamesDatabase];
  
  // Apply filters
  filteredGames = filterByPlatform(filteredGames, activeFilters.platform);
  filteredGames = filterByTag(filteredGames, activeFilters.tag);
  filteredGames = filterByPopular(filteredGames, activeFilters.popular);
  
  // Apply sorting
  filteredGames = sortGames(filteredGames, activeFilters.sort);
  
  // Update current games and render
  currentGames = filteredGames;
  renderGames(currentGames);
}

// === UI STATE MANAGEMENT ===
function showLoading() {
  loadingState.style.display = 'flex';
  gamesGrid.style.display = 'none';
  emptyState.style.display = 'none';
}

function hideLoading() {
  loadingState.style.display = 'none';
  gamesGrid.style.display = 'grid';
}

function showEmptyState() {
  emptyState.style.display = 'flex';
  gamesGrid.style.display = 'none';
  loadingState.style.display = 'none';
}

function hideEmptyState() {
  emptyState.style.display = 'none';
}

function updateGamesCount(count) {
  gamesCount.textContent = count;
}

// === INSTAGRAM DIRECT INTEGRATION ===
function generateInstagramMessage(gameTitle, gamePrice) {
  const message = `Привіт! Хочу орендувати гру "${gameTitle}" за ${gamePrice} ₴ через TOKEN4PLAY™. Як це працює?`;
  return encodeURIComponent(message);
}

function openInstagramDirect(gameTitle, gamePrice) {
  const message = generateInstagramMessage(gameTitle, gamePrice);
  const instagramUrl = `https://www.instagram.com/direct/new/?text=${message}`;
  window.open(instagramUrl, '_blank');
}

// === EVENT LISTENERS ===
function addReserveButtonListeners() {
  const reserveButtons = document.querySelectorAll('.game-reserve-btn');
  
  reserveButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const gameTitle = button.getAttribute('data-game-title');
      const gamePrice = button.getAttribute('data-game-price');
      
      // Add click animation
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 150);
      
      // Open Instagram Direct
      openInstagramDirect(gameTitle, gamePrice);
    });
  });
}

function initFilterListeners() {
  // Platform filter buttons
  const platformButtons = document.querySelectorAll('[data-platform]');
  platformButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all platform buttons
      platformButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Update filter and apply
      activeFilters.platform = button.getAttribute('data-platform');
      applyFilters();
    });
  });
  
  // Tag filter dropdown
  const tagFilter = document.getElementById('tag-filter');
  tagFilter.addEventListener('change', () => {
    activeFilters.tag = tagFilter.value;
    applyFilters();
  });
  
  // Popular toggle
  const popularToggle = document.getElementById('popular-toggle');
  popularToggle.addEventListener('click', () => {
    activeFilters.popular = !activeFilters.popular;
    popularToggle.classList.toggle('active', activeFilters.popular);
    applyFilters();
  });
  
  // Sort filter dropdown
  const sortFilter = document.getElementById('sort-filter');
  sortFilter.addEventListener('change', () => {
    activeFilters.sort = sortFilter.value;
    applyFilters();
  });
  
  // Reset filters button
  const resetButton = document.getElementById('reset-filters');
  resetButton.addEventListener('click', () => {
    // Reset all filters to default
    activeFilters = {
      platform: 'all',
      tag: 'all',
      popular: false,
      sort: 'default'
    };
    
    // Reset UI controls
    document.querySelector('[data-platform="all"]').classList.add('active');
    platformButtons.forEach(btn => {
      if (btn.getAttribute('data-platform') !== 'all') {
        btn.classList.remove('active');
      }
    });
    
    tagFilter.value = 'all';
    sortFilter.value = 'default';
    popularToggle.classList.remove('active');
    
    // Apply filters
    applyFilters();
  });
}

// === SCROLL ANIMATIONS ===
function initScrollAnimations() {
  if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate game cards on scroll
    const cards = document.querySelectorAll('.game-card');
    
    cards.forEach((card, index) => {
      gsap.fromTo(card, {
        y: 60,
        opacity: 0,
        rotationX: 15
      }, {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    });
    
    // Animate header elements
    const titleWords = document.querySelectorAll('.title-word');
    if (titleWords.length > 0) {
      gsap.fromTo(titleWords, {
        y: 40,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".games-header",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    }
  }
}

// === NAVIGATION ANIMATION ===
function initNavigation() {
  const nav = document.querySelector('.navigation');
  
  if (nav && typeof gsap !== 'undefined') {
    // Show navigation immediately since we're on a subpage
    gsap.set(nav, {
      y: 0,
      opacity: 1
    });
    nav.classList.add('visible');
  }
}

// === INITIALIZATION ===
function initGamesPage() {
  console.log('Initializing games page...');
  console.log(`Loaded ${gamesDatabase.length} games`);
  
  // Initialize navigation
  initNavigation();
  
  // Render initial games
  renderGames(gamesDatabase);
  
  // Initialize filter listeners
  initFilterListeners();
  
  // Initialize scroll animations
  initScrollAnimations();
  
  console.log('Games page initialized successfully');
}

// === LOAD ON DOM READY ===
document.addEventListener('DOMContentLoaded', () => {
  // Small delay to ensure all resources are loaded
  setTimeout(() => {
    initGamesPage();
  }, 100);
});

// === EXPORT FOR TESTING ===
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    createGameCard,
    renderGames,
    applyFilters,
    activeFilters,
    currentGames
  };
}

// Individual Game Page Logic for TOKEN4PLAY™

// Global variables for current game
let currentGame = null;
let gameSlug = null;

// DOM elements
const gameLoading = document.getElementById('game-loading');
const gameNotFound = document.getElementById('game-not-found');
const gameContent = document.getElementById('game-content');
const pageTitle = document.getElementById('page-title');

// === URL PARAMETER HANDLING ===
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function updatePageTitle(gameTitle) {
  const title = gameTitle ? `${gameTitle} - TOKEN4PLAY™` : 'Game Details - TOKEN4PLAY™';
  pageTitle.textContent = title;
  document.title = title;
}

// === GAME DATA LOOKUP ===
function findGameBySlug(slug) {
  return gamesDatabase.find(game => game.slug === slug);
}

// === DOM INJECTION FUNCTIONS ===
function injectGameBadges(game) {
  const badgesContainer = document.getElementById('game-badges');
  const badges = [];
  
  if (game.isPopular) {
    badges.push('<span class="game-badge popular">★ Популярна</span>');
  }
  
  if (game.isNew) {
    badges.push('<span class="game-badge new">Нова</span>');
  }
  
  badgesContainer.innerHTML = badges.join('');
}

function injectGameHeader(game) {
  // Title and meta information
  document.getElementById('game-title').textContent = game.title;
  document.getElementById('game-platform').textContent = game.platform;
  document.getElementById('game-description').textContent = game.description;
  document.getElementById('breadcrumb-current').textContent = game.title;
  
  // Release status
  const statusElement = document.getElementById('game-release-status');
  statusElement.textContent = game.isNew ? 'Нова гра' : 'Доступна';
  
  // Game image
  const gameImage = document.getElementById('game-image');
  gameImage.src = game.image;
  gameImage.alt = game.title;
  
  // Tags
  const tagsContainer = document.getElementById('game-tags');
  const tagsHTML = game.tags.map(tag => 
    `<span class="game-tag">${tag}</span>`
  ).join('');
  tagsContainer.innerHTML = tagsHTML;
}

function injectGamePricing(game) {
  const extensionPrices = calculateExtensionPrices(game.fullPrice);
  
  // Initial rental pricing
  document.getElementById('rental-period').textContent = `${game.days} днів`;
  document.getElementById('rental-price').textContent = `${game.price} ₴`;
  document.getElementById('rental-percentage').textContent = '(9%)';
  document.getElementById('full-price').textContent = `${game.fullPrice} ₴`;
  
  // Extension pricing
  document.getElementById('half-extension-price').textContent = `${extensionPrices.halfTime} ₴`;
  document.getElementById('full-extension-price').textContent = `${extensionPrices.fullTime} ₴`;
  
  // Total calculations
  const maxTotalPrice = game.price + extensionPrices.halfTime + extensionPrices.fullTime;
  const savings = game.fullPrice - maxTotalPrice;
  
  document.getElementById('max-total-price').textContent = `${maxTotalPrice} ₴`;
  document.getElementById('savings-amount').textContent = `${savings} ₴`;
}

function injectGameContent(game) {
  // Inject all game data into DOM
  injectGameBadges(game);
  injectGameHeader(game);
  injectGamePricing(game);
  
  // Update page title
  updatePageTitle(game.title);
  
  // Setup reserve button
  setupReserveButton(game);
}

// === INSTAGRAM DIRECT INTEGRATION ===
function generateGameMessage(game) {
  const extensionPrices = calculateExtensionPrices(game.fullPrice);
  const message = `Привіт! Хочу орендувати гру "${game.title}" через TOKEN4PLAY™.

📱 Платформа: ${game.platform}
💰 Ціна: ${game.price} ₴ за ${game.days} днів
📋 Продовження: +4 дні (${extensionPrices.halfTime} ₴) або +8 днів (${extensionPrices.fullTime} ₴)

Як швидко можу отримати доступ?`;
  
  return encodeURIComponent(message);
}

function openInstagramDirect(game) {
  const message = generateGameMessage(game);
  const instagramUrl = `https://www.instagram.com/direct/new/?text=${message}`;
  window.open(instagramUrl, '_blank');
}

function setupReserveButton(game) {
  const reserveBtn = document.getElementById('reserve-game-btn');
  
  reserveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Add click animation
    reserveBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      reserveBtn.style.transform = 'scale(1)';
    }, 150);
    
    // Open Instagram Direct
    openInstagramDirect(game);
  });
}

// === UI STATE MANAGEMENT ===
function showLoading() {
  gameLoading.style.display = 'flex';
  gameNotFound.style.display = 'none';
  gameContent.style.display = 'none';
}

function showNotFound() {
  gameLoading.style.display = 'none';
  gameNotFound.style.display = 'flex';
  gameContent.style.display = 'none';
}

function showGameContent() {
  gameLoading.style.display = 'none';
  gameNotFound.style.display = 'none';
  gameContent.style.display = 'block';
}

// === GSAP ANIMATIONS ===
function initScrollAnimations() {
  if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate scroll-reveal elements
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    
    scrollElements.forEach((element, index) => {
      gsap.fromTo(element, {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    });
    
    // Animate game image with special effect
    const gameImage = document.getElementById('game-image');
    if (gameImage) {
      gsap.fromTo(gameImage, {
        scale: 1.1,
        opacity: 0
      }, {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gameImage,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    }
    
    // Animate pricing cards with stagger
    const pricingCards = document.querySelectorAll('.pricing-card');
    gsap.fromTo(pricingCards, {
      y: 60,
      opacity: 0,
      rotationX: 15
    }, {
      y: 0,
      opacity: 1,
      rotationX: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".pricing-grid",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
    
    // Animate reserve button with pulse effect
    const reserveBtn = document.getElementById('reserve-game-btn');
    if (reserveBtn) {
      gsap.fromTo(reserveBtn, {
        scale: 0.9,
        opacity: 0
      }, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: reserveBtn,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    }
  }
}

function initPageAnimations() {
  if (typeof gsap !== 'undefined') {
    // Animate breadcrumb
    gsap.fromTo('.breadcrumb', {
      y: -20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.2
    });
    
    // Animate game title with split text effect
    const gameTitle = document.getElementById('game-title');
    if (gameTitle) {
      gsap.fromTo(gameTitle, {
        y: 40,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.4
      });
    }
    
    // Initialize scroll animations
    initScrollAnimations();
  }
}

// === ERROR HANDLING ===
function handleGameNotFound() {
  console.warn(`Game not found for slug: ${gameSlug}`);
  showNotFound();
  updatePageTitle('Гру не знайдено');
}

// === NAVIGATION SETUP ===
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

// === MAIN INITIALIZATION ===
function initGamePage() {
  console.log('Initializing game detail page...');
  
  // Get slug from URL
  gameSlug = getUrlParameter('slug');
  
  if (!gameSlug) {
    console.error('No game slug provided in URL');
    handleGameNotFound();
    return;
  }
  
  console.log(`Loading game with slug: ${gameSlug}`);
  
  // Show loading state
  showLoading();
  
  // Find game in database
  setTimeout(() => {
    currentGame = findGameBySlug(gameSlug);
    
    if (!currentGame) {
      handleGameNotFound();
      return;
    }
    
    console.log(`Found game: ${currentGame.title}`);
    
    // Inject game content
    injectGameContent(currentGame);
    
    // Show game content
    showGameContent();
    
    // Initialize animations
    initPageAnimations();
    
    console.log('Game page initialized successfully');
  }, 500); // Small delay to show loading state
}

// === UTILITY FUNCTIONS ===
function formatPrice(price) {
  return `${price} ₴`;
}

function formatPercentage(decimal) {
  return `(${Math.round(decimal * 100)}%)`;
}

// === LOAD ON DOM READY ===
document.addEventListener('DOMContentLoaded', () => {
  // Initialize navigation
  initNavigation();
  
  // Initialize game page
  initGamePage();
});

// === BACK BUTTON HANDLING ===
window.addEventListener('popstate', () => {
  // Handle browser back button
  const newSlug = getUrlParameter('slug');
  if (newSlug !== gameSlug) {
    window.location.reload();
  }
});

// === EXPORT FOR TESTING ===
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    findGameBySlug,
    generateGameMessage,
    injectGameContent,
    currentGame,
    gameSlug
  };
}

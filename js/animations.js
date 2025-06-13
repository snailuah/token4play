// GSAP Animation Logic for TOKEN4PLAY™

// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Global animation settings
gsap.defaults({
  duration: 0.8,
  ease: "power2.out"
});

// === INTRO WORDS SCATTERED ANIMATION ===
function initIntroWords() {
  const introWords = document.querySelectorAll('.intro-word');
  
  // Position words randomly across the screen
  introWords.forEach((word, index) => {
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 100);
    
    gsap.set(word, {
      x: x,
      y: y,
      opacity: 0,
      rotation: Math.random() * 10 - 5
    });
  });
  
  // Animate words in with staggered delay
  gsap.to(introWords, {
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    delay: 0.5
  });
  
  // Fade out words when scrolling starts
  ScrollTrigger.create({
    trigger: ".hero-section",
    start: "top 80%",
    onEnter: () => {
      gsap.to(introWords, {
        opacity: 0,
        duration: 0.5,
        stagger: 0.1
      });
    }
  });
}

// === NAVIGATION SLIDE-DOWN ANIMATION ===
function initNavigation() {
  const nav = document.querySelector('.navigation');
  
  // Initial state
  gsap.set(nav, {
    y: -100,
    opacity: 0
  });
  
  // Animate navigation in when scrolling
  ScrollTrigger.create({
    trigger: ".hero-section",
    start: "top 90%",
    onEnter: () => {
      gsap.to(nav, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      });
      nav.classList.add('visible');
    },
    onLeaveBack: () => {
      gsap.to(nav, {
        y: -100,
        opacity: 0,
        duration: 0.4
      });
      nav.classList.remove('visible');
    }
  });
}

// === MAIN PAGE LABEL PARALLAX ===
function initMainPageLabel() {
  const mainPageLabel = document.querySelector('.main-page-label');
  
  if (mainPageLabel) {
    // Initial position
    gsap.set(mainPageLabel, {
      y: 100,
      opacity: 0
    });
    
    // Slide up animation
    gsap.to(mainPageLabel, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 1,
      ease: "power2.out"
    });
    
    // Parallax scrolling effect
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        gsap.to(mainPageLabel, {
          y: self.progress * -200,
          duration: 0.1
        });
      }
    });
  }
}

// === HERO SECTION ANIMATIONS ===
function initHeroAnimations() {
  const heroWords = document.querySelectorAll('.hero-word');
  const taglineWords = document.querySelectorAll('.tagline-word');
  const heroImage = document.querySelector('.hero-image');
  const heroButton = document.querySelector('.scroll-to-games');
  
  // Hero words staggered animation
  gsap.set(heroWords, {
    y: 80,
    opacity: 0
  });
  
  gsap.to(heroWords, {
    y: 0,
    opacity: 1,
    duration: 1.2,
    stagger: 0.3,
    ease: "power3.out",
    delay: 2
  });
  
  // Add visible class for CSS blur effect
  heroWords.forEach((word, index) => {
    gsap.delayedCall(2 + (index * 0.3), () => {
      word.classList.add('visible');
    });
  });
  
  // Tagline words animation
  gsap.set(taglineWords, {
    y: 30,
    opacity: 0
  });
  
  gsap.to(taglineWords, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out",
    delay: 3.5
  });
  
  taglineWords.forEach((word, index) => {
    gsap.delayedCall(3.5 + (index * 0.1), () => {
      word.classList.add('visible');
    });
  });
  
  // Hero image animation
  if (heroImage) {
    gsap.set(heroImage, {
      x: 60,
      opacity: 0
    });
    
    gsap.to(heroImage, {
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      delay: 2.5
    });
    
    gsap.delayedCall(2.5, () => {
      heroImage.classList.add('visible');
    });
  }
  
  // Hero button animation
  if (heroButton) {
    gsap.set(heroButton, {
      y: 20,
      opacity: 0
    });
    
    gsap.to(heroButton, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      delay: 4
    });
  }
}

// === STATS SECTION ANIMATIONS ===
function initStatsAnimations() {
  const statItems = document.querySelectorAll('.stat-item');
  const statsDescription = document.querySelector('.stats-description');
  
  // Animate stats on scroll
  ScrollTrigger.create({
    trigger: ".stats-section",
    start: "top 70%",
    onEnter: () => {
      // Description animation
      if (statsDescription) {
        gsap.fromTo(statsDescription, {
          y: 40,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out"
        });
      }
      
      // Stat items staggered animation
      gsap.fromTo(statItems, {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.3
      });
    }
  });
}

// === GAMES SECTION ANIMATIONS ===
function initGamesAnimations() {
  const gameCards = document.querySelectorAll('.game-card');
  const sectionTitle = document.querySelector('.games-section .section-title');
  
  // Section title animation
  if (sectionTitle) {
    ScrollTrigger.create({
      trigger: sectionTitle,
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(sectionTitle, {
          y: 40,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out"
        });
      }
    });
  }
  
  // Game cards staggered animation
  gameCards.forEach((card, index) => {
    ScrollTrigger.create({
      trigger: card,
      start: "top 85%",
      onEnter: () => {
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
          delay: index * 0.1
        });
      }
    });
  });
}

// === CATEGORIES BLUR FOCUS ANIMATION ===
function initCategoriesBlurFocus() {
  const categoryLabels = document.querySelectorAll('.category-label');
  const categoryCards = document.querySelector('.category-cards');
  const categoryInfo = document.querySelector('.categories-info');
  
  // Initial blur state
  categoryLabels.forEach(label => {
    label.classList.add('blur-text');
  });
  
  // Focus the first category by default
  if (categoryLabels.length > 0) {
    categoryLabels[0].classList.add('focused');
  }
  
  // Scroll-triggered blur transitions
  ScrollTrigger.create({
    trigger: ".categories-section",
    start: "top 60%",
    end: "bottom 40%",
    onUpdate: (self) => {
      const progress = self.progress;
      const activeIndex = Math.floor(progress * categoryLabels.length);
      
      categoryLabels.forEach((label, index) => {
        if (index === activeIndex) {
          label.classList.add('focused');
          gsap.to(label, {
            filter: "blur(0px)",
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
          });
        } else {
          label.classList.remove('focused');
          gsap.to(label, {
            filter: "blur(4px)",
            opacity: 0.6,
            duration: 0.4,
            ease: "power2.out"
          });
        }
      });
    }
  });
  
  // Cards and info animation
  if (categoryCards) {
    ScrollTrigger.create({
      trigger: categoryCards,
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(categoryCards.children, {
          y: 40,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out"
        });
      }
    });
  }
  
  if (categoryInfo) {
    ScrollTrigger.create({
      trigger: categoryInfo,
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(categoryInfo.children, {
          x: 40,
          opacity: 0
        }, {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out"
        });
      }
    });
  }
}

// === HOW IT WORKS STAGGERED TITLE ===
function initHowItWorksAnimations() {
  const staggerWords = document.querySelectorAll('.stagger-word');
  const backgroundText = document.querySelector('.bg-blur-text');
  const howItWorksContent = document.querySelector('.how-it-works-content');
  
  // Background blur text animation
  if (backgroundText) {
    ScrollTrigger.create({
      trigger: ".how-it-works-section",
      start: "top 70%",
      onEnter: () => {
        gsap.fromTo(backgroundText, {
          opacity: 0,
          scale: 0.8
        }, {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out"
        });
      }
    });
  }
  
  // Staggered words animation
  ScrollTrigger.create({
    trigger: ".staggered-title",
    start: "top 75%",
    onEnter: () => {
      gsap.fromTo(staggerWords, {
        y: 80,
        opacity: 0,
        rotationX: 45
      }, {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3
      });
      
      staggerWords.forEach((word, index) => {
        gsap.delayedCall(0.3 + (index * 0.2), () => {
          word.classList.add('visible');
        });
      });
    }
  });
  
  // Content animation
  if (howItWorksContent) {
    ScrollTrigger.create({
      trigger: howItWorksContent,
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(howItWorksContent.children, {
          y: 50,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          delay: 0.5
        });
      }
    });
  }
}

// === INSTRUCTIONS SECTION ANIMATIONS ===
function initInstructionsAnimations() {
  const instructionBlocks = document.querySelectorAll('.instruction-block');
  const instructionsSummary = document.querySelector('.instructions-summary');
  
  instructionBlocks.forEach((block, index) => {
    ScrollTrigger.create({
      trigger: block,
      start: "top 80%",
      onEnter: () => {
        const content = block.querySelector('.instruction-content');
        const image = block.querySelector('.instruction-image');
        
        if (content) {
          gsap.fromTo(content, {
            x: -50,
            opacity: 0
          }, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
          });
        }
        
        if (image) {
          gsap.fromTo(image, {
            x: 50,
            opacity: 0
          }, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.2
          });
        }
      }
    });
  });
  
  // Summary animation
  if (instructionsSummary) {
    ScrollTrigger.create({
      trigger: instructionsSummary,
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(instructionsSummary, {
          y: 40,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out"
        });
      }
    });
  }
}

// === CONTACT SECTION ANIMATIONS ===
function initContactAnimations() {
  const contactWords = document.querySelectorAll('.contact-word');
  const contactForm = document.querySelector('.contact-form');
  
  // Contact title staggered animation
  ScrollTrigger.create({
    trigger: ".contact-section",
    start: "top 70%",
    onEnter: () => {
      gsap.fromTo(contactWords, {
        y: 60,
        opacity: 0,
        rotationY: 45
      }, {
        y: 0,
        opacity: 1,
        rotationY: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      });
      
      contactWords.forEach((word, index) => {
        gsap.delayedCall(index * 0.15, () => {
          word.classList.add('visible');
        });
      });
    }
  });
  
  // Contact form animation
  if (contactForm) {
    ScrollTrigger.create({
      trigger: contactForm,
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(contactForm.children, {
          y: 30,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.5
        });
      }
    });
  }
}

// === SCROLL TO GAMES BUTTON FUNCTIONALITY ===
function initScrollToGames() {
  const scrollButton = document.getElementById('scroll-to-games');
  const gamesSection = document.getElementById('games');
  
  if (scrollButton && gamesSection) {
    scrollButton.addEventListener('click', () => {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: gamesSection,
        ease: "power2.inOut"
      });
    });
  }
}

// === PERFORMANCE OPTIMIZATIONS ===
function optimizeAnimations() {
  // Add will-change to elements that will be animated
  const animatedElements = document.querySelectorAll(`
    .hero-word,
    .tagline-word,
    .intro-word,
    .stagger-word,
    .contact-word,
    .category-label,
    .game-card,
    .stat-item
  `);
  
  animatedElements.forEach(element => {
    element.style.willChange = 'transform, opacity';
  });
  
  // Remove will-change after animations complete
  ScrollTrigger.addEventListener('scrollEnd', () => {
    animatedElements.forEach(element => {
      element.style.willChange = 'auto';
    });
  });
}

// === INITIALIZATION ===
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all animations
  initIntroWords();
  initNavigation();
  initMainPageLabel();
  initHeroAnimations();
  initStatsAnimations();
  initGamesAnimations();
  initCategoriesBlurFocus();
  initHowItWorksAnimations();
  initInstructionsAnimations();
  initContactAnimations();
  initScrollToGames();
  optimizeAnimations();
  
  // Refresh ScrollTrigger after all animations are set up
  gsap.delayedCall(0.5, () => {
    ScrollTrigger.refresh();
  });
});

// === RESPONSIVE ADJUSTMENTS ===
function handleResize() {
  // Recalculate intro words positions on resize
  const introWords = document.querySelectorAll('.intro-word');
  introWords.forEach(word => {
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 100);
    gsap.set(word, { x, y });
  });
  
  // Refresh ScrollTrigger
  ScrollTrigger.refresh();
}

window.addEventListener('resize', gsap.utils.throttle(handleResize, 100));

// === REDUCED MOTION SUPPORT ===
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Disable GSAP animations for users who prefer reduced motion
  gsap.globalTimeline.clear();
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}

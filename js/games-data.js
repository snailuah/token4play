// Game Catalog Data for TOKEN4PLAY™

/**
 * PRICING CALCULATION LOGIC:
 * 
 * Initial Rental: 9% of full game price
 * Example: Game costs 1,999 ₴ → Rental = 1,999 × 0.09 = 180 ₴
 * 
 * Extension Options:
 * - Half-time extension (4 days): 4% of full price
 * - Full-time extension (8 days): 6% of full price
 * 
 * Example calculations:
 * Full Price: 1,999 ₴
 * Initial 8 days: 180 ₴ (9%)
 * Extend +4 days: 80 ₴ (4%)
 * Extend +8 days: 120 ₴ (6%)
 */

const gamesDatabase = [
  {
    id: 1,
    title: "The Last of Us Part II",
    fullPrice: 1999,
    price: Math.round(1999 * 0.09), // 180 ₴
    days: 8,
    image: "./images/games/the-last-of-us-part-ii.jpg",
    slug: "the-last-of-us-part-ii",
    platform: "PS4",
    description: "Пост-апокаліптична пригода про виживання та помstu у світі, зруйнованому інфекцією.",
    tags: ["Action", "Adventure", "Singleplayer"],
    isPopular: true,
    isNew: false
  },
  {
    id: 2,
    title: "Ghost of Tsushima",
    fullPrice: 2199,
    price: Math.round(2199 * 0.09), // 198 ₴
    days: 8,
    image: "./images/games/ghost-of-tsushima.jpg",
    slug: "ghost-of-tsushima",
    platform: "PS4",
    description: "Відкритий світ самурайських пригод у феодальній Японії з неймовірними пейзажами.",
    tags: ["Action", "Adventure", "Open World"],
    isPopular: true,
    isNew: false
  },
  {
    id: 3,
    title: "Spider-Man: Miles Morales",
    fullPrice: 2499,
    price: Math.round(2499 * 0.09), // 225 ₴
    days: 8,
    image: "./images/games/spider-man-miles-morales.jpg",
    slug: "spider-man-miles-morales",
    platform: "PS5",
    description: "Нові пригоди Майлза Моралеса у ролі Людини-павука з унікальними суперсилами.",
    tags: ["Action", "Adventure", "Superhero"],
    isPopular: true,
    isNew: false
  },
  {
    id: 4,
    title: "God of War",
    fullPrice: 1899,
    price: Math.round(1899 * 0.09), // 171 ₴
    days: 8,
    image: "./images/games/god-of-war.jpg",
    slug: "god-of-war",
    platform: "PS4",
    description: "Епічна подорож Кратоса та його сина Атрея через світ скандинавської mythології.",
    tags: ["Action", "Adventure", "Mythology"],
    isPopular: true,
    isNew: false
  },
  {
    id: 5,
    title: "Demon's Souls",
    fullPrice: 2699,
    price: Math.round(2699 * 0.09), // 243 ₴
    days: 8,
    image: "./images/games/demons-souls.jpg",
    slug: "demons-souls",
    platform: "PS5",
    description: "Повне перероблення класичної RPG з неймовірною графікою та складним геймплеєм.",
    tags: ["RPG", "Souls-like", "Fantasy"],
    isPopular: true,
    isNew: false
  },
  {
    id: 6,
    title: "Horizon Zero Dawn",
    fullPrice: 1599,
    price: Math.round(1599 * 0.09), // 144 ₴
    days: 8,
    image: "./images/games/horizon-zero-dawn.jpg",
    slug: "horizon-zero-dawn",
    platform: "PS4",
    description: "Пост-апокаліптичний світ, де мисливиця Елой досліджує землю, населену роботами-динозаврами.",
    tags: ["Action", "RPG", "Open World"],
    isPopular: true,
    isNew: false
  },
  {
    id: 7,
    title: "Ratchet & Clank: Rift Apart",
    fullPrice: 2799,
    price: Math.round(2799 * 0.09), // 252 ₴
    days: 8,
    image: "./images/games/ratchet-clank-rift-apart.jpg",
    slug: "ratchet-clank-rift-apart",
    platform: "PS5",
    description: "Мультивимірні пригоди з миттєвими переходами між світами та неймовірною графікою.",
    tags: ["Action", "Adventure", "Sci-Fi"],
    isPopular: true,
    isNew: true
  },
  {
    id: 8,
    title: "Cyberpunk 2077",
    fullPrice: 2299,
    price: Math.round(2299 * 0.09), // 207 ₴
    days: 8,
    image: "./images/games/cyberpunk-2077.jpg",
    slug: "cyberpunk-2077",
    platform: "PS5",
    description: "Відкритий світ майбутнього у Найт-Сіті з RPG-елементами та кіберпанк-атмосферою.",
    tags: ["RPG", "Open World", "Cyberpunk"],
    isPopular: false,
    isNew: false
  },
  {
    id: 9,
    title: "Uncharted 4: A Thief's End",
    fullPrice: 1499,
    price: Math.round(1499 * 0.09), // 135 ₴
    days: 8,
    image: "./images/games/uncharted-4.jpg",
    slug: "uncharted-4-thiefs-end",
    platform: "PS4",
    description: "Останні пригоди Нейтана Дрейка у пошуках піратських скарбів та сімейних таємниць.",
    tags: ["Action", "Adventure", "Treasure Hunt"],
    isPopular: true,
    isNew: false
  },
  {
    id: 10,
    title: "Bloodborne",
    fullPrice: 1399,
    price: Math.round(1399 * 0.09), // 126 ₴
    days: 8,
    image: "./images/games/bloodborne.jpg",
    slug: "bloodborne",
    platform: "PS4",
    description: "Готичний хоррор з елементами Souls-like у темному вікторіанському місті Ярнам.",
    tags: ["RPG", "Horror", "Souls-like"],
    isPopular: true,
    isNew: false
  },
  {
    id: 11,
    title: "FIFA 24",
    fullPrice: 2599,
    price: Math.round(2599 * 0.09), // 234 ₴
    days: 8,
    image: "./images/games/fifa-24.jpg",
    slug: "fifa-24",
    platform: "PS5",
    description: "Найновіший футбольний симулятор з реалістичною графікою та оновленим геймплеєм.",
    tags: ["Sports", "Football", "Multiplayer"],
    isPopular: true,
    isNew: true
  },
  {
    id: 12,
    title: "Grand Theft Auto V",
    fullPrice: 1799,
    price: Math.round(1799 * 0.09), // 162 ₴
    days: 8,
    image: "./images/games/gta-v.jpg",
    slug: "grand-theft-auto-v",
    platform: "PS5",
    description: "Відкритий світ Лос-Сантоса з тремя персонажами та безліччю можливостей для хаосу.",
    tags: ["Action", "Open World", "Crime"],
    isPopular: true,
    isNew: false
  },
  {
    id: 13,
    title: "Resident Evil 4",
    fullPrice: 2399,
    price: Math.round(2399 * 0.09), // 216 ₴
    days: 8,
    image: "./images/games/resident-evil-4.jpg",
    slug: "resident-evil-4",
    platform: "PS5",
    description: "Повне перероблення легендарного survival horror з оновленою графікою та геймплеєм.",
    tags: ["Horror", "Survival", "Action"],
    isPopular: true,
    isNew: true
  },
  {
    id: 14,
    title: "Sekiro: Shadows Die Twice",
    fullPrice: 2099,
    price: Math.round(2099 * 0.09), // 189 ₴
    days: 8,
    image: "./images/games/sekiro.jpg",
    slug: "sekiro-shadows-die-twice",
    platform: "PS4",
    description: "Ніндзя-пригода у феодальній Японії з унікальною системою бою та паркуру.",
    tags: ["Action", "Ninja", "Souls-like"],
    isPopular: true,
    isNew: false
  },
  {
    id: 15,
    title: "Red Dead Redemption 2",
    fullPrice: 2199,
    price: Math.round(2199 * 0.09), // 198 ₴
    days: 8,
    image: "./images/games/red-dead-redemption-2.jpg",
    slug: "red-dead-redemption-2",
    platform: "PS4",
    description: "Епічна вестерн-сага про банду Ван дер Лінде у відкритому світі Дикого Заходу.",
    tags: ["Action", "Western", "Open World"],
    isPopular: true,
    isNew: false
  },
  {
    id: 16,
    title: "Mortal Kombat 1",
    fullPrice: 2699,
    price: Math.round(2699 * 0.09), // 243 ₴
    days: 8,
    image: "./images/games/mortal-kombat-1.jpg",
    slug: "mortal-kombat-1",
    platform: "PS5",
    description: "Новий початок легендарної файтинг-серії з оновленою історією та персонажами.",
    tags: ["Fighting", "Multiplayer", "Gore"],
    isPopular: false,
    isNew: true
  },
  {
    id: 17,
    title: "Assassin's Creed Valhalla",
    fullPrice: 1999,
    price: Math.round(1999 * 0.09), // 180 ₴
    days: 8,
    image: "./images/games/assassins-creed-valhalla.jpg",
    slug: "assassins-creed-valhalla",
    platform: "PS5",
    description: "Епічна сага вікінгів у середньовічній Англії з великим відкритим світом для дослідження.",
    tags: ["Action", "RPG", "Vikings"],
    isPopular: false,
    isNew: false
  },
  {
    id: 18,
    title: "Call of Duty: Modern Warfare III",
    fullPrice: 2899,
    price: Math.round(2899 * 0.09), // 261 ₴
    days: 8,
    image: "./images/games/cod-mw3.jpg",
    slug: "call-of-duty-modern-warfare-3",
    platform: "PS5",
    description: "Найновіший шутер серії з кампанією, мультиплеєром та режимом зомбі.",
    tags: ["FPS", "Military", "Multiplayer"],
    isPopular: true,
    isNew: true
  },
  {
    id: 19,
    title: "Elden Ring",
    fullPrice: 2399,
    price: Math.round(2399 * 0.09), // 216 ₴
    days: 8,
    image: "./images/games/elden-ring.jpg",
    slug: "elden-ring",
    platform: "PS5",
    description: "Відкритий світ fantasy RPG від FromSoftware з глибокою історією та складним геймплеєм.",
    tags: ["RPG", "Fantasy", "Souls-like"],
    isPopular: true,
    isNew: false
  },
  {
    id: 20,
    title: "Marvel's Spider-Man",
    fullPrice: 1699,
    price: Math.round(1699 * 0.09), // 153 ₴
    days: 8,
    image: "./images/games/spiderman.jpg",
    slug: "marvels-spider-man",
    platform: "PS4",
    description: "Пригоди Пітера Паркера у відкритому світі Нью-Йорка з неймовірною механікою пересування.",
    tags: ["Action", "Superhero", "Open World"],
    isPopular: true,
    isNew: false
  },
  {
    id: 21,
    title: "Gran Turismo 7",
    fullPrice: 2599,
    price: Math.round(2599 * 0.09), // 234 ₴
    days: 8,
    image: "./images/games/gran-turismo-7.jpg",
    slug: "gran-turismo-7",
    platform: "PS5",
    description: "Найреалістичніший автосимулятор з сотнями автомобілів та трас по всьому світу.",
    tags: ["Racing", "Simulation", "Cars"],
    isPopular: false,
    isNew: false
  },
  {
    id: 22,
    title: "Hogwarts Legacy",
    fullPrice: 2799,
    price: Math.round(2799 * 0.09), // 252 ₴
    days: 8,
    image: "./images/games/hogwarts-legacy.jpg",
    slug: "hogwarts-legacy",
    platform: "PS5",
    description: "RPG у світі Гаррі Поттера, де ви студент Хогвартсу у XIX столітті з магічними пригодами.",
    tags: ["RPG", "Magic", "Open World"],
    isPopular: true,
    isNew: true
  },
  {
    id: 23,
    title: "The Witcher 3: Wild Hunt",
    fullPrice: 1299,
    price: Math.round(1299 * 0.09), // 117 ₴
    days: 8,
    image: "./images/games/witcher-3.jpg",
    slug: "the-witcher-3-wild-hunt",
    platform: "PS4",
    description: "Епічна fantasy RPG про відьмака Геральта у пошуках прийомної дочки у великому відкритому світі.",
    tags: ["RPG", "Fantasy", "Open World"],
    isPopular: true,
    isNew: false
  },
  {
    id: 24,
    title: "Returnal",
    fullPrice: 2299,
    price: Math.round(2299 * 0.09), // 207 ₴
    days: 8,
    image: "./images/games/returnal.jpg",
    slug: "returnal",
    platform: "PS5",
    description: "Науково-фантастичний roguelike про астронавта, що застрягла у часовій петлі на чужій планеті.",
    tags: ["Sci-Fi", "Roguelike", "Psychological"],
    isPopular: false,
    isNew: false
  },
  {
    id: 25,
    title: "Persona 5 Royal",
    fullPrice: 1999,
    price: Math.round(1999 * 0.09), // 180 ₴
    days: 8,
    image: "./images/games/persona-5-royal.jpg",
    slug: "persona-5-royal",
    platform: "PS4",
    description: "Стильна JRPG про групу підлітків-месників у сучасному Токіо з елементами соціальної симуляції.",
    tags: ["JRPG", "Social Sim", "Anime"],
    isPopular: true,
    isNew: false
  },
  {
    id: 26,
    title: "Death Stranding",
    fullPrice: 1799,
    price: Math.round(1799 * 0.09), // 162 ₴
    days: 8,
    image: "./images/games/death-stranding.jpg",
    slug: "death-stranding",
    platform: "PS4",
    description: "Унікальна пригода від Хідео Кодзими про кур'єра у пост-апокаліптичному світі.",
    tags: ["Adventure", "Sci-Fi", "Simulation"],
    isPopular: false,
    isNew: false
  },
  {
    id: 27,
    title: "Nioh 2",
    fullPrice: 1899,
    price: Math.round(1899 * 0.09), // 171 ₴
    days: 8,
    image: "./images/games/nioh-2.jpg",
    slug: "nioh-2",
    platform: "PS4",
    description: "Складна action RPG у феодальній Японії з демонами, самураями та унікальною системою loot.",
    tags: ["RPG", "Souls-like", "Japanese"],
    isPopular: false,
    isNew: false
  },
  {
    id: 28,
    title: "Tekken 8",
    fullPrice: 2699,
    price: Math.round(2699 * 0.09), // 243 ₴
    days: 8,
    image: "./images/games/tekken-8.jpg",
    slug: "tekken-8",
    platform: "PS5",
    description: "Найновіший файтинг серії Tekken з удосконаленою графікою та новими персонажами.",
    tags: ["Fighting", "Multiplayer", "Tournament"],
    isPopular: true,
    isNew: true
  },
  {
    id: 29,
    title: "Final Fantasy XVI",
    fullPrice: 2999,
    price: Math.round(2999 * 0.09), // 270 ₴
    days: 8,
    image: "./images/games/final-fantasy-xvi.jpg",
    slug: "final-fantasy-xvi",
    platform: "PS5",
    description: "Епічна fantasy RPG з драматичною історією, магією та епічними битвами з призванцями.",
    tags: ["JRPG", "Fantasy", "Story-Rich"],
    isPopular: true,
    isNew: true
  }
];

/**
 * UTILITY FUNCTIONS FOR GAME DATA
 */

// Calculate extension prices
function calculateExtensionPrices(fullPrice) {
  return {
    halfTime: Math.round(fullPrice * 0.04), // 4% for half-time extension
    fullTime: Math.round(fullPrice * 0.06)  // 6% for full-time extension
  };
}

// Get games by platform
function getGamesByPlatform(platform) {
  return gamesDatabase.filter(game => game.platform === platform);
}

// Get popular games
function getPopularGames() {
  return gamesDatabase.filter(game => game.isPopular);
}

// Get new games
function getNewGames() {
  return gamesDatabase.filter(game => game.isNew);
}

// Get games by tag
function getGamesByTag(tag) {
  return gamesDatabase.filter(game => game.tags.includes(tag));
}

// Get game by ID
function getGameById(id) {
  return gamesDatabase.find(game => game.id === id);
}

// Get game by slug
function getGameBySlug(slug) {
  return gamesDatabase.find(game => game.slug === slug);
}

// Search games by title
function searchGames(query) {
  return gamesDatabase.filter(game => 
    game.title.toLowerCase().includes(query.toLowerCase()) ||
    game.description.toLowerCase().includes(query.toLowerCase())
  );
}

// Sort games by price
function sortGamesByPrice(ascending = true) {
  return [...gamesDatabase].sort((a, b) => 
    ascending ? a.price - b.price : b.price - a.price
  );
}

// Get random games
function getRandomGames(count = 6) {
  const shuffled = [...gamesDatabase].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    gamesDatabase,
    calculateExtensionPrices,
    getGamesByPlatform,
    getPopularGames,
    getNewGames,
    getGamesByTag,
    getGameById,
    getGameBySlug,
    searchGames,
    sortGamesByPrice,
    getRandomGames
  };
}

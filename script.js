// ==========================================
// Room Database - Local array simulating room data
// ==========================================
const rooms = [
    {
        id: 1,
        number: "A-101",
        block: "A",
        floor: 1,
        capacity: 2,
        currentOccupancy: 1,
        price: 80000,
        status: "available",
        amenities: ["wifi", "ac", "balcony"],
        environment: "quiet",
        description: "A spacious double room on the first floor with a private balcony overlooking the campus garden. Perfect for students who value tranquility."
    },
    {
        id: 2,
        number: "A-102",
        block: "A",
        floor: 1,
        capacity: 1,
        currentOccupancy: 1,
        price: 120000,
        status: "occupied",
        amenities: ["wifi", "ac", "attached_bath"],
        environment: "quiet",
        description: "Premium single room with attached bathroom. Ideal for students seeking privacy and comfort."
    },
    {
        id: 3,
        number: "A-201",
        block: "A",
        floor: 2,
        capacity: 2,
        currentOccupancy: 0,
        price: 75000,
        status: "available",
        amenities: ["wifi", "balcony"],
        environment: "quiet",
        description: "Affordable double room on the second floor. Great for students on a budget."
    },
    {
        id: 4,
        number: "A-202",
        block: "A",
        floor: 2,
        capacity: 3,
        currentOccupancy: 2,
        price: 60000,
        status: "available",
        amenities: ["wifi"],
        environment: "social",
        description: "Triple room perfect for friends who want to live together. Located in a social block with friendly neighbors."
    },
    {
        id: 5,
        number: "A-301",
        block: "A",
        floor: 3,
        capacity: 4,
        currentOccupancy: 3,
        price: 50000,
        status: "available",
        amenities: ["wifi", "fan"],
        environment: "social",
        description: "Quad room with great ventilation. Perfect for students who enjoy a lively atmosphere."
    },
    {
        id: 6,
        number: "B-101",
        block: "B",
        floor: 1,
        capacity: 2,
        currentOccupancy: 2,
        price: 90000,
        status: "occupied",
        amenities: ["wifi", "ac", "attached_bath", "balcony"],
        environment: "quiet",
        description: "Luxury double room with all modern amenities. Features a private balcony and attached bathroom."
    },
    {
        id: 7,
        number: "B-102",
        block: "B",
        floor: 1,
        capacity: 1,
        currentOccupancy: 0,
        price: 130000,
        status: "available",
        amenities: ["wifi", "ac", "attached_bath"],
        environment: "quiet",
        description: "Executive single room with premium finishes. Includes study area and walk-in closet."
    },
    {
        id: 8,
        number: "B-201",
        block: "B",
        floor: 2,
        capacity: 2,
        currentOccupancy: 1,
        price: 85000,
        status: "available",
        amenities: ["wifi", "ac"],
        environment: "quiet",
        description: "Well-appointed double room with air conditioning. Close to study rooms and library."
    },
    {
        id: 9,
        number: "B-202",
        block: "B",
        floor: 2,
        capacity: 3,
        currentOccupancy: 3,
        price: 65000,
        status: "occupied",
        amenities: ["wifi", "fan"],
        environment: "social",
        description: "Triple room in a vibrant section of Block B. Great for outgoing students."
    },
    {
        id: 10,
        number: "B-301",
        block: "B",
        floor: 3,
        capacity: 2,
        currentOccupancy: 0,
        price: 95000,
        status: "maintenance",
        amenities: ["wifi", "ac", "balcony"],
        environment: "quiet",
        description: "Currently undergoing renovation. Will feature new furniture and fresh paint."
    },
    {
        id: 11,
        number: "C-101",
        block: "C",
        floor: 1,
        capacity: 4,
        currentOccupancy: 2,
        price: 45000,
        status: "available",
        amenities: ["wifi", "fan"],
        environment: "social",
        description: "Budget-friendly quad room. Perfect for students who prioritize social connections."
    },
    {
        id: 12,
        number: "C-102",
        block: "C",
        floor: 1,
        capacity: 2,
        currentOccupancy: 0,
        price: 70000,
        status: "available",
        amenities: ["wifi"],
        environment: "social",
        description: "Standard double room in the heart of the social zone. Always buzzing with activity."
    },
    {
        id: 13,
        number: "C-201",
        block: "C",
        floor: 2,
        capacity: 3,
        currentOccupancy: 1,
        price: 55000,
        status: "available",
        amenities: ["wifi", "fan"],
        environment: "social",
        description: "Triple room with plenty of space. Located near the common room and recreation area."
    },
    {
        id: 14,
        number: "C-202",
        block: "C",
        floor: 2,
        capacity: 1,
        currentOccupancy: 1,
        price: 100000,
        status: "occupied",
        amenities: ["wifi", "ac"],
        environment: "quiet",
        description: "Single room in a quieter corner of Block C. Best of both worlds."
    },
    {
        id: 15,
        number: "C-301",
        block: "C",
        floor: 3,
        capacity: 4,
        currentOccupancy: 4,
        price: 40000,
        status: "occupied",
        amenities: ["wifi"],
        environment: "social",
        description: "Fully occupied quad room. Known for its friendly atmosphere and group study sessions."
    },
    {
        id: 16,
        number: "D-101",
        block: "D",
        floor: 1,
        capacity: 2,
        currentOccupancy: 0,
        price: 110000,
        status: "available",
        amenities: ["wifi", "ac", "attached_bath", "balcony"],
        environment: "quiet",
        description: "Premium double room in the newest block. Features modern design and top-tier amenities."
    },
    {
        id: 17,
        number: "D-102",
        block: "D",
        floor: 1,
        capacity: 1,
        currentOccupancy: 0,
        price: 150000,
        status: "available",
        amenities: ["wifi", "ac", "attached_bath", "balcony"],
        environment: "quiet",
        description: "Deluxe single room with panoramic views. The ultimate in campus living."
    },
    {
        id: 18,
        number: "D-201",
        block: "D",
        floor: 2,
        capacity: 2,
        currentOccupancy: 1,
        price: 105000,
        status: "available",
        amenities: ["wifi", "ac", "attached_bath"],
        environment: "quiet",
        description: "Modern double room with attached facilities. Perfect for graduate students."
    },
    {
        id: 19,
        number: "D-202",
        block: "D",
        floor: 2,
        capacity: 3,
        currentOccupancy: 0,
        price: 80000,
        status: "maintenance",
        amenities: ["wifi", "ac"],
        environment: "quiet",
        description: "Triple room undergoing minor repairs. Will be available soon with upgraded fixtures."
    },
    {
        id: 20,
        number: "D-301",
        block: "D",
        floor: 3,
        capacity: 2,
        currentOccupancy: 2,
        price: 115000,
        status: "occupied",
        amenities: ["wifi", "ac", "balcony"],
        environment: "quiet",
        description: "Top floor double room with stunning views. Features a private balcony perfect for stargazing."
    }
];

// ==========================================
// Notification System
// ==========================================
class NotificationSystem {
    constructor() {
        this.container = document.getElementById('notificationContainer');
    }

    show(type, title, message, duration = 5000) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <svg class="notification-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${this.getIcon(type)}
            </svg>
            <div class="notification-content">
                <div class="notification-title">${title}</div>
                <div class="notification-message">${message}</div>
            </div>
            <button class="notification-close" aria-label="Close notification">×</button>
        `;

        this.container.appendChild(notification);

        // Close button handler
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => this.hide(notification));

        // Auto-hide after duration
        if (duration > 0) {
            setTimeout(() => this.hide(notification), duration);
        }

        return notification;
    }

    hide(notification) {
        notification.classList.add('hiding');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    getIcon(type) {
        const icons = {
            success: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
            error: '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>',
            warning: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
            info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'
        };
        return icons[type] || icons.info;
    }

    success(title, message) {
        return this.show('success', title, message);
    }

    error(title, message) {
        return this.show('error', title, message, 7000);
    }

    warning(title, message) {
        return this.show('warning', title, message);
    }

    info(title, message) {
        return this.show('info', title, message);
    }
}

// ==========================================
// Room Recommendation API (Simulated)
// ==========================================
class RoomRecommendationAPI {
    constructor() {
        this.apiEndpoint = 'https://api.roomrecommendation.com/v1'; // Simulated
    }

    // Simulate API call with delay
    async getRecommendations(preferences) {
        // Simulate network delay
        await this.simulateDelay(800);

        // Simulate API response with scoring algorithm
        const scoredRooms = rooms
            .filter(room => room.status !== 'maintenance' && room.price <= preferences.budget)
            .map(room => this.calculateScore(room, preferences))
            .sort((a, b) => b.score - a.score)
            .slice(0, 3);

        return {
            success: true,
            recommendations: scoredRooms,
            totalMatches: scoredRooms.length,
            timestamp: new Date().toISOString()
        };
    }

    calculateScore(room, preferences) {
        let score = 0;
        const maxScore = 100;

        // Price score (lower is better, but within budget)
        const priceRatio = room.price / preferences.budget;
        score += (1 - priceRatio) * 25;

        // Capacity match
        if (preferences.capacity !== 'any' && room.capacity === parseInt(preferences.capacity)) {
            score += 20;
        }

        // Environment match
        if (preferences.quiet && room.environment === 'quiet') {
            score += 15;
        }
        if (preferences.social && room.environment === 'social') {
            score += 15;
        }

        // Amenities match
        const desiredAmenities = [];
        if (preferences.ac) desiredAmenities.push('ac');
        if (preferences.wifi) desiredAmenities.push('wifi');
        if (preferences.attached) desiredAmenities.push('attached_bath');
        if (preferences.balcony) desiredAmenities.push('balcony');

        if (desiredAmenities.length > 0) {
            const matchedAmenities = desiredAmenities.filter(a => room.amenities.includes(a));
            score += (matchedAmenities.length / desiredAmenities.length) * 40;
        }

        // Availability bonus
        if (room.status === 'available' && room.currentOccupancy < room.capacity) {
            score += 10;
        }

        return { ...room, score: Math.min(Math.round(score), maxScore) };
    }

    simulateDelay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// ==========================================
// Authentication System
// ==========================================
class AuthSystem {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('hostelUsers')) || [];
        this.currentUser = JSON.parse(localStorage.getItem('currentHostelUser'));
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    validateMatricNumber(matric) {
        // Must be exactly 9 digits
        const matricRegex = /^\d{9}$/;
        return matricRegex.test(matric);
    }

    validatePassword(password) {
        // Minimum 6 characters
        return password.length >= 6;
    }

    signup(userData) {
        // Validate email
        if (!this.validateEmail(userData.email)) {
            return { success: false, error: 'Please enter a valid email address', field: 'email' };
        }

        // Validate matric number
        if (!this.validateMatricNumber(userData.matricNumber)) {
            return { success: false, error: 'Matric number must be exactly 9 digits (numbers only)', field: 'matricNumber' };
        }

        // Validate password
        if (!this.validatePassword(userData.password)) {
            return { success: false, error: 'Password must be at least 6 characters', field: 'password' };
        }

        // Check password match
        if (userData.password !== userData.confirmPassword) {
            return { success: false, error: 'Passwords do not match', field: 'confirmPassword' };
        }

        // Check if email already exists
        if (this.users.find(u => u.email === userData.email)) {
            return { success: false, error: 'An account with this email already exists', field: 'email' };
        }

        // Check if matric number already exists
        if (this.users.find(u => u.matricNumber === userData.matricNumber)) {
            return { success: false, error: 'This matric number is already registered', field: 'matricNumber' };
        }

        // Create new user
        const newUser = {
            id: Date.now(),
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            matricNumber: userData.matricNumber,
            password: btoa(userData.password), // Simple encoding (not secure, just for demo)
            createdAt: new Date().toISOString()
        };

        this.users.push(newUser);
        localStorage.setItem('hostelUsers', JSON.stringify(this.users));

        // Auto-login after signup
        this.login(userData.email, userData.password);

        return { success: true, user: { ...newUser, password: undefined } };
    }

    login(email, password) {
        const user = this.users.find(u => u.email === email && u.password === btoa(password));

        if (!user) {
            return { success: false, error: 'Invalid email or password' };
        }

        this.currentUser = { ...user, password: undefined };
        localStorage.setItem('currentHostelUser', JSON.stringify(this.currentUser));

        return { success: true, user: this.currentUser };
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentHostelUser');
    }

    isLoggedIn() {
        return this.currentUser !== null;
    }

    getCurrentUser() {
        return this.currentUser;
    }
}

// ==========================================
// Application State & DOM Elements
// ==========================================
const authSystem = new AuthSystem();
const notification = new NotificationSystem();
const roomAPI = new RoomRecommendationAPI();

// DOM Elements
const authSection = document.getElementById('authSection');
const mainContent = document.getElementById('mainContent');
const authTabs = document.querySelectorAll('.auth-tab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const signoutBtn = document.getElementById('signoutBtn');
const userName = document.getElementById('userName');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const blockFilter = document.getElementById('blockFilter');
const occupancyFilter = document.getElementById('occupancyFilter');
const capacityFilter = document.getElementById('capacityFilter');
const priceFilter = document.getElementById('priceFilter');
const resetFiltersBtn = document.getElementById('resetFilters');
const resultsCount = document.getElementById('resultsCount');
const roomsGrid = document.getElementById('roomsGrid');
const noResults = document.getElementById('noResults');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const applyBtn = document.getElementById('applyBtn');
const tooltip = document.getElementById('tooltip');
const collapseFinder = document.getElementById('collapseFinder');
const smartFinderContent = document.getElementById('smartFinderContent');
const findRoomBtn = document.getElementById('findRoomBtn');
const smartResults = document.getElementById('smartResults');
const prefBudget = document.getElementById('prefBudget');
const prefBudgetValue = document.getElementById('prefBudgetValue');
const signupMatric = document.getElementById('signupMatric');

// State
let filteredRooms = [...rooms];
let selectedRoom = null;

// ==========================================
// Initialization
// ==========================================
function init() {
    // Set initial visibility based on login state
    if (authSystem.isLoggedIn()) {
        authSection.style.display = 'none';
        mainContent.style.display = 'block';
        showMainContent();
    } else {
        authSection.style.display = 'flex';
        mainContent.style.display = 'none';
    }

    setupEventListeners();
    updateBudgetDisplay();
}

// ==========================================
// Event Listeners Setup
// ==========================================
function setupEventListeners() {
    // Auth tabs
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    // Auth forms
    loginForm.addEventListener('submit', handleLogin);
    signupForm.addEventListener('submit', handleSignup);

    // Signout
    signoutBtn.addEventListener('click', handleSignout);

    // Matric number input - only allow numbers and limit to 9 digits
    signupMatric.addEventListener('input', function (e) {
        // Remove any non-digit characters
        this.value = this.value.replace(/\D/g, '');
        // Limit to 9 digits
        if (this.value.length > 9) {
            this.value = this.value.slice(0, 9);
        }
    });

    // Search input
    searchInput.addEventListener('input', handleSearch);
    clearSearchBtn.addEventListener('click', clearSearch);

    // Filters
    blockFilter.addEventListener('change', applyFilters);
    occupancyFilter.addEventListener('change', applyFilters);
    capacityFilter.addEventListener('change', applyFilters);
    priceFilter.addEventListener('change', applyFilters);

    // Reset filters
    resetFiltersBtn.addEventListener('click', resetFilters);

    // Modal
    modalClose.addEventListener('click', closeModal);
    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    applyBtn.addEventListener('click', handleApply);

    // Smart Room Finder
    collapseFinder.addEventListener('click', toggleSmartFinder);
    findRoomBtn.addEventListener('click', findSmartRoom);
    prefBudget.addEventListener('input', updateBudgetDisplay);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('visible')) {
            closeModal();
        }
    });
}

// ==========================================
// Authentication Handlers
// ==========================================
function switchTab(tab) {
    authTabs.forEach(t => t.classList.remove('active'));
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

    if (tab === 'login') {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    } else {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    }

    // Clear error messages
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('.form-group input').forEach(el => el.classList.remove('error'));
}

function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    // Clear previous errors
    clearFormErrors('login');

    // Validate
    let hasError = false;

    if (!authSystem.validateEmail(email)) {
        showFieldError('loginEmail', 'Please enter a valid email address');
        hasError = true;
    }

    if (!password) {
        showFieldError('loginPassword', 'Password is required');
        hasError = true;
    }

    if (hasError) return;

    // Attempt login
    const result = authSystem.login(email, password);

    if (result.success) {
        notification.success('Welcome back!', `Hello, ${result.user.firstName}!`);
        showMainContent();
    } else {
        notification.error('Login Failed', result.error);
        showFieldError('loginEmail', result.error);
        showFieldError('loginPassword', result.error);
    }
}

function handleSignup(e) {
    e.preventDefault();

    const userData = {
        firstName: document.getElementById('signupFirstName').value.trim(),
        lastName: document.getElementById('signupLastName').value.trim(),
        email: document.getElementById('signupEmail').value.trim(),
        matricNumber: document.getElementById('signupMatric').value.trim(),
        password: document.getElementById('signupPassword').value,
        confirmPassword: document.getElementById('signupConfirmPassword').value
    };

    // Clear previous errors
    clearFormErrors('signup');

    // Validate required fields
    let hasError = false;

    if (!userData.firstName) {
        showFieldError('signupFirstName', 'First name is required');
        hasError = true;
    }

    if (!userData.lastName) {
        showFieldError('signupLastName', 'Last name is required');
        hasError = true;
    }

    if (!authSystem.validateEmail(userData.email)) {
        showFieldError('signupEmail', 'Please enter a valid email address');
        hasError = true;
    }

    if (!authSystem.validateMatricNumber(userData.matricNumber)) {
        showFieldError('signupMatric', 'Matric number must be exactly 9 digits');
        hasError = true;
    }

    if (!authSystem.validatePassword(userData.password)) {
        showFieldError('signupPassword', 'Password must be at least 6 characters');
        hasError = true;
    }

    if (userData.password !== userData.confirmPassword) {
        showFieldError('signupConfirmPassword', 'Passwords do not match');
        hasError = true;
    }

    if (hasError) return;

    // Attempt signup
    const result = authSystem.signup(userData);

    if (result.success) {
        notification.success('Account Created!', `Welcome, ${result.user.firstName}! Your account has been created successfully.`);
        showMainContent();
    } else {
        notification.error('Signup Failed', result.error);
        showFieldError(`signup${capitalizeFirstLetter(result.field)}`, result.error);
    }
}

function handleSignout() {
    authSystem.logout();
    notification.info('Signed Out', 'You have been signed out successfully.');

    // Reset forms
    loginForm.reset();
    signupForm.reset();
    clearFormErrors('login');
    clearFormErrors('signup');

    // Show auth section, hide main content
    authSection.style.display = 'flex';
    mainContent.style.display = 'none';
    switchTab('login');
}

function showMainContent() {
    const user = authSystem.getCurrentUser();
    if (user) {
        userName.textContent = `${user.firstName} ${user.lastName}`;
    }

    authSection.style.display = 'none';
    mainContent.style.display = 'block';
    renderRooms(filteredRooms);
}

// ==========================================
// Form Validation Helpers
// ==========================================
function clearFormErrors(formType) {
    document.querySelectorAll(`#${formType}Form .error-message`).forEach(el => el.textContent = '');
    document.querySelectorAll(`#${formType}Form input`).forEach(el => el.classList.remove('error'));
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(`${fieldId}Error`);

    if (field) field.classList.add('error');
    if (errorEl) errorEl.textContent = message;
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// ==========================================
// Search & Filter Functions
// ==========================================
function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    clearSearchBtn.classList.toggle('visible', query.length > 0);
    applyFilters();
}

function clearSearch() {
    searchInput.value = '';
    clearSearchBtn.classList.remove('visible');
    applyFilters();
}

function applyFilters() {
    const searchQuery = searchInput.value.toLowerCase().trim();
    const block = blockFilter.value;
    const occupancy = occupancyFilter.value;
    const capacity = capacityFilter.value;
    const maxPrice = priceFilter.value;

    filteredRooms = rooms.filter(room => {
        // Search filter
        if (searchQuery) {
            const searchMatch =
                room.number.toLowerCase().includes(searchQuery) ||
                room.block.toLowerCase().includes(searchQuery) ||
                room.description.toLowerCase().includes(searchQuery);
            if (!searchMatch) return false;
        }

        // Block filter
        if (block !== 'all' && room.block !== block) return false;

        // Occupancy filter
        if (occupancy !== 'all' && room.status !== occupancy) return false;

        // Capacity filter
        if (capacity !== 'all' && room.capacity !== parseInt(capacity)) return false;

        // Price filter
        if (maxPrice !== 'all' && room.price > parseInt(maxPrice)) return false;

        return true;
    });

    renderRooms(filteredRooms);
}

function resetFilters() {
    searchInput.value = '';
    clearSearchBtn.classList.remove('visible');
    blockFilter.value = 'all';
    occupancyFilter.value = 'all';
    capacityFilter.value = 'all';
    priceFilter.value = 'all';
    filteredRooms = [...rooms];
    renderRooms(filteredRooms);
    notification.info('Filters Reset', 'All filters have been cleared.');
}

// ==========================================
// Room Rendering
// ==========================================
function renderRooms(roomsToRender) {
    roomsGrid.innerHTML = '';
    resultsCount.textContent = `Showing ${roomsToRender.length} room${roomsToRender.length !== 1 ? 's' : ''}`;

    if (roomsToRender.length === 0) {
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';

    roomsToRender.forEach((room, index) => {
        const card = createRoomCard(room, index);
        roomsGrid.appendChild(card);
    });
}

function createRoomCard(room, index) {
    const card = document.createElement('div');
    card.className = 'room-card';
    card.dataset.index = index;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `View details for room ${room.number}`);

    const occupancyPercent = (room.currentOccupancy / room.capacity) * 100;
    const occupancyLevel = occupancyPercent <= 33 ? 'low' : occupancyPercent <= 66 ? 'medium' : 'high';

    const amenitiesHTML = room.amenities.slice(0, 3).map(amenity => getAmenityTag(amenity)).join('');
    const moreAmenities = room.amenities.length > 3 ? `+${room.amenities.length - 3}` : '';

    card.innerHTML = `
    <div class="room-card-header">
      <div class="room-info">
        <h3 class="room-number">Room ${room.number}</h3>
        <p class="room-block">Block ${room.block} • Floor ${room.floor}</p>
      </div>
      <span class="status-badge ${room.status}">${room.status}</span>
    </div>
    <div class="room-card-body">
      <div class="room-capacity">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
        <span>${room.capacity} ${room.capacity === 1 ? 'person' : 'people'} capacity</span>
      </div>
      <div class="room-occupancy">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <span>${room.currentOccupancy}/${room.capacity} occupied</span>
        <div class="occupancy-bar">
          <div class="occupancy-fill ${occupancyLevel}" style="width: ${occupancyPercent}%"></div>
        </div>
      </div>
      <div class="room-amenities">
        ${amenitiesHTML}
        ${moreAmenities ? `<span class="amenity-tag">${moreAmenities} more</span>` : ''}
      </div>
    </div>
    <div class="room-card-footer">
      <div class="room-price">₦${formatPrice(room.price)}<span>/semester</span></div>
      <button class="view-details-btn" data-room-id="${room.id}">View Details</button>
    </div>
  `;

    // Click handler for card
    card.addEventListener('click', () => openModal(room));

    // Keyboard handler
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModal(room);
        }
    });

    // Tooltip for amenities
    const amenityTags = card.querySelectorAll('.amenity-tag');
    amenityTags.forEach(tag => {
        const amenityName = tag.textContent.trim().replace('+', '').replace(' more', '');
        if (!amenityName.match(/^\+\d$/)) {
            tag.addEventListener('mouseenter', (e) => showTooltip(e, getAmenityFullDescription(tag.dataset.amenity)));
            tag.addEventListener('mouseleave', hideTooltip);
        }
    });

    return card;
}

// ==========================================
// Amenity Functions
// ==========================================
function getAmenityTag(amenity) {
    const icons = {
        wifi: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`,
        ac: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 12c-.83 1.67-2.5 3-5.5 3"/><path d="M14.5 12c.83 1.67 2.5 3 5.5 3"/><path d="M9.5 8c-.83-1.67-2.5-3-5.5-3"/><path d="M14.5 8c.83-1.67 2.5-3 5.5-3"/><circle cx="12" cy="12" r="3"/></svg>`,
        balcony: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
        attached_bath: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-1.5C3.5 1 2 2.5 2 4.5v7A4.5 4.5 0 0 0 6.5 16h11a4.5 4.5 0 0 0 4.5-4.5v-7a2 2 0 0 0-2-2h-1.5"/><path d="M12 16v5"/><path d="M8 21h8"/></svg>`,
        fan: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 4 4"/><path d="M12 12c2-2.67 4-4 6-4a4 4 0 1 0-4 4"/><path d="M12 12c-2.67 2-4 4-4 6a4 4 0 1 0 4-4"/><path d="M12 12c2.67 2 4 4 4 6a4 4 0 1 0-4-4"/><circle cx="12" cy="12" r="3"/></svg>`,
    };

    const labels = {
        wifi: 'WiFi',
        ac: 'A/C',
        balcony: 'Balcony',
        attached_bath: 'Bath',
        fan: 'Fan',
    };

    return `<span class="amenity-tag" data-amenity="${amenity}">${icons[amenity] || ''}${labels[amenity] || amenity}</span>`;
}

function getAmenityFullDescription(amenity) {
    const descriptions = {
        wifi: 'High-speed wireless internet available 24/7',
        ac: 'Air conditioning unit with individual temperature control',
        balcony: 'Private balcony with outdoor seating area',
        attached_bath: 'En-suite bathroom with hot water shower',
        fan: 'Ceiling fan with adjustable speed settings',
    };
    return descriptions[amenity] || amenity;
}

// ==========================================
// Tooltip Functions
// ==========================================
function showTooltip(e, text) {
    tooltip.textContent = text;
    tooltip.classList.add('visible');

    const rect = e.target.getBoundingClientRect();
    tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
    tooltip.style.top = `${rect.top - tooltip.offsetHeight - 8}px`;
}

function hideTooltip() {
    tooltip.classList.remove('visible');
}

// ==========================================
// Modal Functions
// ==========================================
function openModal(room) {
    selectedRoom = room;

    document.getElementById('modalTitle').textContent = `Room ${room.number}`;
    document.getElementById('modalPrice').textContent = `₦${formatPrice(room.price)}/semester`;

    const statusBadge = document.getElementById('modalStatus');
    statusBadge.textContent = room.status;
    statusBadge.className = `status-badge ${room.status}`;

    document.getElementById('modalCapacity').textContent = `${room.capacity} ${room.capacity === 1 ? 'occupant' : 'occupants'}`;
    document.getElementById('modalBlock').textContent = `Block ${room.block}`;
    document.getElementById('modalFloor').textContent = `${getOrdinal(room.floor)} Floor`;

    // Amenities
    const amenitiesList = document.getElementById('modalAmenities');
    amenitiesList.innerHTML = room.amenities.map(amenity => {
        const labels = {
            wifi: 'High-speed WiFi',
            ac: 'Air Conditioning',
            balcony: 'Private Balcony',
            attached_bath: 'Attached Bathroom',
            fan: 'Ceiling Fan',
        };
        return `<span class="amenity-badge">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      ${labels[amenity] || amenity}
    </span>`;
    }).join('');

    document.getElementById('modalDescription').textContent = room.description;

    // Update apply button based on status
    if (room.status === 'available') {
        applyBtn.textContent = 'Apply for Room';
        applyBtn.disabled = false;
        applyBtn.style.opacity = '1';
    } else if (room.status === 'occupied') {
        applyBtn.textContent = 'Join Waitlist';
        applyBtn.disabled = false;
        applyBtn.style.opacity = '1';
    } else {
        applyBtn.textContent = 'Under Maintenance';
        applyBtn.disabled = true;
        applyBtn.style.opacity = '0.5';
    }

    modalOverlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('visible');
    document.body.style.overflow = '';
    selectedRoom = null;
}

function handleApply() {
    if (!selectedRoom) return;

    if (selectedRoom.status === 'available') {
        notification.success('Application Submitted!', `Your application for Room ${selectedRoom.number} has been submitted. You will receive a confirmation email shortly.`);
    } else if (selectedRoom.status === 'occupied') {
        notification.info('Added to Waitlist', `You have been added to the waitlist for Room ${selectedRoom.number}. We'll notify you if a spot opens up.`);
    }

    closeModal();
}

// ==========================================
// Smart Room Finder
// ==========================================
function toggleSmartFinder() {
    const isCollapsed = smartFinderContent.classList.toggle('collapsed');
    collapseFinder.textContent = isCollapsed ? '+' : '−';
}

function updateBudgetDisplay() {
    const value = parseInt(prefBudget.value);
    prefBudgetValue.textContent = `₦${formatPrice(value)}`;
}

async function findSmartRoom() {
    const budget = parseInt(prefBudget.value);
    const prefCapacity = document.getElementById('prefCapacity').value;
    const prefQuiet = document.getElementById('prefQuiet').checked;
    const prefSocial = document.getElementById('prefSocial').checked;
    const prefAC = document.getElementById('prefAC').checked;
    const prefWiFi = document.getElementById('prefWiFi').checked;
    const prefAttached = document.getElementById('prefAttached').checked;
    const prefBalcony = document.getElementById('prefBalcony').checked;

    // Show loading state
    findRoomBtn.disabled = true;
    findRoomBtn.innerHTML = `
        <svg class="spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="32">
                <animate attributeName="stroke-dashoffset" dur="0.8s" values="32;0" repeatCount="indefinite"/>
            </circle>
        </svg>
        Finding...
    `;

    try {
        // Call the Room Recommendation API
        const preferences = {
            budget,
            capacity: prefCapacity,
            quiet: prefQuiet,
            social: prefSocial,
            ac: prefAC,
            wifi: prefWiFi,
            attached: prefAttached,
            balcony: prefBalcony
        };

        const result = await roomAPI.getRecommendations(preferences);

        if (result.success && result.recommendations.length > 0) {
            smartResults.innerHTML = `
          <h3>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
              <path d="M12 3l1.5 5.5H19l-4.5 3.5 1.5 5.5-5-3.5-5 3.5 1.5-5.5L3 8.5h5.5z"/>
            </svg>
            Top ${result.recommendations.length} Recommendations
          </h3>
          <div class="smart-room-list">
            ${result.recommendations.map(room => `
              <div class="smart-room-item" data-room-id="${room.id}">
                <div>
                  <span class="room-name">Room ${room.number}</span>
                  <span style="color: var(--text-muted); font-size: 0.8125rem; margin-left: 0.5rem;">
                    Block ${room.block} • ${room.capacity} ${room.capacity === 1 ? 'person' : 'people'}
                  </span>
                </div>
                <span class="match-score">${room.score}% match</span>
              </div>
            `).join('')}
          </div>
        `;

            // Add click handlers to smart results
            smartResults.querySelectorAll('.smart-room-item').forEach(item => {
                item.addEventListener('click', () => {
                    const roomId = parseInt(item.dataset.roomId);
                    const room = rooms.find(r => r.id === roomId);
                    if (room) {
                        openModal(room);
                    }
                });
            });

            notification.success('Recommendations Found', `Found ${result.recommendations.length} rooms that match your preferences!`);
        } else {
            smartResults.innerHTML = `
          <h3>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 8v4"/><path d="M12 16h.01"/>
            </svg>
            No matches found
          </h3>
          <p style="color: var(--text-secondary); font-size: 0.9375rem;">Try adjusting your preferences or increasing your budget.</p>
        `;
            notification.warning('No Matches', 'No rooms match your current preferences. Try adjusting your criteria.');
        }
    } catch (error) {
        notification.error('API Error', 'Failed to fetch recommendations. Please try again.');
        console.error('Room Recommendation API Error:', error);
    } finally {
        findRoomBtn.disabled = false;
        findRoomBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
            Find My Room
        `;
        smartResults.classList.add('visible');
    }
}

// ==========================================
// Utility Functions
// ==========================================
function formatPrice(price) {
    return price.toLocaleString('en-NG');
}

function getOrdinal(n) {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// Initialize the application
init();
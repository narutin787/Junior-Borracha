import { 
    observarAutenticacao, 
    listarCarros, 
    logoutUsuario,
    getUsuarioAtual,
    loginUsuario,
    registrarUsuario
} from './firebase.js';

// Dados dos veículos
const INITIAL_VEHICLES = [
    {
        id: 1,
        brand: "Toyota",
        model: "Corolla XEi",
        year: "2022/2022",
        km: 25000,
        price: 135900,
        fuel: "Flex",
        transmission: "Automático",
        category: "Sedans",
        color: "Prata",
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=800&auto=format&fit=crop",
        description: "Único dono, todas as revisões na concessionária. Estado de zero quilômetro, sem detalhes na pintura ou interior.",
        city: "São Paulo, SP"
    },
    {
        id: 2,
        brand: "Honda",
        model: "Civic Touring",
        year: "2021/2021",
        km: 32000,
        price: 142000,
        fuel: "Gasolina",
        transmission: "Automático",
        category: "Sedans",
        color: "Branco",
        image: "https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?q=80&w=800&auto=format&fit=crop",
        description: "Versão topo de linha com motor turbo, teto solar e sistema de som premium. Impecável.",
        city: "São Paulo, SP"
    },
    {
        id: 3,
        brand: "Volkswagen",
        model: "T-Cross Highline",
        year: "2023/2023",
        km: 12000,
        price: 158900,
        fuel: "Flex",
        transmission: "Automático",
        category: "SUVs",
        color: "Cinza",
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop",
        description: "O SUV mais seguro da categoria. Painel digital, teto solar panorâmico e som Beats.",
        city: "São Paulo, SP"
    },
    {
        id: 4,
        brand: "Jeep",
        model: "Compass Longitude",
        year: "2022/2022",
        km: 28000,
        price: 165000,
        fuel: "Diesel",
        transmission: "Automático",
        category: "SUVs",
        color: "Azul",
        image: "https://images.unsplash.com/photo-1611016186353-9af58c69a533?q=80&w=800&auto=format&fit=crop",
        description: "Motor TD350 com tração 4x4. Excelente para cidade e off-road leve. Interior em couro marrom.",
        city: "Curitiba, PR"
    },
    {
        id: 5,
        brand: "Chevrolet",
        model: "Onix RS",
        year: "2024/2024",
        km: 5000,
        price: 99000,
        fuel: "Flex",
        transmission: "Automático",
        category: "Hatchbacks",
        color: "Vermelho",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop",
        description: "Visual esportivo, Wi-Fi integrado e conectividade total Apple CarPlay e Android Auto.",
        city: "Belo Horizonte, MG"
    },
    {
        id: 6,
        brand: "BMW",
        model: "320i M Sport",
        year: "2023/2024",
        km: 8000,
        price: 335000,
        fuel: "Flex",
        transmission: "Automático",
        category: "Sedans",
        color: "Branco",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop",
        description: "Pacote M Sport completo. O prazer de dirigir com a tecnologia alemã. Garantia de fábrica.",
        city: "São Paulo, SP"
    }
];

// Gerador para completar 50 veículos para demonstração
const brands = ["Toyota", "Honda", "Volkswagen", "Ford", "Chevrolet", "Jeep", "BMW", "Audi", "Hyundai", "Fiat"];
const models = {
    "Toyota": ["Hilux SRX", "Yaris Hatch", "SW4 Diamond"],
    "Honda": ["HR-V EXL", "City Sedã", "Accord Hybrid"],
    "Volkswagen": ["Polo GTS", "Nivus Highline", "Amarok V6"],
    "Jeep": ["Renegade Trailhawk", "Commander Overland"],
    "BMW": ["X1 sDrive", "X5 xDrive", "M3 Competition"],
    "Ford": ["Ranger Limited", "Mustang Mach 1", "Bronco Sport"],
    "Fiat": ["Toro Volcano", "Pulse Abarth", "Fastback Limited"],
    "Chevrolet": ["S10 High Country", "Tracker Premier", "Equinox RS"],
    "Hyundai": ["HB20 Platinum Plus", "Creta Ultimate"],
    "Audi": ["A3 Performance", "Q3 Sportback", "RS6 Avant"]
};

const modelCategoryMap = {
    "Hilux SRX": "Picapes", "Yaris Hatch": "Hatchbacks", "SW4 Diamond": "SUVs", "Corolla XEi": "Sedans",
    "HR-V EXL": "SUVs", "City Sedã": "Sedans", "Accord Hybrid": "Sedans", "Civic Touring": "Sedans",
    "Polo GTS": "Hatchbacks", "Nivus Highline": "SUVs", "Amarok V6": "Picapes", "T-Cross Highline": "SUVs",
    "Renegade Trailhawk": "SUVs", "Commander Overland": "SUVs", "Compass Longitude": "SUVs",
    "X1 sDrive": "SUVs", "X5 xDrive": "SUVs", "M3 Competition": "Esportivos", "320i M Sport": "Sedans",
    "Ranger Limited": "Picapes", "Mustang Mach 1": "Esportivos", "Bronco Sport": "SUVs",
    "Toro Volcano": "Picapes", "Pulse Abarth": "Hatchbacks", "Fastback Limited": "SUVs",
    "S10 High Country": "Picapes", "Tracker Premier": "SUVs", "Equinox RS": "SUVs", "Onix RS": "Hatchbacks",
    "HB20 Platinum Plus": "Hatchbacks", "Creta Ultimate": "SUVs",
    "A3 Performance": "Sedans", "Q3 Sportback": "SUVs", "RS6 Avant": "Esportivos"
};

// Lista de IDs reais do Unsplash para fotos de carros
const carImageIds = [
    "1494976388531-d1058494cdd8", "1503376780353-7e6692767b70",
    "1583121274602-3e2820c69888", "1552519507-da3b142c6e3d",
    "1492144534655-ae79c964c9d7", "1542281286-9e0a16bb7366",
    "1525609004556-c46c7d6cf023", "1502877338535-766e1452684a",
    "1550355291-bbee04a92027", "1533473359331-0135ef1b58bf"
];

const VEHICLES_DATA = [...INITIAL_VEHICLES];

for (let i = VEHICLES_DATA.length + 1; i <= 50; i++) {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const modelList = models[brand];
    const model = modelList[Math.floor(Math.random() * modelList.length)];
    
    const randomImageId = carImageIds[Math.floor(Math.random() * carImageIds.length)];
    
    VEHICLES_DATA.push({
        id: i,
        brand: brand,
        model: model,
        year: `${2019 + Math.floor(Math.random() * 6)}/2024`,
        category: modelCategoryMap[model] || "SUVs",
        km: Math.floor(Math.random() * 80000),
        price: 60000 + Math.floor(Math.random() * 300000),
        fuel: "Flex",
        transmission: Math.random() > 0.2 ? "Automático" : "Manual",
        color: ["Preto", "Branco", "Prata", "Cinza", "Azul"][Math.floor(Math.random() * 5)],
        image: `https://images.unsplash.com/photo-${randomImageId}?q=80&w=800&auto=format&fit=crop`,
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    });
}

// Seletores DOM
const vehiclesGrid = document.getElementById('vehiclesGrid');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const brandFilter = document.getElementById('brandFilter');
const priceSort = document.getElementById('priceSort');
const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');
const vehicleCount = document.getElementById('vehicleCount');
const noResults = document.getElementById('noResults');
const vehicleModal = document.getElementById('vehicleModal');
const closeModal = document.getElementById('closeModal');
const loadMoreContainer = document.getElementById('loadMoreContainer');
const btnLogin = document.getElementById('btnLogin');
const authModal = document.getElementById('authModal');
const authForm = document.getElementById('authForm');
const btnToggleAuth = document.getElementById('btnToggleAuth');
const authTitle = document.getElementById('authTitle');
const closeAuthModal = document.getElementById('closeAuthModal');
const clearFilters = document.getElementById('clearFilters');
const btnLoadMore = document.getElementById('btnLoadMore');
const btnMenuMobile = document.querySelector('.btn-menu-mobile');
const mobileDrawer = document.getElementById('mobileDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const closeDrawer = document.getElementById('closeDrawer');
const drawerLinks = document.querySelectorAll('.drawer-link');

// Estado da Paginação
let visibleItems = 12;
let currentCategoryFilter = "Todas";
let currentFilteredData = [];
let isLoginMode = true;
let favorites = JSON.parse(localStorage.getItem('jb_favorites')) || [];

// Funções de Formatação
const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
};

// Gerenciamento de Favoritos
function toggleFavorite(e, vehicleId) {
    e.stopPropagation();
    const index = favorites.indexOf(vehicleId);
    if (index > -1) favorites.splice(index, 1);
    else favorites.push(vehicleId);
    
    localStorage.setItem('jb_favorites', JSON.stringify(favorites));
    renderVehicles();
}

// Renderização dos Cards
function renderVehicles() {
    const displayList = currentFilteredData.slice(0, visibleItems);
    vehiclesGrid.innerHTML = '';
    vehicleCount.textContent = `${currentFilteredData.length} veículo${currentFilteredData.length !== 1 ? 's' : ''} encontrado${currentFilteredData.length !== 1 ? 's' : ''}`;

    if (currentFilteredData.length === 0) {
        noResults.classList.remove('hidden');
        loadMoreContainer.classList.add('hidden');
        return;
    }

    noResults.classList.add('hidden');

    displayList.forEach(vehicle => {
        const card = document.createElement('article');
        card.className = 'vehicle-card';
        const isFavorited = favorites.includes(vehicle.id);
        card.innerHTML = `
            <div class="card-image">
                <img src="${vehicle.image}" alt="${vehicle.brand} ${vehicle.model}" loading="lazy">
                <button class="btn-favorite ${isFavorited ? 'active' : ''}" onclick="toggleFavorite(event, ${vehicle.id})" aria-label="Favoritar">
                    <i data-lucide="heart" ${isFavorited ? 'fill="currentColor"' : ''}></i>
                </button>
            </div>
            <div class="card-content">
                <div class="card-header">
                    <div>
                        <div class="card-meta">
                            <span class="card-brand">${vehicle.brand}</span>
                            <span class="card-category-badge">${vehicle.category}</span>
                        </div>
                        <h4 class="card-model">${vehicle.model}</h4>
                    </div>
                    <span class="card-year">${vehicle.year}</span>
                </div>
                <div class="card-specs">
                    <div class="spec"><i data-lucide="gauge"></i><span>${vehicle.km.toLocaleString()} km</span></div>
                    <div class="spec"><i data-lucide="settings-2"></i><span>${vehicle.transmission}</span></div>
                </div>
                <div class="card-footer">
                    <p class="card-price">${formatPrice(vehicle.price)}</p>
                    <button class="btn-details" aria-label="Ver detalhes"><i data-lucide="chevron-right"></i></button>
                </div>
            </div>
        `;
        card.onclick = () => openVehicleModal(vehicle);
        vehiclesGrid.appendChild(card);
    });

    if (visibleItems >= currentFilteredData.length) {
        loadMoreContainer.classList.add('hidden');
    } else {
        loadMoreContainer.classList.remove('hidden');
    }

    lucide.createIcons();
}

// Lógica de Filtro
function filterVehicles() {
    const term = searchInput.value.toLowerCase();
    const brand = brandFilter.value;
    const sort = priceSort.value;
    const minPrice = parseFloat(minPriceInput.value) || 0;
    const maxPrice = parseFloat(maxPriceInput.value) || Infinity;

    currentFilteredData = VEHICLES_DATA.filter(v => {
        const matchesSearch = v.model.toLowerCase().includes(term) || v.brand.toLowerCase().includes(term);
        const matchesBrand = brand === "Todas" || v.brand === brand;
        const matchesCategory = currentCategoryFilter === "Todas" || v.category === currentCategoryFilter;
        const matchesPrice = v.price >= minPrice && v.price <= maxPrice;
        return matchesSearch && matchesBrand && matchesCategory && matchesPrice;
    });

    // Ordenação
    if (sort === 'price-asc') currentFilteredData.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') currentFilteredData.sort((a, b) => b.price - a.price);
    else if (sort === 'year-desc') {
        currentFilteredData.sort((a, b) => {
            const yearA = parseInt(a.year.split('/')[0]);
            const yearB = parseInt(b.year.split('/')[0]);
            return yearB - yearA;
        });
    }

    visibleItems = 12; // Reseta a paginação ao filtrar
    renderVehicles();
}

// Função para filtrar via cliques externos (ex: footer)
window.filterByCategory = (category) => {
    currentCategoryFilter = category;
    // Scroll suave até a seção de estoque
    document.querySelector('.inventory').scrollIntoView({ behavior: 'smooth' });
    // Limpa outros filtros para focar na categoria escolhida
    searchInput.value = '';
    brandFilter.value = 'Todas';
    filterVehicles();
};

// Integração API HDI (Carregar Marcas/Modelos)
async function loadApiData() {
    try {
        const response = await fetch('https://openapi-int.hdi.com.br/marketplace/offer/v1/vehicles/models');
        if (response.ok) {
            const data = await response.json();
            // Aqui você poderia popular o select com dados reais da API
            console.log("Modelos carregados da HDI:", data);
        } else {
            console.warn("Não foi possível carregar dados da API HDI:", response.status);
        }
    } catch (error) {
        console.error("Erro ao acessar API HDI:", error);
    }
}

// Modal
function openVehicleModal(vehicle) {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = vehicle.image;
    modalImage.alt = vehicle.model;
    document.getElementById('modalBrand').textContent = vehicle.brand;
    document.getElementById('modalModel').textContent = vehicle.model;
    document.getElementById('modalPrice').textContent = formatPrice(vehicle.price);
    document.getElementById('modalYear').textContent = vehicle.year;
    document.getElementById('modalKm').textContent = `${vehicle.km.toLocaleString()} km`;
    document.getElementById('modalTransmission').textContent = vehicle.transmission;
    document.getElementById('modalFuel').textContent = vehicle.fuel;
    document.getElementById('modalDescription').textContent = vehicle.description;

    vehicleModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Impede scroll no fundo
    lucide.createIcons();
}

// Gerenciamento de Seções (Navegação)
function showSection(sectionId) {
    const sections = ['inventory', 'sell', 'financing', 'contact'];
    const hero = document.querySelector('.hero');

    sections.forEach(id => {
        const element = document.getElementById(id);
        if (id === sectionId) {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    });

    // Mostrar o Hero (Busca) apenas na seção de Estoque
    if (sectionId === 'inventory') {
        hero.classList.remove('hidden');
    } else {
        hero.classList.add('hidden');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event Listeners
function toggleDrawer() {
    mobileDrawer.classList.toggle('active');
    drawerOverlay.classList.toggle('active');
    document.body.style.overflow = mobileDrawer.classList.contains('active') ? 'hidden' : 'auto';
}

if (btnLogin) btnLogin.onclick = (e) => {
    const user = getUsuarioAtual();
    if (user) {
        // Se já está logado, o botão agora serve para deslogar (conforme lógica no DOMContentLoaded)
        return; 
    }
    authModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
};

if (closeAuthModal) closeAuthModal.onclick = () => {
    authModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
};

if (btnToggleAuth) btnToggleAuth.onclick = () => {
    isLoginMode = !isLoginMode;
    authTitle.textContent = isLoginMode ? 'Entrar na Conta' : 'Criar Nova Conta';
    btnToggleAuth.innerHTML = isLoginMode ? 'Não tem uma conta? <strong>Cadastre-se</strong>' : 'Já tem uma conta? <strong>Entre</strong>';
    authForm.querySelector('button').textContent = isLoginMode ? 'ENTRAR' : 'CADASTRAR';
};

if (authForm) authForm.onsubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById('authEmail').value;
    const password = document.getElementById('authPassword').value;

    try {
        if (isLoginMode) {
            await loginUsuario(email, password);
        } else {
            await registrarUsuario(email, password);
        }
        authModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    } catch (error) {
        alert("Erro na autenticação: " + error.message);
    }
};

if (btnMenuMobile) btnMenuMobile.onclick = toggleDrawer;
if (closeDrawer) closeDrawer.onclick = toggleDrawer;
if (drawerOverlay) drawerOverlay.onclick = toggleDrawer;

drawerLinks.forEach(link => {
    link.onclick = toggleDrawer;
});

// Interceptar cliques nos links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1);
        const sections = ['inventory', 'sell', 'financing', 'contact'];
        
        if (sections.includes(targetId)) {
            e.preventDefault();
            showSection(targetId);
        }
    });
});

searchForm.onsubmit = (e) => {
    e.preventDefault();
    filterVehicles();
};

brandFilter.onchange = filterVehicles;
priceSort.onchange = filterVehicles;
window.toggleFavorite = toggleFavorite;

btnLoadMore.onclick = () => {
    visibleItems += 12;
    renderVehicles();
};

closeModal.onclick = () => {
    vehicleModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
};

clearFilters.onclick = () => {
    searchInput.value = '';
    brandFilter.value = 'Todas';
    currentCategoryFilter = 'Todas';
    filterVehicles();
};

window.onclick = (event) => {
    if (event.target === vehicleModal.querySelector('.modal-overlay')) {
        vehicleModal.classList.add('hidden');
    }
};

// Inicialização
document.addEventListener('DOMContentLoaded', async () => {
    // Preencher select de marcas baseado nos dados locais
    const uniqueBrands = [...new Set(VEHICLES_DATA.map(v => v.brand))];
    uniqueBrands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });

    // Integrar carros do Firebase com os dados iniciais
    try {
        const firebaseVehicles = await listarCarros();
        VEHICLES_DATA.push(...firebaseVehicles);
    } catch (error) {
        console.error("Erro ao carregar carros do Firebase:", error);
    }

    // Verificar usuário logado para ajustar o botão de login
    observarAutenticacao((user) => {
        if (user) {
            btnLogin.innerHTML = `<i data-lucide="log-out"></i><span>Sair</span>`;
            btnLogin.onclick = async () => {
                await logoutUsuario();
                window.location.reload();
            };
        }
        lucide.createIcons();
    });

    currentFilteredData = VEHICLES_DATA;
    renderVehicles();
    loadApiData();
    lucide.createIcons();
});
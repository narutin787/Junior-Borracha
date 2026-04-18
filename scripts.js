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

const VEHICLES_DATA = [...INITIAL_VEHICLES];

for (let i = VEHICLES_DATA.length + 1; i <= 50; i++) {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const modelList = models[brand];
    const model = modelList[Math.floor(Math.random() * modelList.length)];
    
    VEHICLES_DATA.push({
        id: i,
        brand: brand,
        model: model,
        year: `${2019 + Math.floor(Math.random() * 6)}/2024`,
        km: Math.floor(Math.random() * 80000),
        price: 60000 + Math.floor(Math.random() * 300000),
        fuel: "Flex",
        transmission: Math.random() > 0.2 ? "Automático" : "Manual",
        color: ["Preto", "Branco", "Prata", "Cinza", "Azul"][Math.floor(Math.random() * 5)],
        image: `https://images.unsplash.com/photo-${1500000000000 + i}?q=80&w=800&auto=format&fit=crop`,
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Paulo, SP"
    });
}

// Seletores DOM
const vehiclesGrid = document.getElementById('vehiclesGrid');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const brandFilter = document.getElementById('brandFilter');
const vehicleCount = document.getElementById('vehicleCount');
const noResults = document.getElementById('noResults');
const vehicleModal = document.getElementById('vehicleModal');
const closeModal = document.getElementById('closeModal');
const loadMoreContainer = document.getElementById('loadMoreContainer');
const btnLoadMore = document.getElementById('btnLoadMore');

// Estado da Paginação
let visibleItems = 12;
let currentFilteredData = [];

// Funções de Formatação
const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
};

// Renderização dos Cards
function renderVehicles(
t   vehiclesGrid.innerHTML = '';
function renderVehicles() {
    const displayList = currentFilteredData.slice(0, visibleItems);
    vehiclesGrid.innerHTML = '';
    vehicleCount.textContent = `${currentFilteredData.length} veículo${currentFilteredData.length !== 1 ? 's' : ''} encontrado${currentFilteredData.length !== 1 ? 's' : ''}`;
== 0) {        noResults.classList.remove('hidden');
ist.add('hidden');

    if (currentFilteredData.length === 0) {
        noResults.classList.remove('hidden');
        loadMoreContainer.classList.add('hidden');
    } else {
        noResults.classList.add('hidden');
        
        displayList.forEach(vehicle => {
            const card = document.createElement('article');
        -card';
            card.className = 'vehicle-card';
            card.innerHTML = `
                <div class="card-image">
                    <img src="${vehicle.image}" alt="${vehicle.model}">
                    <button class="btn-favorite" aria-label="Favoritar">
                        <i data-lucide="heart"></i>
                    </button>
                </div>
                <div class="card-content">
                    <div class="card-header">
                        <div>
                            <span class="card-brand">${vehicle.brand}</span>
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
                        <button class="btn-details"><i data-lucide="chevron-right"></i></button>
                    </div>
                </div>
            `;
            card.onclick = () => openVehicleModal(vehicle);
            vehiclesGrid.appendChild(card);
        });

        // Controla visibilidade do botão Carregar Mais
        if (visibleItems >= currentFilteredData.length) {
            loadMoreContainer.classList.add('hidden');
        } else {
            loadMoreContainer.classList.remove('hidden');
        }
    }
    lucide.createIcons();
}

// Lógica de Filtro
function filterVehicles() {
    const term = searchInput.value.toLowerCase();
    const brand = brandFilter.value;

    currentFilteredData = VEHICLES_DATA.filter(v => {
        const matchesSearch = v.model.toLowerCase().includes(term) || v.brand.toLowerCase().includes(term);
        const matchesBrand = brand === "Todas" || v.brand === brand;
        return matchesSearch && matchesBrand;
    }
    });

    visibleItems = 12; // Reseta a paginação ao filtrar
    renderVehicles();
}

// Integração API HDI (Carregar Marcas/Modelos)
{
async function loadApiData() {
    try {
        const response = await fetch('https://openapi-int.hdi.com.br/marketplace/offer/v1/vehicles/models');
        if (response.ok) {
            const data = await response.json();
            // Aqui você poderia popular o select com dados reais da API
            console.log("Modelos carregados da HDI:", data);
        }
    } catch (error) {
        console.error("Erro ao acessar API HDI:", error);
    }
}

// Modal
function openVehicleModal(vehicle) {
    document.getElementById('modalImage').src = vehicle.image;
    document.getElementById('modalBrand').textContent = vehicle.brand;
    document.getElementById('modalModel').textContent = vehicle.model;
    document.getElementById('modalPrice').textContent = formatPrice(vehicle.price);
    document.getElementById('modalYear').textContent = vehicle.year;
    document.getElementById('modalKm').textContent = `${vehicle.km.toLocaleString()} km`;
    document.getElementById('modalTransmission').textContent = vehicle.transmission;
    document.getElementById('modalFuel').textContent = vehicle.fuel;
    document.getElementById('modalDescription').textContent = vehicle.description;

    vehicleModal.classList.remove('hidden');
    lucide.createIcons();
}

// Event Listeners
searchForm.onsubmit = (e) => {
    e.preventDefault();
    filterVehicles();
};

brandFilter.onchange = filterVehicles;

btnLoadMore.onclick = () => {
    visibleItems += 12;
    renderVehicles();
};

closeModal.onclick = () => {
    vehicleModal.classList.add('hidden');
};

window.onclick = (event) => {
    if (event.target === vehicleModal.querySelector('.modal-overlay')) {
        vehicleModal.classList.add('hidden');
    }
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Preencher select de marcas baseado nos dados locais
    const uniqueBrands = [...new Set(VEHICLES_DATA.map(v => v.brand))];
    uniqueBrands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });

    currentFilteredData = VEHICLES_DATA;
    renderVehicles();
    loadApiData();
});
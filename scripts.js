// Dados dos veículos
const INITIAL_VEHICLES = [
    {
        id: 1,
        brand: "Fiat",
        model: "ARGO DRIVE 1.0",
        year: "2024/2025",
        km: 56,
        price: 77000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Hatchbacks",
        color: "Branca",
        image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop", // White Hatch
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 2,
        brand: "Chevrolet",
        model: "CLASSIC LS",
        year: "2012/2013",
        km: 108,
        price: 32000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Sedans",
        color: "Prata",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop", // Silver Sedan
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 3,
        brand: "Chevrolet",
        model: "CELTA LT 1.0",
        year: "2013/2014",
        km: 0,
        price: 38000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Hatchbacks",
        color: "Prata",
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop", // Silver Hatch
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 4,
        brand: "Fiat",
        model: "CRONOS DRIVE 1.0",
        year: "2024/2025",
        km: 20,
        price: 84000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Sedans",
        color: "Branco",
        image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=800&auto=format&fit=crop", // White Sedan
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 5,
        brand: "Renault",
        model: "DUSTER INTENSE PLUS 1.6",
        year: "2024/2025",
        km: 22,
        price: 111000,
        fuel: "Flex",
        transmission: "Manual",
        category: "SUVs",
        color: "Prata",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop", // Silver SUV
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 6,
        brand: "Renault",
        model: "DUSTER DYNAMIQUE 1.6",
        year: "2016/2016",
        km: 0,
        price: 62000,
        fuel: "Flex",
        transmission: "Manual",
        category: "SUVs",
        color: "Marrom",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop", // Brown/Dark SUV
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 7,
        brand: "Ford",
        model: "ECOSPORT FREESTYLE 1.6 XLT",
        year: "2012/2012",
        km: 105,
        price: 47000,
        fuel: "Flex",
        transmission: "Manual",
        category: "SUVs",
        color: "Prata",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop", // Silver SUV
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 8,
        brand: "Toyota",
        model: "ETIOS SD XS 1.5",
        year: "2016/2017",
        km: 78,
        price: 60000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Sedans",
        color: "Branco",
        image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=800&auto=format&fit=crop", // White Sedan
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 9,
        brand: "Volkswagen",
        model: "FOX RUN 1.6",
        year: "2016/2017",
        km: 75,
        price: 58000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Hatchbacks",
        color: "Prata",
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop", // Silver Hatch
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 10,
        brand: "Volkswagen",
        model: "GOL 1.0",
        year: "2019/2020",
        km: 0,
        price: 48000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Hatchbacks",
        color: "Prata",
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop", // Silver Hatch
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 11,
        brand: "Hyundai",
        model: "HB20 1.0 COMFORT",
        year: "2019/2019",
        km: 80,
        price: 61000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Hatchbacks",
        color: "Cinza",
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop", // Grey Hatch
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 12,
        brand: "Hyundai",
        model: "HB20 1.0 SENSE",
        year: "2022/2023",
        km: 0,
        price: 67000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Hatchbacks",
        color: "Cinza",
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop", // Grey Hatch
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 13,
        brand: "Hyundai",
        model: "HB20 1.0 SENSE",
        year: "2024/2025",
        km: 16,
        price: 74000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Hatchbacks",
        color: "Branco",
        image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop", // White Hatch
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 14,
        brand: "Hyundai",
        model: "HB20 1.6 PREMIUM",
        year: "2015/2016",
        km: 76,
        price: 66000,
        fuel: "Flex",
        transmission: "Automático",
        category: "Hatchbacks",
        color: "Branco",
        image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop", // White Hatch
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 15,
        brand: "Hyundai",
        model: "HB20S 1.0 COMFORT",
        year: "2024/2025",
        km: 16,
        price: 85000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Sedans",
        color: "Cinza",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop", // Grey Sedan
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 16,
        brand: "Toyota",
        model: "HILUX CD SRV 4X4 2.7 FLEX",
        year: "2013/2013",
        km: 146,
        price: 120000,
        fuel: "Flex",
        transmission: "Automático",
        category: "Picapes",
        color: "Prata",
        image: "https://images.unsplash.com/photo-1533558701576-23c65e0272fb?q=80&w=800&auto=format&fit=crop", // Pickup
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 17,
        brand: "Toyota",
        model: "HILUX CD SRV 4X4 2.8 DIESEL",
        year: "2012/2013",
        km: 130,
        price: 130000,
        fuel: "Diesel",
        transmission: "Automático",
        category: "Picapes",
        color: "Prata",
        image: "https://images.unsplash.com/photo-1533558701576-23c65e0272fb?q=80&w=800&auto=format&fit=crop", // Pickup
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 18,
        brand: "Toyota",
        model: "HILUX CD SRV 4X4 3.0 DIESEL",
        year: "2011/2012",
        km: 188,
        price: 126000,
        fuel: "Diesel",
        transmission: "Automático",
        category: "Picapes",
        color: "Preta",
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800&auto=format&fit=crop", // Dark Pickup
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 19,
        brand: "Honda",
        model: "HRV EX 1.8",
        year: "2021/2021",
        km: 95,
        price: 115000,
        fuel: "Flex",
        transmission: "Automático",
        category: "SUVs",
        color: "Cinza",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop", // SUV
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 20,
        brand: "Suzuki",
        model: "JIMMY 4SPORT",
        year: "2020/2021",
        km: 41,
        price: 115000,
        fuel: "Gasolina",
        transmission: "Manual",
        category: "SUVs",
        color: "Verde",
        image: "https://images.unsplash.com/photo-1469033051333-e41b224e963b?q=80&w=800&auto=format&fit=crop", // Offroad SUV
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 21,
        brand: "Suzuki",
        model: "JIMMY 4SPORT",
        year: "2010/2011",
        km: 0,
        price: 75000,
        fuel: "Gasolina",
        transmission: "Manual",
        category: "SUVs",
        color: "Verde",
        image: "https://images.unsplash.com/photo-1469033051333-e41b224e963b?q=80&w=800&auto=format&fit=crop", // Offroad SUV
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 22,
        brand: "Ford",
        model: "KA SE 1.0",
        year: "2019/2020",
        km: 75,
        price: 53000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Hatchbacks",
        color: "Branca",
        image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop", // White Hatch
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 23,
        brand: "Ford",
        model: "KA SE 1.0",
        year: "2018/2018",
        km: 79,
        price: 45000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Hatchbacks",
        color: "Vermelho",
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop", // Red Hatch
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 24,
        brand: "Nissan",
        model: "MARCH S 1.0",
        year: "2014/2015",
        km: 95,
        price: 42000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Hatchbacks",
        color: "Prata",
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop", // Silver Hatch
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 25,
        brand: "Fiat",
        model: "MOBI LIKE 1.0",
        year: "2024/2025",
        km: 28,
        price: 65000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Hatchbacks",
        color: "Branco",
        image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop", // White Hatch
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 26,
        brand: "Chevrolet",
        model: "ONIX LTZ 1.4",
        year: "2014/2015",
        km: 78,
        price: 54000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Hatchbacks",
        color: "Prata",
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop", // Silver Hatch
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 27,
        brand: "Fiat",
        model: "PALIO WAY",
        year: "2014/2015",
        km: 130,
        price: 37000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Hatchbacks",
        color: "Branco",
        image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop", // White Hatch
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 28,
        brand: "Fiat",
        model: "PALIO FIRE",
        year: "2009/2010",
        km: 130,
        price: 30000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Hatchbacks",
        color: "Prata",
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop", // Silver Hatch
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 29,
        brand: "Volkswagen",
        model: "POLO 1.0",
        year: "2019/2020",
        km: 132,
        price: 68000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Hatchbacks",
        color: "Prata",
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop", // Silver Hatch
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 30,
        brand: "Volkswagen",
        model: "POLO MPI 1.0",
        year: "2023/2024",
        km: 46,
        price: 78000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Hatchbacks",
        color: "Branco",
        image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop", // White Hatch
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 31,
        brand: "Renault",
        model: "SANDERO AUTHENTIC",
        year: "2014/2014",
        km: 90,
        price: 35000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Hatchbacks",
        color: "Prata",
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop", // Silver Hatch
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 32,
        brand: "Renault",
        model: "SANDERO EXPRESSION 1.0",
        year: "2017/2018",
        km: 79,
        price: 42000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Hatchbacks",
        color: "Prata",
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop", // Silver Hatch
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 33,
        brand: "Volkswagen",
        model: "SAVEIRO 1.6 CS ROBUST",
        year: "2023/2024",
        km: 45,
        price: 81000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Picapes",
        color: "Branco",
        image: "https://images.unsplash.com/photo-1533558701576-23c65e0272fb?q=80&w=800&auto=format&fit=crop", // White Pickup
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 34,
        brand: "Volkswagen",
        model: "SAVEIRO 1.6 CS ROBUST",
        year: "2024/2024",
        km: 27,
        price: 81000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Picapes",
        color: "Branca",
        image: "https://images.unsplash.com/photo-1533558701576-23c65e0272fb?q=80&w=800&auto=format&fit=crop", // White Pickup
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 35,
        brand: "Volkswagen",
        model: "SAVEIRO TREDLINE 1.6 CS",
        year: "2022/2023",
        km: 47,
        price: 80000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Picapes",
        color: "Prata",
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800&auto=format&fit=crop", // Silver Pickup
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 36,
        brand: "Fiat",
        model: "STRADA ADVENTURE CD",
        year: "2012/2012",
        km: 0,
        price: 54000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Picapes",
        color: "Vermelho",
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800&auto=format&fit=crop", // Pickup
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 37,
        brand: "Toyota",
        model: "SW4 GRS 2.8 4X4 DIESEL",
        year: "2022/2022",
        km: 0,
        price: 335000,
        fuel: "Diesel",
        transmission: "Automático",
        category: "SUVs",
        color: "Branca",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop", // White SUV
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 38,
        brand: "Toyota",
        model: "SW4 SRV 4X4",
        year: "2009/2010",
        km: 0,
        price: 115000,
        fuel: "Diesel",
        transmission: "Automático",
        category: "SUVs",
        color: "Prata",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop", // Silver SUV
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 39,
        brand: "Toyota",
        model: "SW4 SRV 4X4 3.0 SLUG",
        year: "2007/2007",
        km: 240,
        price: 78000,
        fuel: "Diesel",
        transmission: "Automático",
        category: "SUVs",
        color: "Prata",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop", // Silver SUV
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 40,
        brand: "Toyota",
        model: "SW4 SRV 4X4 2.8 DIESEL",
        year: "2023/2024",
        km: 101,
        price: 333000,
        fuel: "Diesel",
        transmission: "Automático",
        category: "SUVs",
        color: "Branco",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop", // White SUV
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 41,
        brand: "Volkswagen",
        model: "UP TSI MOVE 1.0",
        year: "2017/2018",
        km: 75,
        price: 62000,
        fuel: "Flex",
        transmission: "Manual",
        category: "Hatchbacks",
        color: "Vermelho",
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop", // Red Hatch
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 42,
        brand: "Toyota",
        model: "YARIS XL 1.5",
        year: "2024/2025",
        km: 0,
        price: 100000,
        fuel: "Flex",
        transmission: "Automático",
        category: "Hatchbacks",
        color: "Preta",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop", // Black Hatch
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    },
    {
        id: 43,
        brand: "Toyota",
        model: "YARIS XL 1.5",
        year: "2024/2025",
        km: 29,
        price: 100000,
        fuel: "Flex",
        transmission: "Automático",
        category: "Hatchbacks",
        color: "Preta",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop", // Black Hatch
        description: "Veículo em excelente estado de conservação, revisado e com garantia de procedência. Ótima oportunidade.",
        city: "São Luís, MA"
    }
];

// Gerador para completar 50 veículos para demonstração
const brands = ["Toyota", "Honda", "Volkswagen", "Ford", "Chevrolet", "Renault", "Fiat", "Hyundai", "Suzuki", "Nissan"];
const models = {
    "Toyota": ["HILUX CD SRV", "SW4 GRS", "ETIOS SD XS", "YARIS XL"],
    "Honda": ["HRV EX 1.8"],
    "Volkswagen": ["FOX RUN", "GOL 1.0", "POLO MPI", "SAVEIRO ROBUST", "UP TSI"],
    "Ford": ["ECOSPORT FREESTYLE", "KA SE 1.0"],
    "Chevrolet": ["CLASSIC LS", "CELTA LT", "ONIX LTZ"],
    "Renault": ["DUSTER INTENSE", "SANDERO AUTHENTIC"],
    "Fiat": ["ARGO DRIVE", "CRONOS DRIVE", "MOBI LIKE", "PALIO WAY", "STRADA ADVENTURE"],
    "Hyundai": ["HB20 COMFORT", "HB20S COMFORT"],
    "Suzuki": ["JIMMY 4SPORT"],
    "Nissan": ["MARCH S 1.0"]
};

const VEHICLES_DATA = [...INITIAL_VEHICLES];

// Removido o gerador de 50 veículos aleatórios para focar apenas no estoque real fornecido.

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

    // Mensagem personalizada para o WhatsApp
    const whatsappBtn = document.getElementById('modalWhatsappBtn');
    const message = encodeURIComponent(`Olá! Vi no site e tenho interesse no ${vehicle.brand} ${vehicle.model} (${vehicle.year}) no valor de ${formatPrice(vehicle.price)}.`);
    whatsappBtn.href = `https://api.whatsapp.com/send/?phone=5598985003061&text=${message}`;

    vehicleModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Impede scroll no fundo
    lucide.createIcons();
}

// Gerenciamento de Seções (Navegação)
function showSection(sectionId) {
    const sections = ['inventory', 'sell', 'financing', 'contact', 'policies', 'terms'];
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
        const sections = ['inventory', 'sell', 'financing', 'contact', 'policies', 'terms'];
        
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
    lucide.createIcons();
});
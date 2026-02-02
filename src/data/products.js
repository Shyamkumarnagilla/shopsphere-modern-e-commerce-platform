export const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Beauty'];

export const products = [
    // Electronics
    {
        id: 1,
        name: 'Samsung Galaxy M34 5G',
        description: 'Prism Silver, 6GB RAM, 128GB Storage | 50MP No Shake Cam | 6000 mAh Battery.',
        price: 15999,
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80',
        rating: 4.3,
        reviews: 12450,
        stock: 15
    },
    {
        id: 9,
        name: 'boAt Airdopes 141',
        description: 'Bluetooth TWS Earbuds with 42H Playtime, Beast Mode, and IPX4 Water Resistance.',
        price: 1299,
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
        rating: 4.2,
        reviews: 89000,
        stock: 50
    },
    {
        id: 10,
        name: 'Noise ColorFit Pulse 3',
        description: '1.91" Display Smartwatch, Bluetooth Calling, 100+ Sports Modes.',
        price: 1799,
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
        rating: 4.1,
        reviews: 15000,
        stock: 30
    },
    {
        id: 11,
        name: 'Sony WH-1000XM5',
        description: 'Wireless Industry Leading Noise Canceling Headphones with Auto NC Optimizer.',
        price: 29990,
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=500&q=80',
        rating: 4.9,
        reviews: 2100,
        stock: 5
    },

    // Fashion
    {
        id: 3,
        name: 'Women Silk Kanjeevaram Saree',
        description: 'Elegant Banarasi Silk Saree with heavy zari border. Perfect for weddings and festivals.',
        price: 3499,
        category: 'Fashion',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&q=80',
        rating: 4.6,
        reviews: 890,
        stock: 25
    },
    {
        id: 12,
        name: "Levi's Men 511 Slim Fit Jeans",
        description: 'Classic denim jeans with a modern slim fit. Durable and stylish.',
        price: 2599,
        category: 'Fashion',
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80',
        rating: 4.5,
        reviews: 4500,
        stock: 20
    },
    {
        id: 14,
        name: 'Premium Cotton T-Shirt',
        description: 'Comfortable cotton t-shirt with modern fit. Perfect for casual wear.',
        price: 799,
        category: 'Fashion',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
        rating: 4.3,
        reviews: 890,
        stock: 18
    },
    {
        id: 22,
        name: 'Nike Air Max Sneakers',
        description: 'Premium sports shoes with air cushioning. Perfect for running and casual wear.',
        price: 7999,
        category: 'Fashion',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
        rating: 4.6,
        reviews: 3200,
        stock: 30
    },
    {
        id: 24,
        name: 'Classic Leather Jacket',
        description: 'Genuine leather jacket with premium finish. Timeless style for all seasons.',
        price: 8999,
        category: 'Fashion',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80',
        rating: 4.7,
        reviews: 1200,
        stock: 12
    },

    // Home
    {
        id: 5,
        name: 'Modern Table Lamp',
        description: 'Elegant table lamp with adjustable brightness. Perfect for bedroom or study.',
        price: 2499,
        category: 'Home',
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80',
        rating: 4.2,
        reviews: 3500,
        stock: 12
    },
    {
        id: 15,
        name: 'Ceramic Dinner Set',
        description: 'Set of 24 pieces. Elegant design for everyday dining and special occasions.',
        price: 3299,
        category: 'Home',
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500&q=80',
        rating: 4.6,
        reviews: 1200,
        stock: 15
    },
    {
        id: 16,
        name: 'Comfort Pillow Set',
        description: 'Memory foam pillows for ultimate comfort. Set of 2 with premium cover.',
        price: 2500,
        category: 'Home',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80',
        rating: 4.8,
        reviews: 2400,
        stock: 10
    },
    {
        id: 17,
        name: 'Decorative Wall Clock',
        description: 'Modern wall clock with silent movement. Adds elegance to any room.',
        price: 999,
        category: 'Home',
        image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&q=80',
        rating: 4.4,
        reviews: 5600,
        stock: 100
    },
    {
        id: 23,
        name: 'Wooden Coffee Table',
        description: 'Handcrafted solid wood coffee table with modern design. Perfect for living room.',
        price: 8999,
        category: 'Home',
        image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=500&q=80',
        rating: 4.7,
        reviews: 890,
        stock: 8
    },

    // Beauty
    {
        id: 7,
        name: 'Natural Face Serum',
        description: 'Vitamin C serum for glowing skin. Natural ingredients with visible results.',
        price: 499,
        category: 'Beauty',
        image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&q=80',
        rating: 4.3,
        reviews: 15600,
        stock: 150
    },
    {
        id: 8,
        name: 'Luxury Lipstick Collection',
        description: 'Rich color pay-off with a luxurious matte finish. Long-lasting formula.',
        price: 750,
        category: 'Beauty',
        image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&q=80',
        rating: 4.7,
        reviews: 2400,
        stock: 80
    },
    {
        id: 18,
        name: 'Premium Sunscreen SPF 50',
        description: 'Aqua Gel with SPF 50 & PA++++. Non-greasy and fragrance-free.',
        price: 499,
        category: 'Beauty',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80',
        rating: 4.5,
        reviews: 3400,
        stock: 200
    },
    {
        id: 20,
        name: 'Organic Face Wash',
        description: 'Traditional Ayurvedic face wash for a natural glow. Handcrafted formula.',
        price: 1175,
        category: 'Beauty',
        image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&q=80',
        rating: 4.9,
        reviews: 450,
        stock: 25
    },
    {
        id: 21,
        name: 'Hair Care Shampoo',
        description: 'Gentle shampoo for hair detox and scalp health. Sulfate and paraben-free.',
        price: 399,
        category: 'Beauty',
        image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&q=80',
        rating: 4.2,
        reviews: 12000,
        stock: 90
    }
];

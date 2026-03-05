const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const products = [
  {
    name: 'Ensemble de batterie de cuisine en acier inoxydable',
    description: 'Ensemble durable de 10 pièces, parfait pour la cuisine de tous les jours.',
    price: 60000,
    image: 'IMG/8-Piece Complete Cookware Set – Includes 3….jpg',
    category: 'Cookware'
  },
  {
    name: 'Poêle antiadhésive',
    description: 'Poêle facile à nettoyer avec une distribution de chaleur supérieure.',
    price: 33000,
    image: 'IMG/Cast Iron Frying Pan, Heavy-Duty Non-Stick Pan….jpg',
    category: 'Cookware'
  },
  {
    name: 'Ensemble de couteaux professionnels',
    description: 'Ensemble de 8 pièces avec poignées ergonomiques pour une coupe précise.',
    price: 20000,
    image: 'IMG/FOHERE Knife Set 14 Pieces Self Sharpening Knife….jpg',
    category: 'Cutlery'
  },
  {
    name: 'Mixeur haute vitesse',
    description: 'Moteur puissant de 1000 W pour les smoothies et les soupes.',
    price: 55000,
    image: 'IMG/HALOU Light Grey Cookware Set Soup Pot Set Frying….jpg',
    category: 'Appliances'
  },
  {
    name: 'Cafetière programmable',
    description: 'Capacité de 12 tasses avec fonction d\'infusion automatique.',
    price: 50000,
    image: 'IMG/DESCRIPTION __Réveillez-vous avec l\'odeur du café….jpg',
    category: 'Appliances'
  },
  {
    name: 'Ensemble de rangement hermétique',
    description: 'Ensemble de 20 pièces pour organiser votre garde-manger.',
    price: 20000,
    image: 'IMG/Ensemble De 14 Ustensiles De Cuisine En Silicone….jpg',
    category: 'Storage'
  },
  {
    name: 'Cafetière',
    description: 'Garde le café au chaud jusqu\'à deux heures.',
    price: 60000,
    image: 'IMG/Gardez le café au chaud jusqu\'à deux heures avec….jpg',
    category: 'Appliances'
  },
  {
    name: 'Cafetière programmable',
    description: 'Cafetière programmable à 12 tasses.',
    price: 55000,
    image: 'IMG/La cafetière programmable à 12 tasses ProFtor…(1).jpg',
    category: 'Appliances'
  },
  {
    name: 'Cafetière',
    description: 'Garantie de 2 ans.',
    price: 60000,
    image: 'IMG/La durée de garantie est de 2 ans_ Choisir ce….jpg',
    category: 'Appliances'
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ndapstore2', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert new products
    await Product.insertMany(products);
    console.log('Seeded products successfully');

    mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();

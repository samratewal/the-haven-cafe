export type MenuCategory = "Coffee" | "Pastries" | "Breakfast" | "Lunch" | "Tea & More";

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  featured?: boolean;
  vegetarian?: boolean;
  vegan?: boolean;
}

export const menuItems: MenuItem[] = [
  // Coffee
  {
    name: "Flat White",
    description: "Double shot espresso with silky steamed milk",
    price: "£3.20",
    category: "Coffee",
    featured: true,
    vegetarian: true,
  },
  {
    name: "Cappuccino",
    description: "Espresso topped with frothy milk and cocoa dusting",
    price: "£3.00",
    category: "Coffee",
    vegetarian: true,
  },
  {
    name: "Café Latte",
    description: "Smooth espresso blended with steamed milk",
    price: "£3.30",
    category: "Coffee",
    vegetarian: true,
  },
  {
    name: "Cold Brew",
    description: "12-hour steeped cold brew, smooth and low-acidity",
    price: "£3.80",
    category: "Coffee",
    featured: true,
    vegetarian: true,
    vegan: true,
  },
  {
    name: "Americano",
    description: "Espresso diluted with hot water",
    price: "£2.80",
    category: "Coffee",
    vegetarian: true,
    vegan: true,
  },
  {
    name: "Iced Caramel Latte",
    description: "Espresso, milk, caramel syrup, served over ice",
    price: "£3.90",
    category: "Coffee",
    vegetarian: true,
  },

  // Pastries
  {
    name: "Almond Croissant",
    description: "Flaky croissant filled with almond cream, dusted with sugar",
    price: "£3.50",
    category: "Pastries",
    featured: true,
    vegetarian: true,
  },
  {
    name: "Pain au Chocolat",
    description: "Classic buttery croissant wrapped around dark chocolate",
    price: "£3.20",
    category: "Pastries",
    vegetarian: true,
  },
  {
    name: "Cinnamon Bun",
    description: "Soft, pillowy bun swirled with cinnamon and sugar glaze",
    price: "£3.00",
    category: "Pastries",
    featured: true,
    vegetarian: true,
  },
  {
    name: "Blueberry Muffin",
    description: "Moist vanilla muffin bursting with fresh blueberries",
    price: "£2.80",
    category: "Pastries",
    vegetarian: true,
  },
  {
    name: "Lemon Drizzle Cake",
    description: "Tangy lemon sponge drizzled with citrus syrup",
    price: "£3.20",
    category: "Pastries",
    vegetarian: true,
  },
  {
    name: "Vegan Banana Bread",
    description: "Moist banana bread, vegan-friendly, toasted with nut butter",
    price: "£3.00",
    category: "Pastries",
    vegetarian: true,
    vegan: true,
  },

  // Breakfast
  {
    name: "Full Scottish Breakfast",
    description: "Eggs, bacon, tattie scone, black pudding, mushrooms & tomato",
    price: "£9.50",
    category: "Breakfast",
    featured: true,
  },
  {
    name: "Smashed Avocado Toast",
    description: "Sourdough toast, smashed avocado, chili flakes, lemon",
    price: "£6.50",
    category: "Breakfast",
    vegetarian: true,
    vegan: true,
  },
  {
    name: "Eggs Royale",
    description: "Toasted muffin, smoked salmon, poached eggs, hollandaise",
    price: "£8.50",
    category: "Breakfast",
  },
  {
    name: "Porridge with Berries",
    description: "Slow-cooked oats topped with honey, seasonal berries & nuts",
    price: "£5.00",
    category: "Breakfast",
    vegetarian: true,
  },
  {
    name: "Vegan Breakfast Bowl",
    description: "Avocado, beans, mushrooms, tomato, toast & spinach",
    price: "£7.50",
    category: "Breakfast",
    vegan: true,
  },

  // Lunch
  {
    name: "Haven Club Sandwich",
    description: "Chicken, bacon, egg, lettuce & mayo on toasted sourdough",
    price: "£8.00",
    category: "Lunch",
  },
  {
    name: "Roasted Veg & Goat Cheese Tart",
    description: "Seasonal vegetables, goat cheese, pastry shell, side salad",
    price: "£7.50",
    category: "Lunch",
    vegetarian: true,
  },
  {
    name: "Tomato & Basil Soup",
    description: "Slow-roasted tomato soup, fresh basil, served with bread",
    price: "£5.50",
    category: "Lunch",
    featured: true,
    vegetarian: true,
    vegan: true,
  },
  {
    name: "Mediterranean Quiche",
    description: "Sun-dried tomato, olive, feta & basil quiche with salad",
    price: "£7.00",
    category: "Lunch",
    vegetarian: true,
  },

  // Tea & More
  {
    name: "Earl Grey",
    description: "Classic black tea with bergamot, served with milk or lemon",
    price: "£2.50",
    category: "Tea & More",
    vegetarian: true,
    vegan: true,
  },
  {
    name: "Matcha Latte",
    description: "Stone-ground matcha whisked with steamed milk",
    price: "£3.80",
    category: "Tea & More",
    vegetarian: true,
  },
  {
    name: "Hot Chocolate",
    description: "Belgian dark chocolate melted with steamed milk, marshmallows",
    price: "£3.50",
    category: "Tea & More",
    vegetarian: true,
  },
  {
    name: "Fresh Orange Juice",
    description: "Freshly squeezed Valencia oranges",
    price: "£3.20",
    category: "Tea & More",
    vegetarian: true,
    vegan: true,
  },
];

export const categories: MenuCategory[] = [
  "Coffee",
  "Pastries",
  "Breakfast",
  "Lunch",
  "Tea & More",
];

export const openingHours = [
  { day: "Monday", hours: "8:00 AM – 5:00 PM" },
  { day: "Tuesday", hours: "8:00 AM – 5:00 PM" },
  { day: "Wednesday", hours: "8:00 AM – 5:00 PM" },
  { day: "Thursday", hours: "8:00 AM – 5:00 PM" },
  { day: "Friday", hours: "8:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 6:00 PM" },
  { day: "Sunday", hours: "9:00 AM – 4:00 PM" },
];

export const contactInfo = {
  address: "9 Anchorfield, Newhaven, Edinburgh EH6 4JG, United Kingdom",
  phone: "+44 131 555 0142",
  email: "hello@thehavencafe.co.uk",
};
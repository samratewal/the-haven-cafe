// ============================================================
// The Haven Café — Central data file
// ============================================================

export const cafeInfo = {
  name: "The Haven Café",
  address: {
    line1: "The Haven, 9 Anchorfield",
    line2: "Newhaven, Edinburgh",
    line3: "EH6 4JG, United Kingdom",
    full: "The Haven, 9 Anchorfield, Newhaven, Edinburgh, EH6 4JG, United Kingdom",
  },
  phone: "+44 131 467 7513",
  phoneHref: "tel:+441314677513",
  email: "hello@thehavencafe.co.uk",
  instagram: "https://www.instagram.com/thehavencafe/",
  instagramHandle: "@thehavencafe",
  hours: "Open Daily 9:00 AM – 4:00 PM",
  rating: 4.7,
  reviewCount: 409,
  ranking: "#115 of 2,222 Restaurants in Edinburgh",
  mapEmbed:
    "https://www.google.com/maps?q=Newhaven+Edinburgh+EH6+4JG&output=embed",
  mapLink: "https://www.google.com/maps/dir/?api=1&destination=Newhaven+Edinburgh+EH6+4JG",
};

// ── Opening hours ────────────────────────────────────────────
export const openingHours = [
  { day: "Monday", hours: "9:00 AM – 4:00 PM" },
  { day: "Tuesday", hours: "9:00 AM – 4:00 PM" },
  { day: "Wednesday", hours: "9:00 AM – 4:00 PM" },
  { day: "Thursday", hours: "9:00 AM – 4:00 PM" },
  { day: "Friday", hours: "9:00 AM – 4:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 4:00 PM" },
  { day: "Sunday", hours: "9:00 AM – 4:00 PM" },
];

// ── Menu types ──────────────────────────────────────────────
export type MenuTab = "Breakfast" | "Hot Drinks" | "Cold Drinks" | "Extras";

export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  note?: string;
  options?: string[];
  extras?: { label: string; price: string }[];
  toppings?: string[];
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
}

// ── Menu data ───────────────────────────────────────────────
export const menuData: Record<MenuTab, MenuItem[]> = {
  Breakfast: [
    {
      name: "Morning Roll",
      price: "£3.70",
      description: "Choose any breakfast filling. Two fillings £4.70.",
      note: "Fillings: Bacon, Link Sausage, Haggis, Black Pudding, Veggie Haggis, Veggie Sausage, Fried Egg, Tattie Scone, Mushrooms",
    },
    {
      name: "All Day Breakfast",
      price: "£10.95",
      description: "Bacon, Link Sausage, Black Pudding, Haggis, Fried Egg, Mushrooms, Beans, Tattie Scone, Toast",
    },
    {
      name: "All Day Veggie Breakfast",
      price: "£10.95",
      description: "Veggie Sausage, Veggie Haggis, Fried Egg, Tomato, Mushrooms, Beans, Tattie Scone, Toast",
      vegetarian: true,
    },
    {
      name: "Toasted Ciabatta with Sausage & Fried Egg",
      price: "£5.50",
      description: "Or any two breakfast fillings.",
    },
    {
      name: "Scrambled Eggs on Granary Toast",
      price: "£6.00",
      extras: [
        { label: "Bacon", price: "+£1.50" },
        { label: "Avocado", price: "+£1.50" },
        { label: "Smoked Salmon", price: "+£2.50" },
      ],
    },
    {
      name: "Pancakes with Maple Syrup",
      price: "£7.00",
      description: "Toppings: Bacon, Banana, Berries, Nutella, Chocolate Chips — +£1.50 each",
      vegetarian: true,
    },
    {
      name: "Eggy Bread, Bacon & Maple Syrup",
      price: "£7.00",
    },
    {
      name: "Porridge with Honey, Berries & Banana",
      price: "£5.50",
      vegetarian: true,
    },
    {
      name: "Avocado & Fried Eggs on Sourdough",
      price: "£7.50",
      vegetarian: true,
    },
    {
      name: "Cheese & Chilli Jam Sourdough Toastie",
      price: "£7.00",
      description: "Optional: Haggis or Veggie Haggis +£1.50",
      vegetarian: true,
    },
    {
      name: "The Havenette Spesh",
      price: "£8.00",
      description: "Choose Bacon or Halloumi with: Fried Egg, Avocado, Rocket, Sriracha, Granary Roll",
    },
  ],
  "Hot Drinks": [
    {
      name: "Americano",
      price: "£3.70",
      vegetarian: true,
      vegan: true,
    },
    {
      name: "Latte",
      price: "£3.70",
      vegetarian: true,
    },
    {
      name: "Cappuccino",
      price: "£3.70",
      vegetarian: true,
    },
    {
      name: "Flat White",
      price: "£3.70",
      vegetarian: true,
    },
    {
      name: "Mocha",
      price: "£3.70",
      vegetarian: true,
    },
    {
      name: "Tetley Tea",
      price: "£2.00",
      vegetarian: true,
      vegan: true,
    },
    {
      name: "Loose Leaf Teas",
      price: "£2.60",
      description: "Breakfast, Earl Grey, Green, Peppermint, Rooibos, Apple & Mint, Lemongrass & Ginger, Chamomile, Red Berry",
      vegetarian: true,
      vegan: true,
    },
    {
      name: "Hot Chocolate",
      price: "£3.70",
      vegetarian: true,
    },
  ],
  "Cold Drinks": [
    { name: "Orange Juice", price: "£2.00", vegetarian: true, vegan: true },
    { name: "Apple & Elderflower Juice", price: "£2.00", vegetarian: true, vegan: true },
    { name: "Coke", price: "£2.00", vegetarian: true, vegan: true },
    { name: "Diet Coke", price: "£2.00", vegetarian: true, vegan: true },
    { name: "Irn Bru", price: "£2.00", vegetarian: true, vegan: true },
    { name: "Diet Irn Bru", price: "£2.00", vegetarian: true, vegan: true },
    { name: "Appletiser", price: "£2.60", vegetarian: true, vegan: true },
    { name: "San Pellegrino Orange", price: "£2.60", vegetarian: true, vegan: true },
    { name: "San Pellegrino Lemon", price: "£2.60", vegetarian: true, vegan: true },
    { name: "Berry Smoothie", price: "£2.60", vegetarian: true, vegan: true },
    { name: "Still Water", price: "£2.50", vegetarian: true, vegan: true },
    { name: "Sparkling Water", price: "£2.50", vegetarian: true, vegan: true },
  ],
  Extras: [
    { name: "Oat Milk", price: "+£0.50", vegetarian: true, vegan: true },
    { name: "Vanilla Syrup", price: "+£0.50", vegetarian: true, vegan: true },
    { name: "Caramel Syrup", price: "+£0.50", vegetarian: true, vegan: true },
    { name: "Hazelnut Syrup", price: "+£0.50", vegetarian: true, vegan: true },
    { name: "Chai Syrup", price: "+£0.50", vegetarian: true, vegan: true },
    { name: "Cream", price: "+£0.50", vegetarian: true },
    { name: "Marshmallows", price: "+£0.50", vegetarian: true },
  ],
};

export const menuTabs: { value: MenuTab; label: string; icon: string }[] = [
  { value: "Breakfast", label: "Breakfast", icon: "Egg" },
  { value: "Hot Drinks", label: "Hot Drinks", icon: "Coffee" },
  { value: "Cold Drinks", label: "Cold Drinks", icon: "GlassWater" },
  { value: "Extras", label: "Extras", icon: "Plus" },
];

// ── Features ────────────────────────────────────────────────
export interface Feature {
  icon: string;
  label: string;
}

export const features: Feature[] = [
  { icon: "Egg", label: "Breakfast" },
  { icon: "Utensils", label: "Brunch" },
  { icon: "UtensilsCrossed", label: "Lunch" },
  { icon: "Wine", label: "British" },
  { icon: "Wheat", label: "Scottish" },
  { icon: "Leaf", label: "Vegetarian" },
  { icon: "Carrot", label: "Vegan" },
  { icon: "Wheat", label: "Gluten-Free" },
  { icon: "Wifi", label: "Free WiFi" },
  { icon: "Accessibility", label: "Wheelchair Access" },
  { icon: "Baby", label: "Highchairs" },
  { icon: "ShoppingBag", label: "Takeaway" },
  { icon: "ConciergeBell", label: "Table Service" },
  { icon: "ParkingCircle", label: "Parking" },
  { icon: "CreditCard", label: "Visa" },
  { icon: "CreditCard", label: "Mastercard" },
  { icon: "CreditCard", label: "Amex" },
  { icon: "CreditCard", label: "Credit Cards" },
];

// ── Reviews ──────────────────────────────────────────────────
export const reviewBreakdown = [
  { label: "Excellent", count: 308, percentage: 75, color: "bg-emerald-500" },
  { label: "Good", count: 73, percentage: 18, color: "bg-sage-500" },
  { label: "Average", count: 18, percentage: 4, color: "bg-yellow-500" },
  { label: "Poor", count: 8, percentage: 2, color: "bg-orange-500" },
  { label: "Terrible", count: 2, percentage: 1, color: "bg-red-500" },
];

export const reviewRatings = [
  { label: "Food", score: 4.6 },
  { label: "Service", score: 4.6 },
  { label: "Value", score: 4.7 },
  { label: "Atmosphere", score: 4.6 },
];

export interface Testimonial {
  name: string;
  initials: string;
  date: string;
  rating: number;
  text: string;
  source: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    initials: "SM",
    date: "2 weeks ago",
    rating: 5,
    text: "Absolutely love this little café. The full Scottish breakfast is the best in Edinburgh — everything cooked perfectly and the staff are so welcoming. A proper hidden gem in Newhaven.",
    source: "Google",
  },
  {
    name: "James T.",
    initials: "JT",
    date: "1 month ago",
    rating: 5,
    text: "The Havenette Spesh is incredible — halloumi, avocado, egg, rocket and sriracha in a granary roll. I dream about it. Great coffee too, and the loose leaf tea selection is lovely.",
    source: "Google",
  },
  {
    name: "Eilidh R.",
    initials: "ER",
    date: "1 month ago",
    rating: 4,
    text: "Cozy spot with a lovely Scandi feel. The veggie breakfast is generous and well-cooked. The only thing I'd say is it can get busy on weekends — but that tells you everything about the quality.",
    source: "TripAdvisor",
  },
  {
    name: "Michael B.",
    initials: "MB",
    date: "3 weeks ago",
    rating: 5,
    text: "Pancakes with maple syrup and berries — my kids were in heaven. Friendly staff, relaxed atmosphere, and the coffee is genuinely excellent. We'll be back every weekend.",
    source: "Google",
  },
  {
    name: "Priya K.",
    initials: "PK",
    date: "2 months ago",
    rating: 5,
    text: "The avocado and fried eggs on sourdough is my go-to. Beautifully presented, fresh ingredients, and the chilli jam toastie is a must-try. Dog-friendly attitude too!",
    source: "TripAdvisor",
  },
  {
    name: "David L.",
    initials: "DL",
    date: "5 days ago",
    rating: 5,
    text: "Best flat white in Newhaven, hands down. The barista really knows their craft. I come here every morning before work and it sets me up perfectly for the day.",
    source: "Google",
  },
];

// ── FAQ ──────────────────────────────────────────────────────
export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  { question: "Do you have vegetarian options?", answer: "Yes — we offer a wide range of vegetarian dishes including our All Day Veggie Breakfast, veggie haggis, and veggie sausages." },
  { question: "Do you offer vegan meals?", answer: "Yes! Many of our items are vegan or can be adapted. Our loose leaf teas, most cold drinks, and several breakfast options are vegan-friendly." },
  { question: "Do you have gluten-free options?", answer: "Yes, we have gluten-free options available. Please ask our staff and we'll be happy to help you choose." },
  { question: "Is there free WiFi?", answer: "Yes, we offer free WiFi for all customers. Just ask a member of staff for the password." },
  { question: "Is the café wheelchair accessible?", answer: "Yes, The Haven Café is wheelchair accessible with step-free entry and accessible seating." },
  { question: "Do you accept card payments?", answer: "Yes — we accept Visa, Mastercard, and American Express, as well as contactless and mobile payments." },
  { question: "Can I order takeaway?", answer: "Yes, takeaway is available. Pop in or call ahead and we'll have your order ready." },
  { question: "Is parking available?", answer: "Street parking is available nearby on Anchorfield and surrounding roads in Newhaven." },
  { question: "Are dogs allowed?", answer: "Please contact us for our current policy on dogs — we're happy to discuss and accommodate where we can." },
];

// ── Transport ───────────────────────────────────────────────
export interface TransportInfo {
  icon: string;
  title: string;
  description: string;
}

export const transportInfo: TransportInfo[] = [
  { icon: "Car", title: "By Car", description: "Street parking available nearby on Anchorfield and surrounding roads." },
  { icon: "Bus", title: "By Bus", description: "Edinburgh bus services stopping in Newhaven, a short walk from the café." },
  { icon: "Train", title: "By Tram", description: "Short walk from Newhaven Tram Stop on the Edinburgh tram network." },
  { icon: "Footprints", title: "Walking", description: "Close to Newhaven Harbour and Edinburgh's scenic waterfront." },
];

// ── Gallery images (real café photos) ────────────────────────
export const galleryImages = [
  { src: "/gallery/new/haven-1.webp", alt: "The Haven Café — food and drink", span: "row-span-2" },
  { src: "/gallery/new/haven-2.webp", alt: "The Haven Café — interior and dishes", span: "" },
  { src: "/gallery/new/haven-3.webp", alt: "The Haven Café — breakfast and coffee", span: "" },
  { src: "/gallery/new/haven-4.webp", alt: "The Haven Café — menu and specials", span: "row-span-2" },
  { src: "/gallery/new/haven-5.webp", alt: "The Haven Café — brunch and pancakes", span: "" },
  { src: "/gallery/new/haven-6.webp", alt: "The Haven Café — coffee and cakes", span: "" },
  { src: "/gallery/cafe-7.png", alt: "The Haven Café — atmosphere", span: "" },
  { src: "/gallery/cafe-8.png", alt: "The Haven Café — Newhaven location", span: "" },
  { src: "/gallery/cafe-9.png", alt: "The Haven Café — hospitality", span: "" },
];

// ── Instagram images ─────────────────────────────────────────
export const instagramImages = [
  "/gallery/new/haven-1.webp",
  "/gallery/new/haven-2.webp",
  "/gallery/new/haven-3.webp",
  "/gallery/new/haven-4.webp",
  "/gallery/new/haven-5.webp",
  "/gallery/new/haven-6.webp",
];

// ── Hero / about images ─────────────────────────────────────
export const heroImage = "/gallery/new/haven-1.webp";
export const aboutImage = "/gallery/new/haven-3.webp";

// ── Team ─────────────────────────────────────────────────────
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Fiona McAllister",
    role: "Owner & Founder",
    bio: "Fiona opened The Haven Café in 2019 with a simple dream — to bring a touch of Scandinavian warmth to the Edinburgh waterfront. She greets every guest like an old friend and still makes the best flat white in Newhaven.",
    image: "/gallery/new/haven-2.webp",
  },
  {
    name: "Calum Reid",
    role: "Head Barista",
    bio: "A Edinburgh native with a passion for single-origin beans and latte art, Calum trained with specialty roasters across Scotland. Ask him about his pour-over method — he'll talk for hours.",
    image: "/gallery/new/haven-4.webp",
  },
  {
    name: "Ailsa Graham",
    role: "Head Chef",
    bio: "Ailsa brings farm-to-table sensibility to every plate. She sources produce from local Scottish growers and is the creative mind behind the famous Havenette Spesh and our weekend specials.",
    image: "/gallery/new/haven-6.webp",
  },
  {
    name: "Rory Mackenzie",
    role: "Barista & All-Rounder",
    bio: "Rory's the one who remembers your regular order. When he's not pulling the perfect espresso, you'll find him restocking the cake display and keeping the whole place running smoothly.",
    image: "/gallery/new/haven-5.webp",
  },
];
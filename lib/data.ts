export type Product = {
  slug: string;
  name: string;
  category: "Vegetables" | "Fruits" | "Grains" | "Dairy & Eggs" | "Honey & Preserves" | "Herbs";
  price?: string;
  farmer: string;
  location: string;
  description: string;
  badge?: string;
  rating: number;
  art: string;
};

export const categories = ["All", "Vegetables", "Fruits", "Grains", "Dairy & Eggs", "Honey & Preserves", "Herbs"] as const;

export const products: Product[] = [
  {
    slug: "crisp-valley-spinach",
    name: "Crisp Valley Spinach",
    category: "Vegetables",
    price: "$4.50 / bunch",
    farmer: "Maya Chen",
    location: "Willow Ridge, CA",
    description:
      "Tender morning-picked spinach grown with compost-enriched soil and delivered the same day from a small hillside farm.",
    badge: "Fresh Today",
    rating: 4.9,
    art: "from-emerald-100 via-lime-50 to-amber-100",
  },
  {
    slug: "sun-sweet-orchard-peaches",
    name: "Sun-Sweet Orchard Peaches",
    category: "Fruits",
    price: "$6.00 / lb",
    farmer: "Diego Alvarez",
    location: "River Bend, OR",
    description:
      "Juicy peaches picked at peak ripeness from a family orchard with pollinator-friendly rows and low-water irrigation.",
    rating: 4.8,
    art: "from-amber-100 via-rose-50 to-yellow-100",
  },
  {
    slug: "golden-field-oats",
    name: "Golden Field Oats",
    category: "Grains",
    price: "$3.20 / lb",
    farmer: "Amina Brooks",
    location: "Prairie Grove, KS",
    description:
      "Stone-cleaned oats from a regenerative grain plot. Ideal for breakfast bowls, granola, and small-batch baking.",
    badge: "Community Pick",
    rating: 4.7,
    art: "from-stone-100 via-amber-50 to-lime-100",
  },
  {
    slug: "meadow-jar-honey",
    name: "Meadow Jar Honey",
    category: "Honey & Preserves",
    price: "$8.50 / jar",
    farmer: "Nora Singh",
    location: "Clover Flats, VT",
    description:
      "Raw honey from wildflower meadows and forest edge hives, bottled in small batches with a warm floral finish.",
    rating: 4.9,
    art: "from-amber-100 via-yellow-50 to-lime-100",
  },
  {
    slug: "forest-basil-bundle",
    name: "Forest Basil Bundle",
    category: "Herbs",
    price: "$2.75 / bundle",
    farmer: "Lena Park",
    location: "Maple Junction, WA",
    description:
      "Bright basil cut fresh from a shaded herb tunnel. Perfect for summer pasta, pesto, and market-day cooking.",
    badge: "Small Batch",
    rating: 4.8,
    art: "from-lime-100 via-emerald-50 to-stone-100",
  },
  {
    slug: "garden-milk-cheese-wheel",
    name: "Garden Milk Cheese Wheel",
    category: "Dairy & Eggs",
    price: "$12.00 / wheel",
    farmer: "Elijah Stone",
    location: "Hollow Creek, ME",
    description:
      "Creamy cheese made from pasture-raised milk and aged in a cool cellar for a buttery, balanced finish.",
    rating: 4.6,
    art: "from-stone-100 via-orange-50 to-rose-100",
  },
  {
    slug: "valley-tomato-basket",
    name: "Organic Tomatoes",
    category: "Vegetables",
    price: "$4.99",
    farmer: "Green Valley Farm",
    location: "Green Valley Farm",
    description: "Sun-ripened tomatoes harvested daily and packed for same-day market pickup.",
    badge: "Fresh Today",
    rating: 4.9,
    art: "from-red-100 via-rose-50 to-amber-100",
  },
  {
    slug: "orchard-crisp-apples",
    name: "Honeycrisp Apples",
    category: "Fruits",
    price: "$6.99",
    farmer: "Sunrise Orchards",
    location: "Sunrise Orchards",
    description: "Crisp, bright apples picked at peak sweetness from a family orchard.",
    rating: 4.8,
    art: "from-stone-100 via-red-50 to-slate-50",
  },
  {
    slug: "heritage-egg-basket",
    name: "Free-Range Eggs",
    category: "Dairy & Eggs",
    price: "$7.50",
    farmer: "Heritage Farms",
    location: "Heritage Farms",
    description: "Pasture-raised eggs collected fresh each morning from free-ranging hens.",
    badge: "Fresh Today",
    rating: 4.9,
    art: "from-amber-100 via-orange-50 to-stone-100",
  },
  {
    slug: "valley-carrot-harvest",
    name: "Organic Carrots",
    category: "Vegetables",
    price: "$3.99",
    farmer: "Green Valley Farm",
    location: "Green Valley Farm",
    description: "Sweet carrots bundled fresh from sandy soil and rinsed for market display.",
    rating: 4.7,
    art: "from-orange-100 via-amber-50 to-stone-100",
  },
  {
    slug: "summer-greens-bowl",
    name: "Mixed Salad Greens",
    category: "Vegetables",
    price: "$6.49",
    farmer: "Green Valley Farm",
    location: "Green Valley Farm",
    description: "A bright mix of lettuce, radish greens, and tender seasonal leaves.",
    rating: 4.8,
    art: "from-emerald-100 via-lime-50 to-rose-50",
  },
  {
    slug: "blueberry-basin",
    name: "Blueberries",
    category: "Fruits",
    price: "$9.99",
    farmer: "Sunrise Orchards",
    location: "Sunrise Orchards",
    description: "Sweet-tart blueberries harvested in small batches for freshness and flavor.",
    rating: 4.9,
    art: "from-sky-100 via-blue-50 to-stone-100",
  },
  {
    slug: "potato-cellar-bag",
    name: "Organic Potatoes",
    category: "Grains",
    price: "$4.49",
    farmer: "Mountain View Ranch",
    location: "Mountain View Ranch",
    description: "Starchy potatoes stored cold and dry for a hearty, all-purpose kitchen staple.",
    rating: 4.7,
    art: "from-amber-100 via-stone-50 to-stone-200",
  },
  {
    slug: "fresh-basil-stem",
    name: "Fresh Basil",
    category: "Herbs",
    price: "$3.49",
    farmer: "Green Valley Farm",
    location: "Green Valley Farm",
    description: "Fragrant basil bunches clipped fresh for sauces, salads, and summer cooking.",
    badge: "Fresh Today",
    rating: 4.8,
    art: "from-lime-100 via-emerald-50 to-white",
  },
];

export const featuredProducts = products.slice(0, 3);

export const farmerStats = [
  { label: "Total products posted", value: "24" },
  { label: "Messages this week", value: "18" },
  { label: "Repeat buyers", value: "11" },
];

export const conversations = [
  {
    buyer: "Green Table Cafe",
    lastMessage: "Can we reserve 10 bunches for Saturday pickup?",
    time: "2m ago",
    active: true,
    messages: [
      { sender: "buyer", text: "Hi Maya, are the spinach bunches harvested this morning?" },
      { sender: "farmer", text: "Yes, they were picked before sunrise and are ready for pickup." },
      { sender: "buyer", text: "Can we reserve 10 bunches for Saturday pickup?" },
    ],
  },
  {
    buyer: "Harbor Grocers",
    lastMessage: "We loved the basil sample from last week.",
    time: "1h ago",
    active: false,
    messages: [
      { sender: "buyer", text: "We loved the basil sample from last week." },
      { sender: "farmer", text: "Glad to hear it. I can bring a larger bundle tomorrow." },
    ],
  },
  {
    buyer: "Sunrise Market",
    lastMessage: "Do you deliver within 25 miles?",
    time: "Today",
    active: false,
    messages: [
      { sender: "buyer", text: "Do you deliver within 25 miles?" },
      { sender: "farmer", text: "Yes, on Wednesdays and Fridays before noon." },
    ],
  },
];
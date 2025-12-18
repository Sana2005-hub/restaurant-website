import { useState } from "react";

// Menu data
const menuData = [
  { id: 1, name: "Margherita Pizza", desc: "Classic pizza with fresh tomatoes, mozzarella & basil", price: "₹299", special: true },
  { id: 2, name: "Pasta Alfredo", desc: "Creamy Alfredo sauce with parmesan & herbs", price: "₹349" },
  { id: 3, name: "Veg Burger", desc: "Grilled veggie patty with lettuce & cheese", price: "₹199" },
  { id: 4, name: "Paneer Tikka", desc: "Spicy grilled paneer cubes with herbs", price: "₹249" },
  { id: 5, name: "Caesar Salad", desc: "Fresh romaine with Caesar dressing & croutons", price: "₹179" },
  { id: 6, name: "Chicken Biryani", desc: "Aromatic basmati rice with tender chicken pieces", price: "₹399" },
  { id: 7, name: "Veg Spring Rolls", desc: "Crispy rolls stuffed with fresh vegetables", price: "₹149" },
  { id: 8, name: "Chocolate Lava Cake", desc: "Warm chocolate cake with molten center", price: "₹199" },
  { id: 9, name: "Grilled Sandwich", desc: "Veggies and cheese grilled to perfection", price: "₹179" },
  { id: 10, name: "Fruit Smoothie", desc: "Fresh seasonal fruits blended into a smoothie", price: "₹129" },
  { id: 11, name: "Masala Dosa", desc: "Crispy dosa with spiced potato filling", price: "₹179" },
  { id: 12, name: "Veg Manchurian", desc: "Crispy vegetable balls in spicy sauce", price: "₹199" },
  { id: 13, name: "Cold Coffee", desc: "Refreshing iced coffee with cream", price: "₹149" },
];

function Navbar({ currentPage, setCurrentPage, darkMode, setDarkMode }) {
  const links = ["Home", "Menu", "About", "Reservations"];
  return (
    <nav className="fixed w-full z-50 flex justify-between items-center px-8 py-4 bg-gradient-to-r from-red-500 to-yellow-400 dark:from-gray-900 dark:to-gray-700 shadow-lg">
      <h1 className="text-3xl font-bold font-pacifico text-white drop-shadow-lg">Spice Haven</h1>
      <div className="flex items-center space-x-4">
        {links.map((link) => (
          <button
            key={link}
            onClick={() => setCurrentPage(link)}
            className={`font-semibold text-white hover:text-black dark:hover:text-yellow-400 transition-all duration-300 transform hover:scale-110 ${
              currentPage === link ? "underline decoration-2" : ""
            }`}
          >
            {link}
          </button>
        ))}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 bg-white dark:bg-yellow-400 text-red-600 dark:text-gray-900 px-3 py-1 rounded shadow hover:scale-110 transition"
        >
          {darkMode ? "Light 🌞" : "Dark 🌙"}
        </button>
      </div>
    </nav>
  );
}

function Home({ setCurrentPage }) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-[url('https://source.unsplash.com/1600x900/?restaurant,food')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/50 dark:bg-black/60"></div>
      <div className="relative z-10 px-6">
        <h2 className="text-6xl font-bold font-pacifico text-white mb-4 drop-shadow-lg">Welcome to Spice Haven</h2>
        <p className="text-lg text-gray-100 mb-6 drop-shadow-md">Delicious meals, warm ambience, and memorable moments with your loved ones.</p>
        <button
          onClick={() => setCurrentPage("Menu")}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
        >
          View Menu
        </button>
      </div>
    </section>
  );
}

function Menu({ items }) {
  return (
    <section className="min-h-screen py-20 px-8 bg-gradient-to-b from-yellow-100 to-yellow-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <h2 className="text-5xl font-bold text-center mb-12 text-red-600 dark:text-yellow-400">Our Menu</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <button
            key={item.id}
            className="relative flex flex-col items-start justify-between rounded-xl p-6 w-full text-left text-white dark:text-yellow-300 shadow-lg transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 overflow-hidden"
          >
            {/* Animated glowing gradient background */}
            <span className="absolute inset-0 bg-gradient-to-r from-red-400 via-yellow-400 to-red-500 animate-gradientBackground opacity-70 blur-xl rounded-xl"></span>

            {/* Content on top of gradient */}
            <div className="relative z-10">
              {item.special && <span className="font-semibold mb-2 inline-block">★ Special</span>}
              <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
              <p className="mb-3">{item.desc}</p>
              <p className="font-bold text-lg">{item.price}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 bg-gradient-to-r from-pink-200 to-red-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <div className="max-w-3xl text-center">
        <h2 className="text-5xl font-bold mb-6 text-red-600 dark:text-yellow-400">About Us</h2>
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg">
          Spice Haven is a modern restaurant offering a fusion of traditional and contemporary cuisines. Our mission is to serve high-quality food
          using fresh ingredients while creating a warm and welcoming dining experience. Every meal here is made with love and passion.
        </p>
      </div>
    </section>
  );
}

function Reservations() {
  const [form, setForm] = useState({ name: "", date: "", time: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation confirmed for ${form.name}`);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-8 bg-gradient-to-r from-green-200 to-green-300 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <div className="w-full max-w-md">
        <h2 className="text-5xl font-bold mb-6 text-center text-green-600 dark:text-yellow-400">Reservations</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded bg-white dark:bg-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-red-500 transition"
            required
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border p-3 rounded bg-white dark:bg-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-green-500 transition"
            required
          />
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="w-full border p-3 rounded bg-white dark:bg-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-yellow-500 transition"
            required
          />
          <button className="w-full bg-gradient-to-r from-red-500 to-yellow-400 dark:from-gray-700 dark:to-gray-900 text-white py-3 rounded shadow-lg hover:scale-105 transition-all duration-300">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""} font-roboto transition-colors duration-500`}>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} darkMode={darkMode} setDarkMode={setDarkMode} />
      {currentPage === "Home" && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === "Menu" && <Menu items={menuData} />}
      {currentPage === "About" && <About />}
      {currentPage === "Reservations" && <Reservations />}
    </div>
  );
}

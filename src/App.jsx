import { Suspense } from "react"
import Topbar from "./components/Topbar"
import FooterOne from "./components/FooterOne"
import { FaHotel, FaLeaf, FaConciergeBell, FaMapMarkedAlt, FaStar, FaMoneyBillWave } from "react-icons/fa";
import { Bed, Wifi, Coffee, Tv, Bath, Wind } from 'lucide-react';
import { Link } from "react-router-dom";

const Rooms = [
  { 
    imgSrc: "/images/deluxeroom.png", title: "Deluxe Room", link: "/contact", price: "₹1000",
    desc: [`Perfect for solo travelers or couples, featuring modern décor and essential comforts`], 
    amenities: [ { icon: <Bed/> }, { icon: <Wind/> }, { icon: <Wifi/> }, { icon: <Tv/> }, { icon: <Coffee/> }, { icon: <Bath/> } ]
  },
  { imgSrc: "/images/executiveroom.png", title: "Executive Room", link: "/contact", price: "₹1200",
    desc: [`Spacious rooms ideal for business travelers, offering a work-friendly environment with premium amenities`],
    amenities: [ { icon: <Bed/> }, { icon: <Wind/> }, { icon: <Wifi/> }, { icon: <Tv/> }, { icon: <Coffee/> }, { icon: <Bath/> } ]
  },
  { imgSrc: "/images/luxurysuite.png", title: "Luxury Suite", link: "/contact", price: "₹1500",
    desc: [`Experience elevated living with separate lounge space, enhanced comfort, and elegant interiors`],
    amenities: [ { icon: <Bed/> }, { icon: <Wind/> }, { icon: <Wifi/> }, { icon: <Tv/> }, { icon: <Coffee/> }, { icon: <Bath/> } ]
  }
]

const whyChooseUs = [
  { icon: <FaHotel className="text-cyan-500"/>, title: "Elegant Ambiance" },
  { icon: <FaLeaf className="text-green-600"/>, title: "Peaceful Environment" },
  { icon: <FaConciergeBell className="text-purple-500"/>, title: "Personalized Service" },
  { icon: <FaMapMarkedAlt className="text-blue-600"/>, title: "Prime Location" },
  { icon: <FaStar className="text-yellow-500"/>, title: "Top Guest Ratings" },
  { icon: <FaMoneyBillWave className="text-green-600"/>, title: "Value for Money" },
];


function App() {
  return (
    <> 
    <Topbar/>
    <section className="bg-gradient-to-br from-green-100 to-yellow-100 py-10 px-5 space-y-6">
      <h2 className="text-3xl text-center font-bold">Welcome to The Amani Hotel</h2>

      <p className="max-w-3xl mx-auto text-center text-lg">
        Experience refined comfort, thoughtful hospitality, and peaceful stays designed for 
        modern travelers.

        Whether you’re visiting for business, leisure, or a special 
        occasion, <span className="font-semibold">The Amani Hotel</span> offers a perfect balance of 
        elegance, relaxation, and convenience.
      </p>

      <div className="text-xl text-center font-semibold">✨ Stay. Relax. Reconnect</div>

      <div className="flex justify-center">
        <a href="#" className="text-lg text-white font-semibold bg-blue-600 p-3 rounded-md">
          Book Your Stay
        </a>
      </div>
    </section>

    {/* About US */}
    <section className="px-12 py-24 grid grid-cols-1 md:grid-cols-2 gap-5 bg-gradient-to-br from-green-100 to-yellow-100">
      <img src="/images/contact-01.png" alt="contact" className="h-full w-[auto] rounded-xl"/>

      <div className="bg-white py-10 px-4 rounded-xl flex flex-col justify-center space-y-4">

        <h2 className="text-3xl text-center font-semibold">About The Amani Hotel</h2>

        <p className="max-w-2xl mx-auto text-center text-lg">
          At <span className="font-semibold">The Amani Hotel</span>, we believe true luxury lies 
          in comfort, simplicity, and care.

          <br />

          Inspired by the meaning of <span className="italic">“Amani” — peace</span>, our hotel is 
          designed to offer guests a calm and welcoming environment where every detail is 
          thoughtfully curated. From elegant interiors to personalized service, we ensure every stay
          feels effortless and memorable.
        </p>

        <div className="text-xl text-center text-purple-600 font-semibold">
          Whether you are here for a short visit or an extended stay, 
          The Amani Hotel is your home away from home.
        </div>
      </div>
    </section>

    {/* Our Rooms & Suites */}
    <section className="bg-gradient-to-br from-green-100 to-yellow-100 py-10 px-5 space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold text-center">🛏️ Our Rooms & Suites</h2>

        <div className="text-center text-lg">
          Each room at <span className="font-semibold">The Amani Hotel</span> is designed to provide 
          comfort, style, and tranquility
        </div>
      </div>

      {/* Room */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 max-w-6xl mx-auto">
        {Rooms.map((room, index) => (

          <div 
            key={index} 
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 flex bg-white rounded-lg shadow-md overflow-hidden">

            <img src={room.imgSrc} alt={room.title} className="w-full lg:h-[50vh] h-auto sm:h-96 object-cover"/>
            <div className="p-4 space-y-2">
              <h3 className="text-2xl font-semibold text-orange-500">{room.title}</h3>
              <p className="text-gray-700">{room.desc}</p>

              <ul className="flex gap-2">
                {room.amenities.map((amenity, index) => (
                  <li key={index} className="text-orange-500">{amenity.icon}</li>
                ))}
              </ul>

              <div className="text-xl text-red-500 font-bold">{room.price}/per night</div>

              <Link to={room.link} className="">
                <div className="bg-zinc-700 lg:w-1/4 w-1/2 text-white text-center rounded-md p-2 my-4 font-semibold">Book Now</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Why Choose US */}
    <section className="bg-gradient-to-br from-green-100 to-yellow-100 py-10 px-5 space-y-6">
      <h2 className="text-3xl text-center font-bold">🌟 What Makes Us Different??</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
        {whyChooseUs.map((item, index) => (

          <div 
            key={index} 
            className="py-4 px-2 rounded-xl shadow-md border border-green-500 space-y-2">

            <div className="text-3xl flex justify-center">{item.icon}</div>
            <div className="text-lg text-center font-medium">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
    <FooterOne/>
    </>
  )
}

export default App

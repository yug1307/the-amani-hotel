import React from "react"
import Topbar from "./components/Topbar"
import FooterOne from "./components/FooterOne"
import {
  FaHotel,
  FaLeaf,
  FaConciergeBell,
  FaMapMarkedAlt,
  FaStar,
  FaMoneyBillWave
} from "react-icons/fa";


const Rooms = [
  { imgSrc: "/src/assets/deluxeroom.png", title: "Deluxe Room", desc: "Perfect for solo travelers or couples, featuring modern décor and essential comforts" },
  { imgSrc: "/src/assets/executiveroom.png", title: "Executive Room", desc: "Spacious rooms ideal for business travelers, offering a work-friendly environment with premium amenities" },
  { imgSrc: "/src/assets/luxurysuite.png", title: "Luxury Suite", desc: "Experience elevated living with separate lounge space, enhanced comfort, and elegant interiors" }
]

const Amenities = [
  { imgSrc: "/src/assets/amenity-01.png", title: "Plush bedding & premium linens" },
  { imgSrc: "/src/assets/amenity-02.png", title: "Air-Conditioning" },
  { imgSrc: "/src/assets/amenity-03.png", title: "High-speed Wi-Fi" },
  { imgSrc: "/src/assets/amenity-04.png", title: "Smart TV" },
  { imgSrc: "/src/assets/amenity-05.png", title: "Tea & coffee setup" },
  { imgSrc: "/src/assets/amenity-06.png", title: "Modern bathroom with luxury toiletries" }
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
    <img src="/src/assets/home-01.png" alt="home" className="h-full w-[auto]"/>
    <section className="bg-lime-200 py-10 px-5 space-y-6">
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
    <section className="grid grid-cols-1 md:grid-cols-2 bg-violet-200 my-12">
      <div className="py-10 px-4 flex flex-col justify-center space-y-4">

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

      <img src="/src/assets/contact-01.png" alt="contact" className="h-full w-[auto]"/>
    </section>

    {/* Our Rooms & Suites */}
    <section className="bg-pink-200 py-10 px-5 space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold text-center">🛏️ Our Rooms & Suites</h2>

        <div className="text-center text-lg">
          Each room at <span className="font-semibold">The Amani Hotel</span> is designed to provide 
          comfort, style, and tranquility
        </div>
      </div>

      {/* Room */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {Rooms.map((room, index) => (

          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md overflow-hidden">

            <img src={room.imgSrc} alt={room.title} className="w-full h-64 object-cover"/>
            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold">{room.title}</h3>
              <p className="text-gray-700">{room.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Amenities */}
      <div className="py-6 space-y-5">
        <h2 className="text-2xl text-center font-semibold">Room Amenities</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">

          {Amenities.map((amenity, index) => (
          
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden">
            
              <img src={amenity.imgSrc} alt={amenity.title} className="w-full lg:h-72 md:h-64 object-cover"/>
              <div className="text-center text-lg my-4">{amenity.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose US */}
    <section className="bg-orange-500 py-10 px-5 space-y-6">
      <h2 className="text-3xl text-center font-bold">🌟 What Makes Us Different??</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {whyChooseUs.map((item, index) => (

          <div 
            key={index} 
            className="bg-white py-4 rounded-xl shadow-md space-y-2">

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

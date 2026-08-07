import Topbar from "./components/Topbar"
import FooterOne from "./components/FooterOne"
import { FaHotel, FaLeaf, FaConciergeBell, FaMapMarkedAlt, FaStar, FaMoneyBillWave, FaArrowRight } from "react-icons/fa";
import { Bed, Wifi, Coffee, Tv, Bath, Wind } from 'lucide-react';
import { Link } from "react-router-dom";

const Rooms = [
  { 
    id: 1, imgSrc: "/images/banquet.png", title: "Banquet Hall", link: "/contact", price: "₹1000",
    desc: [`Elegant banquet hall perfect for weddings, receptions, and grand celebrations with premium décor and catering support`], 
    amenities: [ { icon: <Bed/> }, { icon: <Wind/> }, { icon: <Wifi/> }, { icon: <Tv/> }, { icon: <Coffee/> }, { icon: <Bath/> } ]
  },
  { 
    id: 2, imgSrc: "/images/conference.png", title: "Conference Hall", link: "/contact", price: "₹1200",
    desc: [`Fully-equipped conference hall ideal for corporate meetings, seminars, and presentations with modern AV facilities`],
    amenities: [ { icon: <Bed/> }, { icon: <Wind/> }, { icon: <Wifi/> }, { icon: <Tv/> }, { icon: <Coffee/> }, { icon: <Bath/> } ]
  },
  { 
    id: 3, imgSrc: "/images/twin.png", title: "Twin Rooms", link: "/contact", price: "₹1500",
    desc: [`Comfortable twin-bedded room perfect for friends or colleagues, offering a relaxing stay with modern amenities`],
    amenities: [ { icon: <Bed/> }, { icon: <Wind/> }, { icon: <Wifi/> }, { icon: <Tv/> }, { icon: <Coffee/> }, { icon: <Bath/> } ]
  },
  { 
    id: 4, imgSrc: "/images/double.png", title: "Double Rooms", link: "/contact", price: "₹1500",
    desc: [`Spacious double room designed for couples or families, featuring a plush king-size bed and elegant interiors`],
    amenities: [ { icon: <Bed/> }, { icon: <Wind/> }, { icon: <Wifi/> }, { icon: <Tv/> }, { icon: <Coffee/> }, { icon: <Bath/> } ]
  },
  { 
    id: 5, imgSrc: "/images/luxurysuite.png", title: "Suites", link: "/contact", price: "₹1500",
    desc: [`Experience luxury living in our premium suite with a separate lounge, enhanced comfort, and sophisticated décor`],
    amenities: [ { icon: <Bed/> }, { icon: <Wind/> }, { icon: <Wifi/> }, { icon: <Tv/> }, { icon: <Coffee/> }, { icon: <Bath/> } ]
  },
  { 
    id: 6, imgSrc: "/images/dormitory.png", title: "Dormitory", link: "/contact", price: "₹1500",
    desc: [`Budget-friendly dormitory accommodation with clean shared spaces, ideal for groups, backpackers, and solo travelers`],
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
      <section className="relative overflow-hidden" style={{background: "radial-gradient(ellipse at 50% 0%, #2d1b4e 0%, #1a0f2e 50%, #0f0a1e 100%)",}}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Syne:wght@600;700;800&family=Inter:wght@400;500;600&family=Roboto:wght@700;900&family=Open+Sans:wght@400;500;600&display=swap');
            .logo { font-family: 'Orbitron', sans-serif; }
            .oos { font-family: 'Syne', sans-serif; }
            .body { font-family: 'Inter', sans-serif; }
            .roboto { font-family: 'Roboto', sans-serif; }
            .open-sans { font-family: 'Open Sans', sans-serif; }
            .nl:hover::after { transform: scaleX(1); }
          
          // .ecommerce-hero {
          //   background-image: linear-gradient(120deg, rgba(10, 17, 40, 0.95) 0%, rgba(10, 17, 40, 0.65) 45%, rgba(10, 17, 40, 0.8) 100%), url('/images/home-01.png');
          //   background-size: cover;
          //   background-position: center;
          //   background-repeat: no-repeat;
          // }
        `}</style>

        {/* Hero Section */}
        <div className="ecommerce-hero relative overflow-hidden flex items-center min-h-[36.7vh] md:min-h-[75vh]">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/images/hero.mp4" type="video/mp4" />
          </video>
          
            <div className="absolute inset-0 bg-black/50" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 max-w-8xl mx-auto gap-5 p-6">
    
            <div className="max-w-2xl">
              <div className="mb-5">
                <h2 className="roboto text-pink-400 lg:text-4xl text-2xl leading-relaxed">
                  Welcome to the Amani Hotel
                </h2>
    
                <p className="open-sans text-white text-lg my-3">Experience refined comfort, thoughtful hospitality, and peaceful stays designed for
                  modern travelers. Whether you're visiting for business, leisure or a special occassion, The Amani Hotel offers
                  a perfect balance of elegance, relaxation, and convenience.
                </p>
    
                <span className="roboto lg:text-3xl text-xl font-bold text-pink-400">Stay. Relax. Reconnect</span>
              </div>
          
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="roboto flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-[0_0_24px_rgba(2,132,199,0.6)] text-sm uppercase tracking-wider">
                  Book Your Stay <FaArrowRight className="text-xs" />
                </Link> 
              </div>
            </div>
          </div>
        </div> 
      </section>

      {/* About US */}
      <section className="lg:px-10 py-10 px-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <img src="/images/home-2.png" alt="contact" className="h-full w-full rounded"/>

        <div className="rounded-xl flex flex-col justify-center space-y-4">

          <h2 className="roboto text-3xl text-center font-semibold">About The Amani Hotel</h2>

          <p className="open-sans max-w-2xl mx-auto text-center text-lg">
            At <span className="font-semibold">The Amani Hotel</span>, we believe true luxury lies 
            in comfort, simplicity, and care.

            <br />

            Inspired by the meaning of <span className="italic">“Amani” — peace</span>, our hotel is 
            designed to offer guests a calm and welcoming environment where every detail is 
            thoughtfully curated. From elegant interiors to personalized service, we ensure every stay
            feels effortless and memorable.
          </p>

          <div className="roboto text-xl text-center text-purple-600 font-semibold">
            Whether you are here for a short visit or an extended stay, 
            The Amani Hotel is your home away from home.
          </div>
        </div>
      </section>

      {/* Our Rooms & Suites */}
      <section className="py-10 px-5 space-y-6">
        <div className="space-y-2">
          <h2 className="roboto text-3xl font-semibold text-center">🛏️ Our Rooms & Suites</h2>

          <div className="open-sans text-center text-lg">
            Each room at <span className="font-semibold">The Amani Hotel</span> is designed to provide 
            comfort, style, and tranquility
          </div>
        </div>

        {/* Room */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {Rooms.map((room, index) => (

            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-1">

              <img src={room.imgSrc} alt={room.title} className="w-full lg:h-[35vh] h-auto sm:h-96 object-cover"/>
            
              <div className="p-4 space-y-2">
                <h3 className="roboto text-2xl font-semibold text-orange-500">{room.title}</h3>
                <p className="open-sans text-gray-700">{room.desc}</p>

                {/* <ul className="flex gap-2">
                  {room.amenities.map((amenity, index) => (
                    <li key={index} className="text-orange-500">{amenity.icon}</li>
                  ))}
                </ul> */}

                {/* <div className="text-xl text-red-500 font-bold">{room.price}/per night</div> */}

                <Link to={room.link} className="">
                  <div className="roboto bg-zinc-700 lg:w-1/4 w-1/2 text-white text-center p-2 my-4 font-semibold">Book Now</div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
 
      {/* Why Choose US */}
      <section className="bg-gray-300 py-10 px-5 space-y-6">
        <h2 className="roboto text-3xl text-center font-bold">🌟 What Makes Us Different??</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {whyChooseUs.map((item, index) => (

            <div 
              key={index} 
              className="py-4 px-2 space-y-2">

              <div className="text-3xl flex justify-center">{item.icon}</div>
              <div className="roboto text-lg text-center font-medium">{item.title}</div>
            </div>
          ))}
        </div>
      </section>
    <FooterOne/>
  </>
  )
}

export default App

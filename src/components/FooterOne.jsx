import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";

const contact = [
  { icon: <MapPin/>, address: "Kanhartoli, Gondia - 441 614" },
  { icon: <Phone/>, phone: 7888020432, phone2: 7974472452, phone3: 9322276364 },
  { icon: <Mail/>, email: "amanihotel2204@gmail.com" }
]

const FooterOne = () =>{
  return(
    <> 
    <footer className="bg-gray-900 text-gray-300 py-10">
      <section className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 space-y-6">
        {/* Logo */}
        <svg width="0 160%" height="100%" viewBox="0 0 750 180" xmlns="http://www.w3.org/2000/svg">
          <style>{`.hotel-name { font-family: "Didot", "Bodoni MT", "Playfair Display", serif; font-size: 60px; font-weight: 500; letter-spacing: 4px; fill: #b89b5e } .divider { stroke: #9e7b30ff; stroke-width: 5 }`}</style>
          <line x1="170" y1="50" x2="530" y2="50" className="divider"/>
          <text x="350" y="108" textAnchor="middle" className="hotel-name">THE AMANI HOTEL</text>
          <line x1="170" y1="125" x2="530" y2="125" className="divider"/>
        </svg>

        {/* Contact */}
        <div className="space-y-4">
          <h2 className="text-xl text-white font-semibold">Contact Us</h2>
          {contact.map((details, idx) => (
          
          <div 
            key={idx} 
            className="flex items-start space-x-2">
              
            <div className="flex justify-center text-5xl text-orange-500">{details.icon}</div>

            <div className="text-white text-center text-md text-gray-700">
              {details.address && <p>{details.address}</p>}

              {details.phone && (
                <p>
                  <a href={`tel:+91 ${details.phone}`}>{details.phone}, </a>
                  <a href={`tel:+91 ${details.phone2}`}>{details.phone2}, </a>
                  <a href={`tel:+91 ${details.phone3}`}>{details.phone3}</a>
                </p>
              )} 
              
              {details.email && (
                <a href={`mailto:${details.email}`} className="hover:text-blue-600 cursor-pointer">
                  {details.email}
                </a>
              )}
            </div>
          </div>
          ))}
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>

          <div className="flex gap-5 text-2xl">
            <a href="#" className="hover:text-blue-500"><FaLinkedin/></a>
            <a href="#" className="hover:text-green-400"><FaWhatsapp/></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram/></a>
          </div>
        </div>
      </section>

      {/* Bottom */}
      <div className="my-10 border-t border-gray-700"></div>

      <div className="text-center text-md">© {new Date().getFullYear()} The Amani Hotel. All Rights Reserved</div>
    </footer>
    </>
  )
}

export default FooterOne
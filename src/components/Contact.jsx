import React from 'react'
import Topbar from './Topbar'
import FooterOne from './FooterOne'
import { MapPin, Phone, Mail } from "lucide-react"; 

const contact = [
  { icon: <MapPin/>, address: "Kanhartoli, Gondia - 441 614" },
  { icon: <Phone/>, phone: 7888020432, phone2: 7974472452, phone3: 9322276364 },
  { icon: <Mail/>, email: "amanihotel2204@gmail.com" }
]
 
const Contact = () => {
  return (
    <>
    <Topbar/>
    <section className="bg-gray-200 grid grid-cols-1 md:grid-cols-2">
      <img src="/src/assets/contact-01.png" alt="" className="h-full w-[auto]"/>

      <div className="flex flex-col justify-center space-y-6 py-10 px-5">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>

        {contact.map((details, idx) => (
          
          <div 
            key={idx} 
            className="flex justify-center items-center space-x-2">

            <div className="flex justify-center text-5xl text-orange-500">{details.icon}</div>

            <div className="text-center text-lg text-gray-700">
              {details.address && <p className="hover:text-blue-600">{details.address}</p>}

              {details.phone && (
                <p className="hover:text-blue-600">
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
    </section>

        <div className="my-10"></div>
    
    {/* Book Your Stay */}
    <section className="bg-sky-200 to-blue-400 grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center py-10 px-5 text-center space-y-3">
        <h2 className="text-3xl font-semibold">📅 Book Your Stay</h2>

        <p className="text-lg">
          Experience peaceful luxury at <span className="font-semibold">The Amani Hotel</span>.
          Reserve your room today and let us take care of the rest.
        </p>

        <div className="flex justify-center">
          <a href="#" className="text-lg text-white font-semibold bg-blue-600 p-3 rounded-md">
            Book Your Stay
          </a>
        </div>
      </div>
        
      <img src="/src/assets/contact-02.png" alt="" className="h-full w-[auto]"/>
    </section>
    <FooterOne/>
    </>
  )
}

export default Contact
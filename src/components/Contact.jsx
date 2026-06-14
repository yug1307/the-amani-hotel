import React from 'react'
import Topbar from './Topbar'
import FooterOne from './FooterOne'
import { MapPin, Phone, Mail } from "lucide-react"; 
 
const contact = [
  { icon: <MapPin/>, address: "Kanhartoli, Gondia - 441 614" },
  { icon: <Phone/>, phone: 8446603142 },
  { icon: <Mail/>, email: "amanihotel2204@gmail.com" }
]
 
const Contact = () => {
  return (
    <>
    <Topbar/>
    <section className="bg-stone-50 grid grid-cols-1 md:grid-cols-2" style={{fontFamily:"'DM Sans',sans-serif"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:wght@900&display=swap');.ff{font-family:'Fraunces',serif}`}</style>
      
      <img src="/images/contact-01.png" alt="" className="h-full w-full object-cover p-5 rounded-3xl"/>

      <div className="flex flex-col justify-center space-y-6 py-10 px-5">
        <div className="space-y-2">
          <div className="tracking-[.3em] uppercase text-amber-600 font-bold text-center">Reach Us</div>
          <h2 className="ff text-3xl text-stone-800 text-center">Contact <span className="text-amber-600">Us</span></h2>
          <div className="w-8 h-0.5 bg-amber-600 rounded-full mx-auto"/>
        </div>

        {contact.map((details, idx) => (
          
          <div 
            key={idx} 
            className="flex justify-center items-center space-x-2">

            <div className="flex justify-center text-5xl text-orange-500">{details.icon}</div>

            <div className="text-center text-lg text-gray-700">
              {details.address && <p className="hover:text-blue-600">{details.address}</p>}
              <a href={`tel:+91 ${details.phone}`} className="hover:text-blue-600">{details.phone}</a>
              
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
    
    {/* Book Your Stay */}
    <section className="bg-sky-50 grid grid-cols-1 md:grid-cols-2">
      <img src="/images/contact-02.png" alt="" className="h-full w-full object-cover p-5 rounded-3xl"/>
      
      <div className="flex flex-col justify-center py-10 px-5 text-center space-y-3">
        <h2 className="tracking-[.3em] uppercase text-amber-600 text-3xl font-semibold">📅 Book Your Stay</h2>

        <p className="text-stone-500 leading-relaxed max-w-4xl text-lg">
          Experience peaceful luxury at <span className="text-stone-700 font-semibold">The Amani Hotel</span>.
          Reserve your room today and let us take care of the rest.
        </p>

        <div className="flex justify-center">
          <a href="#" className="text-lg text-white font-semibold bg-amber-600 p-3 rounded-md">
            Book Your Stay
          </a>
        </div>
      </div>  
    </section>
    <FooterOne/>
    </>
  )
}

export default Contact

import React from 'react'
import Topbar from './Topbar'
import FooterOne from './FooterOne'

const imgGallery = [ 
  { imgSrc: "/images/gallery-01.png", alt: "Professional hotel staff welcoming guests", caption: "Welcoming you with warmth" },
  { imgSrc: "/images/gallery-02.png", alt: "Families checking in", caption: "Perfect for all ages" },
  { imgSrc: "/images/gallery-03.png", alt: "Excellent Customer Service", caption: "Everything on your fingertip" },
  { imgSrc: "/images/gallery-04.png", alt: "Luxury Bedroom", caption: "Make you Weekends Special" },
  { imgSrc: "/images/gallery-05.png", alt: "Outstanding Poolside View", caption: "Perfect for Parties" },
  { imgSrc: "/images/gallery-06.png", alt: "Big Swimming Pool", caption: "Perfect for families & friends" },
  { imgSrc: "/images/gallery-07.png", alt: "Stunning Views", caption: "Wake up to Beauty" },
  { imgSrc: "/images/gallery-08.png", alt: "Luxury Bar", caption: "Get the best brands" },
  { imgSrc: "/images/gallery-09.png", alt: "Business Ready", caption: "Work in comfort" },
  { imgSrc: "/images/gallery-10.png", alt: "Delicious Food", caption: "Everything Taste's Best" }
] 

const Gallery = () => {
  return (
    <>
    <Topbar/>
      <section className="bg-gradient-to-br from-green-100 to-yellow-100 py-10 px-5 min-h-screen space-y-6">
        <div className="text-center space-y-3 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold">📸 Gallery</h2>

          <p className="text-lg">
            Take a glimpse into the elegance, comfort, and warmth that 
            define <span className="font-semibold">The Amani Hotel</span> — where every corner reflects 
            tranquility and style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto gap-4">
          {imgGallery.map((image, index) => (
          
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src={image.imgSrc}
                alt={image.alt}
                className="w-full h-88 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              <div className="flex items-end justify-center absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bottom-0 py-5 text-center text-white">
                  <h3 className="text-2xl font-bold">{image.alt}</h3>
                  <p className="text-gray-200">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    <FooterOne/> 
    </>
  )
}

export default Gallery

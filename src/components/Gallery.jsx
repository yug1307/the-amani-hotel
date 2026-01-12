import React from 'react'
import Topbar from './Topbar'
import FooterOne from './FooterOne'

const imgGallery = [ 
  { imgSrc: "/src/assets/gallery-01.png", alt: "Amani Hotel Gallery Image 1" },
  { imgSrc: "/src/assets/gallery-02.png", alt: "Amani Hotel Gallery Image 2" },
  { imgSrc: "/src/assets/gallery-03.png", alt: "Amani Hotel Gallery Image 3" },
  { imgSrc: "/src/assets/gallery-04.png", alt: "Amani Hotel Gallery Image 4" },
  { imgSrc: "/src/assets/gallery-05.png", alt: "Amani Hotel Gallery Image 5" },
  { imgSrc: "/src/assets/gallery-06.png", alt: "Amani Hotel Gallery Image 6" },
  { imgSrc: "/src/assets/gallery-07.png", alt: "Amani Hotel Gallery Image 7" },
  { imgSrc: "/src/assets/gallery-08.png", alt: "Amani Hotel Gallery Image 8" },
  { imgSrc: "/src/assets/gallery-09.png", alt: "Amani Hotel Gallery Image 9" },
  { imgSrc: "/src/assets/gallery-10.png", alt: "Amani Hotel Gallery Image 10" }
]

const Gallery = () => {
  return (
    <>
    <Topbar/>
      <section className="bg-gray-100 py-10 px-5 min-h-screen space-y-6">
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
          
            <div key={index} className="bg-white">
              <img src={image.imgSrc} alt={image.alt} className="w-full h-80 object-cover"/>
            </div>
          ))}
        </div>
      </section>
    <FooterOne/> 
    </>
  )
}

export default Gallery
import React from 'react'
import Gallery from '../components/Gallery/Gallery'
import img1 from '../assets/gi1.jpg' //Hard  code tamplate. I think need add uploding system (DB and moderation) from visitors later 
import img2 from '../assets/gi2.jpg'
import img3 from '../assets/gi3.jpg'
import img4 from '../assets/gi4.jpg'
import img5 from '../assets/gi5.jpg'
import img6 from '../assets/gi6.jpg'

const GalleryController = () => {
  let photos = [
    {id: 1, img: img1},
    {id: 2, img: img2},
    {id: 3, img: img3},
    {id: 4, img: img4},
    {id: 5, img: img5},
    {id: 6, img: img6},
  ]

  return (
    <div>
      <Gallery photos={photos}/>
    </div>
  )
}

export default GalleryController

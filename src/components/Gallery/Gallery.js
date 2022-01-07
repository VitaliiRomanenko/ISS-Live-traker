import React from 'react'
import GalleryPhoto from './GalleryPhoto'
import styles from './Gallery.module.css'
const Gallery = ({photos}) =>{

    return (
        <div className={`col s1 m3 l4 ${styles.wrapper}`}>
            {photos.map(item => (<GalleryPhoto img={item.img} key={item.id}/>))}
        </div>
    )
}

export default Gallery

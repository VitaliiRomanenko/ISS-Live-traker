import React from 'react';

const GalleryPhoto = ({img}) => {
  return (
    <div>
      <img src={img} alt='' width={300} height={300} style={{border: "1px solid #fff"}}/>
    </div>
  )
};

export default GalleryPhoto;
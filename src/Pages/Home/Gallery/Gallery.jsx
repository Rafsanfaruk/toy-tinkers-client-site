// import React from 'react';
import galleryPic1 from "../../../assets/Gallary/1.jpg";
import galleryPic2 from "../../../assets/Gallary/2.jpg";
import galleryPic3 from "../../../assets/Gallary/3.jpg";
import galleryPic4 from "../../../assets/Gallary/4.jpg";

const Gallery = () => {
  return (
    <div className="py-8 bg-gray-100 mt-10">
      <div className="max-w-6xl mx-auto">
       <div className=" text-center">
       <h2 className="text-3xl font-bold mb-4">Our Gallery</h2>
        <p className="text-gray-600 mb-8">
          Check out our collection of stunning pictures below. These images
          showcase the beauty and diversity of our products.
        </p>
       </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-lg overflow-hidden">
            <img
              src={galleryPic1}
              alt="Image 1"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={galleryPic2}
              alt="Image 2"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={galleryPic3}
              alt="Image 3"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={galleryPic4}
              alt="Image 4"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

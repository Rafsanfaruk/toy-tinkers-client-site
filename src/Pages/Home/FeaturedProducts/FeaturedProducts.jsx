// import React from 'react';
import img1 from '../../../assets/toy-images/3.jpg';
import img2 from '../../../assets/toy-images/5.jpg';
import img3 from '../../../assets/toy-images/7.jpg';
import img4 from '../../../assets/toy-images/9.jpg';

const FeaturedProducts = () => {
    return (
        <div  className="py-12 bg-gray-200">
            <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src={img4}
              alt="Featured Product 1"
              className="w-full h-40 object-cover mb-4"
            />
            <h4 className="text-lg font-bold mb-2">Product 1</h4>
            <p className="text-gray-600">Description of Product 1.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">Buy Now</button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src={img1}
              alt="Featured Product 2"
              className="w-full h-40 object-cover mb-4"
            />
            <h4 className="text-lg font-bold mb-2">Product 2</h4>
            <p className="text-gray-600">Description of Product 2.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">Buy Now</button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src={img2}
              alt="Featured Product 2"
              className="w-full h-40 object-cover mb-4"
            />
            <h4 className="text-lg font-bold mb-2">Product 2</h4>
            <p className="text-gray-600">Description of Product 2.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">Buy Now</button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src={img3}
              alt="Featured Product 2"
              className="w-full h-40 object-cover mb-4"
            />
            <h4 className="text-lg font-bold mb-2">Product 2</h4>
            <p className="text-gray-600">Description of Product 2.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">Buy Now</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default FeaturedProducts;
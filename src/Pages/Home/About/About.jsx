// import React from 'react';
import aboutPic from '../../../assets/About/Abiut1.jpg'

const About = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8">
          <img
            src={aboutPic}
            alt="About Image"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:ml-8">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 mb-4">
          At Toy Tinkerers, we are passionate about providing children with educational and entertaining toys that spark their imagination and encourage learning. 
          Our mission is to inspire young minds through play, offering a wide range of high-quality toys designed to promote creativity, problem-solving skills, and cognitive development. 
          With a focus on safety and durability, we strive to bring joy to children and peace of mind to parents.
          </p>
         
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

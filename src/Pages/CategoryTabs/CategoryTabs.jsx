// import React from 'react';
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CategoryTabs = () => {


  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);

  const {picture_url, seller_name, sub_category, price, available_quantity } =
  category;

  return (
    <div className='ml-5'>
      <h1 className="text-3xl font-bold mb-4 text-center mt-10">Shop by Category</h1>
      <Tabs>
        <TabList className="flex justify-center space-x-4 ">
          <Tab className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            Math Toys
          </Tab>
          <Tab className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            Language Toys
          </Tab>
          <Tab className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            Engineering Toys
          </Tab>
        </TabList>

        <TabPanel>
  <h2 className="text-lg font-bold">Math Toys</h2>
  <div className='flex justify-center gap-10'>
    {category.slice(0, 4).map((item) => (
      <div className="bg-white rounded-lg shadow-md p-6" key={item._id}>
        <img
          src={item.picture_url}
          alt="Featured Product"
          className="w-full h-40 object-cover mb-4"
        />
        <h4 className="text-lg font-bold mb-2">{item.name}</h4>
        <p className="text-gray-600">Price: ${item.price}</p>
        <p className="text-gray-600">Rating: {item.rating}</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">View Details</button>
      </div>
    ))}
  </div>
</TabPanel>

<TabPanel>
  <h2 className="text-lg font-bold">Engineering Toys</h2>
  <div className='flex justify-center gap-10'>
    {category.slice(14, 18).map((item) => (
      <div className="bg-white rounded-lg shadow-md p-6" key={item._id}>
        <img
          src={item.picture_url}
          alt="Featured Product"
          className="w-full h-40 object-cover mb-4"
        />
        <h4 className="text-lg font-bold mb-2">{item.name}</h4>
        <p className="text-gray-600">Price: ${item.price}</p>
        <p className="text-gray-600">Rating: {item.rating}</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">View Details</button>
      </div>
    ))}
  </div>
</TabPanel>

<TabPanel>
  <h2 className="text-lg font-bold">Math Toys</h2>
  <div className='flex justify-center gap-10'>
    {category.slice(10,14).map((item) => (
      <div className="bg-white rounded-lg shadow-md p-6" key={item._id}>
        <img
          src={item.picture_url}
          alt="Featured Product"
          className="w-full h-40 object-cover mb-4"
        />
        <h4 className="text-lg font-bold mb-2">{item.name}</h4>
        <p className="text-gray-600">Price: ${item.price}</p>
        <p className="text-gray-600">Rating: {item.rating}</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">View Details</button>
      </div>
    ))}
  </div>
</TabPanel>

      </Tabs>
    </div>
  );
};

export default CategoryTabs;

import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToysRow from './MyToysRow';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const url = `http://localhost:5000/addToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);

  return (
    <div>
      <h3 className="text-3xl text-center font-bold my-5">My Toys Here</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <MyToysRow key={toy._id} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;

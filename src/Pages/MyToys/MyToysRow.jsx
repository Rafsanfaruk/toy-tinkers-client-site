import React from "react";

const MyToysRow = ({ toy }) => {
  const { _id, name, email, price, quantity, rating, picture_url, sub_category } =
    toy;

  const imgElement = new Image();
  imgElement.src = picture_url;

  const handleDelete =id =>{
    const prceed =confirm('Are you sure you want to delete')
    if(prceed){
        fetch(``)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
  }

  return (
    <tr>
      <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-square text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-32 rounded">
              {imgElement.complete ? (
                <img src={picture_url} alt="Avatar Tailwind CSS Component" />
              ) : null}
            </div>
          </div>
        </div>
      </td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{sub_category}</td>
      <th>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
          View Details
        </button>
      </th>
    </tr>
  );
};

export default MyToysRow;

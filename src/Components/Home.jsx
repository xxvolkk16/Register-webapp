import React from 'react';

const Home = ({ userData, onLogout }) => {
  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Welcome, {userData.username}!</h2>
      <p>Your personal information:</p>
      <ul className="list-disc pl-6 mt-2">
        <li>Name: {userData.name}</li>
        <li>Surname: {userData.surname}</li>
        <li>Age: {userData.age}</li>
        <li>Email: {userData.email}</li>
        <li>Phone: {userData.phone}</li>
        <li>Address: {userData.address}</li>
      </ul>
      <button
        className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;

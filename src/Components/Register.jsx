import React, { useState } from 'react';

const Register = ({ onRegister, onSignInRedirect }) => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    name: '',
    surname: '',
    age: '',
    email: '',
    phone: '',
    address: '',
  });

  // State เพิ่มเติมเพื่อเก็บข้อมูลเกี่ยวกับสถานะการแสดงขอบสี
  const [inputStatus, setInputStatus] = useState({
    username: true,
    password: true,
    name: true,
    surname: true,
    age: true,
    email: true,
    phone: true,
    address: true,
  });

  const handleChange = (e, field) => {
    setUserData({ ...userData, [field]: e.target.value });
    setInputStatus({ ...inputStatus, [field]: true });
  };

  const isUsernameValid = () => /^[a-zA-Z0-9]{8,16}$/.test(userData.username);
  const isPasswordValid = () => /^[a-zA-Z0-9]{8,16}$/.test(userData.password);
  const isNameValid = () => /^[a-zA-Z\s]+$/.test(userData.name);
  const isSurnameValid = () => /^[a-zA-Z\s]+$/.test(userData.surname);
  const isEmailValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email);
  const isPhoneValid = () => /^\d+$/.test(userData.phone);
  const isAgeValid = () => /^[0-9]+$/.test(userData.age);


  const getExampleText = (field) => {
    switch (field) {
      case 'username':
        return 'Example: user1234';
      case 'password':
        return 'Example: pass1234';
      case 'name':
        return 'Example: Kittitat';
      case 'surname':
        return 'Example: Poonnayom';
      case 'age':
        return 'Example: 21';
      case 'email':
        return 'Example: example@example.com';
      case 'phone':
        return 'Example: 0990073444';
      case 'address':
        return 'Example: Sathorn Square, Bangkok 10500';
      default:
        return '';
    }
  };

  const handleRegister = () => {
    const errors = {};

    if (!isUsernameValid() || userData.username === '') {
      errors.username = false;
    }

    if (!isPasswordValid() || userData.password === '') {
      errors.password = false;
    }

    if (!isNameValid() || userData.name === '') {
      errors.name = false;
    }

    if (!isSurnameValid() || userData.surname === '') {
      errors.surname = false;
    }

    if (!isAgeValid() || userData.age === '') {
      errors.age = false;
    }

    if (!isEmailValid() || userData.email === '') {
      errors.email = false;
    }

    if (!isPhoneValid() || userData.phone === '') {
      errors.phone = false;
    }

    if (!userData.address) {
      errors.address = false;
    }

    setInputStatus({ ...inputStatus, ...errors });

    if (Object.values(errors).some((error) => !error)) {
      alert('Please check the input fields for errors.');
    } else {
      onRegister(userData);
      onSignInRedirect();
      alert('Account registration successful!');
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <label className="block text-sm mb-2">Username: </label>
      <input
        type="text"
        className={`w-full border p-2 rounded ${inputStatus.username ? '' : 'border-red-500'}`}
        value={userData.username}
        onChange={(e) => handleChange(e, 'username')}
        placeholder={getExampleText('username')}
      />
      {!inputStatus.username && (
        <p className="text-red-500 text-sm mb-2">Username must be 8-16 characters without special characters.</p>
      )}
      <label className="block text-sm mb-2">Password: </label>
      <input
        type="password"
        className={`w-full border p-2 rounded ${inputStatus.password ? '' : 'border-red-500'}`}
        value={userData.password}
        onChange={(e) => handleChange(e, 'password')}
        placeholder={getExampleText('password')}
      />
      {!inputStatus.password && (
        <p className="text-red-500 text-sm mb-2">Password must be 8-16 characters without special characters.</p>
      )}
      <label className="block text-sm mb-2">Name: </label>
      <input
        type="text"
        className={`w-full border p-2 rounded ${inputStatus.name ? '' : 'border-red-500'}`}
        value={userData.name}
        onChange={(e) => handleChange(e, 'name')}
        placeholder={getExampleText('name')}
      />
      {!inputStatus.name && (
        <p className="text-red-500 text-sm mb-2">Name is required.</p>
      )}
      <label className="block text-sm mb-2">Surname: </label>
      <input
        type="text"
        className={`w-full border p-2 rounded ${inputStatus.surname ? '' : 'border-red-500'}`}
        value={userData.surname}
        onChange={(e) => handleChange(e, 'surname')}
        placeholder={getExampleText('surname')}
      />
      {!inputStatus.surname && (
        <p className="text-red-500 text-sm mb-2">Surname is required.</p>
      )}
      <label className="block text-sm mb-2">Age: </label>
      <input
        type="text"
        className={`w-full border p-2 rounded ${inputStatus.age ? '' : 'border-red-500'}`}
        value={userData.age}
        onChange={(e) => handleChange(e, 'age')}
        placeholder={getExampleText('age')}
      />
      {!inputStatus.age && (
        <p className="text-red-500 text-sm mb-2">Please enter a valid age.</p>
      )}
      <label className="block text-sm mb-2">Email: </label>
      <input
        type="email"
        className={`w-full border p-2 rounded ${inputStatus.email ? '' : 'border-red-500'}`}
        value={userData.email}
        onChange={(e) => handleChange(e, 'email')}
        placeholder={getExampleText('email')}
      />
      {!inputStatus.email && (
        <p className="text-red-500 text-sm mb-2">Please enter a valid email address.</p>
      )}
      <label className="block text-sm mb-2">Phone: </label>
      <input
        type="tel"
        className={`w-full border p-2 rounded ${inputStatus.phone ? '' : 'border-red-500'}`}
        value={userData.phone}
        onChange={(e) => handleChange(e, 'phone')}
        placeholder={getExampleText('phone')}
      />
      {!inputStatus.phone && (
        <p className="text-red-500 text-sm mb-2">Please enter a valid phone number.</p>
      )}
      <label className="block text-sm mb-2">Address: </label>
      <input
        type="text"
        className={`w-full border p-2 rounded ${inputStatus.address ? '' : 'border-red-500'}`}
        value={userData.address}
        onChange={(e) => handleChange(e, 'address')}
        placeholder={getExampleText('address')}
      />
      {!inputStatus.address && (
        <p className="text-red-500 text-sm mb-2">Address is required.</p>
      )}
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleRegister}
      >
        Sign Up
      </button>
      <p className="mt-2 text-sm">
        Already have an account?{' '}
        <span className="text-blue-500 cursor-pointer" onClick={onSignInRedirect}>
          Sign In here.
        </span>
      </p>
    </div>
  );
};

export default Register;

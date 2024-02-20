import React, { useState, useEffect } from 'react';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import { saveRegisteredUsers, getRegisteredUsers } from './utils/localStorage';
import './App.css'

const App = () => {
  const [userData, setUserData] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState(getRegisteredUsers());
  const [currentPage, setCurrentPage] = useState('signin');

  useEffect(() => {
    // เช็คว่ามีข้อมูลผู้ใช้ใน Local Storage หรือไม่
    const storedUserData = JSON.parse(localStorage.getItem('currentUser'));
    console.log('Stored User Data:', storedUserData); // เพิ่ม log นี้

    if (storedUserData) {
      setUserData(storedUserData);
      setCurrentPage('home');
    }
  }, []); // ให้ useEffect ทำงานเฉพาะครั้งแรกเท่านั้น

  const handleRegister = (data) => {
    // บันทึกข้อมูลบัญชีที่ลงทะเบียน
    const updatedRegisteredUsers = [...registeredUsers, data];
    setRegisteredUsers(updatedRegisteredUsers);
    // บันทึกข้อมูลที่ได้จากการ register
    setUserData(data);
    setCurrentPage('home');
    // บันทึกข้อมูลใน Local Storage
    saveRegisteredUsers(updatedRegisteredUsers);
    // ไม่ต้อง setItem ทันที จะเซ็ตใน handleLogin เมื่อ login เท่านั้น
  };

  const handleLogin = (loginData) => {
    // ตรวจสอบว่ามีข้อมูลบัญชีที่ตรงกับ loginData หรือไม่
    const foundUser = registeredUsers.find(user => user.username === loginData.username && user.password === loginData.password);

    if (foundUser) {
      // บันทึกข้อมูลที่ได้จากการ login
      setUserData(foundUser);
      setCurrentPage('home');
      // บันทึกข้อมูลผู้ใช้ใน Local Storage
      localStorage.setItem('currentUser', JSON.stringify(foundUser));

      // แจ้งเตือนข้อความเมื่อ login สำเร็จ
      alert('Login successful! Welcome to the home page.');
    } else {
      alert('Invalid username or password. Please try again or sign up.');
    }
  };

  const handleSignInRedirect = () => {
    setCurrentPage('signin');
  };

  const handleSignUpRedirect = () => {
    setCurrentPage('signup');
  };

  const handleLogout = () => {
    setUserData(null);
    setCurrentPage('signin');
    // ลบข้อมูลผู้ใช้ใน Local Storage
    localStorage.removeItem('currentUser');

    // แจ้งเตือนข้อความเมื่อ logout สำเร็จ
    alert('Logout successful. Goodbye!');
  };

  return (
    <div>
      {currentPage === 'signin' && (
        <Login onLogin={handleLogin} onRegisterRedirect={handleSignUpRedirect} />
      )}
      {currentPage === 'signup' && (
        <Register onRegister={handleRegister} onSignInRedirect={handleSignInRedirect} />
      )}
      {currentPage === 'home' && (
        <Home userData={userData} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;

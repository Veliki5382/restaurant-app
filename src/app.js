import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/header';
import Home from './pages/home';
import Menu from "./pages/menu";
import Reservations from "./pages/reservations";
import Orders from "./pages/orders";
import Profile from "./pages/profile";
import Login from "./pages/login";
import Register from "./pages/register";

import { initialOrders , users as initialUsers} from "./data/test_data";
import './app.css';

function App() {
  const [reservations, setReservations] = useState([]);
  const [orders, setOrders] = useState(initialOrders);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, ] = useState(initialUsers);

  useEffect(() => {
    console.log("Dodat je novi user:", users);
  }, [users]);

  const handleLogin = (username, password) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };
  const handleLogout = () => {
    setCurrentUser(null);
  };

  const handleRegister = (name, username, password, email) => {
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
      return false; // Username already exists
    }

    const newUser =  {
      username: username,
      password: password,
      role: 'user',
      name: name,
      email: email
    };
    users.push(newUser);
    setCurrentUser(newUser);
    return true;
  };

  const addNewReservation = (newReservation) => {
    const reservationWithUser = { ...newReservation, bookedBy: currentUser.name };
    setReservations([...reservations, reservationWithUser]);
  };

    const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <Router>
      <div className="App">
        <Header currentUser={currentUser} onLogout={handleLogout}/>
        <main>
          <Routes>
            <Route
              path="/"
              element={<Home/>}
            />
            <Route
              path="/menu"
              element={<Menu/>}
            />
            <Route
              path="/reservations"
              element={<Reservations currentUser={currentUser} addReservation={addNewReservation}/>}
            />
            <Route
              path="/orders"
              element={<Orders orders={orders} currentUser={currentUser} onUpdateStatus={updateOrderStatus}/>}
            />
            <Route
              path="/profile"
              element={<Profile reservations={reservations} currentUser={currentUser}/>}
            />
            <Route
              path="/login"
              element={<Login onLogin={handleLogin} currentUser={currentUser} onLogout={handleLogout}/>}
            />
            <Route
              path="/register"
              element={<Register onRegister={handleRegister} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}


export default App;
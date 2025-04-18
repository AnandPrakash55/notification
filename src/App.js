import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';
import './App.css';

function App() {
  const busNumbers = ['5861', '2315', '6010', '5515', '6518', '6057', '8367', '6517'];
  const months = [
    { name: 'January', days: 31 },
    { name: 'February', days: 28 },
    { name: 'March', days: 31 },
    { name: 'April', days: 30 },
    { name: 'May', days: 31 },
    { name: 'June', days: 30 },
    { name: 'July', days: 31 },
    { name: 'August', days: 31 },
    { name: 'September', days: 30 },
    { name: 'October', days: 31 },
    { name: 'November', days: 30 },
    { name: 'December', days: 31 }
  ];
  const [bookings, setBookings] = useState([]);
  const [notification, setNotification] = useState('');
  const [selectedMonth, setSelectedMonth] = useState(0); // January is default

  const addBooking = (e) => {
    e.preventDefault();
    const month = parseInt(e.target.month.value);
    const date = parseInt(e.target.date.value);
    const customer = e.target.customer.value;
    const busNumber = e.target.bus_number.value;
    const phone = e.target.phone.value;

    // Check for duplicate booking
    const duplicate = bookings.some(
      b => b.month === month && b.date === date && b.busNumber === busNumber
    );

    if (duplicate) {
      setNotification(`Warning: Bus number ${busNumber} is already booked on ${date} ${months[month].name}!`);
    } else {
      setBookings([...bookings, { month, date, customer, busNumber, phone }]);
      e.target.reset();
      setNotification('Booking added successfully!');
      setTimeout(() => setNotification(''), 3000);
    }
  };

  const deleteBooking = (index) => {
    const newBookings = bookings.filter((_, i) => i !== index);
    setBookings(newBookings);
    setNotification('Booking deleted successfully!');
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <BookingForm
              busNumbers={busNumbers}
              months={months}
              bookings={bookings}
              addBooking={addBooking}
              notification={notification}
              selectedMonth={selectedMonth}
              setSelectedMonth={setSelectedMonth}
            />
          } 
        />
        <Route 
          path="/bookings" 
          element={
            <BookingList
              bookings={bookings}
              deleteBooking={deleteBooking}
              notification={notification}
              months={months}
            />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;

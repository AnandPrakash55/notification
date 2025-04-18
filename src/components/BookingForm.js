import React from 'react';
import { Link } from 'react-router-dom';

function BookingForm({ 
  busNumbers, 
  months,
  bookings, 
  addBooking, 
  notification,
  selectedMonth,
  setSelectedMonth
}) {
  return (
    <div className="container">
      <div className="header">
        <h1>Bus Booking System</h1>
        <Link to="/bookings" className="view-bookings-btn">View Current Bookings</Link>
      </div>
      
      {/* Booking Form */}
      <div className="form-container">
        <h2>Add New Booking</h2>
        {notification && <div className="notification">{notification}</div>}
        <form onSubmit={addBooking} className="booking-form">
          <div className="form-group">
            <label>Month:</label>
            <select name="month" required>
              {months.map((month, index) => (
                <option key={month.name} value={index}>{month.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Date:</label>
            <select name="date" required>
              {Array.from({ length: months[selectedMonth].days }, (_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Bus Number:</label>
            <select name="bus_number" required>
              {busNumbers.map(number => (
                <option key={number} value={number}>{number}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Customer Name:</label>
            <input type="text" name="customer" required placeholder="Enter customer name" />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input type="tel" name="phone" required placeholder="Enter phone number" />
          </div>
          <button type="submit" className="submit-btn">Add Booking</button>
        </form>
      </div>

      {/* Calendar View */}
      <div className="calendar-section">
        <h2>Calendar View</h2>
        <div className="month-selector">
          {months.map((month, index) => (
            <button
              key={month.name}
              className={`month-btn ${selectedMonth === index ? 'active' : ''}`}
              onClick={() => setSelectedMonth(index)}
            >
              {month.name}
            </button>
          ))}
        </div>
        <div className="calendar-container">
          <div className="table-container">
            <table className="calendar-table">
              <thead>
                <tr>
                  <th></th>
                  {busNumbers.map(number => (
                    <th key={number}>{number}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: months[selectedMonth].days }, (_, i) => (
                  <tr key={i + 1}>
                    <td className="date-cell">{i + 1}</td>
                    {busNumbers.map(busNumber => {
                      const isBooked = bookings.some(
                        b => b.month === selectedMonth && 
                            b.date === (i + 1) && 
                            b.busNumber === busNumber
                      );
                      const booking = bookings.find(
                        b => b.month === selectedMonth && 
                            b.date === (i + 1) && 
                            b.busNumber === busNumber
                      );
                      return (
                        <td 
                          key={`${i + 1}-${busNumber}`}
                          className={`calendar-cell ${isBooked ? 'booked' : ''}`}
                          title={isBooked ? `Booked by ${booking.customer}` : 'Available'}
                        >
                          {isBooked ? '✓' : ''}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;

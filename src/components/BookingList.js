import React from 'react';
import { Link } from 'react-router-dom';

function BookingList({ bookings, deleteBooking, notification, months }) {
  return (
    <div className="container">
      <div className="header">
        <h1>Current Bookings</h1>
        <Link to="/" className="back-btn">Back to Booking Form</Link>
      </div>

      {notification && <div className="notification">{notification}</div>}
      
      <div className="bookings-container">
        <table className="bookings-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Bus Number</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan="5" className="no-bookings">No bookings available</td>
              </tr>
            ) : (
              bookings.sort((a, b) => {
                if (a.month !== b.month) return a.month - b.month;
                return a.date - b.date;
              }).map((booking, index) => (
                <tr key={index}>
                  <td>{`${booking.date} ${months[booking.month].name}`}</td>
                  <td>{booking.busNumber}</td>
                  <td>{booking.customer}</td>
                  <td>{booking.phone}</td>
                  <td>
                    <button 
                      onClick={() => deleteBooking(index)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookingList;

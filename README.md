# Bus Booking System

A modern React-based bus booking system that allows users to manage bus bookings across multiple months with an intuitive calendar interface.

## Features

### Booking Management
- Add new bookings with customer details
- View bookings in an interactive calendar
- Delete existing bookings
- Prevent duplicate bookings for the same bus on the same date

### Calendar View
- 12-month calendar view with month selection
- Visual representation of booked and available slots
- Hover tooltips showing booking details
- Color-coded status indicators

### User Interface
- Clean and modern design
- Responsive layout for all screen sizes
- Easy navigation between booking form and list
- Real-time notifications for actions

## Tech Stack
- React 18
- React Router for navigation
- CSS3 for styling
- Local storage for data persistence

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd bus-booking-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit [http://localhost:3000](http://localhost:3000)

## Project Structure
```
bus-booking-system/
├── src/
│   ├── components/
│   │   ├── BookingForm.js    # Booking form and calendar view
│   │   └── BookingList.js    # List of all bookings
│   ├── App.js                # Main application component
│   ├── App.css               # Application styles
│   ├── index.js              # Entry point
│   └── index.css             # Global styles
├── public/
│   └── index.html            # HTML template
└── package.json              # Dependencies and scripts
```

## Usage

### Adding a Booking
1. Select a month from the dropdown
2. Choose a date
3. Select a bus number
4. Enter customer name and phone number
5. Click "Add Booking"

### Viewing Bookings
- Use the calendar view to see bookings by month
- Click "View Current Bookings" to see all bookings in a list
- Hover over booked slots to see customer details

### Deleting Bookings
1. Navigate to "Current Bookings"
2. Find the booking you want to delete
3. Click the "Delete" button

## Development

### Available Scripts
- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Notes
- Data is currently stored in memory and will reset when the app restarts
- For production use, consider adding:
  - Backend API integration
  - Database storage
  - User authentication
  - Export functionality

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
This project is licensed under the MIT License.

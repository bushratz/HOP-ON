# HOP ON (For DeltaHacks 2025)
# Overview 
This repository contains the source code for "Hop On" a ride-sharing web application specifically designed for university students. The project allows users to connect as riders or drivers for a safe and efficient ride-sharing experience. Built using React.js for the frontend and Python (Flask) for the backend, the application provides essential functionalities like user authentication, ride booking, and driver management. This project serves as a learning exercise in developing a full-stack application integrating modern web technologies.

# Features

* User Features

**User Authentication:** Secure login and registration for students and drivers, verified with a university email domain.

**Ride Booking:** Riders can book rides by specifying their destination.

**Real-time Updates:** Notifications for ride acceptance and driver availability.

**Ride Management:** View history and status of rides.

* Driver Features

**Driver Availability:** Drivers can manage their availability for ride requests.

**Ride Requests:** Accept or reject ride requests from users.

# Technologies Used

* Frontend:

**React.js:** Dynamic user interface for seamless navigation.

* Backend:

**Python (Flask):** Lightweight and robust backend framework.

Additional Libraries:

Auth0: For authentication of students to use under their university domain


Installation

Steps to Run the Application

Clone the repository:

git clone <repository-url>
cd hop-on-app

Set up the Backend:

Navigate to the backend directory:

cd backend

Install required Python packages:

pip install -r requirements.txt

Run the Flask server:

python app.py

Set up the Frontend:

Navigate to the frontend directory:

cd frontend

Install dependencies:

npm install

Start the React development server:

npm start

Access the Application:
Open http://localhost:3000 in your browser.

Project Structure

hop-on-app/
├── backend/            # Backend code
│   ├── app.py          # Flask app logic
│   ├── models.py       # Data models
│   └── requirements.txt
├── frontend/           # Frontend code
│   ├── public/         # Public assets
│   ├── src/            # React components
│   ├── package.json    # Node.js configuration
│   └── index.html      # Entry HTML file
└── README.md           # Project documentation

Usage

User Workflow:

Register: Sign up with a university email.

Login: Access the application securely.

Book a Ride: Enter a destination to find a ride.

Track Rides: Monitor the status of active rides.

Driver Workflow:

Register: Sign up as a driver.

Set Availability: Mark yourself available for ride requests.

Accept Rides: Review and accept ride requests.

Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request with improvements or bug fixes.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments

Inspired by the concept of ride-sharing applications like Uber.

Thanks to the open-source community for libraries and tools used in this project.


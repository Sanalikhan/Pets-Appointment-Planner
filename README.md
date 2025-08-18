# ​ Pets Appointment Planner

**Pets Appointment Planner** is a React-based web app that lets you conveniently manage pet appointments with:

- **Create**, **view**, **edit**, and **delete** appointments.
- **Filter & search** by pet name, owner, date, time, symptoms.
- Stylish, responsive UI with optional background cover design and smooth transitions.

---

##  Features

- **Intuitive filtering**: Real-time search by key details (Pet Name, Owner, Date, Time, Symptoms).
- **Responsive design**: Clean layout optimized for various screen sizes.
- **Redux-powered**: State management for filters and appointment data.
- **Elegant styling**: Rounded buttons, placeholder transitions, refined background (optional enhancements).

---

##  Tech Stack

- React
- Redux (or React useState/useReducer)
- CSS / Tailwind CSS (or your chosen style framework)
- Optional: Local storage for data persistence

---

##  Project Structure

```text
src/
├── components/
│   ├── Filter.jsx
│   ├── AppointmentList.jsx
│   └── AppointmentForm.jsx
├── redux/ (or state/)
│   ├── store.js
│   ├── actions.js
│   └── reducers.js
└── App.jsx

Setup & Usage

Clone the repo

git clone https://github.com/Sanalikhan/Pets-Appointment-Planner.git
cd Pets-Appointment-Planner


Install dependencies

npm install


Start development server

npm run dev


Open your browser at http://localhost:3000
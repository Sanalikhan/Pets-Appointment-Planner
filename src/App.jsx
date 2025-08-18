import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import SignUpPage from "./pages/signUp";
import AppointmentForm from "./features/appointments/AppointmentForm";
import LogInPage from "./pages/logIn";
import ProfilePage from './pages/user';
import ProfileBookingPage from "./components/profileBookingPage";
import GuestBookingPage from "./components/guestBookingPage";

function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/signup" element={<SignUpPage />}/>
                <Route path='/appointmentform/profile' element={<ProfileBookingPage/>}/>
                <Route path='/appointmentform/guest' element={<GuestBookingPage/>}/>
                <Route path="/login" element={<LogInPage/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
                
            </Routes>
        </Router>
    );
}
export default App;
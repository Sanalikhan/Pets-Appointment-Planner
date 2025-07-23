import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import SignUpPage from "./pages/signUp";
import AppointmentForm from "./features/appointments/AppointmentForm";
import LogInPage from "./pages/logIn";

function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/signup" element={<SignUpPage />}/>
                <Route path='/appointmentform' element={<AppointmentForm/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </Router>
    );
}
export default App;
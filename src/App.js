import "./App.css";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar"
import Home from "./Pages/Home/home";
import Contact from "./Pages/Contact/contact";
const App = () => {
    return(
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
            </Router>
        </>
    )
}
export default App ;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Despre from './pages/Despre'
import Contact from './pages/Contact'
import Rezerva from './pages/Rezerva'
import Layout from './pages/Layout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="despre" element={<Despre />} />
                    <Route path="rezerva" element={<Rezerva />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

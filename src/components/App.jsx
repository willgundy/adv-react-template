import { Navigate, Route, Router, Routes } from "react-router-dom";
import About from "./About/About";
import Home from "./Home/Home";
import List from "./List/List";
import Layout from "./Page/Layout";

export default function App() {
    <Router>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path='list' element={<List />}/>
                <Route path='about' element={<About />}/>
                <Route path='*' element={<Navigate to='/' replace />}/>
            </Route>
        </Routes>
    </Router>
}
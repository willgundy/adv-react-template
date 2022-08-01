import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import About from './Page/Body/About/About.jsx';
import Form from './Page/Body/Form/Form.jsx';
import Home from './Page/Body/Home/Home.jsx';
import List from './Page/Body/List/List.jsx';
import Layout from './Page/Layout';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="list" element={<List />} />
                    <Route path="about" element={<About />} />
                    <Route path="form" element={<Form />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </Router>
    );
}

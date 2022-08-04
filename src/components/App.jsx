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
import Teams from './Page/Body/NBA/Teams/Teams.jsx';
import NBA from './Page/Body/NBA/NBA.jsx';
import NBAContextProvider from './State/Context/NBAContext.jsx';
import { Toaster } from 'react-hot-toast';

export default function App() {
    return (
        <Router>
            <Toaster />
            <NBAContextProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="list" element={<List />} />
                        <Route path="about" element={<About />} />
                        <Route path="form" element={<Form />} />
                        <Route path="nba" element={<NBA />}>
                            <Route index element={<Teams />} />
                        </Route>
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Route>
                </Routes>
            </NBAContextProvider>
        </Router>
    );
}

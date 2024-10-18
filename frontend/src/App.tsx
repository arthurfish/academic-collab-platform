import React from 'react';
import {Route, Routes, Navigate } from 'react-router-dom';
import PersonalPage from './pages/PersonalPage';
import CollaborationAnalysisPage from './pages/CollaborationAnalysisPage';
import ProfessorSearchPage from './pages/ProfessorSearchPage';
import DiscoverPage from './pages/DiscoverPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage.tsx";

const App: React.FC = () => {
    const [authenticated, setAuthenticated] = React.useState(false);

    return (

        <div className="font-sans text-gray-900">
            {authenticated && <Navbar />}
            <Routes>
                <Route path="/login" element={<LoginPage setAuthenticated={setAuthenticated} />} />
                <Route path="/personal" element={<PersonalPage />} />
                <Route path="/collaboration" element={<CollaborationAnalysisPage />} />
                <Route path="/professor-search" element={<ProfessorSearchPage />} />
                <Route path="/discover" element={<DiscoverPage />} />
                <Route path="/homepage" element={<Homepage />} />
                <Route path="*" element={<Navigate to="/homepage" />} />
            </Routes>
        </div>
    );
};

export default App;
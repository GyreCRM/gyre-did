import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Header
import Header from '@components/Header';

// DID
import DIDApplicationPage from '@pages/DIDApplicationPage';
import DIDSearchPage from '@pages/DIDSearchPage';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Navigate replace to="/did/search" />}
                />
                <Route path="/did/search" element={<DIDApplicationPage />} />
                <Route path="/did/view" element={<DIDSearchPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

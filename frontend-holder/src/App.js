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
                    element={<Navigate replace to="/did/create" />}
                />
                <Route path="/did/create" element={<DIDApplicationPage />} />
                <Route path="/did/search" element={<DIDSearchPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

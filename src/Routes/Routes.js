import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route, Navigate } from 'react-router-dom';
import { About, Profile } from '../components';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" element={<Navigate replace to="/profile" />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<About />} />
            </Switch>
        </Router>
    )
}


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components here
import Home from './pages/Home';
import AfricaCup from './pages/AfricaCup';
import CAFChampions from './pages/CAFChampions';
import RestOfAfrica from './pages/RestOfAfrica';
import Diaspora from './pages/Diaspora';
import YesterYear from './pages/YesterYear';
import FixturesResults from './pages/FixturesResults';
import SouthAfrica from './pages/SouthAfrica';
import NigeriaLeague from './pages/NigeriaLeague';
import FederationCup from './pages/FederationCup';
import SuperCup from './pages/SuperCup';
import ZambiaLeague from './pages/ZambiaLeague';
import ABSACup from './pages/ABSACup';
import ZimbabwePremier from './pages/ZimbabwePremier';
import IndependenceCup from './pages/IndependenceCup';
import ChibukuSuperCup from './pages/ChibukuSuperCup';

// Add 404 Not Found page if desired
import NotFound from './pages/NotFound';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/africa-cup" element={<AfricaCup />} />
      <Route path="/caf-champions" element={<CAFChampions />} />
      <Route path="/rest-of-africa" element={<RestOfAfrica />} />
      <Route path="/diaspora" element={<Diaspora />} />
      <Route path="/yesteryear" element={<YesterYear />} />
      <Route path="/fixtures-results" element={<FixturesResults />} />
      <Route path="/south-africa" element={<SouthAfrica />} />
      <Route path="/nigeria-league" element={<NigeriaLeague />} />
      <Route path="/federation-cup" element={<FederationCup />} />
      <Route path="/super-cup" element={<SuperCup />} />
      <Route path="/zambia-league" element={<ZambiaLeague />} />
      <Route path="/absa-cup" element={<ABSACup />} />
      <Route path="/zimbabwe-premier" element={<ZimbabwePremier />} />
      <Route path="/independence-cup" element={<IndependenceCup />} />
      <Route path="/chibuku-super-cup" element={<ChibukuSuperCup />} />
      {/* Catch all unmatched routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default AppRoutes;
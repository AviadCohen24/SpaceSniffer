import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/Header/Header.component';
import Content from './Components/Content/Content.component';

import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Content />} />
        </Route>
      </Routes>
    </Router>
  );
}

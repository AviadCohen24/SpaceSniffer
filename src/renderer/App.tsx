import './App.css';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import {
  UserActionHandlers,
  useUserActionHandlers,
} from './hooks/userActionHandlers.hook';
import Navbar from './Components/Navbar/Navbar.component';
import Dashboard from './Components/Dashboard/Dashboard.component';
import Home from './Pages/Home/Home.page';
import About from './Pages/About/About.page';
import AllProviders from './hooks/contextProviders.hook';

function AppContents() {
  const userActionHandlers: UserActionHandlers = useUserActionHandlers();
  // TODO: Implement 'useServerEventHandlers()' for registering onServerEvent
  return (
    <MemoryRouter>
      <Dashboard
        menu={<Navbar />}
        mainContent={
          <Routes>
            <Route
              path="/"
              element={<Home userActionHandlers={userActionHandlers} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        }
      />
    </MemoryRouter>
  );
}

export default function App() {
  return (
    <AllProviders>
      <AppContents />
    </AllProviders>
  );
}

import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import { useUserActionHandlers } from './hooks/userActionHandlers.hook';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppContents />
    </ThemeProvider>
  );
}

function AppContents() {
  const userActionHandlers: UserActionHandlers = useUserActionHandlers();
  // TODO: Implement 'useServerEventHandlers()' for registering onServerEvent
  return (

  )
}

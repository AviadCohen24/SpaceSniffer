import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ReactFlowProvider } from 'reactflow';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

type AllProvidersProps = {
  children: React.ReactNode;
};

export default function AllProviders({ children }: AllProvidersProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <ReactFlowProvider>
        <CssBaseline />
        {children}
      </ReactFlowProvider>
    </ThemeProvider>
  );
}

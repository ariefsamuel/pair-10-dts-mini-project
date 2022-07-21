import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import Movies from './containers/Movies';
import theme from './themes/theme';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Navbar />
        <Outlet />
        <Movies />
      </div>
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider } from '@mui/material';

import { MuiTheme } from './theme';
import './styles/global.scss';
import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider theme={MuiTheme}>
      <div className="page-layout">
        <Header />
        <div className="page-content">body</div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

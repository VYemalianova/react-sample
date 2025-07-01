import { ThemeProvider } from '@mui/material';

import './styles/global.scss';
import './App.scss';

import { MuiTheme } from './theme';

function App() {
  return (
    <ThemeProvider theme={MuiTheme}>
      <div className="page-layout">
        <div className="header mt-s mb-s pr-xl bg-black">header</div>
        <div className="body">body</div>
        <div className="footer">footer</div>
      </div>
    </ThemeProvider>
  );
}

export default App;

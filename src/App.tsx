import React from 'react';
import { ThemeProvider } from 'styled-components';

import styles from './styles';
import themes from './styles/themes';

import Navbar from 'components/Navbar';
import Body from 'components/Body';

const App = () => {
  return (
    <ThemeProvider theme={themes.darkTheme}>
        <div style={styles.title}>
            <Navbar />
            <Body />
        </div>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import themes from './styles/themes';
import StyledGlobal from './styles';

import Navbar from 'components/Navbar';
import Body from 'components/Body';
import AdminPage from 'components/AdminPage';

const backend = "https://frozen-reef-80565.herokuapp.com"

const App = () => {
  return (
    <ThemeProvider theme={themes.darkTheme}>
        <StyledGlobal>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Body back={backend} />
                    </Route>
                    <Route path="/admin">
                        <AdminPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </StyledGlobal>
    </ThemeProvider>
  );
}

export {backend};
export default App;

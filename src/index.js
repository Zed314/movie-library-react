import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import GlobalStyle from './utils/globals';
import App from './containers/App';

import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <Helmet>
          <title>Movie Library</title>
          <meta
            name="description"
            content="A Movie Library where you can check all your favorite movies, as well as the cast of it, and so much more! Made with ❤️ by Fidalgo"
          />
          <link rel="canonical" href="https://movies.fidalgo.dev" />
        </Helmet>
        <App />
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root')
);

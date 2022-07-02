import React from 'react';

import { IRoute, Router } from '@kibalabs/core-react';
import { Head, KibaApp } from '@kibalabs/ui-react';
import { ToastContainer } from 'react-toastify';

import { GlobalsProvider, IGlobals } from './globalsContext';
import { HomePage } from './pages/HomePage';
import { buildAppTheme } from './theme';
import 'react-toastify/dist/ReactToastify.css';

const theme = buildAppTheme();
// const tracker = new EveryviewTracker('da82fef72d614762b253d0bfe0503226', true);

const globals: IGlobals = {
};

export const App = (): React.ReactElement => {
  const routes: IRoute<IGlobals>[] = [
    { path: '/', page: HomePage },
  ];

  return (
    <KibaApp theme={theme} background={{ layers: [{ imageUrl: '/assets/background.jpeg' }, { linearGradient: 'rgb(0, 0, 0, 0.1), rgb(25, 24, 37, 0.9)' }] }}>
      <Head headId='app'>
        <title>WTCHS Translator</title>
      </Head>
      <GlobalsProvider globals={globals}>
        <Router routes={routes} />
      </GlobalsProvider>
      <ToastContainer />
    </KibaApp>
  );
};

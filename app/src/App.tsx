import React from 'react';

import { IRoute, Router, useInitialization } from '@kibalabs/core-react';
import { Head, KibaApp } from '@kibalabs/ui-react';
import { ToastContainer } from 'react-toastify';
import { EveryviewTracker } from '@kibalabs/everyview-tracker'

import { GlobalsProvider, IGlobals } from './globalsContext';
import { HomePage } from './pages/HomePage';
import { buildAppTheme } from './theme';
import 'react-toastify/dist/ReactToastify.css';

const theme = buildAppTheme();
const tracker = new EveryviewTracker('38111f0919f94a899731157c21fefb52', true);

export const globals: IGlobals = {
};

export const routes: IRoute<IGlobals>[] = [
  { path: '/', page: HomePage },
];

export const App = (): React.ReactElement => {
  useInitialization((): void => {
    tracker.initialize();
    tracker.trackApplicationOpen();
  });

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

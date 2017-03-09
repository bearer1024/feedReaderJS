import { app, store } from './app';

const isDev = process.env.NODE_ENV !== 'production';

// This exported function will be called by `bundleRenderer`.

export default context => {
  context.initialState = store.state;
  return app;
}
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from '../redux'
import { routes } from '../routes'
import '../App.css';

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {routes.map((route: { path: string, component: any }) => <Route key={route.path} path={route.path} element={<Suspense fallback={<div>Loading...</div>}><route.component /></Suspense>} />)}
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

export default App;

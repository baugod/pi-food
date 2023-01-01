import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider/>
      <App/>
    </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// {
//  "name": "client",
//  "version": "0.1.0"
//  "private": true,
//  "dependencies": {
//  "@testing-library/jest-dom": "^5.11.10",
//  "@testing-library/react": "^11.2.6",
//  "@testing-library/user-event": "^13.1.1",
//     "react": "^17.0.2",
//     "react-dom": "^17.0.2",
//     "react-router-dom": "^5.2.0",
//     "redux": "^4.0.5",
//     "react-redux": "^7.2.3",
//     "react-scripts": "4.0.3",
//     "redux-thunk": "^2.3.0",
//     "web-vitals": "^2.1.4"
//   },
//   "scripts": {
//     "start": "react-scripts --openssl-legacy-provider start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"
//   },
//   "eslintConfig": {
//     "extends": [
//       "react-app",
//       "react-app/jest"
//     ]
//   },
//   "browserslist": {
//     "production": [
//       ">0.2%",
//       "not dead",
//       "not op_mini all"
//     ],
//     "development": [
//       "last 1 chrome version",
//       "last 1 firefox version",
//       "last 1 safari version"
//     ]
//   }
// }

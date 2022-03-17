import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { darkContext } from './Components/DarkTheme';
import Counter from './Components/Counter';
import ColorGenerator from './Components/ColorGenerator';
import ImageAPI from './Components/ImageAPI';

const styleDark = {
  dark: "#303030"
}

ReactDOM.render(
  <React.StrictMode>
  {/* <darkContext.Provider value={styleDark.dark}>
    <App />
  </darkContext.Provider> */}
    {/* <ColorGenerator /> */}

    {/* <Counter /> */}
    {/* <ColorGenerator /> */}
    {/* <ImageAPI /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

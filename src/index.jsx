import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Optional: for styles

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <iframe
        // src="https://my.spline.design/chips-5758aaef3595884e8ffe0cfad2a227bf/"
          // src="https://my.spline.design/lines-330a8402d25a17f0b554b994374a2739/"
          src="https://my.spline.design/flow-86ec24f66654166139d92324058cb9da/"
        frameBorder="0"
        className="background-iframe"
        title="Background"
      ></iframe> */}
  </React.StrictMode>,
  document.getElementById('root')
);

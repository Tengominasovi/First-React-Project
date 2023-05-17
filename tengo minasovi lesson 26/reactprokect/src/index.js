import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './components/header';
import SecondHeader from './components/secondHeader';
import reportWebVitals from './reportWebVitals';
import InnerImages from './components/InnerImages';
import SinglePrice from './components/SinglePrice';
import UniqueDemos from './components/UniqueDemos';
import SupportTeam from './components/SupportTeam';
import CodingStyle from './components/CodingStyle';
import ProcessArea from './components/ProcessArea';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <SecondHeader />
    <InnerImages />
    <SinglePrice />
    <UniqueDemos />
    <SupportTeam />
    <CodingStyle />
    <ProcessArea />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

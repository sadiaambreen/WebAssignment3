import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import About from './components/About'
import Gallery from './components/Gallery'
import Ourcollections from './components/Ourcollections';
import Form from './components/Form';
import Dmsg from './components/Dmsg';
import CountactUs from './components/ContactUs';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
    <Navbar/>
    {/* <Slider/> */}

    <About/>
    <Gallery/>
    <Ourcollections/>
    <CountactUs/>
    {/* <Form/> */}
    <Dmsg/>
    </>
)
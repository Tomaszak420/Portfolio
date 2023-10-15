import Navebar from './Navbar.js';
import Main from './Main.js';
import Project1 from './Projekt1/Project1';
import Project2 from './Projekt2/Project2';
import Projekty from './Projekty.js';
import Kontakt from './Kontakt.js';
import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom"
import './rama.scss'
function App() {

  return (
    <div id='cal'>
      <Navebar />

      <div className='container-fluid call' >

        <div className='row justify-content-center'>
          <div className='col-xl-auto col-12'>

            <div id='main' className='container'>

              <Routes>
                <Route path="/Portfolio/" element={<Main />} />
                <Route path="/Kontakt" element={<Kontakt />} />
                <Route path="/Projekty" >
                  <Route index element={<Projekty />} />
                  <Route path="Project1" element={<Project1 />} />
                  <Route path="Project2" element={<Project2 />} />
                </Route>
              </Routes>

            </div>

          </div>
        </div>

      </div>
      <section className='d-none d-sm-block'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </section>
    </div>


  );
}

export default App;

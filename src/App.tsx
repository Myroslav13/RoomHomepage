import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer'
import HeadingDiscover from './Components/HeadingDiscover'
import HeadingAvailable from './Components/HeadingAvailable'
import HeadingManufactured from './Components/HeadingManufactured'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="navbar navbar-expand-lg position-absolute navbar-dark p-lg-5 w-50 justify-content-center justify-content-lg-start">
        <div className="container-fluid gap-md-5 p-0">
          <button className="navbar-toggler border border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <img src="./images/logo.svg"></img>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Home</a>
              </li>
              <li className="nav-item ps-3">
                <a className="nav-link text-white" href="#">Shop</a>
              </li>
              <li className="nav-item ps-3">
                <a className="nav-link text-white" href="#">About</a>
              </li>
              <li className="nav-item ps-3">
                <a className="nav-link text-white" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        {count === 0 ? <HeadingDiscover setCount={setCount} count={count}></HeadingDiscover>: <></>}
        {count === 1 ? <HeadingAvailable setCount={setCount} count={count}></HeadingAvailable>: <></>}
        {count === 2 ? <HeadingManufactured setCount={setCount} count={count}></HeadingManufactured>: <></>}
        <Footer></Footer>
      </div>
    </>
  )
}

export default App

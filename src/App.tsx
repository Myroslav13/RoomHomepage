import { useEffect, useState } from 'react'
import './App.css'
import Footer from './Components/Footer'
import HeadingDiscover from './Components/HeadingDiscover'
import HeadingAvailable from './Components/HeadingAvailable'
import HeadingManufactured from './Components/HeadingManufactured'

function App() {
  const [count, setCount] = useState(0)
  const [menuClick, setMenuClick] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {(menuClick === true && windowWidth < 992) ? 
      <>
        <div className="modal show d-flex flex-column text-lowercase fw-bold justify-content-center" style={{ height: "100px",  backgroundColor: "white"}} tabIndex={-1} >
          <div className="d-flex justify-content-between px-5">
            <button type="button" className="btn-close me-3" data-bs-dismiss="modal" aria-label="Close" onClick={() => setMenuClick(false)}></button>

            <div className="d-flex">
              <a className="nav-link ps-3" href="#">Home</a>
              <a className="nav-link ps-3" href="#">Shop</a>
              <a className="nav-link ps-3" href="#">About</a>
              <a className="nav-link ps-3" href="#">Contact</a>
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade show"></div>
      </>
      :
      <></>
      }

      <nav className="navbar navbar-expand-lg position-absolute navbar-dark p-lg-5 w-50 justify-content-center justify-content-lg-start">
        <div className="container-fluid gap-md-5 p-0">
          {(menuClick === false && window.innerWidth < 992) ?
            <>
              <button className="navbar-toggler border border-0" type="button" onClick={() => setMenuClick(true)} aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
              </button>
              <img src="./images/logo.svg"></img>
            </>
            :
            <></>
          }

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

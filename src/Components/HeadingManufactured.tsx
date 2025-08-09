import type { Props } from "./Props"

function HeadingManufactured({count, setCount}: Props) {

  return (
    <div className="div-heading">
        <div className="row align-items-start text-start">
            <div className="col-12 col-lg-8 position-relative">
                <img src="./images/desktop-image-hero-3.jpg" className="img-fluid left-side-img" title="Manufactured with the best materials" alt="desktop image hero 3"></img>
            
                 <div className="d-block d-lg-none position-absolute bottom-0 end-0 mid-devices-buttons">
                    <button className="bg-black rounded-0" onClick={() => {{count === 2? count=0:count++} setCount(count)}}><img src="./images/icon-angle-left.svg"></img></button>
                    <button className="bg-black rounded-0" onClick={() => {{count === 0? count=2:count--} setCount(count)}}><img src="./images/icon-angle-right.svg"></img></button>
                </div>
            </div>
            
            <div className="col-12 col-lg-4 py-4 p-lg-0 position-relative my-auto">
                <h1 className="fs-2 fw-bold">Manufactured with the best materials</h1>

                <p>Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                experience in this industry, we understand what customers want for their home and office.</p>

                <button className="button-shop text-uppercase">Shop now<img src="./images/icon-arrow.svg"></img></button>

                <div className="d-none d-lg-block position-absolute bottom-0 start-0">
                    <button className="bg-black rounded-0" onClick={() => {{count === 2? count=0:count++} setCount(count)}}><img src="./images/icon-angle-left.svg"></img></button>
                    <button className="bg-black rounded-0" onClick={() => {{count === 0? count=2:count--} setCount(count)}}><img src="./images/icon-angle-right.svg"></img></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeadingManufactured

import type { Props } from "./Props"

function HeadingDiscover({count, setCount}: Props) {

  return (
    <div className="div-heading">
        <div className="row align-items-start text-start">
            <div className="col-12 col-lg-8 position-relative">
                <img src="./images/desktop-image-hero-1.jpg" className="img-fluid left-side-img" title="Discover innovative ways to decorate" alt="desktop image hero 1"></img>
                
                <div className="position-absolute bottom-0 end-0 mid-devices-buttons">
                    <button className="bg-black rounded-0" onClick={() => {{count === 2? count=0:count++} setCount(count)}}><img src="./images/icon-angle-left.svg"></img></button>
                    <button className="bg-black rounded-0" onClick={() => {{count === 0? count=2:count--} setCount(count)}}><img src="./images/icon-angle-right.svg"></img></button>
                </div>
            </div>
            
            <div className="col-12 col-lg-4 my-auto p-lg-0 div-text mt-4 mt-lg-auto">
                <h1 className="fs-2 fw-bold">Discover innovative ways to decorate</h1>

                <p>We provide unmatched quality, comfort, and style for property owners across the country. 
                Our experts combine form and function in bringing your vision to life. Create a room in your 
                own style with our collection and make your property a reflection of you and what you love.</p>

                <button className="button-shop text-uppercase">Shop now<img src="./images/icon-arrow.svg"></img></button>
            </div>
        </div>
    </div>
  )
}

export default HeadingDiscover

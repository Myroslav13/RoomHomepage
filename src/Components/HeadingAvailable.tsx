import type { Props } from "./Props"

function HeadingAvailable({count, setCount}: Props) {

  return (
    <div className="div-heading">
        <div className="row align-items-start text-start">
            <div className="col-12 col-lg-8 position-relative">
                <img src="./images/desktop-image-hero-2.jpg" className="img-fluid left-side-img" title="We are available all across the globe" alt="desktop image hero 2"></img>

                 <div className="d-block d-lg-none position-absolute bottom-0 end-0 mid-devices-buttons">
                    <button className="bg-black rounded-0" onClick={() => {{count === 2? count=0:count++} setCount(count)}}><img src="./images/icon-angle-left.svg"></img></button>
                    <button className="bg-black rounded-0" onClick={() => {{count === 0? count=2:count--} setCount(count)}}><img src="./images/icon-angle-right.svg"></img></button>
                </div>
            </div>
            
            <div className="col-12 col-lg-4 my-auto py-4 p-lg-0 position-relative">
                <h1 className="fs-2 fw-bold">We are available all across the globe</h1>

                <p>With stores all over the world, it's easy for you to find furniture for your home or place of business. 
                Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
                store locator. Any questions? Don't hesitate to contact us today.</p>

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

export default HeadingAvailable

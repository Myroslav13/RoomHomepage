function Footer() {

  return (
    <div className="d-lg-flex div-footer gap-5 align-items-center">
        <img src="images/image-about-dark.jpg" className="img-fluid" alt="image about dark"></img>
        
        <div className="text-start align-self-center py-4 p-lg-0">
            <h1 className="text-uppercase fs-5 fw-bold footer-h1">About our furniture</h1>

            <p className="m-0 mt-2">Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.</p>
        </div>

        <img src="images/image-about-light.jpg" className="img-fluid" alt="image about light"></img>
    </div>
  )
}

export default Footer

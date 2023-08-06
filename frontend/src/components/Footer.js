import React from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.png';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
export default function Footer() {
  const handleScrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
  //   <div>
  //     <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
  //   <div className="col-md-4 d-flex align-items-center">
  //     <Link href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
  //     <img src={logo} alt="Logo"  style={{width: "20px"}}/>
  //     </Link>
  //     <span className="text-muted">© 2023 FoodZy, Inc</span>
  //   </div>

  //   <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
  //   </ul>
  // </footer>
  //   </div>
  <div className="footer">
      <a
        href="#"
        id="navBackToTop"
        aria-label="Back to top"
        onClick={handleScrollToTop}
      >
        <div className="navFooterBackToTop">
          <span className="navFooterBackToTopText">Back to top</span>
        </div>
      </a>
      <section className="w-100">
        <Container className="container">
          <div className="logo2">
         <img src={logo} alt="footer/logo"  style={{width: "40px"}}/>  <span style={{fontSize:"30px"}}>FoodZy</span> 
          </div>

          <Nav className="nav">
            {/* {categories.map((category) => (
              <Nav.Item key={category}>
                <LinkContainer
                  to={{
                    pathname: '/search',
                    search: `category=${category}`,
                  }}
                >
                  <Nav.Link> {category}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))} */}

            <Nav.Item>
              <Nav.Link className="text-white">
                Conditions of Use & Sale
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="text-white">Privacy Notice</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="text-white">Interest-Based Ads</Nav.Link>
            </Nav.Item>
          </Nav>

          <div className="copyright">
            <p>
              &copy;{' '}
              <a href="#" target="blank">
                FoodZy-onrender.com
              </a>{' '}
              -Aaditya Bansal <br /> All Rights Reserved 2023
            </p>
          </div>
          <Nav className="nav wrapper">
            <ul>
              <li className="facebook">
                <a href="https://www.facebook.com/aaditya.bansal.923/">
                  <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
                </a>
              </li>
              <li className="twitter">
                <a href="#">
                  <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
                </a>
              </li>
              <li className="instagram">
                <a href="https://www.instagram.com/bansal_aaditya/">
                  <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                </a>
              </li>
              <li className="google">
                <a href="#">
                  <i className="fa fa-google fa-2x" aria-hidden="true"></i>
                </a>
              </li>
              <li className="whatsapp">
                <a href="#">
                  <i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </Nav>
        </Container>
      </section>
    </div>
  )
}

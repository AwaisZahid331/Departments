import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
// import { NavLink } from 'react-router-dom';

export default function App() {
  return (
    <>

      <MDBFooter className='text-center text-lg-start text-white' style={{ backgroundColor: "#055331", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)" }}>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            {/* <NavLink href='' className='me-4 text-reset'>
              <MDBIcon fab icon="facebook-f" />
            </NavLink> */}

            <a href='https://github.com/AwaisZahid331/AwaisZahid331' className='me-4 text-reset' target='blank'>
              <MDBIcon fab icon="github" />
            </a>
            <a href='https://www.instagram.com/awaiszahid13/profilecard/?igsh=MTB1NXJyZjlpZjUwbw==' className='me-4 text-reset' target='blank'>
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href='https://www.facebook.com/share/15kDn97oY7/?mibextid=qi2Omg' className='me-4 text-reset' target='blank'>
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href='https://www.instagram.com/awaiszahid13/profilecard/?igsh=MTB1NXJyZjlpZjUwbw==' className='me-4 text-reset' target='blank'>
              <MDBIcon fab icon="instagram" />
            </a>
          </div>
        </section>

        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon icon="gem" className="me-3" />
                  Student Resource Hub
                </h6>
                <p>


                <strong>Student Resource Hub</strong>   is a dedicated educational
                  platform designed to empower students by providing access
                  to comprehensive resources, learning materials, and tools.
                  Our mission is to foster academic excellence and support
                  students in achieving their educational goals.
                </p>

              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
  <h6 className='text-uppercase fw-bold mb-4'>Quizzes</h6>
  <p>
    <a href='https://mind-spark-quizz-kb4fc46va-awaiszahid331s-projects.vercel.app/' className='text-reset'>
      Reaact.Js Quizzes
    </a>
  </p>
  <p>
    <a href='https://mind-spark-quizz-kb4fc46va-awaiszahid331s-projects.vercel.app/' className='text-reset'>
      Python Quizzes
    </a>
  </p>
  <p>
    <a href='https://mind-spark-quizz-kb4fc46va-awaiszahid331s-projects.vercel.app/' className='text-reset'>
      javaScript Quizzes
    </a>
  </p>
  <p>
    <a href='https://mind-spark-quizz-kb4fc46va-awaiszahid331s-projects.vercel.app/' className='text-reset' target='blank'>
      General Knowledge
    </a>
  </p>
</MDBCol>


              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful Links</h6>
                <p>
                  <a href='/about-us' className='text-reset'>
                    About Us
                  </a>
                </p>
                <p>
                  <a href='/courses' className='text-reset'>
                    Courses
                  </a>
                </p>
                <p>
                  <a href='/resources' className='text-reset'>
                    Resources
                  </a>
                </p>
                {/* <p>
                  <a href='/contact' className='text-reset'>
                    Contact Us
                  </a>
                </p> */}

              </MDBCol>


              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Gujrat, Pakistan
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  zahidawais31@gmail.com
                </p>
                <p>
                <MDBIcon icon="user" className="me-3" />

                  <a href="https://next-portfolio-g1qj1axej-awaiszahid331s-projects.vercel.app/" style={{color:"white"}} target='blank'>Awais Zahid</a>
                </p>

              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2025 Copyright: Made by <a href="https://next-portfolio-g1qj1axej-awaiszahid331s-projects.vercel.app/" style={{color:"white"}} target='blank'>Awais Zahid</a>
          {/* <a className='text-reset fw-bold' href=''>
            MDBootstrap.com
          </a> */}
        </div>
      </MDBFooter>
    </>
  );
}
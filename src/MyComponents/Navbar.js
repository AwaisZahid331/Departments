import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function BasicExample() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container style={{backgroundColor:"white"}}>
                    <Navbar.Brand href="#home">Student Resource Hub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/ComputerScience">Cources</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="container-fluid" style={{ backgroundColor: "#055331", height: "100vh", color: "#fff" }}>
                {/* Header Section */}
                <div className="text-center pt-4" style={{ maxWidth: "1100px", margin: "0 auto", fontFamily: "sans-serif", fontSize: "1.2rem" }}>
                    <h1 className="fw-bold">Welcome to the <span style={{ color: "#FFD700" }}>Student Resource Hub</span></h1>
                    <p className="mt-3">
                        The <b>Student Resource Hub</b> is your ultimate platform for academic support and knowledge sharing.
                        Whether you're diving into complex scientific concepts, exploring the arts, or preparing for exams,
                        we provide resources tailored to meet your department’s unique needs.
                    </p>
                    <p>
                        From lecture notes and assignments to past papers and research materials,
                        our goal is to empower you to excel in your academic journey.
                        Simply select your department below to start accessing the materials you need.
                    </p>
                </div>

                {/* Departments Section */}
                <h1 className="text-center mt-5" style={{ color: "yellow" }}>Departments</h1><br />
                <div className="row container-fluid" style={{ fontFamily: "sans-serif" }}>
                    <div className="col-md-4 mb-3">
                        <NavLink to="/ComputerScience">
                            <button type="submit" className="w-100">
                                <i className="fas fa-laptop-code me-2"></i>
                                Computer Science
                            </button>
                        </NavLink>
                    </div>
                    <div className="col-md-4 mb-3">
                        <NavLink to="/Physics">
                            <button type="submit" className="w-100">
                                <i className="fas fa-atom me-2"></i>Physics
                            </button>
                        </NavLink>
                    </div>
                    <div className="col-md-4 mb-3">
                        <NavLink to="/Psychology">
                            <button type="submit" className="w-100">
                                <i className="fas fa-brain me-2"></i>Psychology
                            </button>
                        </NavLink>
                    </div>
                    <div className="col-md-4 mb-3">
                        <NavLink to="/Maths">
                            <button type="submit" className="w-100">
                                <i className="fas fa-square-root-alt me-2"></i>Mathematics
                            </button>
                        </NavLink>
                    </div>

                    <div className="col-md-4 mb-3">
                        <NavLink to="/Chemistry">
                            <button type="submit" className="w-100">
                                <i className="fas fa-flask me-2"></i>Chemistry
                            </button>
                        </NavLink>
                    </div>
                    <div className="col-md-4 mb-3">
                        <NavLink to="/Botnay">
                            <button type="submit" className="w-100">
                                <i className="fas fa-leaf me-2"></i>Botany
                            </button>
                        </NavLink>
                    </div>
                    <div className="col-md-4 mb-3">
                        <NavLink to="/Biology">

                            <button type="submit" className="w-100">
                                <i className="fas fa-dna me-2"></i>Biology
                            </button>
                        </NavLink>
                    </div>
                    <div className="col-md-4 mb-3">
                        <NavLink to="/Bba">
                            <button type="submit" className="w-100">
                                <i className="fas fa-chart-line me-2"></i>Bachelor of Business Administration
                            </button>
                        </NavLink>
                    </div>
                    <div className="col-md-4 mb-3">
                        <NavLink to="/Islam">
                            <button type="submit" className="w-100">
                                <i className="fas fa-chart-line me-2"></i>Islam
                            </button>
                        </NavLink>
                    </div>

                </div>
            </div>
        </>
    );
}

export default BasicExample;
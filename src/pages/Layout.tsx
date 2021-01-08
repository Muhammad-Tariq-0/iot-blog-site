import React from 'react'
import { graphql, Link } from 'gatsby';
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'
import '../assets/css/templatemo-softy-pinko.css'
import logo from '../assets/images/logo.png';

const Layout = ({ children }) => {
  
    return (
        <div>
            <div className="topclass">
            </div>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <a href="#" className="logo">
                                    <img src={logo} alt="loading..." /> 
                                </a>
                                <ul className="nav">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/blogs">Blog Entries</Link></li>
                                    <li><a href="https://twitter.com/Muhamma08626039" target="_blank">About</a></li>
                                </ul>


                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <br />
            {children}
            <br />
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <ul className="social">
                                <li><a href="https://web.facebook.com/profile.php?id=100013805011155" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="https://twitter.com/Muhamma08626039" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/muhammad-tariq-8120a2172/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="https://github.com/Muhammad-Tariq-0/blog-site" target="_blank"><i className="fa fa-github"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="copyright">Copyright &copy; By Muhammad Tariq</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>


    )
}

export default Layout


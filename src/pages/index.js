import React from 'react'
import { Link } from 'gatsby';
import Layout from './Layout';
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'
import '../assets/css/templatemo-softy-pinko.css'
const index = () => {
  return (
    <Layout>
      <div className="welcome-area" id="welcome">
        <div className="header-text">
          <div className="container">
            <div className="row">
              <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                <h1>Internet of Things<br /><strong>Blog Site</strong></h1>
                <p>The first step in blogging is not writing them but reading them ~Jeff Jarvis</p>
                <Link to="/blogs" className="main-button-slider">Visit Blog page</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default index

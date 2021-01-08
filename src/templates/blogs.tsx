import { Grid } from '@material-ui/core';
import { Link } from 'gatsby';
import React from 'react'
import Layout from '../pages/Layout';
const blogs = ({ pageContext }) => {
  console.log(pageContext);
  const { item } = pageContext;
  return (
    <Layout>
      <div>
        <section className="section" id="blog">
          <div className="container">
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="center-heading">
                <h2 className="section-title">Blog Entries</h2>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
              <div className="center-text">
                <p>Blogging is good for your career. A well-executed blog sets you apart as an expert in your field</p>
              </div>
            </div>
          </div>
          <Grid container>
            {item.map((allblogs) => {
              return (

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="blog-post-thumb">
                    <div className="img">
                      <img src={allblogs.image.fluid.src} alt="loading..." />
                    </div>
                    <div className="blog-content">
                      <h3>
                        <a href="#">{allblogs.title}</a>
                      </h3>
                    </div>
                    <div className="text">
                      {allblogs.shortDescription}
                    </div>
                    <Link to={`/blogs/blog/${allblogs.slug}`} className="main-button"> Read me </Link>


                  </div>
                </div>

              )
            })}
          </Grid>
        </section>
      </div>
    </Layout>
  )
}

export default blogs



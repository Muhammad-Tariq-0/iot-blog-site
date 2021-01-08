import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from '../pages/Layout';

const useStyles = makeStyles({
  root: {
    margin: "auto",
    maxWidth: 1280,
  },
});

export default function blog({ pageContext }) {
  const classes = useStyles();
  const { item } = pageContext;
  const data = JSON.parse((item.fullDescription.raw));
  return (
    <Layout>
      <Grid container>
        <Card className={classes.root}>
          <CardMedia
            component="img"
            alt="loading..."
            height="300"
            image={item.image.fluid.src}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: "center" }}>
              <h3>{item.title} </h3> <br />
              <h5 style={{ color: "chocolate" }}>{item.author}</h5> <hr />
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {/* {item.createdAt} <br /> */}
              {documentToReactComponents(data)}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Layout>
  );
}







// import React from 'react'
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import './blog.css'
// import Layout from '../pages/Layout';
// const blog = ({ pageContext }) => {
//     console.log(pageContext);
//     const { item } = pageContext;
//     const data = JSON.parse((item.fullDescription.raw));
//     console.log(data);
//     return (
//         <Layout>

//             <img src={item.image.fluid.src} alt="loading..." />
//             <h1>{item.title}</h1>
//             <h2>{item.author}</h2>
//             <p>{item.createdAt}</p>
//             <p>{documentToReactComponents(data)}</p>
//         </Layout>
//     )
// }

// export default blog

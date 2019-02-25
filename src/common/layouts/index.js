import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import '../styles/custom.tachyons.css';

export default (props) => (
  <React.Fragment>
    <Helmet>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
      <body className="bg-near-white mid-gray" />
    </Helmet>
    <Navbar />
    {props.children}
    <Footer />
  </React.Fragment>
)

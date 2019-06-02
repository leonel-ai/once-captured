import React from 'react'
import Head from '../components/head'
// import Cards from '../components/cards'
import Footer from '../components/footer'
import '../styles/style.scss'


const Home = () => (
  <div>
    <Head title="ONCE Cinema" />

    <div className="jumbotron jumbotron-fluid">
      <div className="grid-container">
        <div className="brand">
          <img class="img-fluid" src="/static/logo.svg" alt="brand logo"/>
        </div>
        <div className="cta">Work with us</div>
        <div className="banner-block">
          <h1 className="banner-title display-4">YOUR<br/>MOMENT</h1>
          <h1 className="banner-subhead">ONCE Captured</h1>
          <p className="lead">Wedding &amp; event cinematography with a story to tell.</p>
        </div>
        <div className="work-block">Work</div>
        <div className="services-block">Services</div>
      </div>
    </div>

    <div className="container-fluid">

      {/* <div className="row description-block">
        <div className="content">
          <h2 className="content__headline">ONCE IN A LIFETIME</h2>
          <p>Whether it's a few weeks, a month, or a year away, you can rest assured you've taken care of the most essential steps
            in planning your wedding day. Memories are fleeting, but at ONCE, we aim to capture those once in a lifetime moments
            for generations to come. Given our love of cinema, you can expect to get the star treatment from beginning to end
            with a silver-screen quality production.
          </p>
          <p>Reservations fill up fast. Contact us for availability today.</p>
        </div>
      </div> */}
      {/* <div className="row pricing-block">
        <Cards />
      </div> */}
      <div className="row highlight-block">
        <div className="video-container">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/326661659?background=1" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
          </div>
        </div>
      </div>
      {/* <div className="row contact-block">
        <div className="content">
          <h2 className="content__headline">Ready to get started?</h2>
          <p className="content__text">Button here or something.</p>
        </div>
      </div> */}

    <div className="row footer-block">
        <div className="col-8">
          <h5>ONCE CINEMA CO.</h5>
        </div>
        <div className="col-4">
          <h5>Contact Us</h5>
        </div>
    </div>

    </div>
    <Footer/>
  </div>
)

export default Home

import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Cards from '../components/cards'
import Footer from '../components/footer'
import '../styles/style.scss'


const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />

    <div className="jumbotron jumbotron-fluid">
      <div className="container banner-block">
        <h1 className="display-4">ONCE CINEMA CO.</h1>
        <p className="lead">Now booking 2019/20 weddings and events.</p>
        <Link href="https://github.com/zeit/next.js#getting-started">
          <a className="cta-btn">Inquire</a>
        </Link>
      </div>
    </div>

    <div className="container-fluid">
      <div className="row pricing-block">
        <Cards />
        {/* <Link href="google.com">
          <a className="cta-btn">Book Now</a>
        </Link> */}
      </div>
      <div className="row highlight-block">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/326661659?background=1" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
        </div>
      </div>
      <div className="row description-block">
        <div className="content">
          <h2>ONCE IN A LIFETIME</h2>
          <p>Whether it's a few weeks, a month, or a year away, you can rest assured you've taken care of the most essential steps
            in planning your wedding day. Memories are fleeting, but at ONCE, we aim to capture those once in a lifetime moments
            for generations to come. Given our love of cinema, you can expect to get the star treatment from beginning to end
            with a silver-screen quality production.
          </p>
          <p>Reservations fill up fast. Contact us for availability today.</p>
        </div>
      </div>
      <div className="row contact-block">
        <div className="form-container">
          <h2>CONTACT US AT ONCE</h2>
          <form action="google.com" method="POST">
            <input type="text" placeholder="Full Name"/>
            {/* <input type="submit"/> */}
          </form>
        </div>
      </div>
    </div>

    <Footer />
  </div>
)

export default Home

import React from 'react'
import Fade from 'react-reveal/Fade'
import HeadShake from 'react-reveal/HeadShake';
import Pulse from 'react-reveal/Pulse'
import Head from '../components/head'
import Footer from '../components/footer'
import '../styles/style.scss'


const Work = () => (
  <div className="subpage" id="work">
    <Head title="ONCE | Work" />

    <div className="menu__head">
        <nav className="navbar navbar-light bg-white">
          <a className="navbar-brand" href="/" target="_self"><span>ONCE </span>Captured</a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-item nav-link" href="/" target="_self">Home</a>
              <a className="nav-item nav-link" href="/services" target="_self">Services</a>
              <a className="nav-item nav-link active" href="/work" target="_self">Work <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link"
                href="mailto:hi.oncecaptured@gmail.com?subject=Hello,&nbsp;ONCE!&body=Hi there! Don't forget to include the important details (i.e. Names and Event Date).">Contact</a>
            </div>
          </div>
        </nav>
      </div>

    <div className="content content--grid content--second">
      <div className="gallery__block">
      <Fade bottom>
        <h3 className="gallery__title display-4">REAL<br/>ADVENTURE</h3>
        <h1 className="gallery__title-subhead">ONCE Captured</h1>
      </Fade>
      </div>

        <p className="gallery__text">
        Whether it's a few weeks, a month, or a year away, you can rest assured you've taken care of the most essential steps
        in planning your wedding day.
        </p>


      <div className="gallery--wrapper item-1 order-1">
        <div className="gallery--item-content">
            <img className="gallery__img" src="/static/bw.png" alt="image"/>
        </div>
      </div>
      <div className="gallery--wrapper item-2 order-2">
        <div className="gallery--item-content">
            <img className="gallery__img" src="/static/boys.jpg" alt="image"/>
        </div>
      </div>
      <div className="gallery--wrapper item-3 order-4">
        <div className="gallery--item-content">
            <img className="gallery__img" src="/static/reserved.jpg" alt="image"/>
        </div>
      </div>
      <div className="gallery--wrapper item-4 order-5">
        <div className="gallery--item-content landscape">
            <img className="gallery__img" src="/static/mansion.jpg" alt="image"/>
        </div>
      </div>
      <div className="gallery--wrapper item-5 order-7">
        <div className="gallery--item-content">
            <img className="gallery__img" src="/static/ring.jpg" alt="image"/>
        </div>
      </div>

      <Fade bottom>
      <div className="gallery--subtext text-1 order-3">
        <p>Memories are fleeting, but at ONCE, we aim to capture those once in a lifetime moments
          for generations to come.</p>
      </div>
      </Fade>

      <Fade bottom>
      <div className="gallery--subtext text-2 order-6">
        <h4 className="cta">
          <a href="/services" target="_self" className="icon-block">
            Check out our services &nbsp;&nbsp;<i className="fas fa-long-arrow-alt-right"></i>
          </a>
        </h4>
        <p>Given our love of cinema and experience in film production, you can expect to get the star treatment from beginning to end
          with a silver-screen quality production.</p>
      </div>
      </Fade>

      <div className="gallery--subtext text-3 order-8">
      <Fade bottom>
        <h3 className="gallery__title display-4">SAY<br/>I DO</h3>
        <p>Reservations fill up fast.<br/>Contact us for availability today.</p>
      </Fade>
      <Pulse forever duration={1800}>
        <p className="contact-cta"><a href="/services" target="_self" className="contact-btn">Book a date</a></p>
      </Pulse>
      </div>

      <a className="content__back--link" href="/" target="_self"><button className="content__back" aria-label="back to main view"></button></a>
    </div>
    <Footer/>
 </div>
)

export default Work
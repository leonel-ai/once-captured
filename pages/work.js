import React from 'react'
import Head from '../components/head'
import Footer from '../components/footer'
import '../styles/style.scss'


const Work = () => (
  <div className="subpage" id="work">
    <Head title="ONCE | Work" />

    <div className="mobile__head">
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <a class="navbar-brand" href="/" target="_self"><span>ONCE </span>Captured</a>
          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-bar top-bar"></span>
            <span class="icon-bar middle-bar"></span>
            <span class="icon-bar bottom-bar"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link" href="/services" target="_self">Services</a>
              <a class="nav-item nav-link active" href="/work" target="_self">Work <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link"
                href="mailto:oncecinemaco@gmail.com?subject=Hello,&nbsp;ONCE!&body=Hi there! Don't forget to include the important details (i.e. Names and Event Date).">Contact</a>
            </div>
          </div>
        </nav>
      </div>

    <div className="content content--grid content--second">
      <div className="gallery__block">
        <h3 className="gallery__title display-4">REAL<br/>ADVENTURE</h3>
        <h1 className="gallery__title-subhead">ONCE Captured</h1>
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

      <div className="gallery--subtext text-1 order-3">
        <p>Memories are fleeting, but at ONCE, we aim to capture those once in a lifetime moments
          for generations to come.</p>
      </div>
      <div className="gallery--subtext text-2 order-6">
        <h4 className="cta">
          <a href="/services" target="_self" className="icon-block">
            Check out our services &nbsp;&nbsp;<i className="fas fa-long-arrow-alt-right"></i>
          </a>
        </h4>
        <p>Given our love of cinema and experience in film production, you can expect to get the star treatment from beginning to end
          with a silver-screen quality production.</p>
      </div>
      <div className="gallery--subtext text-3 order-8">
        <h3 className="gallery__title display-4">SAY<br/>I DO</h3>
        <p>Reservations fill up fast.<br/>Contact us for availability today.</p>
        <p className="contact-cta"><a href="/services" target="_self" className="contact-btn">Book a date</a></p>
      </div>

      <a className="content__back--link" href="/" target="_self"><button className="content__back" aria-label="back to main view"></button></a>
    </div>
    <Footer/>
 </div>
)

export default Work
import React from 'react'
import Head from '../components/head'
import Footer from '../components/footer'
import '../styles/style.scss'


const Work = () => (
  <div className="subpage" id="work">
    <Head title="ONCE | Work" />

    <div className="content content--grid content--second">
      <div className="gallery__block ">
        <h3 className="gallery__title display-4">REAL<br/>ADVENTURE</h3>
        <h1 className="gallery__title-subhead">ONCE Captured</h1>
      </div>
        <p className="gallery__text">
      Whether it's a few weeks, a month, or a year away, you can rest assured you've taken care of the most essential steps
      in planning your wedding day.
      </p>

      <div className="gallery--wrapper item-1">
        <div className="gallery--item-content">
          <a href="/">
            <img className="gallery__img" src="/static/ring-hair.jpg" alt="image"/>
          </a>
        </div>
      </div>
      <div className="gallery--wrapper item-2">
        <div className="gallery--item-content">
          <a href="/">
            <img className="gallery__img" src="/static/ring-hair.jpg" alt="image"/>
          </a>
        </div>
      </div>
      <div className="gallery--wrapper item-3">
        <div className="gallery--item-content">
          <a href="/">
            <img className="gallery__img" src="/static/ring-hair.jpg" alt="image"/>
          </a>
        </div>
      </div>
      <div className="gallery--wrapper item-4">
        <div className="gallery--item-content landscape">
          <a href="/">
            <img className="gallery__img" src="/static/landscape.jpg" alt="image"/>
          </a>
        </div>
      </div>
      <div className="gallery--wrapper item-5">
        <div className="gallery--item-content">
          <a href="/">
            <img className="gallery__img" src="/static/ring-hair.jpg" alt="image"/>
          </a>
        </div>
      </div>

      <div className="gallery--subtext text-1">
        <p>Memories are fleeting, but at ONCE, we aim to capture those once in a lifetime moments
          for generations to come.</p>
      </div>
      <div className="gallery--subtext text-2">
        <h5 className="cta">
          <a href="/" className="icon-block">
            View the full gallery &nbsp;&nbsp;<i className="fas fa-long-arrow-alt-right"></i>
          </a>
        </h5>
        <p>Given our love of cinema, you can expect to get the star treatment from beginning to end
          with a silver-screen quality production.</p>
      </div>
      <div className="gallery--subtext text-3">
        <p>Reservations fill up fast. Contact us for availability today.</p>
        <p className="contact-cta"><a href="/contact" className="contact-btn">Book a date</a></p>
      </div>

      <a className="content__back--link" href="/"><button className="content__back" aria-label="back to main view"></button></a>
    </div>
    <Footer/>
 </div>
)

export default Work
import React from 'react'
import Head from '../components/head'
import '../styles/style.scss'


const Luxe1 = () => (
  <div className="subpage">
    <Head title="ONCE | Services" />

    <div className="content content--grid content--second">
      <h3 className="content__title">The Star<br/>Treatment</h3>
      <p className="content__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.
      </p>
      <div className="social">
        <a className="social__link" href="instagram.com">IG</a>
        <a className="social__link" href="facebook.com">FB</a>
        <a className="social__link" href="vimeo.com">Vimeo</a>
      </div>
      <div className="reel">
        <img className="reel__img" src="/static/ring-hair.jpg" alt="image"/>
        <span className="reel__num">LUXE 001</span>
        <img className="reel__img" src="/static/ring-hair.jpg" alt="image"/>
        <span className="reel__num">LUXE 002</span>
        <img className="reel__img" src="/static/ring-hair.jpg" alt="image"/>
        <span className="reel__num">LUXE 003</span>
      </div>
      <a className="content__back--link" href="/"><button className="content__back" aria-label="back to main view"></button></a>
    </div>

 </div>
)

export default Luxe1
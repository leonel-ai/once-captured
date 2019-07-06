import React from 'react'
import Head from '../components/head'
import '../styles/style.scss'


const Luxe2 = () => (
  <div className="subpage" id="work">
    <Head title="ONCE | Work" />

    <div className="content content--grid content--second">
      <h3 className="gallery__title">A Lifetime<br/>of Memories</h3>
      <p className="gallery__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.
      </p>
      <div className="social">
      <a className="social__link" href="http://instagram.com/once.cinema/" target="_blank">IG</a>
        <a className="social__link" href="http://facebook.com/oncecinema.co" target="_blank">FB</a>
        <a className="social__link" href="http://vimeo.com/oncecinema" target="_blank">Vimeo</a>
      </div>
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

      <a className="content__back--link" href="/"><button className="content__back" aria-label="back to main view"></button></a>
    </div>

 </div>
)

export default Luxe2
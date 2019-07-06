import React from 'react'
import Head from '../components/head'
import Footer from '../components/footer'
import '../styles/style.scss'


class Home extends React.Component {
  render() {
    return (
    <div>
    <Head title="ONCE Cinema" />

    <div className="jumbotron jumbotron-fluid">
      <div className="grid-container">
        <div className="brand">
          <img className="img-fluid" src="/static/logo.svg" alt="brand logo"/>
        </div>
        <div className="cta">
          <a href="/contact" className="icon-block">
            Work with us &nbsp;&nbsp;<i className="fas fa-long-arrow-alt-right"></i>
          </a>
        </div>
        <div className="banner-block">
          <h1 className="banner-title display-4">YOUR<br/>MOMENT</h1>
          <h1 className="banner-subhead">ONCE Captured</h1>
          <p className="lead">Wedding &amp; event cinematography with a story to tell.</p>
        </div>
        <div className="work-block">
        <a href="/work" className="subpage-link">
          <h2 className="work-title">WORK</h2>
            <p className="work-content">Creating amazing work that does blah blah blah.</p>
            <i className="fas fa-long-arrow-alt-right"></i>
          </a>
        </div>
        <div className="services-block">
          <a href="/services" className="subpage-link">
          <h2 className="services-title">SERVICES</h2>
            <p className="services-content">Creating amazing work that does blah blah blah.</p>
            <i className="fas fa-long-arrow-alt-right"></i>
          </a>
        </div>
      </div>
    </div>

    <div className="container-fluid">

      <div className="row highlight-block">
        <div className="video-container">
          <div className="video-item">
            <div className="video-overlay">
              <a href="https://player.vimeo.com/video/326661659" target="_blank" alt="highlight reel">
              <svg width="52px" height="52px" viewBox="-5 -5 52 52" className="icon-play"><g id="Group-5" transform="matrix(1,0,0,1,2,2)"><g id="Triangle-2" transform="matrix(-3.82857e-16,1,-1,-3.82857e-16,39.1429,-1.85714)"><path d="M20.5,14L27,23.286L14,23.286L20.5,14Z" fill="rgb(239,58,80)"></path></g><circle id="Oval" cx="19" cy="19" r="19" fill="none" stroke="rgb(239,58,80)" strokeWidth="3px"></circle></g></svg>
              <h3 className="video-headline">Watch Reel</h3>
              </a>
            </div>
            <div className="video-player">
              <div className="video-wrapper">
                <div className="video-embed__container" poster="https://i.vimeocdn.com/video/770745901.jpg">
                <iframe src="https://player.vimeo.com/video/326661659?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1" frameBorder="0" allow="autoplay;"></iframe>
                </div>
                <div className="video__poster"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
  </div> )
  }
}

export default Home

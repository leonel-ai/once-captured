import React from 'react'
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import HeadShake from 'react-reveal/HeadShake';

import Head from '../components/head'
import VideoPlayer from '../components/videoPlayer'
import Footer from '../components/footer'
import '../styles/style.scss'


class Home extends React.Component {
  render() {
    return (
      <div>
        <Head title="ONCE Captured" />

        <div className="jumbotron jumbotron-fluid">
          <div className="grid-container">
            <div className="brand">
              <img className="img-fluid" src="/static/logo-black.png" alt="brand logo"/>
            </div>
            <Pulse forever duration="1800">
            <div className="cta">
              <a href="/services" className="icon-block" target="_self">
                Work with us &nbsp;&nbsp;<i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </div>
            </Pulse>
            <div className="banner-block">
            <Fade bottom>
              <h1 className="banner-title display-4">YOUR<br/>MOMENT</h1>
              <h1 className="banner-subhead">ONCE Captured</h1>
              <p className="lead">Wedding &amp; event cinematography with a story to tell.</p>
            </Fade>
            </div>
            <div className="work-block">
            <a href="/work" className="subpage-link" target="_self">
              <Fade bottom>
              <h2 className="work-title">WORK</h2>
                <p className="work-content">The adventure starts here.</p>
                <HeadShake forever duration="3000">
                <i className="fas fa-long-arrow-alt-right"></i>
                </HeadShake>
              </Fade>
              </a>
            </div>
            <div className="services-block">
              <a href="/services" className="subpage-link" target="_self">
              <Fade bottom>
              <h2 className="services-title">SERVICES</h2>
                <p className="services-content">Book your next big event.</p>
                <HeadShake forever duration="3000">
                <i className="fas fa-long-arrow-alt-right"></i>
                </HeadShake>
              </Fade>
              </a>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row highlight-block">
            <div className="video-container">
              <div className="video-item">
                <div className="video-overlay">
                  <a href="https://player.vimeo.com/video/349732658" target="_blank" alt="highlight reel">
                  <svg width="52px" height="52px" viewBox="-5 -5 52 52" className="icon-play"><g id="Group-5" transform="matrix(1,0,0,1,2,2)"><g id="Triangle-2" transform="matrix(-3.82857e-16,1,-1,-3.82857e-16,39.1429,-1.85714)"><path d="M20.5,14L27,23.286L14,23.286L20.5,14Z" fill="rgb(239,58,80)"></path></g><circle id="Oval" cx="19" cy="19" r="19" fill="none" stroke="rgb(239,58,80)" strokeWidth="3px"></circle></g></svg>
                  <Fade bottom>
                  <h3 className="video-headline">Watch Reel</h3>
                  </Fade>
                  </a>
                </div>
                <div className="video-player">
                  <div className="video-wrapper">
                    <div className="video-embed__container" poster="https://i.vimeocdn.com/video/770745901.jpg">
                      <VideoPlayer/>
                    </div>
                    <div className="video__poster"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default Home

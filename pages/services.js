import React from 'react'
import Head from '../components/head'
import Footer from '../components/footer'
import Cards from '../components/cards'
import '../styles/style.scss'


class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      act1: false,
      act2: false,
      act3: false,
      act4: false
    };
  }

  handleClick1 = (event) => {
    console.log(event.currentTarget);
    this.setState({act2: false, act3: false, act4: false});
    this.setState({act1: !this.state.act1});
  }

  handleClick2 = (event) => {
    console.log(event.currentTarget);
    this.setState({act1: false, act3: false, act4: false});
    this.setState({act2: !this.state.act2});
  }

  handleClick3 = (event) => {
    console.log(event.currentTarget);
    this.setState({act1: false, act2: false, act4: false});
    this.setState({act3: !this.state.act3});
  }

  handleClick4 = (event) => {
    console.log(event.currentTarget);
    this.setState({act1: false, act2: false, act3: false});
    this.setState({act4: !this.state.act4});
  }

  render() {
    return (
      <div className="subpage" id="services">
      <Head title="ONCE | Services" />

      <div className="content content--grid content--second">
        <div className="services__block">
          <h3 className="content__title display-4">Lifelong<br/>Memories</h3>
          <h1 className="content__title-subhead">ONCE Captured</h1>
          <div className="content__text--desktop">
            <p>
              By now, you've probably scoped out a few wedding sites. So what makes us different?
            </p>
            <p>
              <b>We <em>get</em> you.</b> You're looking for exceptional style and quality.
              Otherwise, you'd just hand the camera to your distant uncle and pray for the best. At ONCE, we know how to
              bring your special event to life, long after the confetti has settled. Our cameras and crew are ready to give
              you the A-list treatment in the role of your life.
            </p>
            <p><b>We take film seriously.</b> Ourselves? Not so much. Expect professional, creative, and friendly service come rain or shine.</p>
            <p><b>We keep it short.</b></p>
          </div>
        </div>
        <div className="services__preface">
          <h5 className="cta">
            <p className="icon-block">
              Click to view our media packages below &nbsp;&nbsp;<i className="fas fa-long-arrow-alt-right"></i>
            </p>
          </h5>
          <p className="content__text">
            Looking to add photography services?
            <br/>Contact us for details.
          </p>
        </div>

        <div className="package__text">
          <div className={this.state.act1 ? "luxe_01 active" : "luxe_01" }>
            <h2>LUXE I</h2>
            <ul>
              <li><p><span>PARTIAL COVERAGE</span><br/>6 hours</p></li>
              <li><p><span>1 CINEMATOGRAPHER</span><br/>5 Years of Experience</p></li>
              <li><p><span>2 - 3 MINUTE FILM</span><br/>Online + Downloadable</p></li>
              <li><p><span>HIGHLIGHT FILM</span><br/>30 sec - 1 min</p></li>
              <li><p><span>DELIVERED</span><br/>6 - 8 Weeks</p></li>
              <li><p><span>PRICE</span><br/>$1000 - $1200</p></li>
            </ul>
            <p>All <span>raw footage</span> can be purchased for an additional fee. <span>Travel</span> destination packages and photography services
              also available upon request.</p>
            <p>Reservations fill up fast. <span>Contact us</span> for availability today.</p>
            <p className="contact-cta"><a href="/contact" target="_self" className="contact-btn">Book a date</a></p>
          </div>
          <div className={this.state.act2 ? "luxe_02 active" : "luxe_02" }>
            <h2>Luxe II</h2>
            <ul>
              <li><p><span>HALF-DAY COVERAGE</span><br/>8 hours</p></li>
              <li><p><span>1 CINEMATOGRAPHER</span><br/>5 Years of Experience</p></li>
              <li><p><span>4 - 6 MINUTE FILM</span><br/>Online + Downloadable</p></li>
              <li><p><span>HIGHLIGHT FILM</span><br/>30 sec - 1 min</p></li>
              <li><p><span>DELIVERED</span><br/>6 - 8 Weeks</p></li>
              <li><p><span>PRICE</span><br/>$1800 - $2000</p></li>
            </ul>
            <p>All <span>raw footage</span> can be purchased for an additional fee. <span>Travel</span> destination packages and photography services
              also available upon request.</p>
            <p>Reservations fill up fast. <span>Contact us</span> for availability today.</p>
            <p className="contact-cta"><a href="/contact" target="_self" className="contact-btn">Book a date</a></p>
          </div>
          <div className={this.state.act3 ? "luxe_03 active" : "luxe_03" }>
            <h2>Luxe III</h2>
            <ul>
              <li><p><span>ALL DAY COVERAGE</span><br/>10 hours</p></li>
              <li><p><span>2 CINEMATOGRAPHERS</span><br/>5+ Years of Experience</p></li>
              <li><p><span>6 - 8 MINUTE FILM</span><br/>Online + Downloadable</p></li>
              <li><p><span>HIGHLIGHT FILM</span><br/>30 sec - 1 min</p></li>
              <li><p><span>DELIVERED</span><br/>6 - 8 Weeks</p></li>
              <li><p><span>PRICE</span><br/>$3200 - $3400</p></li>
            </ul>
            <p>All <span>raw footage</span> can be purchased for an additional fee. <span>Travel</span> destination packages and photography services
              also available upon request.</p>
            <p>Reservations fill up fast. <span>Contact us</span> for availability today.</p>
            <p className="contact-cta"><a href="/contact" target="_self" className="contact-btn">Book a date</a></p>
          </div>
          <div className={this.state.act4 ? "luxe_04 active" : "luxe_04" }>
            <h2>Luxe IV</h2>
            <ul>
              <li><p><span>FULL COVERAGE</span><br/>12 hours</p></li>
              <li><p><span>2 CINEMATOGRAPHERS</span><br/>5+ Years of Experience</p></li>
              <li><p><span>10 - 15 MINUTE FILM</span><br/>Online + Downloadable</p></li>
              <li><p><span>HIGHLIGHT FILM</span><br/>30 sec - 1 min</p></li>
              <li><p><span>DELIVERED</span><br/>6 - 8 Weeks</p></li>
              <li><p><span>PRICE</span><br/>$4000 - $4200</p></li>
            </ul>
            <p>All <span>raw footage</span> can be purchased for an additional fee. <span>Travel</span> destination packages and photography services
              also available upon request.</p>
            <p>Reservations fill up fast. <span>Contact us</span> for availability today.</p>
            <p className="contact-cta"><a href="/contact" target="_self" className="contact-btn">Book a date</a></p>
          </div>
        </div>

        <div className={this.state.act1 ? "pk__img package__img1 active" : "pk__img package__img1" } onClick={this.handleClick1}>
          <img className="reel__img" src="/static/astros.jpg" alt="image"/>
        </div>
        <div className={this.state.act2 ? "pk__img package__img2 active" : "pk__img package__img2" } onClick={this.handleClick2}>
          <img className="reel__img" src="/static/pink.jpg" alt="image"/>
        </div>
        <div className={this.state.act3 ? "pk__img package__img3 active" : "pk__img package__img3" } onClick={this.handleClick3}>
          <img className="reel__img" src="/static/groomsmen.jpg" alt="image"/>
        </div>
        <div className={this.state.act4 ? "pk__img package__img4 active" : "pk__img package__img4" } onClick={this.handleClick4}>
          <img className="reel__img" src="/static/venue.jpg" alt="image"/>
        </div>
        <a className="content__back--link" href="/" target="_self"><button className="content__back" aria-label="back to main view"></button></a>

        <div className="package package__block1">
          <h2>01</h2>
        </div>
        <div className="package package__block2">
          <h2>02</h2>
        </div>
        <div className="package package__block3">
          <h2>03</h2>
        </div>
        <div className="package package__block4">
          <h2>04</h2>
        </div>

        <Cards/>

        <div className="content__text--mobile">
          <p>All <span>raw footage</span> can be purchased for an additional fee. <span>Travel</span> destination packages and photography services
            also available upon request.</p>
          <p>Reservations fill up fast. <span>Contact us</span> for availability today.</p>
        </div>

      </div>
      <Footer/>
   </div>
    )
  }
}

export default Services
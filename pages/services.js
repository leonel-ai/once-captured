import React from 'react'
import Head from '../components/head'
import '../styles/style.scss'


class Luxe1 extends React.Component {
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
    this.setState({act1: !this.state.act1});
  }

  handleClick2 = (event) => {
    console.log(event.currentTarget);
    this.setState({act2: !this.state.act2});
  }

  handleClick3 = (event) => {
    console.log(event.currentTarget);
    this.setState({act3: !this.state.act3});
  }

  handleClick4 = (event) => {
    console.log(event.currentTarget);
    this.setState({act4: !this.state.act4});
  }

  render() {
    return (
      <div className="subpage" id="services">
      <Head title="ONCE | Services" />

      <div className="content content--grid content--second">
        {/* <div className="banner-block">
            <h1 className="banner-title display-4">YOUR<br/>MOMENT</h1>
            <h1 className="banner-subhead">ONCE Captured</h1>
          </div> */}
        <div className="services__block">
          <h3 className="content__title display-4">Lifelong<br/>Memories</h3>
          <h1 className="content__title-subhead">ONCE Captured</h1>
        </div>

        <p className="content__text">
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

        <div className={this.state.act1 ? "pk__img package__img1 active" : "pk__img package__img1" } onClick={this.handleClick1}>
          <img className="reel__img" src="/static/wedding-temp.png" alt="image"/>
        </div>
        <div className={this.state.act2 ? "pk__img package__img2 active" : "pk__img package__img2" } onClick={this.handleClick2}>
          <img className="reel__img" src="/static/wedding-temp.png" alt="image"/>
        </div>
        <div className={this.state.act3 ? "pk__img package__img3 active" : "pk__img package__img3" } onClick={this.handleClick3}>
          <img className="reel__img" src="/static/wedding-temp.png" alt="image"/>
        </div>
        <div className={this.state.act4 ? "pk__img package__img4 active" : "pk__img package__img4" } onClick={this.handleClick4}>
          <img className="reel__img" src="/static/wedding-temp.png" alt="image"/>
        </div>
        <a className="content__back--link" href="/"><button className="content__back" aria-label="back to main view"></button></a>

        <div className="package package__block1">
          <h2>LUXE 001</h2>
        </div>
        <div className="package package__block2">
          <h2>LUXE 002</h2>
        </div>
        <div className="package package__block3">
          <h2>LUXE 003</h2>
        </div>
        <div className="package package__block4">
          <h2>LUXE 004</h2>
        </div>

      </div>

   </div>
    )
  }
}

export default Luxe1
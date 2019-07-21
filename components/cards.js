import React from 'react'
import Slider from "react-slick";

class Cards extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div id="cards">
        <Slider {...settings}>
          <div>
            <div className="card">
              <img src="/static/astros.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Luxe I</h3>
                  <div className="row card-text">
                    <div className="col-6">
                      <ul>
                        <li><p><span>PARTIAL COVERAGE</span><br/>6 hrs</p></li>
                        <li><p><span>CINEMATOGRAPHER</span><br/>5 yrs experience</p></li>
                        <li><p><span>2 - 3 MINUTE FILM</span><br/>Online + Downloadable</p></li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul>
                        <li><p><span>HIGHLIGHT FILM</span><br/>30 sec - 1 min</p></li>
                        <li><p><span>DELIVERED</span><br/>6 - 8 wks</p></li>
                        <li><p><span>PRICE</span><br/>$1000 - $1200</p></li>
                      </ul>
                    </div>
                  </div>

                <a href="mailto:oncecinemaco@gmail.com?subject=Luxe&nbsp;I Booking&body=Hi there! Don't forget to include the important details (i.e. Names and Event Date)." className="btn btn-danger" target="_self">Book a date</a>
              </div>
            </div>
          </div>

          <div>
            <div className="card">
              <img src="/static/pink.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Luxe II</h3>
                  <div className="row card-text">
                    <div className="col-6">
                      <ul>
                        <li><p><span>&frac12; DAY COVERAGE</span><br/>8 hrs</p></li>
                        <li><p><span>CINEMATOGRAPHER</span><br/>5 yrs experience</p></li>
                        <li><p><span>4 - 6 MINUTE FILM</span><br/>Online + Downloadable</p></li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul>
                        <li><p><span>HIGHLIGHT FILM</span><br/>30 sec - 1 min</p></li>
                        <li><p><span>DELIVERED</span><br/>6 - 8 wks</p></li>
                        <li><p><span>PRICE</span><br/>$1800 - $2000</p></li>
                      </ul>
                    </div>
                  </div>

                <a href="mailto:oncecinemaco@gmail.com?subject=Luxe&nbsp;II Booking&body=Hi there! Don't forget to include the important details (i.e. Names and Event Date)." className="btn btn-danger" target="_self">Book a date</a>
              </div>
            </div>
          </div>

          <div>
            <div className="card">
              <img src="/static/groomsmen.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Luxe III</h3>
                  <div className="row card-text">
                    <div className="col-6">
                      <ul>
                        <li><p><span>ALL DAY COVERAGE</span><br/>10 hrs</p></li>
                        <li><p><span>CINEMATOGRAPHERS</span><br/>(2) 5+ yrs experience</p></li>
                        <li><p><span>6 - 8 MINUTE FILM</span><br/>Online + Downloadable</p></li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul>
                        <li><p><span>HIGHLIGHT FILM</span><br/>30 sec - 1 min</p></li>
                        <li><p><span>DELIVERED</span><br/>6 - 8 wks</p></li>
                        <li><p><span>PRICE</span><br/>$3200 - $3400</p></li>
                      </ul>
                    </div>
                  </div>

                <a href="mailto:oncecinemaco@gmail.com?subject=Luxe&nbsp;III Booking&body=Hi there! Don't forget to include the important details (i.e. Names and Event Date)." className="btn btn-danger" target="_self">Book a date</a>
              </div>
            </div>
          </div>

          <div>
            <div className="card">
              <img src="/static/venue.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Luxe IV</h3>
                  <div className="row card-text">
                    <div className="col-6">
                      <ul>
                        <li><p><span>FULL COVERAGE</span><br/>6 hrs</p></li>
                        <li><p><span>CINEMATOGRAPHERS</span><br/>(2) 5+ yrs experience</p></li>
                        <li><p><span>10 - 15 MINUTE FILM</span><br/>Online + Downloadable</p></li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul>
                        <li><p><span>HIGHLIGHT FILM</span><br/>30 sec - 1 min</p></li>
                        <li><p><span>DELIVERED</span><br/>6 - 8 wks</p></li>
                        <li><p><span>PRICE</span><br/>$4000 - $4200</p></li>
                      </ul>
                    </div>
                  </div>

                <a href="mailto:oncecinemaco@gmail.com?subject=Luxe&nbsp;IV Booking&body=Hi there! Don't forget to include the important details (i.e. Names and Event Date)." className="btn btn-danger" target="_self">Book a date</a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Cards;

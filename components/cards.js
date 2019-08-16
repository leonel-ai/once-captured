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
                    <div className="col col-6">
                      <ul>
                        <li><p><span>8 HR COVERAGE</span><br/>1 Cinematographer</p></li>
                        <li><p><span>2 - 4 MIN FILM</span><br/>Online + Downloadable</p></li>
                        <li><p><span>HIGHLIGHT FILM</span><br/>30 sec Social Media Clip</p></li>
                      </ul>
                    </div>
                    <div className="col col-6">
                      <ul>
                        <li><p><span>DELIVERED</span><br/>4 - 6 weeks</p></li>
                        <li><p><span>PRICE</span><br/>$1500</p></li>
                      </ul>
                    </div>
                  </div>

                <a href="mailto:hi.oncecaptured@gmail.com?subject=Luxe&nbsp;I Booking&body=Hi there! Don't forget to include the important details (i.e. Names and Event Date)." className="btn btn-danger" target="_self">Book a date</a>
              </div>
            </div>
          </div>

          <div>
            <div className="card">
              <img src="/static/pink.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Luxe II</h3>
                  <div className="row card-text">
                    <div className="col col-6">
                      <ul>
                        <li><p><span>10 HR COVERAGE</span><br/>1 Cinematographer</p></li>
                        <li><p><span>4 - 6 MIN FILM</span><br/>Online + Downloadable</p></li>
                        <li><p><span>HIGHLIGHT FILM</span><br/>1 min Social Media Clip</p></li>
                      </ul>
                    </div>
                    <div className="col col-6">
                      <ul>
                        <li><p><span>DELIVERED</span><br/>6 - 8 weeks</p></li>
                        <li><p><span>PRICE</span><br/>$2500</p></li>
                      </ul>
                    </div>
                  </div>

                <a href="mailto:hi.oncecaptured@gmail.com?subject=Luxe&nbsp;II Booking&body=Hi there! Don't forget to include the important details (i.e. Names and Event Date)." className="btn btn-danger" target="_self">Book a date</a>
              </div>
            </div>
          </div>

          <div>
            <div className="card">
              <img src="/static/groomsmen.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Luxe III</h3>
                  <div className="row card-text">
                    <div className="col col-6">
                      <ul>
                        <li><p><span>10 HR COVERAGE</span>
                          <br/>2 Cinematographers
                          <br/>Full Ceremony</p></li>
                        <li><p><span>6 - 8 MIN FILM</span>
                          <br/>Online + Downloadable
                          <br/>1 Edit Request</p></li>
                      </ul>
                    </div>
                    <div className="col col-6">
                      <ul>
                        <li><p><span>HIGHLIGHT FILM</span><br/>1 min Social Media Clip</p></li>
                        <li><p><span>DELIVERED</span><br/>6 - 8 weeks</p></li>
                        <li><p><span>PRICE</span><br/>$4000</p></li>
                      </ul>
                    </div>
                  </div>

                <a href="mailto:hi.oncecaptured@gmail.com?subject=Luxe&nbsp;III Booking&body=Hi there! Don't forget to include the important details (i.e. Names and Event Date)." className="btn btn-danger" target="_self">Book a date</a>
              </div>
            </div>
          </div>

          <div>
            <div className="card">
              <img src="/static/venue.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Luxe IV</h3>
                  <div className="row card-text">
                    <div className="col col-6">
                      <ul>
                        <li><p><span>10 HR COVERAGE</span>
                          <br/>3 Cinematographers
                          <br/>Full Ceremony + Toast</p></li>
                        <li><p><span>8 - 12 MIN FILM</span>
                          <br/>Online + Downloadable
                          <br/>2 Edit Requests</p></li>
                      </ul>
                    </div>
                    <div className="col col-6">
                      <ul>
                        <li><p><span>HIGHLIGHT FILM</span><br/>1 min Social Media Clip</p></li>
                        <li><p><span>DELIVERED</span><br/>8 - 10 weeks</p></li>
                        <li><p><span>PRICE</span><br/>$5500</p></li>
                      </ul>
                    </div>
                  </div>

                <a href="mailto:hi.oncecaptured@gmail.com?subject=Luxe&nbsp;IV Booking&body=Hi there! Don't forget to include the important details (i.e. Names and Event Date)." className="btn btn-danger" target="_self">Book a date</a>
              </div>
            </div>
          </div>

          <div>
            <div className="card">
              <img src="/static/venue.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Add-ons</h3>
                  <div className="row card-text">
                    <div className="col col-12">
                      <ul>
                        <li><p><span>FFA CERTIFIED DRONE FOOTAGE*</span>
                          <br/>2 hrs of filming + 1 Licensed Operator — <b>$500</b>
                          <br/><i>*Weather and FFA Regulations Permitting</i></p></li>
                        <li><p><span>SAVE THE DATE / ENGAGEMENT</span>
                          <br/>2 - 3 hrs shot on location
                          <br/>2 min film + 30 sec invitation with graphics — <b>$500</b></p></li>
                        <li><p><span>PHOTOGRAPHY SERVICES</span>
                          <br/>Available on request</p></li>
                      </ul>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div>
            <div className="card">
              <img src="/static/venue.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Add-ons</h3>
                  <div className="row card-text">
                    <div className="col col-12">
                      <ul>
                        <li><p><span>ADDITIONAL TIME</span>
                          <br/><b>$250</b> first hour + <b>$50</b> per additional hour</p></li>
                        <li><p><span>RAW FOOTAGE</span>
                          <br/>All unedited footage — <b>$200</b></p></li>
                        <li><p><span>TRAVEL DESTINATION PACKAGES,</span>
                          <br/><span>SPECIAL EVENTS, LIVE WEDDING PAINTING,</span>
                          <br/><span>+ FILM PRODUCTION SERVICES</span>
                          <br/>Available upon request</p></li>
                      </ul>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Cards;

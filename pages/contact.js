import React from 'react'
import Head from '../components/head'
import '../styles/style.scss'
import axios from 'axios';

const API_PATH = '/api/contact/contact.php';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      fiance: '',
      email: '',
      date: '',
      location: '',
      phone: '',
      message: '',
      mailSent: false,
      error: null
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        })
      })
      .catch(error => this.setState({ error: error.message }));
  };

  render() {
    return (
      <div className="subpage" id="contact">
        <Head title="ONCE | Contact" />

        <a className="content__back--link" href="/" target="_self"><button className="content__back" aria-label="back to main view"></button></a>

        <div className="form-container">
          <h2 className="form__headline">CONTACT US<br/>AT ONCE</h2>
          <form action="#">
            <label>Your Name *</label>
            <input type="text" id="name" name="name" value={this.state.name} required
              onChange={e => this.setState({ name: e.target.value })} />

            <label>Fiance's Name *</label>
            <input type="text" id="fiance" name="fiance" value={this.state.fiance} required
              onChange={e => this.setState({ fiance: e.target.value })} />

            <label>Your Email *</label>
            <input type="email" id="email" name="email" value={this.state.email} required
              onChange={e => this.setState({ email: e.target.value })} />

            <label>Wedding / Event Date *</label>
            <input type="text" id="date" name="date" value={this.state.date} required
              onChange={e => this.setState({ date: e.target.value })} />

            <label>Venue and City, State *</label>
            <input type="text" id="location" name="location" value={this.state.location} required
              onChange={e => this.setState({ location: e.target.value })} />

            <label>Phone Number</label>
            <input type="tel" id="phone" name="phone" value={this.state.phone}
              onChange={e => this.setState({ phone: e.target.value })} />

            <label>Tell us about yourself!</label>
            <textarea type="text" rows="2" id="message" name="message" value={this.state.message}
              onChange={e => this.setState({ message: e.target.value })}></textarea>

            <input type="submit" value="Send"
              onClick={e => this.handleFormSubmit(e)} />

            {this.state.mailSent &&
              <div>Thank you for contacting us at ONCE!</div>
            }
          </form>
        </div>

      </div>
    )
  }
}

export default Contact

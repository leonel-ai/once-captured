import React from 'react'
import Head from '../components/head'
import '../styles/style.scss'


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
      photographer: '',
      referral: '',
      priority: '',
      message: '',
    }
  }

  handleFormSubmit( event ) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="subpage" id="contact">
        <Head title="ONCE | Contact" />

          <div className="form-container">
          <h2 className="form__headline">CONTACT US AT ONCE</h2>
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

            <label>Who is your photographer?</label>
            <input type="text" id="photographer" name="photographer" value={this.state.photographer}
              onChange={e => this.setState({ photographer: e.target.value })} />

            <label>How did you find us?</label>
            <input type="text" id="referral" name="referral" value={this.state.referral}
              onChange={e => this.setState({ referral: e.target.value })} />

            <label>What's most important to you in your film?</label>
            <input type="text" id="priority" name="priority" value={this.state.priority}
              onChange={e => this.setState({ priority: e.target.value })} />

            <label>Tell us about yourself!</label>
            <textarea type="text" rows="2" id="message" name="message" value={this.state.message}
              onChange={e => this.setState({ message: e.target.value })}></textarea>

            <input type="submit" value="Send"
              onClick={e => this.handleFormSubmit(e)} />

          </form>
          </div>

      </div>
    )
  }
}

export default Contact

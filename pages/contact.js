import React from 'react'
import Head from '../components/head'
import '../styles/style.scss'


const Contact = () => (
  <div className="subpage">
    <Head title="ONCE | Contact" />

    <div className="form-container">
    <h2 className="form__headline">CONTACT US AT ONCE</h2>
    <form action="google.com" method="POST">
      <input type="text" placeholder="Full Name"/>
      {/* <input type="submit"/> */}
    </form>
    </div>

 </div>
)

export default Contact

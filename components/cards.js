import React from 'react'
import Link from 'next/link'
import '../styles/style.scss'

const Cards = () => (
  <div className="card-deck">
    <div className="card">
      <a href="/001">
        <img className="card-img-top" src="/static/rings.jpg" alt="packages" />
        <div className="card-body">
          <h3 className="card-title">LUXE 01</h3>
          <p className="card-text">Partial Coverage</p>
          <p className="card-text">$1000 - $1200</p>
        </div>
      </a>
    </div>
    <div className="card">
      <a href="/002">
      <img className="card-img-top" src="/static/rings.jpg" alt="packages" />
      <div className="card-body">
        <h3 className="card-title">LUXE 02</h3>
        <p className="card-text">Half Day Coverage</p>
        <p className="card-text">$1800 - $2000</p>
      </div>
      </a>
    </div>
    <div className="card">
      <a href="/003">
      <img className="card-img-top" src="/static/rings.jpg" alt="packages" />
      <div className="card-body">
        <h3 className="card-title">LUXE 03</h3>
        <p className="card-text">All Day Coverage</p>
        <p className="card-text">$3200 - $3400</p>
      </div>
      </a>
    </div>
  </div>
)

export default Cards
import React from 'react'
import Link from 'next/link'
import '../styles/style.scss'

const Cards = () => (
  <div className="card-deck">
    <div className="card">
      <img className="card-img-top" src="/static/rings.jpg" alt="packages" />
      <div className="card-body">
        <h5 className="card-title">LUXE 01</h5>
        <p className="card-text">Partial Coverage</p>
        <p className="text-muted">$1000 - $1200</p>
      </div>
    </div>
    <div className="card">
      <img className="card-img-top" src="/static/rings.jpg" alt="packages" />
      <div className="card-body">
        <h5 className="card-title">LUXE 02</h5>
        <p className="card-text">Half Day Coverage</p>
        <p className="text-muted">$1800 - $2000</p>
      </div>
    </div>
    <div className="card">
      <img className="card-img-top" src="/static/rings.jpg" alt="packages" />
      <div className="card-body">
        <h5 className="card-title">LUXE 03</h5>
        <p className="card-text">All Day Coverage</p>
        <p className="text-muted">$3200 - $3400</p>
      </div>
    </div>
  </div>
)

export default Cards
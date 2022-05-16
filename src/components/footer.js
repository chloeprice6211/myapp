import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class footer extends Component {
    render() {
        return (
            <div>
             
  <footer className="d-flex flex-wrap justify-content-between align-items-center border-top footer" style={{postiion:"fixed", bottom:"0px"}}>
    <p className="col-md-4 mb-0 text-muted">© 2022 BNBgame</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg className="bi me-2" width="40" height="32"></svg>
    </a>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Referrals</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Support</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Telegram</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
    </ul>
  </footer>

            </div>
        )
    }
}

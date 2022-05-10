import React from "react"

export default function Header() {
  return (
    <div class="header" id="header">
      <div class="logoHeader">
        <div class="logoHeader-top">
          <div class="logo">
            {/* <img class="companyLogo" src="" alt="logo" /> */}
            <h1 class="companyTitle">Nidavellir</h1>
          </div>
          <div class="buttonHeader">
            <p class="track">Track Order</p>
            <p class="signIn">Sign In & Sign Up</p>
            <p>
              <i class="fa-solid fa-cart-arrow-down"></i>
              <span class="cartText">Cart</span>
            </p>
          </div>
        </div>
        <div class="logoHeader-bottom">
          <div class="logo-list">
            <ul>
              <li>Capabilites</li>
              <li>Industries</li>
              <li>Resources</li>
              <li>Supplies</li>
              <li>Become a Supplier</li>
            </ul>
          </div>
          <div class="logo-contact center">
            <p>
              <i class="fa-solid fa-phone"></i> 9999999999
            </p>
            <button class="getQuote">Get Your Instant Quote</button>
          </div>
        </div>
      </div>
    </div>
  )
}

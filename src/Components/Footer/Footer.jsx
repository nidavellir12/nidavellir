import React from "react"

export default function Footer() {
  return (
    <footer>
      <div class="footer-block">
        <div class="footer-item">
          <div class="footer-item-header">
            <h3>Company</h3>
          </div>
          <div class="footer-item-content">
            <ul>
              <li>
                <a href="#header">About Us</a>
              </li>
              <li>
                <a href="#header">Careers</a>
              </li>
              <li>
                <a href="#header">Press</a>
              </li>
              <li>
                <a href="#header">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-item">
          <div class="footer-item-header">
            <h3>Products</h3>
          </div>
          <div class="footer-item-content">
            <ul>
              <li>
                <a href="#header">Nidavellir</a>
              </li>
              <li>
                <a href="#header">Nidavellir Supplies</a>
              </li>
              <li>
                <a href="#header">Nidavellir Tools</a>
              </li>
              <li>
                <a href="#header">Nidavellir 3D Printing</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom-container">
        <hr />
        <div class="footer-bottom">
          <p>© 2022 Nidavellir, All Rights Reserved</p>
          <div class="socials">
            <li>
              <i class="fa-brands fa-facebook-square"></i>
            </li>
            <li>
              <i class="fa-brands fa-twitter"></i>
            </li>
            <li>
              <i class="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i class="fa-brands fa-linkedin-in"></i>
            </li>
          </div>
        </div>
      </div>
    </footer>
  )
}

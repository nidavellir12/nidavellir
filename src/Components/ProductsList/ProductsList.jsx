import React from "react"
import Cnc from "../../assests/images/CNC Milling.svg"
import Injection from "../../assests/images/Injection Molding.svg"
import Laser from "../../assests/images/Laser Cutting.svg"
import Materials from "../../assests/images/Materials Icon.svg"
import Selective from "../../assests/images/Selective Laser Sintering_SLS.svg"
import Sheet from "../../assests/images/Sheet Metal.svg"
import Waterjet from "../../assests/images/Waterjet Cutting.svg"

export default function ProductsList() {
  return (
    <div class="product-list center">
      <div class="product">
        <h3>CNC Machining</h3>
        <br />
        <img src={Cnc} alt="cnc machining" />
      </div>
      <div class="product">
        <h3>Injection Molding</h3>
        <br />
        <img src={Injection} alt="Injection Molding" />
      </div>
      <div class="product">
        <h3>Laser Cutting</h3>
        <br />
        <img src={Laser} alt="Laser Cutting" />
      </div>
      <div class="product">
        <h3>Buy Materials</h3>
        <br />
        <img src={Materials} alt="Materials Icon" />
      </div>
      <div class="product">
        <h3>3D Printing</h3>
        <br />
        <img src={Selective} alt="Selective Laser Sintering" />
      </div>
      <div class="product">
        <h3>Sheet Metal</h3>
        <br />
        <img src={Sheet} alt="Sheet Metal" />
      </div>
      <div class="product">
        <h3>Waterjet Cutting</h3>
        <br />
        <img src={Waterjet} alt="Waterjet Cutting" />
      </div>
    </div>
  )
}

import "./Logo.css";
import logo from "../../assets/u3.png";
import { NavLink } from "react-router-dom";

   
export default function Logo() {
  return (
    <div className="Logo">  
      <NavLink to="/">
        <img src={logo} alt="logo"></img> 
      </NavLink>
      <div class="stage">
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
</div>
<script>window.setTimeout = null;</script>

      </div>
   
  );
}

import "./Footer.css";
import footer from "../../assets/smile_1.png";
import footer1 from "../../assets/smile_2.png";

export default function Footer() {
  return (
    <div class="example2">
      <div class="row">
        <div class="col-6">
      <div>
        <img src={footer} alt="footer" class="smile1"></img>
        <img src={footer1} alt="footer1" class="smile2"></img>
      </div>
      <div></div>
      </div>
      </div>
    </div>
  );
}

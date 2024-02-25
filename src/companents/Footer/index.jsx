import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="container">
          <div className="footer">
            <h1>BOOKShop</h1>
            {/* <div className="footer1"> */}
            <div className="footer_text1">
              <p>Способ оплаты</p>
              <p>Условия доставки</p>
              <p>Правила покупки</p>
            </div>
            <div className="footer_text2">
              <p>FAQ</p>
              <p>О нас</p>
            </div>
            <div className="footer_text3">
              <p>Связаться с нами:</p>
              <p>+996 222 533 735</p>
              <p>+996 222 533 735</p>
              <p>+996 222 533 735</p>
              <div className="footer_icons">
                <p>
                  <FaSquareInstagram />
                  <FaTelegram />
                  <FaSquareWhatsapp />
                  <FaFacebookSquare />
                </p>
              </div>
            </div>
            <div className="footer_text4">
              <h4>Адрес</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Varius in dolor viverra feugiat <br /> neque, sed in. Mattis
                volutpat malesuada <br /> velit parturient aliquam, est. Mauris
                vitae velit <br /> laoreet faucibus nec amet velit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

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
              <p>+996 771 988 458</p>
              <p>+996 755 744 170</p>
              <p>+996 550 203 004</p>
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
              <h4>Адрес:</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d365.5033823484813!2d74.5969209464882!3d42.87227301987675!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1709403853651!5m2!1sru!2skg"
                style={{
                  width: "120px",
                  height: "100px",
                  border: "0",
                  borderRadius: "20px",
                  allowfullscreen: "",
                  loading: "lazy",
                  referrerpolicy: "no-referrer-when-downgrade",
                  cursor: "pointer",
                  border: "5px solid rgb(30, 30, 44)",
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

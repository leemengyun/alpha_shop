import React from 'react';

//import img
import iconLogo from '../../assets/icons/logo.svg';

//React icons
import { ImFacebook } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className='site-footer'>
      <div className='footer-container'>
        <div className='footer-logo-container'>
          <img
            src={iconLogo}
            alt='icon of Logo'
            className='icon-logo cursor-point'
          />
        </div>
        <section className='footer-section'>
          <h2 className='section-title'>客戶服務</h2>
          <div className='section-content'>
            <a className='page-link' href='foo'>
              運送說明
            </a>
            <a className='page-link' href='foo'>
              退換貨相關
            </a>
            <a className='page-link' href='foo'>
              付款資訊
            </a>
            <a className='page-link' href='foo'>
              FAQ
            </a>
          </div>
        </section>
        <section className='footer-section'>
          <h2 className='section-title'>關於我們</h2>
          <div className='section-content'>
            <a className='page-link' href='foo'>
              品牌故事
            </a>
            <a className='page-link' href='foo'>
              媒體聯繫
            </a>
            <a className='page-link' href='foo'>
              Press kit
            </a>
          </div>
        </section>
        <section className='footer-section'>
          <h2 className='section-title'>資訊</h2>
          <div className='section-content'>
            <a className='page-link' href='foo'>
              隱私權政策
            </a>
            <a className='page-link' href='foo'>
              Cookie
            </a>
            <a className='page-link' href='foo'>
              GDPR
            </a>
          </div>
        </section>
        <section className='footer-section'>
          <h2 className='section-title'>追蹤 ALPHA Shop</h2>
          <div className='section-content'>
            <div className='tel-info'>+886 02123-45678</div>
            <div className='social-icon-group'>
              <i className='icon-facebook social-icon cursor-point'>
                <ImFacebook />
              </i>
              <i className='icon-instagram social-icon cursor-point'>
                <BsInstagram />
              </i>
              <i className='icon-whatsapp social-icon cursor-point'>
                <BsWhatsapp />
              </i>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

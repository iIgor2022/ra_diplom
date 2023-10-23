import React from 'react';

function Contacts() {
  return (
    <section>
      <h5>Контакты:</h5>
      <a href="tel:+7-495-709-35-03" className="footer-contacts-phone">+7 495 79 03 5 03</a>
      <span className="footer-contacts-working-hours">Ежедневно: с 09-00 до 21-00</span>
      <a href="mailto:office@bosanoga.ru" className="footer-contacts-email">office@bosanoga.ru</a>
      <div className="footer-social-links">
        <div className="footer-social-link footer-social-link-twitter" />
        <div className="footer-social-link footer-social-link-vk" />
      </div>
    </section>
  );
}

export default Contacts;

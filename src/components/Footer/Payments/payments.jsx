import React from 'react';

function Payments() {
  return (
    <section>
      <h5>Принимаем к оплате:</h5>
      <div className="footer-pay-systems footer-pay-systems-paypal" />
      <div className="footer-pay-systems footer-pay-systems-master-card" />
      <div className="footer-pay-systems footer-pay-systems-visa" />
      <div className="footer-pay-systems footer-pay-systems-yandex" />
      <div className="footer-pay-systems footer-pay-systems-webmoney" />
      <div className="footer-pay-systems footer-pay-systems-qiwi" />
    </section>
  );
}

export default Payments;

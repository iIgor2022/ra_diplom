import React from 'react';
import Contacts from './Contacts/contacts';
import Copyrights from './Copyrights/copyrights';
import Information from './Information/information';
import Payments from './Payments/payments';
import './footer.css';

function Footer() {
  return (
    <footer className="container bg-light footer">
      <div className="row">
        <div className="col">
          <Information />
        </div>
        <div className="col">
          <Payments />
          <Copyrights />
        </div>
        <div className="col text-right">
          <Contacts />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

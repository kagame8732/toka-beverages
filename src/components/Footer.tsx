import React from 'react';

const Footer: React.FC = () => (
  <>
    <section className="flex justify-around">
      {renderLinksSection("Quick Links", ["Shop", "About us", "Contact us", "Faqs"])}
      {renderLinksSection("Other links", ["My Account", "Cart", "Orders", "Checkout"])}
      {renderLinksSection("Products", ["Gypson’s Pink", "Gypson’s Gin", "Glen Moray", "Perlino Rose"])}
      {renderLinksSection("Follow Us", ["Instagram", "Facebook", "Twitter", "Youtube"])}
    </section>
    <section>
      <div className="flex justify-end pr-10">
        <img src="/images/visa.png" alt="" />
        <img src="/images/mastercard.png" alt="" />
        <img src="/images/mtn.png" alt="" />
      </div>
    </section>
    <section className="text-center">
      <p>&copy; All right reserved TOKA Beverages</p>
    </section>
  </>
);

const renderLinksSection = (title: string, links: string[]) => (
  <section key={title}>
    <p>{title}</p>
    <ul>
      {links.map((link) => (
        <li key={link}>{link}</li>
      ))}
    </ul>
  </section>
);

export default Footer;


import React from 'react';

const Footer: React.FC = () => (
  <>
    <section className="flex justify-around bg-[#F3F3F3] p-12 font-poppins opacity-80">
      {renderLinksSection("Quick Links", ["Shop", "About us", "Contact us", "Faqs"])}
      {renderLinksSection("Other links", ["My Account", "Cart", "Orders", "Checkout"])}
      {renderLinksSection("Products", ["Gypson’s Pink", "Gypson’s Gin", "Glen Moray", "Perlino Rose"])}
      {renderLinksSection("Follow Us", ["Instagram", "Facebook", "Twitter", "Youtube"])}
    </section>
    <section>
      <div className="flex justify-end bg-[#F3F3F3] gap-8 p-4">
        <img src="/images/visa.png" alt="visa-logo" className='w-[48px] h-[32px]' />
        <img src="/images/mastercard.png" alt="mastercard-logo" className='w-[48px] h-[32px]' />
        <img src="/images/mtn.png" alt="MTN-logo" className='w-[48px] h-[32px]' />
      </div>
    </section>
    <section className="text-center bg-[#EDEDED] p-6">
      <p className='font-poppins'>&copy; All right reserved TOKA Beverages</p>
    </section>
  </>
);

const renderLinksSection = (title: string, links: string[]) => (
  <section key={title}>
    <p className=' font-bold'>{title}</p>
    <ul>
      {links.map((link) => (
        <li key={link}>{link}</li>
      ))}
    </ul>
  </section>
);

export default Footer;


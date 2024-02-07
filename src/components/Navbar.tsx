import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const HomeLinks = [
    {
      label: 'Welcome',
      link: '/',
    },
    {
      label: 'About',
      link: '/about',
    },
    {
      label: 'Our Brands',
      link: '/our-brands',
    },
    {
      label: 'Contact us',
      link: '/contact',
    },
  ];

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" w-full flex flex-row py-2 justify-center items-center gap-4 relative">
      <div className="sm:hidden">
        {isMenuOpen ? (
          <IoMdClose
            className="absolute cursor-pointer right-0 top-[-80px]"
            onClick={toggleMenu}
          />
        ) : (
          <FaBars
            className="absolute cursor-pointer right-0 top-[-80px]"
            onClick={toggleMenu}
          />
        )}
      </div>
      <div className= {`${isMenuOpen ? "block" : "hidden"} sm:hidden bg-slate-200 p-4 top-[-55px] z-50 right-0 flex-col absolute flex gap-4 justify-center sm:items-center`}>
        {HomeLinks.map((link, index) => (
          <a
            href={link.link}
            key={index}
            className="uppercase text-sm hover:font-extrabold transition ease-in-out"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className= "sm:flex  gap-4 justify-center sm:items-center hidden">
        {HomeLinks.map((link, index) => (
          <a
            href={link.link}
            key={index}
            className="uppercase text-sm hover:font-extrabold transition ease-in-out"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

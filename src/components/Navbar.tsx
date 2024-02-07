import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const HomeLinks = [
        {
            label: "Welcome",
            link: "/"
        },
        {
            label: "About",
            link: "/about"
        },
        {
            label: "Our Brands",
            link: "/our-brands"
        },
        {
            label: "Contact us",
            link: "/contact"
        }
    ]

    return (
        <div className='flex py-2 justify-center gap-4 items-center'>
            {
                HomeLinks.map((links, index) => (
                    <a href={links.link} key={index} className="uppercase text-sm">
                        {
                            links.label
                        }
                    </a>
                ))
            }
            <FaBars className="" />
        </div>
    )
}

export default Navbar
// import React, { useState } from "react";
// import { FaBars } from "react-icons/fa";

// const Navbar = () => {
//   const HomeLinks = [
//     {
//       label: "Welcome",
//       link: "/",
//     },
//     {
//       label: "About",
//       link: "/about",
//     },
//     {
//       label: "Our Brands",
//       link: "/our-brands",
//     },
//     {
//       label: "Contact us",
//       link: "/contact",
//     },
//   ];

//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 375);
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState<Boolean>(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const handleResize = () => {
//     setIsSmallScreen(window.innerWidth <= 375);
//   };

//   React.useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className="flex py-2 justify-center sm:justify-between gap-4 items-center">
//       {isSmallScreen && (
//         <div onClick={toggleMobileMenu}>
//           <FaBars />
//         </div>
//       )}

//       <div
//         className={`sm:flex ${
//           isSmallScreen ? (isMobileMenuOpen ? "flex" : "hidden") : "flex"
//         } sm:flex-row flex-col py-2 sm:gap-4 items-center`}
//       >
//         {HomeLinks.map((links, index) => (
//           <a href={links.link} key={index} className="uppercase text-sm">
//             {links.label}
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

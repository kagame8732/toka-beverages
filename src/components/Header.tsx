import { IoIosCall } from "react-icons/io";
import { FaTwitter, FaFacebookF, FaUser } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { Link } from 'react-router-dom'
import Search from "./Search";
import Cart from "./Cart";
import Navbar from "./Navbar";


function Header() {
    const socialmedia = [
        {
            name: <FaFacebookF />,
            link: "https://facebook.com"
        },
        {
            name: <FaTwitter />,
            link: "https://twitter.com"

        },
        {
            name: <PiInstagramLogoFill />,
            link: "https://facebook.com"
        },
        {
            phone: "(+250) 78 123 132",
            link: "#"
        }
    ]

    return (
        <header className="w-full h-full text-[#505050] font-poppins font-light text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    {socialmedia.map((socialmedias) => (
                        <div>
                            <a href={socialmedias.link}>
                                {socialmedias.phone ? (
                                    <div className="flex items-center">
                                        <IoIosCall />
                                        {socialmedias.phone}
                                    </div>
                                ) : socialmedias.name}
                            </a>
                        </div>
                    ))}
                </div>
                <Search />
                <div className="flex justify-between gap-8 ">
                    <ul className="">
                        <Link to="/login" className="flex items-center gap-2">
                            <FaUser />
                            Login
                        </Link>
                    </ul>
                    <Cart />
                </div>
            </div>
            <div className="grid py-4 place-items-center">
                <img src="/images/logo.png" alt="" />
            </div>
            <div>
             <Navbar />
            </div>
        </header>
    )
}

export default Header

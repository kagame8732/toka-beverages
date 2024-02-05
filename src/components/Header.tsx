import { IoIosCall } from "react-icons/io";
import { FaTwitter, FaFacebookF, FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

function Header() {
    return (
        <header className="w-full h-full bg-orange-300">
            <div className="flex">
                <div className="flex ">
                    <FaTwitter />
                    <FaFacebookF />
                    <PiInstagramLogoFill />
                    <div className="">
                        <p className=" text-gray-700"><IoIosCall />(250) 78 123 132</p>
                    </div>
                </div>
                <div>
                    <input className=" w-full h-5 px-4 py-2 border rounded-sm focus:outline-none focus:ring focus:border-blue-300" type="search" placeholder="What are you looking for?" />
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to="/login">
                                <FaUser />
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart">
                                <FaBriefcase />
                                Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <img src={logo} alt="" />
                <img src={logo} alt="" />
            </div>
            <div>
                <ul>
                    <li>
                        <Link to='/welcome'>Welcome</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/brand'>Our brands</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact us</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header

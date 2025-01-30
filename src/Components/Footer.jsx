import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Footer details */}

        <div>
          <Link to="/">
            <h1 id="logo" className="text-3xl text-[#482574]">
              Art Of Spirits
            </h1>
            <div className="w-full md:w-2/3 text-gray-600">
              <h2 className="flex items-center gap-2 mb-2 mt-5">
                <HiOutlineMail />
                artofspirit@gmail.com
              </h2>
              <h4>&copy; David Raoof | All Rights Reserved</h4>
            </div>
          </Link>
        </div>

        {/* Footer Links */}

        <div>
          <p className="text-xl font-medium mb-5">LINKS</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <Link to="/" className="hover:text-gray-800">
              <p>HOME</p>
            </Link>

            <Link to="/collection" className="hover:text-gray-800 transition duration-300">
              <p>COLLECTION</p>
            </Link>

            <Link to="/about" className="hover:text-gray-800 transition duration-300">
              <p>ABOUT</p>
            </Link>

            <Link to="/contact" className="hover:text-gray-800 transition duration-300">
              <p>CONTACT</p>
            </Link>
          </ul>
        </div>

        {/* social links */}

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+2012000000000</li>
            <li>+2012000000000</li>
            <li className="hover:text-gray-800 transition duration-300"><a href="https://www.instagram.com/artofspirit_eg/" target="_blank">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

// "use client"
// import { IoSearchOutline } from "react-icons/io5";
// import { RiContactsLine } from "react-icons/ri";
// import { IoIosHeartEmpty } from "react-icons/io";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { FaBars } from "react-icons/fa6";
// import { useState } from "react";

// const Snavbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white text-black w-full fixed top-0 left-0 w z-50">
//       <div className="max-w-[1440px] h-[100px] mx-auto px-4 flex justify-between items-center">
//         {/* Centered Links */}
//         <ul className="hidden md:flex gap-8 text-lg font-medium mx-auto">
//           <a  className="cursor-pointer hover:text-gray-700" href="/#">Home</a>
//           <a   className="cursor-pointer hover:text-gray-700" href="/shop">Shop</a>
//           <a   className="cursor-pointer hover:text-gray-700" href="blog">Blog</a>
//           <a   className="cursor-pointer hover:text-gray-700" href="/contact">Contact</a>
         
//         </ul>

//         {/* Right Side Icons */}
      
//         <div className="flex gap-4 items-center">
//         <RiContactsLine  className="flex gap-4 items-center"/>
//         <IoSearchOutline className="text-xl cursor-pointer" />
//         <IoIosHeartEmpty  className="text-xl cursor-pointer"/>
//         <AiOutlineShoppingCart className="text-xl cursor-pointer" />
          
//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-xl"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <FaBars />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <ul className="md:hidden bg-[#FBEBB5] text-black flex flex-col items-center gap-4 py-4">
//                        <a  className="cursor-pointer hover:text-gray-700" href="/#">Home</a>
//           <a   className="cursor-pointer hover:text-gray-700" href="/shop">Shop</a>
//           <a   className="cursor-pointer hover:text-gray-700" href="blog">Blog</a>
//           <a   className="cursor-pointer hover:text-gray-700" href="/contact">Contact</a>
         
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Snavbar;
"use client"
 
//  // Import necessary dependencies
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion"; // Add framer-motion for animations

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black w-full fixed top-0 left-0 z-50">
      <div className="max-w-[1440px] h-[100px] mx-auto px-4 flex justify-between items-center">
        {/* Centered Links */}
        <ul className="hidden md:flex gap-8 text-lg font-medium mx-auto">
          <a className="cursor-pointer hover:text-gray-700" href="/#">Home</a>
          <a className="cursor-pointer hover:text-gray-700" href="/shop">Shop</a>
          <a className="cursor-pointer hover:text-gray-700" href="/blog">Blog</a>
          <a className="cursor-pointer hover:text-gray-700" href="/contact">Contact</a>
        </ul>

        {/* Right Side Icons */}
        <div className="flex gap-4 items-center">
          <Link href="/myacc">
            <RiContactsLine className="flex gap-4 items-center" />
          </Link>
          <IoSearchOutline className="text-xl cursor-pointer" />
          <IoIosHeartEmpty className="text-xl cursor-pointer" />
          <Link href={"/mycart"}>
          <AiOutlineShoppingCart className="text-xl cursor-pointer" />
          </Link>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.ul
          className="md:hidden bg-white text-black flex flex-col items-center gap-4 py-4"
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
        >
           <a className="cursor-pointer hover:text-gray-700" href="/#">Home</a>
          <a className="cursor-pointer hover:text-gray-700" href="/shop">Shop</a>
          <a className="cursor-pointer hover:text-gray-700" href="/blog">Blog</a>
          <a className="cursor-pointer hover:text-gray-700" href="/contact">Contact</a>
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;

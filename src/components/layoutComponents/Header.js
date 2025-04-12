import NavLink from "../baseComponents/NavLink";

const Header = () => {
  return (<nav className=" w-full shadow-lg flex flex-wrap justify-between">
            <img className="h-8 px-4"  src="https://fabric-wash-website.s3.ap-south-1.amazonaws.com/cropped-fabricwash-logo.png"/>
            <ul className="flex my-auto font-bold pr-8">
            <NavLink name="Home" link=""/>
              <NavLink name="Add data" link="add-data"/>
              <NavLink name="about"/>
              <NavLink name="contact"/>
              <NavLink  name="price list"/>
            </ul>
          </nav>)
}

export default Header;

// import { LOGO_URL } from "../utils/constants";
// import { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
// import { useSelector } from "react-redux";

// const Header = () => {
//   const [btnNameReact, setBtnNameReact] = useState("Login");

//   const onlineStatus = useOnlineStatus();

//   const { loggedInUser } = useContext(UserContext);
//   //console.log(loggedInUser);

//   // Subscribing to the store using a Selector
//   const cartItems = useSelector((store) => store.cart.items);
//   //console.log(cartItems);

//   return (
//     <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
//       <div className="logo-container">
//         <img className="w-56" src={LOGO_URL} />
//       </div>
//       <div className="flex items-center">
//         <ul className="flex p-4 m-4">
//           <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
//           <li className="px-4">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="px-4">
//             <Link to="/about">About Us</Link>
//           </li>
//           <li className="px-4">
//             <Link to="/contact">Contact Us</Link>
//           </li>
//           <li className="px-4">
//             <Link to="/grocery">Grocery</Link>
//           </li>
//           <li className="px-4 font-bold text-xl">
//             <Link to="/cart">Cart - ({cartItems.length} items)</Link>
//           </li>
//           <button
//             className="login"
//             onClick={() => {
//               btnNameReact === "Login"
//                 ? setBtnNameReact("Logout")
//                 : setBtnNameReact("Login");
//             }}
//           >
//             {btnNameReact}
//           </button>

//           <li className="px-4 ">{loggedInUser}</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;

import { Link } from "react-router-dom";

const NavLink = ({name , link}) => {
    return (
        <li className="px-2 ">
            <Link to={link}>{name}</Link>       
        </li>
    )
}

export default NavLink;
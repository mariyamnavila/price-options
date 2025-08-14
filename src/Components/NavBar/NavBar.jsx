import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";

const NavBar = () => {

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/blog", name: "Blog" },
        { id: 5, path: "/contact", name: "Contact" }
    ];



    return (
        <nav>
            <RiMenu2Line className="text-2xl md:hidden"/>
            <ul className="md:flex ">
                {
                    routes.map(route => <Link route={route}></Link> )
                }
            </ul>
        </nav>
    );
};

export default NavBar;
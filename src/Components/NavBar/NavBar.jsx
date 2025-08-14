import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";


const NavBar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/blog", name: "Blog" },
        { id: 5, path: "/contact", name: "Contact" }
    ];



    return (
        <nav className="text-white">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true
                        ? <AiOutlineClose className="text-2xl " />
                        : <RiMenu2Line className="text-2xl " />
                }
            </div>
            <ul className={`md:flex duration-1000 absolute md:static ${open?'top-16':'-top-60'} bg-black px-5 py-3 ml-2 rounded-xl `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;
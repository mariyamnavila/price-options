const Link = ({route}) => {
    return (
        <li className="mr-10 hover:bg-slate-800 px-2 rounded-lg" key={route.id}><a href={route.path}>{route.name}</a></li>
    );
};

export default Link;

import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


export default function NavTab({page}){
    const location = useLocation();
    const active = location.pathname == `/${page.toLowerCase()}`;
    return(
        <Link 
        to={`/${page.toLowerCase()}`} 
        className={`w-full p-3 mb-2 mt-2 rounded-lg ${active ? 'text-white bg-slate-800' : 'text-black' }`}>

            {page}
        </Link>
    )
}
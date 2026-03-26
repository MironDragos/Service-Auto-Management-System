
import { Link } from "react-router-dom";

export default function NavTab({page}){
    return(
        <Link to={`/${page.toLowerCase()}`} className="w-full p-3 bg-slate-600 mb-4">
            {page}
        </Link>
    )
}
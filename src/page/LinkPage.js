import {Link} from "react-router-dom";
const LinkPage =()=>{
    return(
        <div>
            <nav>
                <ul>
                <li>

                

                <Link to="/">Home</Link>
                </li>
                <li>

                <Link to="/AboutUs">AboutUs</Link>
                </li>
                
                </ul>
            </nav>
        </div>
    )
}

export default LinkPage;
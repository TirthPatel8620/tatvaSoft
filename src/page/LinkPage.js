import {Link} from "react-router-dom";
const LinkPage =()=>{
    return(
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/AboutUs">AboutUs</Link>
            </nav>
        </div>
    )
}

export default LinkPage;
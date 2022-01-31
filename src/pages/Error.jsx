import {Link} from "react-router-dom"
import img from "../assets/images/not-found.svg"
import Wrapper from "../assets/wrappers/ErrorPage";


function Error() {
  return <Wrapper className="full-page">
      <div className="">
          <img src={img} alt="Not Found" />
          <h1>Ohhh! Page Not Found</h1>
          <p>We can't seems to find the page you'relooking for</p>
          <Link to="/">Back Home</Link>
      </div>
  </Wrapper>;
}

export default Error;

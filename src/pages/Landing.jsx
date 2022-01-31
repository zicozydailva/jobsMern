import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import {Logo} from "../components"

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
        <div className="page container">
          <div className="info">
            <h1>
              Job <span>Tracking</span> App
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis reiciendis numquam repudiandae mollitia reprehenderit
              alias architecto sapiente earum rem distinctio labore ipsum qui
              porro aperiam, doloremque omnis ex, iusto id sunt, illum
              consequuntur obcaecati. Ex nulla dicta odit amet officia?
            </p>
            <button className="btn btn-hero">Login/Register</button>
          </div>
          <img src={main} alt="Job hunt" className="img main-img" />
        </div>
    </Wrapper>
  );
};

export default Landing;

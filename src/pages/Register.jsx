import {useEffect, useState} from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import {useNavigate} from "react-router-dom"

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialState);
  //   const [showAlert, setShowAlert] = useState(false)
  // global state and useNavigate
  const {user, isLoading, showAlert, displayAlert, registerUser, loginUser} = useAppContext()
  const toggleMember = () => {
      setValues({...values, isMember: !values.isMember})
  }

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, password, isMember} = values;
    if(!email || !password || (!isMember && !name)) {
      displayAlert()
      return;
    }
    const currentUser = {name, email, password}
     if(isMember) {
       loginUser(currentUser)
     } else {
       registerUser(currentUser)
     }
  };

  useEffect(() => {
    if(user) {
      setTimeout(() => {
        navigate("/")
      }, 3000)
    }
  }, [user, navigate])

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}

        {/* Name input */}
        {
            !values.isMember &&  <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        }
       
        {/* Email input */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* Password input */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          submit
        </button>
        <p>
            {
                values.isMember ? "Not a member yet?" : "Already a member?"
            }
            <button type="button" onClick={toggleMember} className="member-btn">
                {
                    values.isMember ? "Register" : "Login"
                }
            </button>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;

import React, { useRef, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./styles/formstyle.css";


const Form = () => {

    const [component, setComponent] = useState(<Login />);

    const classRegister = useRef();
    const classLogin = useRef();

    const registerHandler = () => {
        setComponent(<Register />);
        classRegister.current.classList.add("active-form-btn");
        classLogin.current.classList.remove("active-form-btn")
    }

    const loginHandler = ()=>{
        setComponent(<Login />)
        classLogin.current.classList.add("active-form-btn");
        classRegister.current.classList.remove("active-form-btn");
    }


    
    return (
        <div className="total-form">
            <div className="form-btn">
                <button ref={classRegister} onClick={registerHandler} className="register-btn">ثبت نام</button>
                <button ref={classLogin} onClick={loginHandler} className="login-btn active-form-btn">ورود</button>
            </div>
            <div className="total-component">{component}</div>
        </div>
    )
}

export default Form;



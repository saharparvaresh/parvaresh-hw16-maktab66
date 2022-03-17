import React, { useState } from "react";
import "./styles/formstyle.css";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
    const [passEye, setPassEye] = useState(false);
    const [typePass, setTypePass] = useState("password");
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");

    const [isMassage, setIsMassage] = useState(true);

    const onClickHandler = () => {
        setPassEye(true);
        setTypePass("text");
    }
    const offClickHandler = () => {
        setPassEye(false);
        setTypePass("password");
    }

    let passEyeComponent = <FiEyeOff className="passeye-form" color="#ffffff"/>;
    if (passEye) {
        passEyeComponent = <FiEye className="passeye-form" color="#ffffff" onClick={offClickHandler}/>;
    } else {
        passEyeComponent = <FiEyeOff className="passeye-form" color="#ffffff" onClick={onClickHandler}/>;
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const passHandler = (e) => {
        setPass(e.target.value);
    }

    const submitHandler = () => {
        if (email === "" || pass === "") {
            setIsMassage(isMassage);
        }
        else {
            setIsMassage(!isMassage);
        }
    }
    
    let massage;
    if (isMassage) {
        massage = "فیلد های زیر ضروری هستند";
    } else {
        massage = "خوش آمدید"
    }




    return (
        <>
            <h1 className="title-form">{massage}</h1>
            <form>
                <input className="input-form" type="email" placeholder="پست الکترونیک *" required value={email} onChange={emailHandler} />
                <label className="pass-label-form">
                    <input className="input-form pass-form" type={typePass} placeholder="کلمه عبور *" required value={pass} onChange={passHandler} />
                    {passEyeComponent}
                </label>
            </form>
            <a className="forgot-link" href="#">فراموش کردید؟</a>
            <button className="submit-form" type="submit" onClick={submitHandler}>ورود</button>
        </>
    )
}


export default React.memo(Login);


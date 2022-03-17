import React, { useState } from "react";
import "./styles/formstyle.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Iranstate from "./iranstates.json";

const Register = () => {

    const [eduSelect, setEduSelect] = useState("");
    const [stateSelect, setStateSelect] = useState("");
    const [passEye, setPassEye] = useState(false);
    const [typePass, setTypePass] = useState("password");
    let indexState = Object.keys(Iranstate).indexOf(stateSelect);
    let cityObject = Object.values(Iranstate);
    let citySelect;


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");


    const [isMassage, setIsMassage] = useState(true);


    const firstNameHandler = (e) => {
        setFirstName(e.target.value);
    }
    const lastNameHandler = (e) => {
        setLastName(e.target.value);
    }
    const emailHandler = (e) => {
        setEmail(e.target.value);
    }
    const passHandler = (e) => {
        setPass(e.target.value);
    }



    const onClickHandler = () => {
        setPassEye(true);
        setTypePass("text");
    }
    const offClickHandler = () => {
        setPassEye(false);
        setTypePass("password");
    }

    let passEyeComponent = <FiEyeOff className="passeye-form" color="#ffffff" />;
    if (passEye) {
        passEyeComponent = <FiEye className="passeye-form" color="#ffffff" onClick={offClickHandler} />;
    } else {
        passEyeComponent = <FiEyeOff className="passeye-form" color="#ffffff" onClick={onClickHandler} />;
    }

    const eduSelectHandler = (e) => {
        setEduSelect((prevState)=>{
            prevState = e.target.value;
            return prevState;
        })
    }
    let eduInput;
    if (eduSelect !== "") {
        eduInput = <input className="input-form" type="text" placeholder="محل تحصیل" />
    }

    


    const stateSelectHandler = (e) => {
        setStateSelect((prevState)=>{
            prevState = e.target.value;
            return prevState;
        })
    }
    if (stateSelect !== "") {
        citySelect = cityObject[indexState];
    }

    
    const submitHandler = () => {
        if (firstName === "" || lastName === "" || email === "" || pass === "" || eduSelect === "") {
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
        massage = "ثبت نام با موفقیت آمیز انجام شد"
    }



    return (
        <>
            <h1 className="title-form">رایگان ثبت نام کنید</h1>
            <h5 className="title-form">{massage}</h5>
            <form>
                <label className="half-label-form">
                    <input className="half-input-form input-form" type="text" placeholder="نام *" required value={firstName} onChange={firstNameHandler} />
                    <input className="half-input-form input-form" type="text" placeholder="نام خانوادگی *" required value={lastName} onChange={lastNameHandler} />
                </label>
                <input className="input-form" type="email" placeholder="پست الکترونیک *" required value={email} onChange={emailHandler} />
                <label className="pass-label-form">
                    <input className="input-form pass-form" type={typePass} placeholder="کلمه عبور *" required value={pass} onChange={passHandler} />
                    {passEyeComponent}
                </label>
                <select className="input-form" value={eduSelect} onChange={eduSelectHandler}>
                    <option className="edu-select-form disabled-edu-select-form" value="">تحصیلات *</option>
                    <option className="edu-select-form" value="diploma">دیپلم</option>
                    <option className="edu-select-form" value="associate Degree">فوق دیپلم</option>
                    <option className="edu-select-form" value="bachelor">لیسانس</option>
                    <option className="edu-select-form" value="master">فوق لیسانس</option>
                    <option className="edu-select-form" value="phd">دکترا</option>
                </select>
                {eduInput}
                <select className="input-form" value={email} onChange={stateSelectHandler}>
                    <option className="edu-select-form disabled-edu-select-form" value="">انتخاب استان *</option>
                    {Object.keys(Iranstate).map((v,i)=>{
                        return <option key={i} className="edu-select-form">{v}</option>
                    })}
                </select>
                <select className="input-form" value={email} onChange={emailHandler}>
                    <option className="edu-select-form disabled-edu-select-form" value="">انتخاب شهر *</option>
                    {stateSelect !== "" ? citySelect.map((v,i)=>{
                        return <option key={i} className="edu-select-form">{v}</option>
                    }) : ""}
                </select>
            </form>
            <button className="submit-form" type="submit" onClick={submitHandler}>ثبت نام</button>
        </>
    )
}


export default Register;



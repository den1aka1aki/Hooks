import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    const [text, setText] = useState("Войти");
    const [func, setFunc] = useState(() => onLogin);
    useEffect(() => {
    if (isAuth) {
    setFunc(() => onLogOut);
    setText("Выйти из системы");
        console.log("выход");
    } else {
       setFunc(() => onLogin);
       setText("Войти");
        console.log("вход");
    }
    });
    return (
        <div>
            <button className='btn btn-primary' onClick={func}>{text}</button>
        </div>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};
export default SimpleComponent;

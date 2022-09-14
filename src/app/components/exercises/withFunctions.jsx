import React from "react";
import CardWrapper from "../common/Card";

const WithFunctions = (Component) => (props) => {
const isAuth = window.localStorage.getItem("token")?.length > 0;
const onLogin = () => {
    window.localStorage.setItem("token", "token");
};
const onLogOut = () => {
    window.localStorage.removeItem("token");
};
    return (
        <CardWrapper>
            <Component
                {...props}
                onLogin = {onLogin}
                onLogOut = {onLogOut}
                isAuth = {isAuth}
            />
        </CardWrapper>
    );
};

export default WithFunctions;

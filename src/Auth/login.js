import React from "react";
import "./login.css";
import Joinnow from "./Joinnow";
import Signin from "./Signin";
import Content from "./Content";
const Login = (props) => {
    return (
        <main >
            <nav >
                <a href="/">
                    <img className="w-100 h-100"  src="/images/images-removebg-preview.png" alt="" />
                </a>
                <div className="btns-right">
                    <div className="nav_join">
                    <Joinnow />
                    </div>
                    <div className="nav_Signin">
                    <Signin />
                    </div>
                </div>
            </nav>
            <section>
            <Content />
            </section>
        </main>
    )
};
// const Container = styled.div``;
// const Nav = styled.nav``;
export default Login;
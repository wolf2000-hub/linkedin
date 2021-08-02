import React from "react";
import "./Content.css"
const Content = () => {
    return (
        <main>
            <div className="Content_section w-100">
                <h1>Welcome to your professional Community</h1>
              <img className="img-fluid Content_img" src="./images/Login.png" alt=""/>
              <div className="Content_Login text-center w-100" >
                  <button className="Content_Login_btn">
                      <img src="./images/google.svg" alt="" />
                          <span>
                              Signin With Google 
                          </span> 
                  </button>
              </div>
            </div>
        </main>
    )
};
export default Content;
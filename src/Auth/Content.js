import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth } from "../firebase";
import "./Content.css";

const Content = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await auth.signInWithEmailAndPassword(email, password);
      /* تمامی اطلاعاتی مشخص شده ای رو که ما تو فیلد هامون پر میکنیم رو به فایر بیس ارجا میده */
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: userAuth.user.photoURL,
        })
      );
    } catch (error) {
      alert(error);
    }
  };

  const registerHandler = async () => {
    if (!name) {
      return alert("Please enter a full name!");
    }
    /* When we are Create a User Account we use firebase Auth ( createUserWithEmailAndPassword ) */
    try {
      const userAuth = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await userAuth.user.updateProfile({
        displayName: name,
        photoUrl: profilePic,
      });
      /*  Firebase FieldValue  */
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: profilePic,
        })
      );
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return (
    <main>
      <div className="Content_section">
        <h1>Welcome to your professional Community</h1>
        <img
          className="img-fluid Content_img"
          src="./images/Login.png"
          alt=""
        />

        <div className="login Content_Login text-center">
          <form>
            <input
              placeholder="Full name (required for register)"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder="Profile pic URL (optional)"
              type="text"
              value={profilePic}
              onChange={(e) => setProfilePic(e.target.value)}
            />

            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="shadow-sm" type="submit" onClick={loginHandler}>
              Sign In
            </button>
          </form>
          <p>
            Not a member?{" "}
            <span className="login__register" onClick={registerHandler}>
              Register Now
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};
export default Content;

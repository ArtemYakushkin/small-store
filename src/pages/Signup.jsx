import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { auth } from "../firebase.config";
import { storage } from "../firebase.config";
import { db } from "../firebase.config";

import Helmet from "../components/Helmet";
import Loader from "../components/Loader";
import "../style/auth.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Создаем пользователя в Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      // Загружаем файл в Firebase Storage
      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      try {
        await uploadTask;
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        await updateProfile(user, {
          displayName: username,
          photoURL: downloadURL,
        });

        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          displayName: username,
          email,
          photoURL: downloadURL,
        });

        setLoading(false);
        toast.success("Account created!");
        navigate("/login");
      } catch (error) {
        toast.error(`Upload or Firestore error: ${error.message}`);
        setLoading(false);
        console.error("Error during signup:", error);
      }
    } catch (error) {
      toast.error(`Create user error: ${error.message}`);
      setLoading(false);
      console.error("Error during signup:", error);
    }
  };

  return (
    <Helmet title="Signup">
      <section className="auth">
        <div className="container">
          {loading ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Loader />
            </div>
          ) : (
            <form className="auth__form" onSubmit={signup}>
              <div
                className="subtitle-box"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <span className="subtitle-line"></span>
                <p className="subtitle">Signup</p>
              </div>
              <input
                className="form-input"
                type="text"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="form-input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="form-input"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="form__file" htmlFor="fileInput">
                Add an avatar picture
                <span>
                  <i class="ri-file-add-line"></i>
                </span>
              </label>
              <input
                id="fileInput"
                type="file"
                accept="image/*, .png, .jpg, .gif, .web"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
              <button className="auth__btn btn-bay" type="submit">
                Signup
              </button>
              <p className="auth__text">
                Already have an account?{" "}
                <span>
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </form>
          )}
        </div>
      </section>
    </Helmet>
  );
};

export default Signup;

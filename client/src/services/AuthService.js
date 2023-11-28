import axios from "axios";
import toast from "react-hot-toast";
import { userLogin } from "../redux/features/Auth/AuthAction";
import store from "../redux/store";

/* export const handleRegister = async (
  e,
  name,
  email,
  password,
  phone,
  answer
) => {
  e.preventDefault();
  try {
    store.dispatch(
      userRegister({
        name,
        email,
        password,
        phone,
        answer,
      })
    );
  } catch (error) {
    console.log(error);
  }
}; */

export const handleLogin = (email, password) => {
  try {
    if (!email || !password) {
      return alert("Please Privde All Feilds");
    }
    store.dispatch(userLogin({ email, password }));
  } catch (error) {
    console.log(error);
  }
};

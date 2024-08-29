import { useState } from "react";
import { useNavigate } from "react-router";
import store from "../../redux/store";
import { userRegister } from "../../redux/features/Auth/AuthAction";
import FormInput from "./FormInput";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    answer: "",
  });

  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Full Name",
      errorMessage: "Name is required and should be 3-16 characters!",
      label: "Full Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
      required: true,
    },
    {
      id: 3,
      name: "phone",
      type: "text",
      placeholder: "Phone Number",
      errorMessage: "Phone number should be 10 digits!",
      label: "Phone Number",
      pattern: "^[0-9]{10}$",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password, // Ensures it matches the password
      required: true,
    },
    {
      id: 6,
      name: "answer",
      type: "text",
      placeholder: "Your Favourite Sport",
      errorMessage: "Please provide an answer!",
      label: "Favourite Sport",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    /* if (values.password !== values.confirmPassword) {
      alert("Passwords do not match!");
      return;
    } */
    store.dispatch(userRegister(values));
    navigate("/success");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-full flex flex-col justify-center px-6 py-12 lg:px-8 mt-28">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-auto"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Jamshedpur_FC_logo.svg/1200px-Jamshedpur_FC_logo.svg.png"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100">
          Register
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

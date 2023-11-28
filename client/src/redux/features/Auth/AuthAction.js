import { createAsyncThunk } from "@reduxjs/toolkit";

import toast from "react-hot-toast";
import API from "../../../services/API";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { email, password });
      //store token
      if (data.success) {
        toast.success("login successfully");
        localStorage.setItem("token", data.token);
        window.location.replace("/");
      }

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userRegister = createAsyncThunk(
  "auth/register",
  async ({ name, email, password, phone, answer }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/register", {
        name,
        email,
        password,
        phone,
        answer,
      });
      //store token
      if (data.success) {
        toast.success("Register successfully");

        window.location.replace("/login");
      }

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/current-user",
  async ({ rejectWithValue }) => {
    try {
      const res = await API.get("/auth/current-user");

      if (res?.data) {
        return res?.data;
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

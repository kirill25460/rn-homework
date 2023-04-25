import { auth } from "../../firebase/config";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const authSignUpUser =
  ({ email, password, nickname }) =>
  async (
    dispatch,

    getState
  ) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      console.log(res);
    } catch (error) {
      console.log("error", error);

      console.log("error.message", error.message);
    }
  };

export const authSignInUser =
  ({ email, password }) =>
  async (
    dispatch,

    getState
  ) => {
    try {
      const user = await signInWithEmailAndPassword(email, password);

      console.log("user", user);
    } catch (error) {
      console.log("error", error);

      console.log("error.code", error.code);

      console.log("error.message", error.message);
    }
  };

export const authSignOutUser = () => async (dispatch, getState) => {};

import axios from "axios";

export const signUp = async (obj, callback) => {
  axios
    .post(`http://127.0.0.1:3300/userAuth/signup`, obj)
    .then((response) => {
      const user = response.data;
      alert(user);
      if (callback) {
        callback();
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signIn = async (obj, callback) => {
  axios
    .post(`http://127.0.0.1:3300/userAuth/signin`, obj)
    .then((response) => {
      const user = response.data;
      localStorage.setItem("auth", JSON.stringify(user));
      if (callback) {
        callback();
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

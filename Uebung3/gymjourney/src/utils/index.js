import jwt from "jsonwebtoken";

export const isLoggedIn = () => {
  return localStorage.getItem("token") && localStorage.getItem("user");
};
export const isAdminLoggedIn = () => {
  console.log("text", jwt.decode(localStorage.getItem("token")));
  return (
    localStorage.getItem("token") &&
    localStorage.getItem("user") &&
    jwt.decode(localStorage.getItem("token")).role === "administrator"
  );
};

import jwt from "jsonwebtoken";

export const isLoggedIn = () => {
  return localStorage.getItem("token") && localStorage.getItem("user");
};
export const isAdminLoggedIn = () => {
  return (
    localStorage.getItem("token") &&
    localStorage.getItem("user") &&
    jwt.decode(localStorage.getItem("token")).role === "administrator"
  );
};

import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,//in milisecond format
    httpOnly: true, // prevent XSS(cross-site scripting) attacks
    sameSite:'strict',//prevents CSRF attacks (cross-site request Forgery)an attack that forces authenticated users to submit a request to a Web application against which they are currently authenticated
    secure: process.env.NODE_ENV !== 'development'
});
};

export default generateTokenAndSetCookie
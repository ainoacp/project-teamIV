const User = require("../api/models/user.model");
const { verifySign } = require("../jwt/jwt");

const isAuth = (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token no provided" });
    }


    const tokenVerified = verifySign(token);
    req._user = tokenVerified;
    next();
  } catch (error) {
    return res.status(500).json(error);
  }
  
};

const isTeacher = (req, res, next) => {
     try {
       console.log(req.headers);
       const authorization = req.headers.authorization;
       if (!authorization) {
         return res.status(401).json({ message: "Unauthorized" });
       }
  
       const token = authorization.split(" ")[1];
       if (!token) {
         return res.status(401).json({ message: "Token no provided" });
       }
      
      
       const tokenVerified = verifySign(token);
       req._user = tokenVerified;
       const user = User.findById(tokenVerified.id)

       if(user.role !== 'teacher'){
         return res.status(401).json({ message: "Unauthorized" });
       }
       console.log(req._user);
       next();
     } catch (error) {
       return res.status(500).json(error);
     }
    
   };

module.exports = { 
  isAuth, 
  isTeacher 
};

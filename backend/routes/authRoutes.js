import Router from "express";
import { registerSchema ,loginSchema} from "../models/validationSchema.js";
import { validationResult , checkSchema, matchedData} from "express-validator";
import { registerController, loginController } from "../controller/authController.js";
export const router = Router();

router.post('/register', checkSchema(registerSchema), (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    req.body = matchedData(req);
    registerController(req,res);
});


router.post('/login',checkSchema(loginSchema), (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    
    req.body = matchedData(req);
    loginController(req,res);
});

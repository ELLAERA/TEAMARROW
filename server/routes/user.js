//Student Name: Ferdowsi Rumi
//Student Number: 301168815
//Date: OCT 1st, 2021
let express = require('express');

let router = express.Router();
let userController = require('../controller/user');
import { DisplayLoginPage, DisplayRegisterPage, ProcessLoginPage, ProcessLogout, ProcessRegisterPage } from "../controllers/user";
import passport from '../middlewares/auth';

const router = Router();


// /* GET survey List page. READ */
// router.get('/login', (req, res, next) => {
//   // find all sueveys in the surveys collection
//   survey.find( (err, surveys) => {
//     if (err) {
//       return console.error(err);
//     }
//     else {
//       res.render('/login', {
//         title: 'Login',

       
//       });
//     }
//   });

// });
router.get('/login', userController.DisplayLoginPage);
router.post('/login', passport.authenticate('login'), userController.ProcessLoginPage);
router.get('/register', DisplayRegisterPage);
router.post('/register', ProcessRegisterPage);
router.get('/logout', ProcessLogout);

export default router;
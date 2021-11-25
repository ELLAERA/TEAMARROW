// import { NextFunction, Request, Response } from "express";
// import passport from 'passport';
// import { UserDisplayName } from "../utils";

require
import { Router } from "express";
import { DisplayLoginPage, DisplayRegisterPage, ProcessLoginPage, ProcessLogout, ProcessRegisterPage } from "../controllers/user";

import passport from '../middlewares/auth';

const router = Router();
const UserDisplayName = require('../utils/index');


export async function DisplayLoginPage(req, res) {
    if (!req.user) {
        return res.render('login', { title: 'Login', page: 
        'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req) })
    }

    return res.redirect('/contact/list');
}

export function ProcessLoginPage(req, res, next) {
    return res.redirect('/contact/list')
}

export function DisplayRegisterPage(req, res, next) {
    if (!req.user) {
        return res.render('index', { title: 'Register', page: 'auth/register', messages: req.flash('registerMessage'), displayName: UserDisplayName(req) })
    }

    return res.redirect('/contact/list');
}

export function ProcessRegisterPage(req, res, next) {
    passport.authenticate('signup', function (err, user, info) {
        console.log(err, user, info);
        if (err) {
            return next(err);
        }

        if (!user) {
            return res.render('index', { title: 'Register', page: 'auth/register', messages: req.flash('registerMessage', 'User Already Exists'), displayName: UserDisplayName(req) })
        }

        return res.redirect('/auth/login');
    })(req, res, next);
}

export function ProcessLogout(req, res) {
    req.session.destroy((err) => {
        if (err) {
            return err;
        }
        res.redirect('/auth/login');
    })
}


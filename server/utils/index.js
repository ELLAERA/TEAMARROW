let express = require('express');
let User = require('/models/user')
export function UserDisplayName(req) {
    if (req.user) {
        let user = req.user;
        return user.displayName.toString();
    }
    return;
}
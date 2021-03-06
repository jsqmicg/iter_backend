const {check}=require('express-validator');

//Register
exports.validRegister = [
    check('name', 'Name is required').notEmpty()
        .isLength({
            min:4,
            max:32
        }).withMessage('name must be beetwen 3 to 32 characters'),
    check('email').notEmpty().withMessage('must be a valid email address'),
    check('password', 'password is required').notEmpty(),
    check('password').isLength({
        min:6
    }).withMessage('password must contain at least 6 characters').matches(/\d/).withMessage('password must cuntain a number')
]

//Login
exports.validLogin = [
    check('email')
    .isEmail()
    .withMessage('Must be a valid email address'),
    check('password', 'password is required').notEmpty(),
    check('password').isLength({
        min: 6
    }).withMessage('Password must contain at least 6 characters').matches(/\d/).withMessage('password must contain a number')
]

exports.forgotPasswordValidator = [
    check('email')
        .not()
        .isEmpty()
        .isEmail()
        .withMessage('Must be a valid email address')
];

exports.resetPasswordValidator = [
    check('newPassword')
        .not()
        .isEmpty()
        .isLength({ min: 6 })
        .withMessage('Password must be at least  6 characters long')
];

const { check } = require('express-validator')

module.exports = {
    register: [
        check('email', 'Enter in all fields').exists({ checkFalsy: true, checkNull: true }),
        check('name', 'Enter in all fields').exists({ checkFalsy: true, checkNull: true }),
        check('password1', 'Enter in all fields').exists({ checkFalsy: true, checkNull: true }),
        check('password2', 'Enter in all fields').exists({ checkFalsy: true, checkNull: true }),
        check('email', 'Incorrect Email').normalizeEmail().isEmail(),
        check('password1', 'Password should be at least 6 characters long').isLength({ min: 6 }),
        check('password2', 'Confirm Password an again').custom((value, { req }) => {
            if (value === req.body.password1) {
                return new Error()
            }
        })
    ],
    login: [
        check('email', 'Enter in all fields').exists({ checkFalsy: true, checkNull: true }),
        check('password', 'Enter in all fields').exists({ checkFalsy: true, checkNull: true }),
        check('email', 'Incorrect Email').normalizeEmail().isEmail()
    ],
    product: [
        check('productId', 'Enter in all fields').exists({ checkFalsy: true, checkNull: true }),
        check('name', 'Enter in all fields').exists({ checkFalsy: true, checkNull: true }),
        check('price', 'Enter in all fields').exists({ checkFalsy: true, checkNull: true }),
        check('description', 'Enter in all fields').exists({ checkFalsy: true, checkNull: true }),
        check('images', 'Enter in all fields').exists({ checkFalsy: true, checkNull: true }),
        check('category', 'Enter in all fields').exists({ checkFalsy: true, checkNull: true }),
    ]
}
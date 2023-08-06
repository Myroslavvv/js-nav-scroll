// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const nav = require('./nav')
// Підключіть інші файли роутів, якщо є
const scroll = require('./scroll')

// Об'єднайте файли роутів за потреби
router.use('/nav', nav)
// Використовуйте інші файли роутів, якщо є
router.use('/scroll', scroll)

// Експортуємо глобальний роутер
module.exports = router

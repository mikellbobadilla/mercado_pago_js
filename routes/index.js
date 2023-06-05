const express = require('express')
const router = express.Router()

const PaymentController = require('../controller/PaymentController')
const PaymentService = require('../services/PaymentService')

const PaymentInstance = new PaymentController(new PaymentService())

/* GET home page. */
router.get('/', function (req, res, next) {
  return res.json({
    "/payment": "generates a payment link",
    "/subs": "generates a subscription link"
  })
})

router.get('/payment', (req, res) => {
  PaymentInstance.getPaymentLink(req, res)
})

router.get('/subs', (req, res) => {
  PaymentInstance.getSubsLink(req, res)
})

module.exports = router

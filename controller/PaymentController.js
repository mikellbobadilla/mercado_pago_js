class PaymentController {
  constructor(subsService) {
    this.subsService = subsService
  }

  async getPaymentLink(req, res) {
    try {
      const payment = await this.subsService.createPayment()
      return res.json(payment)
    } catch (err) {
      console.log(err)

      return res
        .status(500)
        .json({ error: true, meg: 'Failed to create a link payment' })
    }
  }

  async getSubsLink(req, res) {
    try{
      const subs = await this.subsService.createSubsLink();
      return res.json(subs)
    }catch(err){
      console.log(err);
      return res
        .status(500)
        .json({error: true, msg: 'Failed to create subscription'})
    }
  }

}

module.exports = PaymentController
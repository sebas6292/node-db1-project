const router = require('express').Router()
const md = require('./accounts-middleware')
const Account = require('./accounts-model')

router.get('/', async (req, res, next) => {
  try { 
    const accounts = await Account.getAll()
      res.json(accounts, 'get accounts')
  } catch (err) {
    next(err)
  }
})

router.get('/:id', md.checkAccountId, (req, res) => {
    res.status(200).json(req.account, 'get account by Id')
})

router.post('/', 
md.checkAccountNameUnique, 
md.checkAccountPayload, 
async (req, res, next) => {
  try { 
    const newAccount = await Account.create(req.body)
    res.status(201).json(newAccount, 'post account')
  } catch (err) {
    next(err)
  }
})

router.put('/:id', 
md.checkAccountId, 
md.checkAccountNameUnique, 
md.checkAccountPayload, 
(req, res, next) => {
  // DO YOUR MAGIC
  try { 
    res.json('update account')
  } catch (err) {
    next(err)
  }
});

router.delete('/:id', md.checkAccountId,  async (req, res, next) => {
  try { 
    await Account.deleteById(req.params.id)
    res.json(req.account, 'delete account')
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
 res.status(err.status || 500).json({
   message: err.message,
 })
})

module.exports = router;

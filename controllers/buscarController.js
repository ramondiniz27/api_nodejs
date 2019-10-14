const express  = require('express')

const router = express.Router()

router.post('/', async (req,res)=>{
  return res.send('estou buscando')
})

module.exports = app => app.use('/buscar', router)
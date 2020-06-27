const { Router } = require('express')
const shortid = require('shortid')
const Link = require('../models/Link')
const auth = require('../middleware/auth.middleware')
const router = Router()

// /api/link/generate
router.post('/generate', auth, async (req, res) => {
  try {
    const baseURL = process.env.baseURL
    const { from } = req.body

    const code = shortid.generate()

    const existing = await Link.findOne({ from })

    if (existing) {
      return res.json({ link: existing })
    }

    const to = baseURL + '/t/' + code
    const link = new Link({
      code,
      to,
      from,
      owner: req.user.userId,
    })

    await link.save()

    res.status(201).json({ link })
  } catch (error) {
    res.status(500).json({
      message: 'Что-то пошло не так, попробуйте ещё раз...',
    })
  }
})

// /api/link/
router.get('/', auth, async (req, res) => {
  try {
    const links = await Link.find({ owner: req.user.userId })
    res.json(links)
  } catch (error) {
    res.status(500).json({
      message: 'Что-то пошло не так, попробуйте ещё раз...',
    })
  }
})

// /api/link/:id
router.get('/:id', auth, async (req, res) => {
  try {
    const link = await Link.findById(req.params.id)
    res.json(link)
  } catch (error) {
    res.status(500).json({
      message: 'Что-то пошло не так, попробуйте ещё раз...',
    })
  }
})

module.exports = router

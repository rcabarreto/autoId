const express = require('express')
const _ = require('lodash')

module.exports = (db, middleware) => {
  const router = express.Router()

  // get list of user sequences
  router.get('/', middleware.requireAuthentication, (req, res) => {
    db.sequence.findAll({ where: { userId: req.user.id } }).then((sequences) => {
      res.status(200).json(sequences)
    })
  })

  // create new sequence
  router.post('/', middleware.requireAuthentication, (req, res) => {
    const body = _.pick(req.body, 'name')
    body.userId = req.user.get('id')
    body.slug = body.name

    db.sequence.create(body).then((sequence) => {
      res.status(200).json(sequence)
    })
  })

  // get sequence current value
  router.get('/:sequenceSlug', middleware.requireAuthentication, (req, res) => {
    const { sequenceSlug } = req.params

    db.sequence.find({ where: { slug: sequenceSlug, userId: req.user.get('id') } }).then((sequence) => {
      res.status(200).json(sequence)
    })
  })

  // set sequence current value
  router.get('/:sequenceSlug/current', middleware.requireAuthentication, (req, res) => {
    const { sequenceSlug } = req.params

    db.sequence.find({ where: { slug: sequenceSlug, userId: req.user.get('id') } }).then((sequence) => {
      res.status(200).json(sequence)
    })
  })

  // get sequence next value
  router.get('/:sequenceSlug/next', middleware.requireAuthentication, (req, res) => {
    const { sequenceSlug } = req.params

    db.sequence.find({ where: { slug: sequenceSlug, userId: req.user.get('id') } }).then(sequence => sequence.increment(['value'], { by: 1 })).then(sequence => sequence.reload()).then((sequence) => {
      res.status(200).json(sequence.showValue())
    })
  })

  // set sequence current value
  router.patch('/:sequenceId', middleware.requireAuthentication, (req, res) => {
    const { sequenceId } = req.params

    const newValue = req.body.newValue || 0

    db.sequence.find({ where: { id: sequenceId, userId: req.user.get('id') } }).then(sequence => sequence.update({ value: newValue })).then((newSequence) => {
      res.status(200).json(newSequence)
    })
  })

  router.delete('/:sequenceId', middleware.requireAuthentication, (req, res) => {
    const { sequenceId } = req.params
    db.sequence.find({ where: { id: sequenceId, userId: req.user.get('id') } }).then(sequence => sequence.destroy()).then(() => {
      res.status(200).json()
    })
  })


  return router
}

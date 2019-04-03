
const express = require('express');
const _ = require('lodash');

module.exports = (db, middleware) => {
  const router = express.Router();


  /**
   * create a new user on the database
   * @param {string} name The name of the user
   * @param {string} email The email address of the user
   * @param {string} password The password
   *
   * @returns {json} The public user object
   */
  router.post('/', (req, res) => {
    req.body.external_id = req.body.id;
    const body = _.pick(req.body, 'name', 'email', 'password');

    db.user
      .create(body)
      .then((user) => {
        res.status(201).json(user.toPublicJSON());
      })
      .catch(err => res.status(400).json(err));
  });


  /**
   * POST /api/user/login
   */
  router.post('/login', (req, res) => {
    const body = _.pick(req.body, 'email', 'password');
    let userInstance;

    db.user
      .authenticate(body)
      .then((user) => {
        const token = user.generateToken('authentication');
        userInstance = user;
        return db.token.create({
          token,
        });
      })
      .then((tokenInstance) => {
        const token = tokenInstance.get('token');
        res.status(200).json({ ...userInstance.toPublicJSON(), token });
      })
      .catch(err => res.status(401).send(err));
  });


  /**
   * POST /api/user/logout
   */
  router.post('/logout', middleware.requireAuthentication, (req, res) => {
    req.token
      .destroy()
      .then(() => res.status(204).send())
      .catch(err => res.status(500).send(err));
  });

  return router;
};

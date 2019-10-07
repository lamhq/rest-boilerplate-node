const express = require('express');
const {
  login,
  register,
  requestResetPassword,
  resetPassword,
  verifyUserToken,
  getProfile, updateProfile,
} = require('./handlers');

const router = express.Router();

// user login
router.post('/admin/login', login);

// user register
router.post('/admin/register', register);

// send reset password link to email
router.post('/admin/reset-password', requestResetPassword);

// update account's password
router.put('/admin/account/password', resetPassword);

router.route('/admin/account/profile')
  // get account's data
  .get([verifyUserToken, getProfile])
  // update account's data
  .put([verifyUserToken, updateProfile]);

module.exports = router;

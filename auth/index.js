'use strict';

var ensureAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
};

exports.ensureAuthenticated = ensureAuthenticated;
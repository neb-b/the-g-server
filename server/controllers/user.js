import Promise from 'bluebird';
import Boom from 'boom';
import _ from 'lodash';
import jsonapi from 'jsonapi';
import mongoose from 'mongoose';

import { Serializer } from 'jsonapi-serializer');
import User from '../models/user';

const userSerializer = new Serializer('users', {
  attributes: ['firstName', 'secondName', 'username', 'dateAdded']
});

function UserController(opts) {
    if (!(this instanceof UserController)) {
        return new UserController(opts);
    }
}

UserController.prototype.getUser = function getUser (req, res, next) {
  console.log('Route hit: getUser');
  return res.send('getUser');
};

UserController.prototype.createUser = function createUser (req, res, next) {
  console.log('Route hit: createUser');
  return res.send('createUser');
};

UserController.prototype.updateUser = function updateUser (req, res, next) {
  console.log('Route hit: updateUser');
  return res.send('updateUser');
};

// Should be `included` in User resource
UserController.prototype.getRanking = function getRanking (req, res, next) {
  console.log('Route hit: getRanking');
  return res.send('getRanking');
};

UserController.prototype.deleteUser = function deleteUser (req, res, next) {
  console.log('Route hit: deleteUser');
  return res.send('deleteUser');
};

export default UserController;

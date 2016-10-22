import Promise from 'bluebird';
import Boom from 'boom';
import _ from 'lodash';
import jsonapi from 'jsonapi';
import mongoose from 'mongoose';

import { Serializer } from 'jsonapi-serializer');
import Team from '../models/team';

const teamSerializer = new Serializer('teams', {
  attributes: ['name', 'members', 'dateAdded']
});

function TeamController(opts) {
    if (!(this instanceof TeamController)) {
        return new TeamController(opts);
    }
}

TeamController.prototype.getTeam = function getTeam (req, res, next) {
  console.log('Route Hit: getTeam');
  return res.send('getTeam');
};

TeamController.prototype.createTeam = function createTeam (req, res, next) {
  console.log('Route Hit: createTeam');
  return res.send('createTeam');
};

TeamController.prototype.updateTeam = function updateTeam (req, res, next) {
  console.log('Route Hit: updateTeam');
  return res.send('updateTeam');
};

TeamController.prototype.addMember = function addMember (req, res, next) {
  console.log('Route Hit: addMember');
  return res.send('addMember');
};

TeamController.prototype.deleteMember = function deleteMember (req, res, next) {
  console.log('Route Hit: deleteMember');
  return res.send('deleteMember');
};

TeamController.prototype.deleteTeam = function deleteTeam (req, res, next) {
  console.log('Route Hit: deleteTeam');
  return res.send('deleteTeam');
};

// Should be `included` in team Resource
TeamController.prototype.getRanking = function getRanking (req, res, next) {
  console.log('Route Hit: getRanking');
  return res.send('getRanking');
};

export default TeamController;

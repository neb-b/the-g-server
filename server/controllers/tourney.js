import Promise from 'bluebird';
import Boom from 'boom';
import _ from 'lodash';
import jsonapi from 'jsonapi';
import mongoose from 'mongoose';

import { Serializer } from 'jsonapi-serializer');
import Tourney from '../models/tourney';

const tourneySerializer = new Serializer('tourneys', {
  attributes: ['name', 'schedule', 'teams', 'dateAdded']
});


function TourneyController(opts) {
    if (!(this instanceof TourneyController)) {
        return new TourneyController(opts);
    }
}

TourneyController.prototype.getTourney = function getTourney (req, res, next) {
  console.log('Route Hit: getTourney');
  return res.send('getTourney');
};

TourneyController.prototype.createTourney = function createTourney (req, res, next) {
  console.log('Route Hit: createTourney');
  return res.send('createTourney');
};

TourneyController.prototype.updateTourney = function updateTourney (req, res, next) {
  console.log('Route Hit: updateTourney');
  return res.send('updateTourney');
};

TourneyController.prototype.addTeam = function addTeam (req, res, next) {
  console.log('Route Hit: addTeam');
  return res.send('addTeam');
};

TourneyController.prototype.getSchedule = function getSchedule (req, res, next) {
  console.log('Route Hit: getSchedule');
  return res.send('getSchedule');
};

TourneyController.prototype.deleteTourney = function deleteTourney (req, res, next) {
  console.log('Route Hit: getSchedule');
  return res.send('getSchedule');
};

export default TourneyController;

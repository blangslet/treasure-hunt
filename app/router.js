import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('home');
  this.resource('trips');
  this.resource('nearby', {path: 'nearby/:trip_id'});
  this.resource('found', {path: 'found/:trip_id'});
});

export default Router;

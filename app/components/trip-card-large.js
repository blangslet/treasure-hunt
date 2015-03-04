import Ember from 'ember';

export default Ember.Component.extend({
  everythingHero: function() {
    return 'everything-' + this.get('trip.id');
  }.property('trip'),

  avatarHero: function() {
    return 'avatar-' + this.get('trip.id');
  }.property('trip')
});
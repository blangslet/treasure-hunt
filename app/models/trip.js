import DS from 'ember-data';
import imageHash from '../base64-images';

var trip = DS.Model.extend({
  tripTitle: DS.attr('string'),
  guidePicPath: DS.attr('string'),
  bgPicPath: DS.attr('string'),
  guideName: DS.attr('string'),
  tag: DS.attr('string')

});

// trip.reopenClass({
//   FIXTURES: [
//     { id: 1, tripTitle: 'Channel Island Adventure', guidePicPath: 'img/ron-swanson.jpg', bgPicPath: 'img/channel-islands.jpg', guideName: 'Ron Swanson', tag: 'Adventure' },
//     { id: 2, tripTitle: 'Explore the Galapagos', guidePicPath: 'img/ann-perkins.jpg', bgPicPath: 'img/galapagos.jpg', guideName: 'Ann Perkins', tag: 'Adventure' },
//     { id: 3, tripTitle: 'Parisian Getaway', guidePicPath: 'img/leslie-knope.jpg', bgPicPath: 'img/paris.jpg', guideName: 'Leslie Knope', tag: 'Adventure' },
//     { id: 4, tripTitle: 'Island Hopping in Thailand', guidePicPath: 'img/april-ludgate-2.jpg', bgPicPath: 'img/thailand2.jpg', guideName: 'April Ludgate', tag: 'Adventure' },
//     { id: 5, tripTitle: 'Venice by Boat', guidePicPath: 'img/chris-pratt.jpg', bgPicPath: 'img/venice.jpg', guideName: 'Andy Dwyer', tag: 'Adventure' },
//     { id: 6, tripTitle: 'Caribbean Pirate Experience', guidePicPath: 'img/ben-wyatt.jpg', bgPicPath: 'img/virgin-islands.jpg', guideName: 'Ben Wyatt', tag: 'Adventure' }
//   ]
// });

//base64 images so images wont flicker when running locally on ember-cli

trip.reopenClass({
  FIXTURES: [
    { id: 1, tripTitle: 'Channel Island Adventure', guidePicPath: imageHash.ron, bgPicPath: imageHash.channelIslands, guideName: 'Ron Swanson', tag: 'Adventure' },
    { id: 2, tripTitle: 'Explore the Galapagos', guidePicPath: imageHash.ann, bgPicPath: imageHash.galapagos, guideName: 'Ann Perkins', tag: 'Adventure' },
    { id: 3, tripTitle: 'Parisian Getaway', guidePicPath: imageHash.leslie, bgPicPath: imageHash.paris, guideName: 'Leslie Knope', tag: 'Adventure' },
    { id: 4, tripTitle: 'Island Hopping in Thailand', guidePicPath: imageHash.april, bgPicPath: imageHash.thailand, guideName: 'April Ludgate', tag: 'Adventure' },
    { id: 5, tripTitle: 'Venice by Boat', guidePicPath: imageHash.chris, bgPicPath: imageHash.venice, guideName: 'Andy Dwyer', tag: 'Adventure' },
    { id: 6, tripTitle: 'Caribbean Pirate Experience', guidePicPath: imageHash.ben, bgPicPath: imageHash.caribbean, guideName: 'Ben Wyatt', tag: 'Adventure' }
  ]
});

export default trip;
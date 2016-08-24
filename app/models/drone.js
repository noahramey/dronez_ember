import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  shortDescription: DS.attr(),
  image: DS.attr(),
  heroImage: DS.attr(),
  weight: DS.attr(),
  maxSpeed: DS.attr(),
  maxFlightTime: DS.attr(),
  maxFlightAltitude: DS.attr(),
  videoQuality: DS.attr(),
  photoQuality: DS.attr(),
  controllerDistance: DS.attr(),
  price: DS.attr(),
  reviews: DS.hasMany('review', { async: true })
});

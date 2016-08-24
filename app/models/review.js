import DS from 'ember-data';

export default DS.Model.extend({
  rating: DS.attr(),
  comment: DS.attr(),
  drone: DS.belongsTo('drone', { async:true })
});

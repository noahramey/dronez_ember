import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['name:asc'],
  sortedDrones: Ember.computed.sort('model', 'sortBy')
});

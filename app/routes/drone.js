import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  model(params) {
    return this.store.findRecord('drone', params.drone_id);
  },
  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    },
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var drone = params.drone;
      drone.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return drone.save();
      });
      this.transitionTo('drone', drone.id);
    }
  }
});

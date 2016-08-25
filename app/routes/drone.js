import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  model(params) {
    return Ember.RSVP.hash({
      drone: this.store.findRecord('drone', params.drone_id),
      reviews: this.store.query('review', {
        orderBy: 'drone',
        equalTo: params.drone_id
      })
    });
  },
  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    },
    transitionToCart() {
      this.transitionTo('cart');
    },
    saveReview(params) {
      var self = this;
      var newReview = this.store.createRecord('review', params);
      var drone = params.drone;
      drone.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return drone.save();
      }).then(function() {
        return self.refresh();
      });
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveReview() {
      var params = {
        rating: this.get('rating'),
        comment: this.get('comment'),
        drone: this.get('drone')
      };
      if (params.rating !== undefined && params.comment !== undefined) {
        this.sendAction('saveReview', params);
        this.set('rating', '');
        this.set('comment', '');
      }
    }
  }
});

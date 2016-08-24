import Ember from 'ember';

export function avgReview(params) {
  var reviews = params[0];
  var numberOfReviews = reviews.content.length - 1;
  var totalOfRatings = 0;

  console.log(reviews);
// NEED TO GET TO REVIEWS CONTENT THROUGH DRONE OBJECT
  for (var i = 0; i < reviews.content.length; i++) {
    var ratingInt = parseInt(reviews[i].get('rating'));
    console.log(ratingInt);
    totalOfRatings += ratingInt;
  }
  return (totalOfRatings / numberOfReviews);
}

export default Ember.Helper.helper(avgReview);

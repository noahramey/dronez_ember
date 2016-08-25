import Ember from 'ember';

export function avgReview(params) {
  var reviews = params[0];
  var numberOfReviews = reviews.content.length;
  var totalOfRatings = 0;

  if (numberOfReviews === 0) {
    return "No Reviews for this Product.";
  } else {
    for (var i = 0; i < reviews.content.length; i++) {
      console.log(reviews.content[i]._data.rating);
      var ratingInt = parseInt(reviews.content[i]._data.rating);
      totalOfRatings += ratingInt;
    }
    var average = totalOfRatings / numberOfReviews;
    average = Math.round(average);
    if (average === 1) {
      return average = "\u2605";
    } else if (average === 2) {
      return average = "\u2605\u2605";
    } else if (average === 3) {
      return average = "\u2605\u2605\u2605";
    } else if (average === 4) {
      return average = "\u2605\u2605\u2605\u2605";
    } else if (average === 5) {
      return average = "\u2605\u2605\u2605\u2605\u2605";
    }
    return average;
  }



}

export default Ember.Helper.helper(avgReview);

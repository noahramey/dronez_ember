import Ember from 'ember';

export function totalPrice(params) {
  var items = params[0];
  var total = 0;

  for (var i = 0; i < items.length; i++) {
    total += items[i].get('price');
  }
  return total;
}

export default Ember.Helper.helper(totalPrice);

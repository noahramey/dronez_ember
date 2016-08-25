import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  itemCounter: [],

  add(item) {
    if (this.items.includes(item)) {
      item.quantity += 1;
      this.get('itemCounter').pushObject(item);
      console.log(item);
    } else {
      this.get('items').pushObject(item);
      item.quantity = 1;
      this.get('itemCounter').pushObject(item);
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  segment: Ember.computed(function(){
    return this.model.posts.store.peekAll('post').toArray().reverse().slice(0,5);
  })
});

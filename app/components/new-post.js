import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    addPost(){
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        image: this.get('image')
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});

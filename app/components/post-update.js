import Ember from 'ember';

export default Ember.Component.extend({
  isUpdateShowing: false,
  actions: {
    updatePostForm(){
      this.set('isUpdateShowing', true);
    },
    update(post) {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        image: this.get('image')
      };
      this.set('isUpdateShowing', false);
      this.sendAction('update', post, params);
    }
  }
});

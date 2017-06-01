import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow(){
      this.set('addNewComment', true);
    },
    saveComment(){
      debugger;
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        post: this.get('post')
      };
      this.set('addNewComment', true);
      this.sendAction('saveComment', params);
    }
  }
});

Template.Examples.onRendered(function () {
  const tpl = this;
  Meteor.defer(() => {
    tpl.$('.tab-pane').removeClass('active');
    tpl.$('#example-basic').tab('show');
  });
});
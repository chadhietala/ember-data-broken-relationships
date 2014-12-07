import DS from 'ember-data';

export default DS.Model.extend({
  activityItem: DS.belongsTo('activityItem', {polymorphic: true})
});

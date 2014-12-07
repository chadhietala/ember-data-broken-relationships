import DS from 'ember-data';

export default DS.Model.extend({
  template: DS.attr('string'),
  activities: DS.hasMany('activity')
});

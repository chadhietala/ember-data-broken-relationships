import DS from 'ember-data';
import ActivityItem from 'broken-relationships/models/activity-item';

export default ActivityItem.extend({
  name: DS.attr('string')
});

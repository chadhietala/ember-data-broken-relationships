import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('activity', 'Activity', {
  // Specify the other units that are required for this test.
  needs: ['model:activity-item']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});

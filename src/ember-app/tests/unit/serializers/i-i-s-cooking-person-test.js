import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-cooking-person', 'Unit | Serializer | i-i-s-cooking-person', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-cooking-person',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-cooking-ingredient',
    'model:i-i-s-cooking-person',
    'model:i-i-s-cooking-product',
    'model:i-i-s-cooking-recipe',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

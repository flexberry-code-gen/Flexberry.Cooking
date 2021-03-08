import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-cooking-recipe', 'Unit | Model | i-i-s-cooking-recipe', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  weight: DS.attr('decimal'),
  ingredient: DS.belongsTo('i-i-s-cooking-ingredient', { inverse: null, async: false }),
  recipe: DS.belongsTo('i-i-s-cooking-recipe', { inverse: 'product', async: false })
});

export let ValidationRules = {
  weight: {
    descriptionKey: 'models.i-i-s-cooking-product.validations.weight.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  ingredient: {
    descriptionKey: 'models.i-i-s-cooking-product.validations.ingredient.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  recipe: {
    descriptionKey: 'models.i-i-s-cooking-product.validations.recipe.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ProductE', 'i-i-s-cooking-product', {
    weight: attr('Weight', { index: 0 }),
    ingredient: belongsTo('i-i-s-cooking-ingredient', 'Ingredient', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' })
  });
};

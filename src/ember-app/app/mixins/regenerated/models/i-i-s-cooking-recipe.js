import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  description: DS.attr('string'),
  person: DS.belongsTo('i-i-s-cooking-person', { inverse: null, async: false }),
  product: DS.hasMany('i-i-s-cooking-product', { inverse: 'recipe', async: false })
});

export let ValidationRules = {
  description: {
    descriptionKey: 'models.i-i-s-cooking-recipe.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  person: {
    descriptionKey: 'models.i-i-s-cooking-recipe.validations.person.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  product: {
    descriptionKey: 'models.i-i-s-cooking-recipe.validations.product.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('RecipeE', 'i-i-s-cooking-recipe', {
    description: attr('Description', { index: 0 }),
    person: belongsTo('i-i-s-cooking-person', 'Person', {
      name: attr('Name', { index: 2 })
    }, { index: 1 }),
    product: hasMany('i-i-s-cooking-product', 'Product', {
      weight: attr('Weight', { index: 0 }),
      ingredient: belongsTo('i-i-s-cooking-ingredient', 'Ingredient', {
        name: attr('Name', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('RecipeL', 'i-i-s-cooking-recipe', {
    description: attr('Description', { index: 0 }),
    person: belongsTo('i-i-s-cooking-person', 'Name', {
      name: attr('Name', { index: 1 })
    }, { index: -1, hidden: true })
  });
};

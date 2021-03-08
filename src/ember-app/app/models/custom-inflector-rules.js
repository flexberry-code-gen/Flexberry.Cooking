import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('ingredient', 'Ingredients');
inflector.irregular('product', 'Products');
inflector.irregular('person', 'Persons');
inflector.irregular('recipe', 'Recipes');

export default {};

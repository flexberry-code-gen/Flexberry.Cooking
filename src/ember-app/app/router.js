import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-cooking-ingredient-l');
  this.route('i-i-s-cooking-ingredient-e',
  { path: 'i-i-s-cooking-ingredient-e/:id' });
  this.route('i-i-s-cooking-ingredient-e.new',
  { path: 'i-i-s-cooking-ingredient-e/new' });
  this.route('i-i-s-cooking-person-l');
  this.route('i-i-s-cooking-person-e',
  { path: 'i-i-s-cooking-person-e/:id' });
  this.route('i-i-s-cooking-person-e.new',
  { path: 'i-i-s-cooking-person-e/new' });
  this.route('i-i-s-cooking-recipe-l');
  this.route('i-i-s-cooking-recipe-e',
  { path: 'i-i-s-cooking-recipe-e/:id' });
  this.route('i-i-s-cooking-recipe-e.new',
  { path: 'i-i-s-cooking-recipe-e/new' });
});

export default Router;

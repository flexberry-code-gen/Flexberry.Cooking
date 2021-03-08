import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISCookingIngredientLForm from './forms/i-i-s-cooking-ingredient-l';
import IISCookingPersonLForm from './forms/i-i-s-cooking-person-l';
import IISCookingRecipeLForm from './forms/i-i-s-cooking-recipe-l';
import IISCookingIngredientEForm from './forms/i-i-s-cooking-ingredient-e';
import IISCookingPersonEForm from './forms/i-i-s-cooking-person-e';
import IISCookingRecipeEForm from './forms/i-i-s-cooking-recipe-e';
import IISCookingIngredientModel from './models/i-i-s-cooking-ingredient';
import IISCookingPersonModel from './models/i-i-s-cooking-person';
import IISCookingProductModel from './models/i-i-s-cooking-product';
import IISCookingRecipeModel from './models/i-i-s-cooking-recipe';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-cooking-ingredient': IISCookingIngredientModel,
    'i-i-s-cooking-person': IISCookingPersonModel,
    'i-i-s-cooking-product': IISCookingProductModel,
    'i-i-s-cooking-recipe': IISCookingRecipeModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        cooking: {
          caption: 'cooking',
          title: 'cooking',
          'i-i-s-cooking-ingredient-l': {
            caption: 'i-i-s-cooking-ingredient-l',
            title: 'i-i-s-cooking-ingredient-l'
          },
          'i-i-s-cooking-recipe-l': {
            caption: 'i-i-s-cooking-recipe-l',
            title: 'i-i-s-cooking-recipe-l'
          },
          'i-i-s-cooking-person-l': {
            caption: 'i-i-s-cooking-person-l',
            title: 'i-i-s-cooking-person-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-cooking-ingredient-l': IISCookingIngredientLForm,
    'i-i-s-cooking-person-l': IISCookingPersonLForm,
    'i-i-s-cooking-recipe-l': IISCookingRecipeLForm,
    'i-i-s-cooking-ingredient-e': IISCookingIngredientEForm,
    'i-i-s-cooking-person-e': IISCookingPersonEForm,
    'i-i-s-cooking-recipe-e': IISCookingRecipeEForm
  },

});

export default translations;

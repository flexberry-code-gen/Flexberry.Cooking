import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Cooking',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Cooking',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Cooking',
          title: 'Cooking'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        cooking: {
          caption: 'Cooking',
          title: 'Cooking',
          'i-i-s-cooking-ingredient-l': {
            caption: 'Ingredient',
            title: ''
          },
          'i-i-s-cooking-recipe-l': {
            caption: 'Recipe',
            title: ''
          },
          'i-i-s-cooking-person-l': {
            caption: 'Person',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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

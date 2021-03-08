'use strict';

define('ember-app/tests/acceptance/i-i-s-cooking-ingredient-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('Acceptance | i i s cooking ingredient l');

  (0, _qunit.test)('testing /i-i-s-cooking-ingredient-l', function (assert) {
    var _this = this;

    visit('/i-i-s-cooking-ingredient-l');

    andThen(function () {
      checkOlvConfig('[data-test-olv]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-olv]', null, assert, newFormRoute);
    });
  });
});
define('ember-app/tests/acceptance/i-i-s-cooking-person-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('Acceptance | i i s cooking person l');

  (0, _qunit.test)('testing /i-i-s-cooking-person-l', function (assert) {
    var _this = this;

    visit('/i-i-s-cooking-person-l');

    andThen(function () {
      checkOlvConfig('[data-test-olv]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-olv]', null, assert, newFormRoute);
    });
  });
});
define('ember-app/tests/acceptance/i-i-s-cooking-recipe-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('Acceptance | i i s cooking recipe l');

  (0, _qunit.test)('testing /i-i-s-cooking-recipe-l', function (assert) {
    var _this = this;

    visit('/i-i-s-cooking-recipe-l');

    andThen(function () {
      checkOlvConfig('[data-test-olv]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-olv]', null, assert, newFormRoute);
    });
  });
});
define('ember-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-cooking-ingredient-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-cooking-ingredient-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-cooking-ingredient-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-cooking-ingredient-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-cooking-ingredient-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-cooking-ingredient-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-cooking-person-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-cooking-person-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-cooking-person-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-cooking-person-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-cooking-person-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-cooking-person-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-cooking-recipe-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-cooking-recipe-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-cooking-recipe-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-cooking-recipe-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-cooking-recipe-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-cooking-recipe-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-cooking-ingredient-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-cooking-ingredient-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-cooking-ingredient-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-cooking-ingredient-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-cooking-person-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-cooking-person-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-cooking-person-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-cooking-person-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-cooking-recipe-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-cooking-recipe-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-cooking-recipe-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-cooking-recipe-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-cooking-ingredient.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-cooking-ingredient.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-cooking-person.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-cooking-person.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-cooking-product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-cooking-product.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-cooking-recipe.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-cooking-recipe.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-cooking-ingredient-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-cooking-ingredient-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-cooking-ingredient-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-cooking-ingredient-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-cooking-person-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-cooking-person-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-cooking-person-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-cooking-person-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-cooking-recipe-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-cooking-recipe-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-cooking-recipe-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-cooking-recipe-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-cooking-ingredient.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-cooking-ingredient.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-cooking-person.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-cooking-person.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-cooking-product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-cooking-product.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-cooking-recipe.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-cooking-recipe.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-cooking-ingredient.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-cooking-ingredient.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-cooking-person.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-cooking-person.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-cooking-product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-cooking-product.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-cooking-recipe.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-cooking-recipe.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-cooking-ingredient-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-cooking-ingredient-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-cooking-ingredient.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-cooking-ingredient.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-cooking-person-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-cooking-person-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-cooking-person.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-cooking-person.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-cooking-product-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-cooking-product-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-cooking-product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-cooking-product.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-cooking-recipe-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-cooking-recipe-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-cooking-recipe.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-cooking-recipe.js should pass ESLint\n\n');
  });

  QUnit.test('models/custom-inflector-rules.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/custom-inflector-rules.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-cooking-ingredient.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-cooking-ingredient.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-cooking-person.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-cooking-person.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-cooking-product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-cooking-product.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-cooking-recipe.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-cooking-recipe.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-cooking-ingredient-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-cooking-ingredient-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-cooking-ingredient-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-cooking-ingredient-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-cooking-ingredient-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-cooking-ingredient-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-cooking-person-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-cooking-person-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-cooking-person-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-cooking-person-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-cooking-person-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-cooking-person-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-cooking-recipe-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-cooking-recipe-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-cooking-recipe-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-cooking-recipe-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-cooking-recipe-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-cooking-recipe-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-cooking-ingredient-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-cooking-ingredient-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-cooking-ingredient.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-cooking-ingredient.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-cooking-person-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-cooking-person-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-cooking-person.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-cooking-person.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-cooking-product-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-cooking-product-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-cooking-product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-cooking-product.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-cooking-recipe-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-cooking-recipe-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-cooking-recipe.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-cooking-recipe.js should pass ESLint\n\n');
  });

  QUnit.test('services/offline-globals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/offline-globals.js should pass ESLint\n\n');
  });

  QUnit.test('services/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ember-app/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('ember-app/tests/helpers/ember-prop-types', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createComponent = createComponent;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var VERSION = Ember.VERSION;


  /**
   * Determine if we are on a version of Ember that includes Glimmer 2
   * @returns {Boolean} whether or not we are on Glimmer 2
   */
  function isGlimmer2() {
    var _VERSION$split = VERSION.split('.'),
        _VERSION$split2 = _slicedToArray(_VERSION$split, 2),
        major = _VERSION$split2[0],
        minor = _VERSION$split2[1];

    return parseInt(major) > 1 && parseInt(minor) > 9;
  }

  /**
   * Programitcally instantiate instance of component class
   * @param {Ember.Component} component - component class to instantiate
   * @returns {Ember.Component} instance of component class
   */
  function createComponent(component) {
    if (isGlimmer2()) {
      return component.create({ renderer: {} });
    }

    return component.create();
  }
});
define('ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-app/tests/helpers/start-app', 'ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ember-app/tests/helpers/start-app', ['exports', 'ember-app/app', 'ember-app/config/environment', 'ember-flexberry/test-support'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-app/tests/test-helper', ['ember-app/app', 'ember-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/i-i-s-cooking-ingredient-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/i-i-s-cooking-ingredient-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/i-i-s-cooking-person-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/i-i-s-cooking-person-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/i-i-s-cooking-recipe-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/i-i-s-cooking-recipe-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-cooking-ingredient-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-cooking-ingredient-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-cooking-ingredient-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-cooking-ingredient-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-cooking-person-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-cooking-person-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-cooking-person-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-cooking-person-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-cooking-recipe-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-cooking-recipe-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-cooking-recipe-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-cooking-recipe-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-cooking-ingredient-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-cooking-ingredient-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-cooking-person-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-cooking-person-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-cooking-product-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-cooking-product-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-cooking-recipe-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-cooking-recipe-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-cooking-ingredient-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-cooking-ingredient-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-cooking-ingredient-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-cooking-ingredient-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-cooking-person-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-cooking-person-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-cooking-person-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-cooking-person-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-cooking-recipe-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-cooking-recipe-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-cooking-recipe-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-cooking-recipe-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-cooking-ingredient-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-cooking-ingredient-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-cooking-person-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-cooking-person-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-cooking-product-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-cooking-product-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-cooking-recipe-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-cooking-recipe-test.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/unit/controllers/i-i-s-cooking-ingredient-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-cooking-ingredient-e', 'Unit | Controller | i-i-s-cooking-ingredient-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-cooking-ingredient-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-cooking-ingredient-l', 'Unit | Controller | i-i-s-cooking-ingredient-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-cooking-person-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-cooking-person-e', 'Unit | Controller | i-i-s-cooking-person-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-cooking-person-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-cooking-person-l', 'Unit | Controller | i-i-s-cooking-person-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-cooking-recipe-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-cooking-recipe-e', 'Unit | Controller | i-i-s-cooking-recipe-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-cooking-recipe-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-cooking-recipe-l', 'Unit | Controller | i-i-s-cooking-recipe-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/models/i-i-s-cooking-ingredient-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-cooking-ingredient', 'Unit | Model | i-i-s-cooking-ingredient', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-cooking-ingredient', 'model:i-i-s-cooking-person', 'model:i-i-s-cooking-product', 'model:i-i-s-cooking-recipe', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-cooking-person-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-cooking-person', 'Unit | Model | i-i-s-cooking-person', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-cooking-ingredient', 'model:i-i-s-cooking-person', 'model:i-i-s-cooking-product', 'model:i-i-s-cooking-recipe', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-cooking-product-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-cooking-product', 'Unit | Model | i-i-s-cooking-product', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-cooking-ingredient', 'model:i-i-s-cooking-person', 'model:i-i-s-cooking-product', 'model:i-i-s-cooking-recipe', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-cooking-recipe-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-cooking-recipe', 'Unit | Model | i-i-s-cooking-recipe', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-cooking-ingredient', 'model:i-i-s-cooking-person', 'model:i-i-s-cooking-product', 'model:i-i-s-cooking-recipe', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/routes/i-i-s-cooking-ingredient-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-cooking-ingredient-e', 'Unit | Route | i-i-s-cooking-ingredient-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-cooking-ingredient-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-cooking-ingredient-l', 'Unit | Route | i-i-s-cooking-ingredient-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-cooking-person-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-cooking-person-e', 'Unit | Route | i-i-s-cooking-person-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-cooking-person-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-cooking-person-l', 'Unit | Route | i-i-s-cooking-person-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-cooking-recipe-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-cooking-recipe-e', 'Unit | Route | i-i-s-cooking-recipe-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-cooking-recipe-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-cooking-recipe-l', 'Unit | Route | i-i-s-cooking-recipe-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-cooking-ingredient-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-cooking-ingredient', 'Unit | Serializer | i-i-s-cooking-ingredient', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-cooking-ingredient', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-cooking-ingredient', 'model:i-i-s-cooking-person', 'model:i-i-s-cooking-product', 'model:i-i-s-cooking-recipe', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-cooking-person-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-cooking-person', 'Unit | Serializer | i-i-s-cooking-person', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-cooking-person', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-cooking-ingredient', 'model:i-i-s-cooking-person', 'model:i-i-s-cooking-product', 'model:i-i-s-cooking-recipe', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-cooking-product-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-cooking-product', 'Unit | Serializer | i-i-s-cooking-product', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-cooking-product', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-cooking-ingredient', 'model:i-i-s-cooking-person', 'model:i-i-s-cooking-product', 'model:i-i-s-cooking-recipe', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-cooking-recipe-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-cooking-recipe', 'Unit | Serializer | i-i-s-cooking-recipe', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-cooking-recipe', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-cooking-ingredient', 'model:i-i-s-cooking-person', 'model:i-i-s-cooking-product', 'model:i-i-s-cooking-recipe', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map

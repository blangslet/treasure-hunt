import Ember from "ember";

var isHTMLBars = !!Ember.HTMLBars;

function polymerOutletHelperFunc(property, options) {
  var container, hash, env;

  if (isHTMLBars) {
    property = arguments[0][0];
    hash = arguments[1];
    options = arguments[2];
    env = arguments[3];
    container = this.container;

    if (!property) {
      property = 'main';
      options.paramTypes = ['string'];
    }
  } else {
    property = arguments[0];

    if (property && property.data && property.data.isRenderData) {
      options = property;
      property = 'main';
      options.types.push('STRING');
    }

    container = options.data.view.container;
    hash = options.hash;
  }

  var View = container.lookupFactory('view:polymer-outlet');
  if (hash.containerless) {
    View = View.extend(Ember._Metamorph);
  }
  hash.viewClass = View;

  if (isHTMLBars) {
    env.helpers.outlet.helperFunction.call(this, [property], hash, options, env);
  } else {
    return Ember.Handlebars.helpers.outlet.call(this, property, options);
  }
}

var polymerOutletHelper = polymerOutletHelperFunc;
if (Ember.HTMLBars) {
  polymerOutletHelper = {
    isHTMLBars: true,
    helperFunction: polymerOutletHelperFunc,
    preprocessArguments: function() { }
  };
}

export default polymerOutletHelper;

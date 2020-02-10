import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

// https://vuejs.org/v2/guide/components-registration.html?
const requireComponent = require.context(
  'js/components/Home', true, /\.vue$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')));

  Vue.component(componentName, componentConfig.default || componentConfig);
});
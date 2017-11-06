import DeviceComponent from './components/Device.vue';

export default {
  Device: DeviceComponent,
  install: function(Vue) {
     Vue.component(DeviceComponent.name, DeviceComponent)
  }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Device)
}
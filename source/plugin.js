import DeviceComponent from './components/Device.vue'

module.exports = {
	install: function(Vue) {
		Vue.component(DeviceComponent.name, DeviceComponent)
	},
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(Device)
}

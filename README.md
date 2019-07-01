# vue-device

[![npm](https://img.shields.io/npm/v/vue-device.svg) ![npm](https://img.shields.io/npm/dm/vue-device.svg)](https://www.npmjs.com/package/vue-device)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Display your app in a device sized window. Perfect for sharing with clients.

The window is ignored on mobile and tablet devices, including Chrome/Safari Developer Tools

## Demo

https://normally.github.io/vue-device/

## Install

```
yarn add vue-device
```

## Usage
### Vuejs

```javascript
import device from 'vue-device'
export default {
  components: {
    device
  },
  ...
}
```

After that, wrap your app in the device tag:

```html
<device>
	<app/>
</device>
```

### Nuxtjs

1. npm or yarn install the 'vue-device' .
2. create a new file in plugins folder as ```vue-device.js```
3. Add this to the file and register the component
    ```javascript
    import Vue from 'vue'; 
    import Device from 'vue-device'; 
    Vue.component(Device.name, Device)
    ```
4. Then in the ```nuxt.config.js``` add
    ```javascript 
    plugins: [{ src: '~/plugins/vue-device.js', ssr: false }],
    ```
5. Wrap the ```<nuxt/>``` tag in like 
```html
<device>
	<nuxt/>
</device> 
```


## Options

| Property     | Default   | Description                                                       |
| :----------- | :-------- | :---------------------------------------------------------------- |
| `type`       | `iPhone8` | Can be any of the [available devices](DEVICES.md)                 |
| `background` | `#FFF`    | Background color                                                  |
| `landscape`  | `false`   | Display the window in landscape mode                              |
| `picker`     | `false`   | Show device picker above frame                                    |
| `autoscale`  | `true`    | Always fit the device in the browser window and scale the content |
| `border`     | `false`   | Show a black border around the device                             |
| `disabled`   | `false`   | Disable altogether just as a desktop view                         |

##### Example:

```html
<device type='iPhone8' background='#444' autoscale='false' landscape picker border> ... </device>
```

## Authors

* Nic Mulvaney - [Normally](http://normally.com)

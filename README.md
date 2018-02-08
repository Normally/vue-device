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

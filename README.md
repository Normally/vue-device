# vue-device

[![npm](https://img.shields.io/npm/v/vue-device.svg) ![npm](https://img.shields.io/npm/dm/vue-device.svg)](https://www.npmjs.com/package/vue-device)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Display your app in a device sized window. Perfect for sharing with clients.

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

## Additional Options

```html
<device type="iPhone7" background="#FFF" landscape picker autoscale border />
```

The `type` property can be any of the [available devices](DEVICES.md)



## Authors
- Nic Mulvaney - [Normally](http://normally.com)

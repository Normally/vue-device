<template>
	<div id="example">
		<device picker>
			<div id="mycontent">
				<h1>vue-device demo</h1>
				<a href="https://github.com/Normally/vue-device">https://github.com/Normally/vue-device</a><br/>
				<a href="https://github.com/Normally/vue-device/blob/master/docs/source/components/App.vue">view this source</a>
			</div>
		</device>
	</div>
</template>

<script>
import Device from '../../../dist/vue-device.js' // 'vue-device' in production // ../../../source/components/Device.vue in dev

export default {
	components: {
		Device,
	},
}
</script>

<style>
body {
	margin: 0;
	padding: 0;
	overflow: hidden;
}
#mycontent {
	padding: 20px;
	font-family: sans-serif;
}
</style>

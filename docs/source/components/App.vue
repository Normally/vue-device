<template>
	<div id="example">
		<device picker>
			<div id="mycontent">
				<h1>vue-device demo</h1>
				<a href="https://github.com/Normally/vue-device">https://github.com/Normally/vue-device</a>
			</div>
		</device>
	</div>
</template>

<script>
	import Device from '../../../index.js';

	export default {
		components:{
			Device
		}
	}

</script>

<style>
	body{
		margin:0;
		padding:0;
		overflow: hidden;
	}
	#mycontent{
		padding: 20px;
		font-family: sans-serif;
	}
</style>
<template>
	<div id="example">
		<device type="iPhone8" picker autoscale>
			<div id="mycontent">
				<h1>vue-device demo</h1>
				<a href="https://github.com/Normally/vue-device">https://github.com/Normally/vue-device</a>
<!-- 
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p><p>

					Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p><p>

					Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p><p>

					Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p><p>

					Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</p><p>

					Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</p><p>

					Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna.</p> -->
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
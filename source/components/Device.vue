<template>
  <div id="device" :style="bgStyle" :class="{realDevice: bowser.tablet || bowser.mobile}">
      <div v-if="picker" class="picker">
          <select v-model="chosen">
            <option v-for="device, key in devices" :value="key">{{device.name}}</option>
          </select> <span class="dimensions" @click="flip">{{device.width}} <span class='by'>&#10005;</span> {{device.height}} <div class='flip'>⤵</div></span><span v-if="zoom<1">({{(zoom*100).toFixed()}}%)</span>
      </div>
      <div class="device" :class="{border:border}" :style="style">
          <slot></slot>
      </div>
  </div>
</template>

<script>

  var bowser = require('bowser')

  export default {
    name: 'device',
    props: {
      type: {
        type: String,
        default: 'iPhone8'
      },
      landscape: {
        type: Boolean,
        default: false
      },
      border: {
        type: Boolean,
        default: false
      },
      background: {
        type: String,
        default: '#FFF'
      },
      picker: {
        type: Boolean,
        default: false
      },
      autoscale: {
        type: Boolean,
        default: true
      },
    },
    data(){
      return {
        devices:require('../data/devices.json'),
        bowser: bowser,
        chosen: 'iPhone8',
        chosenLandscape: false,
        height: 0,
        width: 0,
        scalingWidth: false,
        isDevice: false
      }
    },
    methods:{
      flip(){
        this.chosenLandscape = !this.chosenLandscape
      },
      setSize(){
        this.bowser = bowser._detect(window.navigator.userAgent)
        this.height = window.innerHeight
        this.width = window.innerWidth
      },
    },
    computed:{
      device(){
        var device = this.devices[this.chosen]
        var obj = {};
        if(this.chosenLandscape){
          obj.width = device.height;
          obj.height = device.width;
        }else{
          obj = device;
        }
        return obj;
      },
      style(){
        var margin = 80/(this.scalingWidth ? this.device.width : this.device.height)
        return {
          width: `${this.device.width}px`,
          height: `${this.device.height}px`,
          zoom: this.zoom<1 ? this.zoom-margin : 1
        }
      },
      bgStyle(){
        return {
          background: this.background,
        }
      },
      zoom(){
        if(!this.autoscale){
          return 1
        }
        var hScale = Math.min(this.height / this.device.height, 1);
        var wScale = Math.min(this.width / this.device.width, 1);
        var scale = Math.min(hScale, wScale);
        this.scalingWidth = wScale===scale;

        return Math.min(scale, 1)
      }
    },
    watch:{
      type(value){
        this.chosen = value
        this.setSize()
      },
      landscape(value){
        this.chosenLandscape = value
        this.setSize()
      },
      chosen(){
        this.setSize()
      }
    },
    mounted(){
      this.chosen = this.type
      this.chosenLandscape = this.landscape
      window.onresize = this.setSize
       this.setSize()

    },
    destroy(){

    }
  }
</script>

<style lang="scss" scoped>

  @import '../sass/devices.scss';

  #device{
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width:100%;
    background: white;
    transition: all 0.3s ease-in-out;
    .picker{
      font-family: sans-serif;
      font-size: 14px;
      margin-bottom: 10px;
      margin-top:-40px;
      font-size: 12px;
      height:30px;
      select{
        height:30px;
        outline: none;
        font-size: 12px;
        width:200px;
        -webkit-appearance: none;
        border:0;
        background: transparent;
        border-bottom: 1px solid #999;
        padding-right: 15px;
        border-radius: 0px;
        position:relative;
        z-index: 0;
        background-image:
        linear-gradient(45deg, transparent 50%, gray 50%),
        linear-gradient(135deg, gray 50%, transparent 50%);
        background-position:
        calc(100% - 5px) calc(1em + 2px),
        calc(100% - 0px) calc(1em + 2px);
        background-size:
        5px 5px,
        5px 5px,
        1px 1.5em;
        background-repeat: no-repeat;
        &:before{
          content:'ddsf';
          display: block;
          position: absolute;
          right:0;
          top:0;
          width:30px;
          height:30px;
          border:1px solid red;
          z-index: 1;
        }
      }
      .dimensions{
        background: #EEE;
        padding:5px;
        margin-left:10px;
        margin-right:5px;
        border-radius: 5px;
        cursor: pointer;
        .by{
          // opacity: 0.3;
          font-size: 0.75em;
          vertical-align: middle;
        }
      }
      .flip{
        display: inline-block;
        font-weight: bold;
      }
    }
    .device {
      position: relative;
      width: 375px;
      height: 667px;
      background: #FFF;
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      // transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
      &.border{
        box-sizing: content-box;
        border:5px solid #000;
        border-radius: 20px;
      }
    }
    &.realDevice .device{
      width: 100% !important;
      height: 100% !important;
      zoom: 1 !important;
      .picker{
        display: none;
      }
      &.border{
        border: none;
        border-radius: 0;
      }
    }
  }

  // @media only screen and (max-width: 667px) {
  //   #device .device {
  //     width: 100% !important;
  //     height: 100% !important;
  //     zoom: 1 !important;
  //     .picker{
  //       display: none;
  //     }
  //     &.border{
  //       border: none;
  //       border-radius: 0;
  //     }
  //   }
  // }

</style>
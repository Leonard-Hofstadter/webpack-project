  <style scoped>
 	@import '../../css/common.css';
	.bounce-enter-active {
	  animation: bounce-in .8s;
	  animation-fill-mode : forwards;
	}
	.bounce-leave-active {
	  animation: bounce-out .8s ;
	  animation-fill-mode : forwards;
	}
	@keyframes bounce-in {
	  50% {
	    opacity: 0;
	    transform: translateX(8px);
	  }
	  100% {
	   	opacity: 1;
	    transform: translateX(-8px);
	  }
	}
	@keyframes bounce-out {
	  50% {
	    opacity: 0;
	    transform: translateX(-8px);
	  }
	  100% {
	   	opacity: 1;
	    transform: translateX(8px);
	  }
	}
	.icon-bus{
		width: 34px;
		height: 34px;
		background-size: 100% 100%;
		vertical-align: middle;
		display: inline-block;
	}
	.city{
		display: inline-block;
		vertical-align: middle;
	}
	.container {
	  height: 100%;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: space-between;
	  padding: 200rpx 0;
	  box-sizing: border-box;
	}

  </style>
<template>
	<div>
		<button @click="minusCount">-</button>
		<span v-text="count"></span>
		<button @click="addCount">+</button>
		<div class="container">
			<div>
				<span  class="city"  v-bind:class="{'bounce-enter-active': isActive }">{{startCity}}</span>
				<image class="icon-bus" src="../../image/icon_bus.png" @click="toggleCity()"></image>
				<span class="city" v-bind:class="{'bounce-leave-active': isActive }">{{endCity}}</span>
			</div>
		</div>
	</div>
</template>
<script>
module.exports = {
    data: function() {
		return {
			count: 0,
			startCity : '上海',
			endCity: '成都',
			show: true,
			isActive: false
		};
	},
	methods: {
		addCount: function() {
			this.count++;
		},
		minusCount: function() {
			let count = this.count;
			if (count > 0) {
				this.count--;
			} else {
				return ;
			}
		},
		toggleCity: function(){
			var that =this;
			setTimeout(function(){
				[that.startCity,that.endCity] = [that.endCity,that.startCity];
			},400);
			this.isActive = !this.isActive;
			setTimeout(function(){
				that.isActive = false;
			},1000);
		}
	}
};
</script>
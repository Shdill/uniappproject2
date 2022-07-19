<template>
	<!--联系我们页面 -->
	<view class="contact">
		<image class="img" src="../../static/5.png"></image>
		<view class="info">
			<view @click="phone()">联系电话：0714-6572179（点击拨打）</view>
			<view>联系地址：湖北师范大学</view>
		</view>
		<map class="map" :longitude="longitude" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:115.06166,
				latitude:30.229895,
				markers:[
					{
					longitude:115.06166,
					latitude:30.229895,
					iconPath:'../../static/定位.png',
					width:70,
					height:70
				},
				]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber:"0714-6572179"
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact{
		.img{
			width: 750rpx;
		}
	.info{
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view{
			line-height: 60rpx;
			border-bottom: 1px solid #eee;
		}
	}	
	.map{
		width: 750rpx;
		height: 750rpx;
	}
	}

</style>

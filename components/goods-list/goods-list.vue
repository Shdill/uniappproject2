<template>
	<view class="goods_list">
		<view class="goods_item" v-for="(item,index) in goods" :key="index" @click="navigator(item.goods_name)">
			<image :src="item.goods_big_logo"></image>
			<view class="price">
				<text>{{item.goods_price}}</text>
				<text>￥2400</text>
			</view>
			<view class="name">
				{{item.goods_name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['goods'],
		methods:{
			navigator(goods_name){
				this.$emit('goodsItemclick',goods_name)
			}
		}
	}
</script>

<style lang="scss">
	.goods_list{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			padding: 0 15rpx;
			.goods_item{
				background-color: #fff;
				width: 355rpx;
				margin: 10rpx 0;
				padding: 15rpx;
				box-sizing: border-box;
				// text-align: center;
				image{
					width: 80%;
					height: 150px;
					display: block;
					margin: auto;
				}
				.price{
					color: red;
					font-size: 36rpx;
					text:nth-child(2){
						color: #ccc;
						font-size: 28rpx;
						margin-left: 7rpx;
						text-decoration: line-through;
					}
				}
				.name{
					font-size: 32rpx;
					line-height: 50rpx;
					padding-bottom: 15rpx;
					padding-top: 10rpx;
				}
			}
	}	
</style>
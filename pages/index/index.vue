<template>
	<view class="home">
		<!-- 轮播图部分 -->
		<swiper indicator-dots circular>
			<swiper-item v-for="(item,index) in swipers" :key="index">
				<image :src="item.image_src"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<image :src="item.icon"></image><br>
				<text>{{item.title}}</text>
			</view>
		</view>
		
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">
				推荐商品
			</view>
			<!-- 单个商品 -->
			<view>
				<goods-list @goodsItemclick="goGoodsDetail(item)" :goods="goods"></goods-list>
			</view>

		</view>
		
		
		<!-- 数据的测试 -->
		<!-- <view>{{swipers[0].image_src}}</view> -->
		<!-- <view>{{goods}}</view> -->
		
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				swipers:[],
				goods:[],
				navs:[
					{
						icon:'../../static/font/hh超市.png',
						title:'hh超市',
						path:'/pages/goods/goods'
					},
					{
						icon:'../../static/font/联系我们.png',
						title:'联系我们',
						path:'/pages/contact/contact'	
					},
					{
						icon:'../../static/font/社区图片.png',
						title:'社区图片',
						path:'/pages/pics/pics'
					},
					{
						icon:'../../static/font/学习视频.png',
						title:'学习视频',
						path:'/pages/videos/videos'
					}
				]
			}
		},
		onLoad() {
			this.getSwipers()
		},
		components: {
			"goods-list" : goodsList
		},
		methods: {
			// 轮播图部分
			    async getSwipers(){
				const res = await this.$myRequest({
					url:"/api/public/v1/home/swiperdata",				
				})
				// console.log("res是",res)			
				this.swipers = res.data.message
				
				const res1 = await this.$myRequest({
					url:"/api/public/v1/goods/search",				
				}) 
				
				this.goods = res1.data.message.goods
				// console.log(res1.data.message)
			},
			navItemClick(url){
				uni.navigateTo({
					url:url
				})
				// console.log("跳转",url)
			},
			// 跳转到商品详情页
			goGoodsDetail(id){
				uni.navigateTo({
					url : '/pages/goods-detail/goods-detail' + "?id=" +id
				})
				console.log("item是:",id)
			}
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			// 设计图375二倍图来设计
			width: 750rpx;
			height: 380rpx;
			image{
				height: 100%;
				width: 100%;
			}
		}
		.nav{
			width: 750rpx;
			display: flex;
			justify-content: space-between;
			flex-direction: row;						
			.nav_item{
				// border-radius: 60rpx;
				text-align: center;
				width: 20%;
				height: 20%;
				image{
					border-radius: 60rpx;
					width:100rpx;
					height: 100rpx;
					background-color: pink;
				}
				text{
					font-size: 35rpx;
					// margin: 0 auto;
				}
			}
		}	
		.hot_goods{
			background-color: #eee;		
			overflow: hidden;
			.tit{
				background-color: white;
				height: 50px;
				line-height: 50px;
				color: red;
				text-align: center;
				font-size: 60rpx;
				margin: 5px 0px;
			}

		}

	}

</style>

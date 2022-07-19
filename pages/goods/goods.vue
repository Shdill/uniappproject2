<template>
	<view class="goods">	
			<goods-list @goodsItemClick="goDetail" :goods = "goods"></goods-list>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				goods:[]
			}
		},
		components :{
			"goods-list":goodsList
		},
		onLoad() {
			this.getGoodsList()
			uni.startPullDownRefresh()
		},	
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh()
			}, 1000);
		},
		// 触底触发改函数 获取下一页的数字
		// 后端页数进行自加，
		// onReachBottom() {
		// 	this.pageindex ++
		// 	this.getGoodsList()
		// },
		methods: {
			// 获取商品列表数据
			async getGoodsList(){
				// console.log("this.$myRequest是：",this.$myRequest)
				const res = await this.$myRequest({
					url: '/api/public/v1/goods/search' 			
				})
				// console.log("res是",res.data.message.goods)
				this.goods = res.data.message.goods
				
			},
			goDetail(item){
				uni.navigateTo({
					url : '/pages/goods-detail/goods-detail'
				})
				console.log("item是:",item)
			}
		}

	}
</script>

<style>
	.goods{
		background-color: aliceblue;
	}
</style>

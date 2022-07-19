<template>
	<view class="pics">
		<scroll-view class="left" scroll-y="true">
			<view @click="leftClickHandle(index,item)" :class="active === index?'active':''" v-for="(item,index) in pics" :key="index">
				{{item.cat_name}}
			</view>
			
		</scroll-view>
		
		<scroll-view class="right" scroll-y="true">
			<view class="item" v-for="(item,index) in pics_child" :key="index">
				<!-- <goodsList :goods="item.children"></goodsList>	 -->
				<image :src="item.children[0].cat_icon"></image>
				<text>{{item.children[0].cat_name}}</text>
			</view>
					
		</scroll-view>
	</view>
	
	
</template>

<script>
	import goodsList from "@/components/goods-list/goods-list.vue"
	export default {
		data() {
			return {
				pics:[],
				pics_child:[],
				active:0
			};
		},
		components:{
			goodsList
		},
		onLoad() {
			this.getPicsCate()
			// this.leftClickHandle()
		},
		methods:{
			// previewImg(){
			// 	const urls = this.secondData.map(item => {
			// 		return item.children[0].cat_icon
			// 	})
			// 	uni.previewImage({	
			// 		current,
			// 		urls
			// 	})
			// },
			leftClickHandle(index,item){
				this.active = index
				this.pics_child = item.children
				// pics_child = this.item
			},
			async getPicsCate(){
				const res = await this.$myRequest({
					url:"/api/public/v1/categories"
				})
				console.log(res.data.message)
				this.pics = res.data.message
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.pics{
		height: 100%;
		display: flex;
		.left{
			width: 200rpx;
			height:100%;
			border-right: 1px solid #eee;
			view{
				height: 60px;
				width: 100%;
				line-height: 60rpx;
				color:#333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
			.active{
				background-color: pink;
			}}
			.right{
				height: 100%;
				width: 500rpx;
				margin: 0 auto;
				.item{
					width: 500rpx;
					height: 530rpx;
				}
			}
		
		view{
			
		}
	}
</style>

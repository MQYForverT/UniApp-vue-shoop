<template>
	<view class="content">
		<!-- 入口页 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad(){
			this.loadExecution()
		},
		methods: {
			loadExecution: function(){
				/**
				 * 获取本地存储中launchFlag的值
				 * 若存在，说明不是首次启动，直接进入首页；
				 * 若不存在，说明是首次启动，进入引导页；
				 */
				try {
				    const value = uni.getStorageSync('launchFlag');
				    if (value) {
				        if (value == true) {
							//switchTab：跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
				            uni.switchTab({
				                url: '/pages/tabs/index/index'
				            });
				        } else {
							//redirectTo：关闭当前页面，跳转到应用内的某个页面。
				            uni.redirectTo({
				                url: '/pages/tabs/index/guide'
				            });
				        }
				    } else {
				        uni.setStorage({
				            key: 'launchFlag',
				            data: true,
				            success: function() {
								console.log('存储launchFlag');
							}
				        });
						//redirectTo：关闭当前页面，跳转到应用内的某个页面。
				        uni.redirectTo({
				            url: '/pages/tabs/index/guide'
				        });
				    }
				} catch(e) { 
					// error 
					uni.setStorage({ 
						key: 'launchFlag', 
						data: true, 
						success: function () {
							console.log('error时存储launchFlag');
						} 
					}); 
					//redirectTo：关闭当前页面，跳转到应用内的某个页面。
					uni.redirectTo({ url: '/pages/tabs/index/guide' }); 
				}
				return;
				//switchTab：跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
				uni.switchTab({
				    url: '/pages/tabs/index/index'
				});
			}
		}
	}
</script>

<style>
	
</style>

<script>
	//应用生命周期
	export default {
		//当uni-app 初始化完成时触发（全局只触发一次）
		onLaunch: function() {
			console.log('App Launch')
		},
		//当 uni-app 启动，或从后台进入前台显示
		onShow: function() {
			console.log('App Show')
		},
		//当 uni-app 从前台进入后台
		onHide: function() {
			console.log('App Hide')
		}
	}
	
	/**
	 * 1、uni-app的页面生命周期仅在page页面有效，而单独封装的组件中【页面周期无效】，但是Vue的生命周期依然有效 
	 * 【Vue的生命周期在任何地方都是有效的，即你仍然可以在uni-app项目中使用Vue生命周期，但是不建议这么做】
	 * 2、推荐使用uni-app里面的onLoad 代替 vue 里面的 created
	 * 3、推荐使用uni-app里面的onReady 代替 vue 里面的 mounted
	 * */
</script>

<style>
	/*每个页面公共css */
</style>

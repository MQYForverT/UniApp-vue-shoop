const typeList = [{
	title: "潮牌会场",
	id:0,
}, {
	title: "新人专区",
	id:1,
}, {
	title: "最in频道",
	id:2,
}, {
	title: "限购满减",
	id:3,
}, {
	title: "全球热卖",
	id:4,
}, {
	title: "大牌精选",
	id:5,
}, {
	title: "新特卖",
	id:6,
}]
// 为你推荐
const subTypeList0 = [{
	title: "运动鞋",
	//商品类别名称
	image: "/static/type/hot/find2.png",
	//商品类别图片
	id: "1",
	//跳转地址	
	specialprice: '￥196',
	originprice: '原价￥418',
}]
// 墨镜
const subTypeList1 = [{
	title: "防蓝光眼镜",
	//商品类别名称
	image: "/static/type/mojing/moj1.jpg",
	//商品类别图片
	id: "1",
	//跳转地址	
}]
// 男装
const subTypeList2 = [{
	title: "小西服",
	//商品类别名称
	image: "/static/type/nanzhuang/nanz1.jpg",
	//商品类别图片
	id: "1",
	//跳转地址	
}]
// 男女内衣
const subTypeList3 = [{
	title: "男女保暖内衣",
	//商品类别名称
	image: "/static/type/nannvneiyi/ny1.jpg",
	//商品类别图片
	id: "1",
	//跳转地址	
}]
// 女鞋
const subTypeList4 = [{
	title: "凉鞋",
	//商品类别名称
	image: "/static/type/nvxie/find1.png",
	//商品类别图片
	id: "1",
	//跳转地址	
}]
// 男鞋
const subTypeList5 = [{
	title: "球鞋",
	//商品类别名称
	image: "/static/type/nanxie/nanx1.jpg",
	//商品类别图片
	id: "1",
	//跳转地址	
}]
// 箱包皮鞋
const subTypeList6 = [{
	title: "旅行箱",
	//商品类别名称
	image: "/static/type/pakepagpx/xb1.jpg",
	//商品类别图片
	id: "1",
	//跳转地址	
}]
// 手表配饰
const subTypeList7 = [{
	title: "机械手表",
	//商品类别名称
	image: "/static/type/handwatchps/hwatch1.jpg",
	//商品类别图片
	id: "1",
	//跳转地址	
}]
// 护肤彩妆
const subTypeList8 = [{
	title: "护肤彩妆",
	//商品类别名称
	image: "/static/type/hfcz/love3.png",
	//商品类别图片
	id: "1",
	//跳转地址	
}]
// 个人护理
const subTypeList9 = [{
	title: "沐浴露套装",
	//商品类别名称
	image: "/static/type/siginlehl/sigilehl1.jpg",
	//商品类别图片
	id: "1",
	//跳转地址	
}]
// 母婴
const subTypeList10 = [{
	title: "玩游戏",
	//商品类别名称
	image: "/static/type/muying/my1.jpg",
	//商品类别图片
	id: "1",
	//跳转地址	
}]
// 女装
const subTypeList11 = [{
	title: "连衣裙",
	//商品类别名称
	image: "/static/type/nvzhuang/find3.png",
	//商品类别图片
	id: "1",
	//跳转地址	
}]
// 把各类商品集合在一个数组
let subTypeList = []
subTypeList.push(subTypeList0,subTypeList1,subTypeList2,subTypeList3,subTypeList4,subTypeList5,subTypeList6,subTypeList7,subTypeList8,subTypeList9,subTypeList10,subTypeList11)
export default{
	typeList,
	subTypeList,
}
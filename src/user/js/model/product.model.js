module.exports = [
	'$q',
	'$http',
	'token',
	function($q, $http, token) {
		function ProductModel() {
			const data = {
				products: [
					{
						id: 0,
						type: {
							en: 'mp',
							cn: '手机'
						},
						name: 'P40 Pro',
						model: 'P40 Pro',
						rrp: '999',
						imgUrl: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p40-pro-plus/images/design/material-black-xs.webp',
						spec: [
							'CPU：HUAWEI Kirin 990 5G',
							'Screen: 6.58-inch OLED Display',
							'Storage: 8 GB RAM + 256 GB ROM ',
							'Rear camera: 50MP Ultra Vision Camera  + 40MP Cine Camera + 12MP SuperSensing Telephoto Camera  + 3D Depth Sensing Camera',
							'Front camera: 32MP Selfie Camera  + Depth Camera',
							'Dual SIM' 
						],
						colorOptions: [
							{
								val: 'Black',
							}, 
							{
								val: 'Silver'
							},						
						],
						images: [],
					},
					{
						id: 1,
						type: {
							en: 'mp',
							cn: '手机'
						},
						name: 'P40',
						model: 'P40',
						rrp: '799',
						imgUrl: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p40/images/design/design-intro-a-xs.webp',
						spec: [
							'CPU：HUAWEI Kirin 990 5G',
							'Screen: 6.1-inch OLED Display',
							'Storage: 8 GB RAM + 128 GB ROM ',
							'Rear camera: 50MP Ultra Vision  + 16MP Ultra-Wide Angle Camera + 8MP Telephoto Camera',
							'Front camera: 32MP Selfie Camera ',
						],
						colorOptions: [{val:'Black'}, {val:'Silver'}],
						images: [],
					},
					{
						id: 2,
						type: {
							en: 'mp',
							cn: '手机'
						},
						name: 'P40 lite(4G)',
						model: 'P40 lite(4G)',
						rrp: '299',
						imgUrl: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p40/images/design/colors/1-right-a.webp',
						spec: [
							'CPU：HUAWEI Kirin 810',
							'Screen：6.4 inch Full view display with Under-Display Camera',
							'Storage：6 GB RAM +128 GB ROM',
							'Rear Camera：48 MP AI Ultra-wide Quad Camera',
							'Front Camera：16MP Single-lens Camera"',
						],
						colorOptions: [{val: 'Black'}],
						images: [],
					},
					{
						id: 3,
						type: {
							en: 'audio',
							cn: '音频'
						},
						name: 'Freebuds 3',
						model: '',
						rrp: '179',
						imgUrl: 'https://www.carphonewarehouse.ie/CPW/media/2019-landing-pages/huawei-freebuds-3/huawei-freebuds-black.jpg',
						spec: [
							'Hardware platform:HUAWEI Kirin A1',
							'Bluetooth version:Bluetooth 5.1',
							'Main Feature:1)A true wireless stereo earphone;2)Noise reduction;3) Wireless charging (charging case);4)Low power consumption, long battery life',
						],
						colorOptions: [{val: 'Black'}, {val: 'White'}],
						images: [],
					},
					{
						id: 4,
						type: {
							en: 'fashion',
							cn: '穿戴'
						},
						name: 'Watch GT2',
						model: '男表',
						rrp: '299/249',
						imgUrl: 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-gt2/img/huawei-watch-gt2-watch01.jpg',
						spec: [
							'Size：46mm x 46mm x 10.7mm',
							'Screen: 1.39”3D AMOLED 454*454',
							'Battery：2 weeks long battery life（470mAh）/First In-House Developed Chip with Incredibly Low Power Consumption',
							'GPS Positioning',
							'Audio：Music / Bluetooth phone call / voice training guide',
							'HUAWEI TruSleep™Scientific Sleep Tracking',
							'TruSeen3.0 Provides Better Heart Rate Monitoring Experience',
							'5ATM Water resistant',
						],
						colorOptions: [{val: 'Black', ref: 'Silicon strap'}, {val: 'Silver', ref: 'Silver strap'}],
						images: [''],
					},
					{
						id: 5,
						type: {
							en: 'fashion',
							cn: '穿戴'
						},
						name: 'Watch GT2',
						model: '女表',
						rrp: '199',
						imgUrl: 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/wearables/watch-gt2/watch-gt2-listimage-Night-Black.png',
						spec: [
							'Size: 42mm x 42mm x 9.3mm',
							'Screen: 1.2”3D AMOLED, 390 x 390',
							'Battery：1 week long battery life（230mAh）/First In-House Developed Chip with Incredibly Low Power Consumption',
							'GPS Positioning',
							'Audio：Music / Bluetooth phone call / voice training guide',
							'HUAWEI TruSleep™Scientific Sleep Tracking',
							'TruSeen3.0 Provides Better Heart Rate Monitoring Experience',
							'5ATM Water resistant',
						],
						colorOptions: [{val: 'Black'}, {val: 'White'}],
						images: [],
					}
				]
			};

			const getProducts = () => data.products;

			const findById = (id) => {
				for(let i = 0; i < data.products.length; i += 1) {
					if(data.products[i].id == id) return Object.assign({}, data.products[i]);
				}
				return null;
			};

			return {
				getProducts,
				findById,
			};
		}

		return ProductModel;
	}
];
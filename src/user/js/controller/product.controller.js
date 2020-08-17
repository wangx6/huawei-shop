module.exports = [
	'$location', 
	'$timeout', 
	'$scope',
	'$rootScope',
	'$controller',
	'$window',
	'productService',
	'bagService',
	'jQuery',
function(location, timeout, s, rs, $controller, win, productService, bagService, $) {
	
	var body = $("html, body");

	var scrollEle = {
		newsEvt: { name: '.hw-news-evt', ele: null },
		aboutUs: { name: '.hw-about-us', ele: null },
		contactUs: { name: '.hw-contact', ele: null },
		projects: { name: '.hw-projects', ele: null },
		products :{ name: '.hw-products', ele: null }
	};

	init();

	function init() {
		Object.keys(scrollEle).forEach(function(k) {
			const e = scrollEle[k];
			e.ele = $(e.name);
		});
	};

	
	function scrollPage(pos) {
		body.stop().animate({scrollTop: pos}, 1500, 'swing', function() {});
	}

	s.onClickProjects = function() {
		console.log('###');
		scrollPage(scrollEle.projects.ele.position().top - 100);
	};
	s.onClickNewsEvt = function() {
		scrollPage(scrollEle.newsEvt.ele.position().top - 100);
	};
	s.onClickAboutUs = function() {
		scrollPage(scrollEle.aboutUs.ele.position().top - 100);
	};
	s.onClickContactUs = function() {
		scrollPage(scrollEle.contactUs.ele.position().top - 100);
	};
	s.onClickProducts = function() {
		scrollPage(scrollEle.products.ele.position().top - 100);
	};

	s.productService = productService;

	s.showProducts = false;
	s.showRevertHeader = false;
	s.showHeader = true;
	// s.onMouseover = function() {
	// 	s.showProducts = true;
	// 	s.showRevertHeader = true;
	// 	s.showHeader = false;
	// }

	// s.onMouseLeaveProducts = function() {
	// 	s.showProducts = false;
	// 	s.showRevertHeader = false;
	// 	s.showHeader = true;
	// };

	s.onClickItem = (item) => {
		location.path('/product-detail').search({id: item.id});
	}
}];

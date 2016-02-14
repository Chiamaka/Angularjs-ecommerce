'use strict';

/**
 * @ngdoc function
 * @name ecommerceApp.controller:MoreCtrl
 * @description
 * # AboutCtrl
 * Controller of the ecommerceApp
 */
angular.module('ecommerceApp')
  .controller('MoreCtrl', function ($scope, $routeParams) {
  	var productId = $routeParams.productId;
  	//$scope.productItem = null;

  	function init(){
  		var len = $scope.products.length;
  		
  		for(var i=0;i<len; i++){
  			 if($scope.products[i].id === parseInt(productId)){
  				$scope.productItem = $scope.products[i];
  				console.log($scope.productItem);
  				break;
  			 }
  		}
  	}
    $scope.products = [
      {
      	id: 1,
      	name: 'apple laptop',
    		specs: {
    			display: '13.3-inch (diagonal) LED-backlit glossy widescreen display with support for millions of colors',
    			processor: 'Intel Core i5 processor (Turbo Boost up to 3.1GHz) with 3MB L3 cache',
    			memory: '4GB of 1600MHz DDR3 memory',
    			storage: '500GB',
    			size: 'http://images.apple.com/macbook-pro/specs/images/size_mbp_13.jpg',
    			other: 'http://images.apple.com/macbook-pro/specs/images/ports_hero.jpg'
    		},
    		description: 'this is an apple laptop.',
    		price: 2300,
    		quantity: 10,
    		photo: 'http://allthingsd.com/files/2009/06/macbookpro.jpeg'
    	},

    	{
    		id: 2,
    		name: 'hp laptop',
    		specs: {
    			display: '15.6-inch',
    			processor: 'Intel Core i7 processor',
    			memory: '8GB DDR3 memory',
    			storage: '1TB',
    			size: 'http://images.apple.com/macbook-pro/specs/images/size_mbp_13.jpg',
    			other: 'https://s2.graphiq.com/sites/default/files/840/media/images/t2/EliteBook_820_G1_5192408.jpg'
    		},
    		description: 'HP Pavilion dv6105us Media Center Notebook PC',
    		price: 1200,
    		quantity: 5,
    		photo: 'http://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c04345226.png'
    	},

    	{
    		id: 3,
    		name: 'acer laptop',
    		specs: {
    			display: '15.6-inch',
    			processor: 'Intel Pentium processor',
    			memory: '3GB DDR3 memory',
    			storage: '320GB',
    			size: 'http://images.apple.com/macbook-pro/specs/images/size_mbp_13.jpg',
    			other: 'http://www.notebookcheck.net/uploads/tx_nbc2/0_1425_i_228946_sz_1_01.jpg'
    		},
    		description: 'Acer Aspire 5741Z',
    		price: 990.99,
    		quantity: 2,
    		photo: 'http://static.acer.com/up/Resource/Acer/Laptops/Aspire_V3/Photogallery/20140609/Aspire_V3-331_V3-371_steelgrey_gallery-05.png'
    	},
    	{
    		id: 4,
    		name: 'asus laptop',
    		specs: {
    			display: '14-inch',
    			processor: 'Intel Core i3 processor',
    			memory: '6GB DDR3 memory',
    			storage: '500GB',
    			size: 'http://images.apple.com/macbook-pro/specs/images/size_mbp_13.jpg',
    			other: 'http://www.asus.com/media/global/products/TB9Ox819HjV1clT1/cO2E66NGL135ZT2U_500.jpg'
    		},
    		description: 'Asus Zenbook UX305',
    		price: 900,
    		quantity: 6,
    		photo: 'http://www.mbsystemzone.com/images/Products/Laptop/Laptop/Asus/Asus%20X55C-SX161D%20Laptop.jpeg'
    	},
    	{
    		id: 5,
    		name: 'iPad',
    		specs: {
    			display: '9.7 inches',
    			processor: 'A6X (dual core); quad core GPU',
    			memory: '6GB DDR3 memory',
    			storage: '16/32/64 GB',
    			size: 'http://images.apple.com/macbook-pro/specs/images/size_mbp_13.jpg',
    			other: 'http://www.informalgadget.com/files/ipad-3-specs-features.jpg'
    		},
    		description: 'IPad 4',
    		price: 500,
    		quantity: 3,
    		photo: 'http://store.storeimages.cdn-apple.com/8324/as-images.apple.com/is/image/AppleInc/aos/published/images/r/fb/rfb/2013ipadmini/rfb-2013ipadmini-wifi-gray?wid=400&hei=400&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1400763757266'
    	},
    	{
    		id: 6,
    		name: 'USB Wristband',
    		specs: {
    			display: '9.7 inches',
    			processor: 'A6X (dual core); quad core GPU',
    			memory: '6GB DDR3 memory',
    			storage: '16/32/64 GB',
    			size: 'http://images.apple.com/macbook-pro/specs/images/size_mbp_13.jpg',
    			other: 'http://g02.s.alicdn.com/kf/HT1KsxWFGXcXXagOFbXd/200402900/HT1KsxWFGXcXXagOFbXd.jpg'
    		},
    		description: '10GB Wristband USB. Very portable and wont get lost easily',
    		price: 50,
    		quantity: 13,
    		photo: 'http://www.usb-wristbands.com/images/lizard-usb-wristbands1.png'
    	},
    	{
    		id: 7,
    		name: 'Cornflakes',
    		specs:{
    			other: 'http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/120520631-565x418_2.jpg'
    		},
    		description: 'this is an apple laptop.sdfdfsjjjd',
    		price: 24.99,
    		quantity: 20,
    		photo: 'https://www.theeasymarket.com/image/cache/data/0003800000127-500x500.jpg'
    	},
    	{
    		id: 8,
    		name: 'Wrist watch',
    		specs:{
    			other: 'http://www.stanleylondon.com/dalvey/DalveyWTH_ZWTH.jpg'
    		},
    		description: 'Beautiful wristwatch with accurate time telling and stuffs',
    		price: 300,
    		quantity: 4,
    		photo: 'http://www.repairingforum.com/wp-content/uploads/2013/06/4389wristwatch.jpg'
    	}
    ];

    init();
  });

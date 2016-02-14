'use strict';

/**
 * @ngdoc function
 * @name ecommerceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ecommerceApp
 */
angular.module('ecommerceApp')
  .controller('MainCtrl', function ($scope) {
    $scope.products = [
      {
      	id: 1,
      	name: 'apple laptop',
    		title: 'jderr',
    		description: 'this is an apple laptop.sdfdfsjjjd',
    		price: 2300,
    		photo: 'http://allthingsd.com/files/2009/06/macbookpro.jpeg'
    	},

    	{
    		id: 2,
    		name: 'hp laptop',
    		title: 'jderr',
    		description: 'this is an apple laptop.sdfdfsjjjd',
    		price: 1200,
    		photo: 'http://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c04345226.png'
    	},

    	{
    		id: 3,
    		name: 'acer laptop',
    		title: 'jderr',
    		description: 'this is an apple laptop.sdfdfsjjjd',
    		price: 990.99,
    		photo: 'http://static.acer.com/up/Resource/Acer/Laptops/Aspire_V3/Photogallery/20140609/Aspire_V3-331_V3-371_steelgrey_gallery-05.png'
    	},
    	{
    		id: 4,
    		name: 'asus laptop',
    		title: 'jderr',
    		description: 'this is an apple laptop.sdfdfsjjjd',
    		price: 900,
    		photo: 'http://www.mbsystemzone.com/images/Products/Laptop/Laptop/Asus/Asus%20X55C-SX161D%20Laptop.jpeg'
    	},
    	{
    		id: 5,
    		name: 'iPad',
    		title: 'jderr',
    		description: 'this is an apple laptop.sdfdfsjjjd',
    		price: 500,
    		photo: 'http://store.storeimages.cdn-apple.com/8324/as-images.apple.com/is/image/AppleInc/aos/published/images/r/fb/rfb/2013ipadmini/rfb-2013ipadmini-wifi-gray?wid=400&hei=400&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1400763757266'
    	},
    	{
    		id: 6,
    		name: 'USB Wristband',
    		title: 'jderr',
    		description: 'this is an apple laptop.sdfdfsjjjd',
    		price: 50,
    		photo: 'http://www.usb-wristbands.com/images/lizard-usb-wristbands1.png'
    	},
    	{
    		id: 7,
    		name: 'Cornflakes',
    		title: 'jderr',
    		description: 'this is an apple laptop.sdfdfsjjjd',
    		price: 24.99,
    		photo: 'https://www.theeasymarket.com/image/cache/data/0003800000127-500x500.jpg'
    	},
    	{
    		id: 8,
    		name: 'Wrist watch',
    		title: 'jderr',
    		description: 'this is an apple laptop.sdfdfsjjjd',
    		price: 300,
    		photo: 'http://www.repairingforum.com/wp-content/uploads/2013/06/4389wristwatch.jpg'
    	}
    ];
  });

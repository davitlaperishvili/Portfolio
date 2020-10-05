import 'select2';
import 'slick-carousel';
import 'magnific-popup';

import './libs/hamburger_menu.js';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

$(document).ready(function(){
	$('nav.navigation ul li a , div.resp_menu_ul ul li a').each( function(){
		$(this).on('click', function(){
			const dataValue = $(this).attr('data-num');
			const title = $(this).text();
			//add active class to Menu Item
			$('nav.navigation ul li, div.resp_menu_ul ul li').each( function(){
				$(this).removeClass('active');
			})
			$(this).parent().addClass('active');
			//close menu on choose 
			let targetElem = $("div.resp_menu > div.resp_menu_toggle");
			let resp_menu = $("div.resp_menu_ul");
			targetElem.removeClass("resp_menu_toggled");
			resp_menu.fadeOut(500);
			// remove all active content
			$('div.content').each( function(){
				$(this).removeClass('active');
			})

			// dipslay choosed content
			const activeContent = $(`div.content[data-num=content${dataValue}]`);
			activeContent.addClass('active');
			
			// Change title 
			$('h2.right_section_title').text(title)
		});
	});
	// window.addEventListener('click', function(e){
	// 	//e.stopPropagation()
	// 	let target = e.target;
	// 	let targetElem = document.querySelector("div.resp_menu_toggle");
	// 	let targetElemIn = document.querySelector("div.resp_menu_toggle div");
	// 	let resp_menu = document.querySelector("div.resp_menu_ul");
	// 	console.log(target)
	// 	if( target == targetElem && target == targetElemIn){
	// 		console.log('error');
			
	// 	}else{
			
	// 		targetElem.classList.remove("resp_menu_toggled");
	// 		resp_menu.style.display = "none";
	// 		console.log('done');
	// 	}
	// })

});
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
			$('nav.navigation ul li').each( function(){
				$(this).removeClass('active');
			})
			$(this).parent().addClass('active');

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
	console.log($('nav.navigation ul li a'))

});
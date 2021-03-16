import "select2";
import "slick-carousel";
import "magnific-popup";

import "./libs/hamburger_menu.js";

import $ from "jquery";
window.jQuery = $;
window.$ = $;

$(document).ready(function () {
	$("nav.navigation ul li a , div.resp_menu_ul ul li a").each(function () {
		$(this).on("click", function () {
			const dataValue = $(this).attr("data-num");
			const title = $(this).text();
			//add active class to Menu Item
			$("nav.navigation ul li, div.resp_menu_ul ul li").each(function () {
				$(this).removeClass("active");
			});
			$(this).parent().addClass("active");
			//close menu on choose
			let targetElem = $("div.resp_menu > div.resp_menu_toggle");
			let resp_menu = $("div.resp_menu_ul");
			targetElem.removeClass("resp_menu_toggled");
			resp_menu.fadeOut(500);
			// remove all active content
			$("div.content").each(function () {
				$(this).removeClass("active");
			});

			// dipslay choosed content
			const activeContent = $(
				`div.content[data-num=content${dataValue}]`
			);
			activeContent.addClass("active");

			// Change title
			$("h2.right_section_title").text(title);
		});
	});
	// Gallery
	$(".magnific").each(function () {
		$(this).magnificPopup({
			delegate: "a",
			type: "image",
			gallery: {
				enabled: true,
			},
			zoom: {
				enabled: true,
				duration: 300,
			},
		});
	});
	//start animation
	const simagle = $("section.hero").height();
	const simagle1 = $("section.hero figure:after").height();
	function animation() {
		//if($(window).width() > 1024){
		var y = $(window).scrollTop();
		$("div.works_listing")
			.filter(function () {
				var $this = $(this);
				return (
					$(this).offset().top < y + $(window).height() &&
					$(this).offset().top + $(this).height() > y
				);
			})
			.addClass("visible");
		//}
	}
	animation();
	$(window).bind("load resize scroll", animation);
});

document.addEventListener("DOMContentLoaded", function () {
	var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

	if ("IntersectionObserver" in window) {
		let lazyImageObserver = new IntersectionObserver(function (
			entries,
			observer
		) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					let lazyImage = entry.target;
					lazyImage.src = lazyImage.dataset.src;
					// lazyImage.srcset = lazyImage.dataset.srcset;
					lazyImage.classList.remove("lazy");
					lazyImageObserver.unobserve(lazyImage);
				}
			});
		});

		lazyImages.forEach(function (lazyImage) {
			lazyImageObserver.observe(lazyImage);
		});
	} else {
		// Possibly fall back to a more compatible method here
	}
});

/*
  www.edwardmargallo.com
  ECORE Design
  Edward Margallo
  contact@edwardmargallo.com
*/

document.addEventListener("DOMContentLoaded", function () {

	// say hi to the sneaky visitors in the console
	console.log("What are you doing here! ;) Welcome to my site and thanks for visiting... Edward");

	// back top top button
	[].forEach.call(document.querySelectorAll('.btn-top'), function (el) {
		el.addEventListener('click', function () {
			var windowTarget = document.querySelector("header + div > .elementor-inner, header + div > .page-content, header + div > div:first-child");
			windowTarget.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		})
	});

	// if home page
	// just use the wordpress home class
	if (document.body.classList.contains('home')) {
		// do something
	}

	// check what page we are on
	// to only execute scripts when needed
	var url = window.location.href;

	// if contact page
	// form label trickery with the WP Forms plugin
	if (url.includes('/contact')) {

		// iterate through all wpforms-field-label elements

		// var resetLabels = function () {
		// 	var resetLabel = document.getElementsByClassName("wpforms-field-label");
		// 	for (var i = 0; i < resetLabel.length; i++) {
		// 		resetLabel[i].classList.remove("label-focus");
		// 	}
		// }

		var onClickKeyupBlurFocus = function () {
			var target = document.querySelector("input:focus, select:focus, textarea:focus");

			// resetLabels();

			// check to see if the target can actually have focus, like an input
			if (target != null) {

				var targetPreviousSibling = target.previousSibling;

				// targetPreviousSibling.classList.add("fade-in-bottom");

				// check to see if the target sibling even exists
				// and if a value is currently present
				if (targetPreviousSibling != null && target.value) {
					// console.log(target);
					targetPreviousSibling.classList.add("fade-in-bottom", "label-focus");
					targetPreviousSibling.classList.remove("fade-out-bottom");
					//console.log(targetPreviousSibling);
				} else if (target.value == null || target.value == "") {
					targetPreviousSibling.classList.add("fade-out-bottom");
					// don't remove label-focus to prevent sudden disappearnace
					targetPreviousSibling.classList.remove("fade-in-bottom");
				}
			}
		};

		// https://gomakethings.com/listening-to-multiple-events-in-vanilla-js/
		window.addEventListener('click', onClickKeyupBlurFocus, false);
		window.addEventListener('keyup', onClickKeyupBlurFocus, false);
		window.addEventListener('blur', onClickKeyupBlurFocus, false);
		window.addEventListener('focus', onClickKeyupBlurFocus, false);
	}

	// if portfolio section
	if (url.includes('/portfolio/')) {

		// make .portfolio-screens get a class after mouse out
		// to perform a reverse css animation
		// function portfolioMouseOut() {

		// 	[].forEach.call(document.querySelectorAll('.portfolio-screen a'), function (el) {

		// 		el.addEventListener('mouseleave', function () {
		// 			this.classList.add("mouse-leave");
		// 		})

		// 	});
		// }
		// portfolioMouseOut();

		// some special js for project navigation only
		if (!!document.querySelector(".breakdown")) {

			// this is need for all scrolling targets
			// for the breakdown nav AND section when in view port
			// we are not targeting the window, we use a div with overflow-y
			// set the selector below
			let targetScrollingDiv = document.querySelector("header + div > .elementor-inner, header + div > .page-content, header + div > div:first-child");

			// on click of project breakdown nav, scroll to div id section
			[].forEach.call(document.querySelectorAll('a'), function (el) {
				el.addEventListener('click', function () {
					var scrollToThisElement = el.getAttribute("href");
					console.log(scrollToThisElement);
					document.querySelector(scrollToThisElement).scrollIntoView({
						behavior: 'smooth'
					});
				})
			});

			// [].forEach.call(document.querySelectorAll('a'), function (el) {
			// 	el.addEventListener('click', function () {
			// 		var scrollToThisElement = this.getAttribute("href");
			// 		console.log(scrollToThisElement);

			// 		function scrollTo(element) {
			// 			window.scroll({
			// 				behavior: 'smooth',
			// 				left: 0,
			// 				top: element.offsetTop
			// 			});
			// 		}
			// 		scrollTo(scrollToThisElement);
			// 	})
			// });

			// var onClick = function () {
			// 	// If the clicked element doesn't have the right selector, bail
			// 	// if (!event.target.matches(".breakdown ul li a")) return;

			// 	var target = document.querySelector(".breakdown ul li a");
			// 	// console.log(event.target.getAttribute("href"));

			// 	scrollToThisElement = target.getAttribute("href").split("#")[1];
			// 	console.log(scrollToThisElement);

			// 	document.querySelector("#" + scrollToThisElement).scrollIntoView({
			// 		behavior: 'smooth'
			// 	});

			// 	// Don't follow the link
			// 	// event.preventDefault();

			// 	// Log the clicked element in the console
			// 	// console.log(event.target);
			// }
			// window.addEventListener('click', onClick, false);

			// target the scrollable main content div, NOT window

			targetScrollingDiv.onscroll = function () {

				var currentSection = document.querySelectorAll("section[id]");
				// console.log(currentSection);

				Array.prototype.forEach.call(currentSection, function (currentSection, i) {
					if (currentSection.getAttribute("id").startsWith("section-")) {

						// found this cool "is in viewport" script
						// https://gist.github.com/davidtheclark/5515733#gistcomment-2113205
						function isAnyPartOfElementInViewport(el) {

							const rect = el.getBoundingClientRect();
							const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
							// const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

							// http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
							const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
							// const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
							// const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

							// console.log(vertInView + " , " + el.getAttribute("id"))

							// return (vertInView && horInView);
							return (vertInView);
						}

						isAnyPartOfElementInViewport(currentSection);
					}
				});
			};


		}
	}
});
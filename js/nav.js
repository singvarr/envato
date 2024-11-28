$(document).ready(function () {
	const burgerMenuButton = document.getElementById('burger');
	const mobileMenu = document.getElementById('mobile-menu');
	const closeMobileMenu = document.getElementById('close-mobile-menu');

	if (burgerMenuButton && mobileMenu) {
		burgerMenuButton.addEventListener('click', () => {
			mobileMenu.classList.toggle('mobile-menu_open');
		});

		if (mobileMenu && closeMobileMenu) {
			closeMobileMenu.addEventListener('click', () => {
				mobileMenu.classList.remove('mobile-menu_open');
			});
		}
	}

	$(window).on("scroll", function onScroll() {
		var scrollPosition = $(document).scrollTop();

		$('#main-menu a').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");

			$('#main-menu a').each(function () {
				$(this).removeClass('active');
			});
			$(this).addClass('active');

			var target = this.hash;
			$target = $(target);

			if ($target) {
				$('body').stop().animate({
					'scrollTop': $target.offset().top
				}, 500, 'swing', function () {
					window.location.hash = target;
					$(window).on("scroll", onScroll);
				});
			}
		})

		$('#main-menu a').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));

			if (refElement.offset().top <= scrollPosition && refElement.offset().top + refElement.height() > scrollPosition) {
				$('#main-menu a').removeClass("active");
				currentLink.addClass("active");
			} else {
				currentLink.removeClass("active");
			}
		});
	});

	$(window).on('scroll', function () {
		if ($(document).scrollTop()) {
			$('#scrollBtn').show();
		} else {
			$('#scrollBtn').hide();
		}
	});

	$('#scrollBtn').on('click', function () {
		$('body').animate({ scrollTop: 0 }, 1000);
	});


	$('#minimize').on('click', function () {
		$(this).parents('.contacts__content').animate({
			opacity: 0
		}, 500, 'swing', function () {
			$(this).hide();
			$('#restore').show().animate({ top: 0 }, 500, 'swing')
		})
	});

	$('#restore').on('click', function () {
		$('#restore').animate({ top: '-55' }, 500, 'swing', function () {
			$(this).hide();
			$('.contacts__content').show().animate({ opacity: 1 }, 500, 'swing')
		}
		)
	})
});
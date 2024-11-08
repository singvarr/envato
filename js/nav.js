$(document).ready(function () {
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

			$('body').stop().animate({
				'scrollTop': $target.offset().top
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(window).on("scroll", onScroll);
			});
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
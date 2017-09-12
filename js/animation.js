$(document).ready(function() {
    function move(i, top, left) {
        $('.time-box .icon')
            .eq(i)
			.animate({
				top: top,
				left: left
			}, 2000)
			.css('z-index', $('.time-box .icon').length - i);
	}

	move(1, '-=10', '+=132');
	move(2, '-=25', '+=262');
	move(3, '-=36', '+=398');
	move(4, '-=45', '+=531');
})
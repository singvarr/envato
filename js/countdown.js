window.onload = function() {   
    function Clock(deadline) {
        this.getTotalTime = function() {
            return Date.parse(deadline) - Date.parse(new Date());
        }

        this.updateTime = function() {
            return {
                sec: Math.floor((this.getTotalTime() / 1000) % 60),
                min: Math.floor((this.getTotalTime() / 1000 / 60) % 60),
                hours: Math.floor((this.getTotalTime() / 1000 / 3600) % 24),
                days: Math.floor((this.getTotalTime() / 1000 / 86400))
            }
        }

        this.addZero = function(digit) {
            return digit < 10 ? '0' + digit : digit;
        } 

        this.printDigits = function(where) {
            document.getElementById(where[0]).innerHTML = this.addZero(this.updateTime().sec);
            document.getElementById(where[1]).innerHTML = this.addZero(this.updateTime().min);
        	document.getElementById(where[2]).innerHTML = this.addZero(this.updateTime().hours);
            document.getElementById(where[3]).innerHTML = this.addZero(this.updateTime().days);
        }

        this.elapsed = function(where, message) {
        	document.getElementById(where).innerHTML = '<p class= elapsed>'+ message + '</p>'
            console.log(message);
        }
    };

    var timer = new Clock(new Date(2017, 9, 21, 9, 47));    
    var timerStart = setInterval(function() {
		if(timer.getTotalTime() > 0) {
			timer.printDigits(['sec', 'min', 'hours', 'days']);
		} else {
			clearInterval(timerStart);
			timer.elapsed('countdown', 'Join us at next meetup');
		}
    }, 1000);
}
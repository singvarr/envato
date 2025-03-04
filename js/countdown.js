window.onload = function () {
    class Clock {
        #deadline;

        static #addZero(digit) {
            return digit < 10 ? '0' + digit : digit;
        }

        constructor(deadline) {
            this.#deadline = deadline;
        }

        #getTotalTime() {
            return Date.parse(this.#deadline) - Date.parse(new Date());
        }

        #updateTime() {
            return {
                sec: Math.floor((this.#getTotalTime() / 1000) % 60),
                min: Math.floor((this.#getTotalTime() / 1000 / 60) % 60),
                hours: Math.floor((this.#getTotalTime() / 1000 / 3600) % 24),
                days: Math.floor((this.#getTotalTime() / 1000 / 86400))
            }
        }

        #printDigits(where) {
            document.getElementById(where[0]).innerHTML = Clock.#addZero(this.#updateTime().sec);
            document.getElementById(where[1]).innerHTML = Clock.#addZero(this.#updateTime().min);
            document.getElementById(where[2]).innerHTML = Clock.#addZero(this.#updateTime().hours);
            document.getElementById(where[3]).innerHTML = Clock.#addZero(this.#updateTime().days);
        }

        #elapsed(where, message) {
            document.getElementById(where).innerHTML = '<p class=\'countdown__elapsed\'>' + message + '</p>'
            console.log(message);
        }

        run() {
            const timerStart = setInterval(() => {
                if (this.#getTotalTime() > 0) {
                    this.#printDigits(['sec', 'min', 'hours', 'days']);
                } else {
                    clearInterval(timerStart);
                    this.#elapsed('countdown', 'Join us at next meetup');
                }
            }, 1000);
        }
    };

    const timer = new Clock(new Date(2025, 11, 1, 9, 47));
    timer.run()
}
for (let i = 0; i < navLinks.linght; i++) {
    navLinks[i].addEventListener('click', function (event) {
        event.preventDefault();

        let targetId = this.getAttribute('href');
        let targetElement = document.querySelector(targetId);
        let targetPosition = targetElement.offsetTop;
        let startPosition = window.pageYOffset;
        let distance = targetPosition - startPosition;
        let duration = 1000;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            let timeElapsed = currentTime - startTime;
            let run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    })
}
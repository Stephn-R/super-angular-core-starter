(function() {
  // Checks if the window is ready for "snö" :)
	function ready(fn) {
		if (document.readyState != 'loading') {
			fn();
		} else {
			document.addEventListener('DOMContentLoaded', fn);
		}
	}

  // Creates snow particles using canvas
	function makeSnow(el) {
		var ctx = el.getContext('2d');
		var width = 0;
		var height = 0;
		var particles = [];

    // The Particle Object
		var Particle = function() {
			this.x = this.y = this.dx = this.dy = 0;
			this.reset();
		}

    // Resets the particle to the top of the screen at a random position
		Particle.prototype.reset = function() {
			this.y = Math.random() * height;
			this.x = Math.random() * width;
			this.dx = (Math.random() * 1) - 0.5;
			this.dy = (Math.random() * 0.5) + 0.5;
		}

    // Creates many particles on the screen
		function createParticles(count) {
			if (count != particles.length) {
				particles = [];
				for (var i = 0; i < count; i++) {
					particles.push(new Particle());
				}
			}
		}

    // Updates the particles sizes when window is resized
		function onResize() {
			width = window.innerWidth;
			height = window.innerHeight;
			el.width = width;
			el.height = height;

			createParticles((width * height) / 10000);
		}

    // Updates the particle positions to "fall" gently
		function updateParticles() {
			ctx.clearRect(0, 0, width, height);
			ctx.fillStyle = '#f6f9fa';

			particles.forEach(function(particle) {
				particle.y += particle.dy;
				particle.x += particle.dx;

				if (particle.y > height) {
					particle.y = 0;
				}

				if (particle.x > width) {
					particle.reset();
					particle.y = 0;
				}

				ctx.beginPath();
				ctx.arc(particle.x, particle.y, 5, 0, Math.PI * 2, false);
				ctx.fill();
			});

      // Redraw the position change on the next available frame
			window.requestAnimationFrame(updateParticles);
		}

    // Initial resize
		onResize();
    // Begin the particle updates
		updateParticles();
    // Hooks on resize
		window.addEventListener('resize', onResize);
	}

  // Begin the snowfall
	ready(function() {
		var canvas = document.getElementById('snow');
		makeSnow(canvas);
	});
})();

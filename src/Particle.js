export class Particle {
	constructor(width, height, COLORS) {
		this.width = width;
		this.height = height;
		this.COLORS = COLORS;
		this.x = Math.random() * width;
		this.y = Math.random() * height;
		// Very slow movement (Dormant state)
		this.vx = (Math.random() - 0.5) * 0.2;
		this.vy = (Math.random() - 0.5) * 0.2;
		this.size = Math.random() * 1.5 + 1;
		this.baseX = this.x;
		this.baseY = this.y;
	}

	update(mouse) {
		// Standard dormant movement
		this.x += this.vx;
		this.y += this.vy;

		// Wrap around screen
		if (this.x < 0) this.x = this.width;
		if (this.x > this.width) this.x = 0;
		if (this.y < 0) this.y = this.height;
		if (this.y > this.height) this.y = 0;

		// INTERACTION: React to mouse (The user "wakes" the network)
		const dx = mouse.x - this.x;
		const dy = mouse.y - this.y;
		const distance = Math.sqrt(dx * dx + dy * dy);

		if (distance < 200) {
			const forceDirectionX = dx / distance;
			const forceDirectionY = dy / distance;
			const force = (200 - distance) / 200;
			// Particles gently pushed away or attracted to form structure
			this.x -= forceDirectionX * force * 2;
			this.y -= forceDirectionY * force * 2;
		}
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		ctx.fillStyle = this.COLORS.dim;
		ctx.fill();
	}
}

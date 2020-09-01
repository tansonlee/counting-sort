class Arr {
	constructor(length, max) {
		this.items = [];
		this.max = max;
		this.w = width / length;

		for (let i = 0; i < length; i++) {
			const rand = round(random() * max);
			this.items.push(rand);
		}
	}

	show() {
		fill(0);
		stroke(255);
		for (let i = 0; i < this.items.length; i++) {
			const x = i * this.w;
			const y = height - this.items[i];
			rect(x, y, this.w, this.items[i]);
		}
	}
}

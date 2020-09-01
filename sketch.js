let arr;

function setup() {
	createCanvas(600, 400);
	arr = new Arr(100, height);

	const max = Math.max(...arr.items);
	const output = new Array(arr.items.length).fill(0);
	const count = new Array(max + 1).fill(0);

	arr.items.forEach(value => {
		count[value]++;
	});

	for (let i = 1; i < count.length; i++) {
		count[i] += count[i - 1];
	}

	let i = arr.items.length - 1;
	while (i >= 0) {
		output[count[arr.items[i]] - 1] = arr.items[i];
		count[arr.items[i]]--;
		i -= 1;
	}
	arr.items = output;
}

function draw() {
	background(200);
	arr.show();
}

const countingSort = array => {
	return output;
};

const kFormatter = function(num) {
	return Math.abs(num) > 999
		? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
		: Math.sign(num) * Math.abs(num);
};

const decimalFormat = function(
	amount = 0,
	decimalCount = 0,
	decimal = ",",
	thousands = "."
) {
	try {
		decimalCount = Math.abs(decimalCount);
		decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

		const negativeSign = amount < 0 ? "-" : "";

		let i = parseInt(
			(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
		).toString();
		let j = i.length > 3 ? i.length % 3 : 0;

		return (
			negativeSign +
			(j ? i.substr(0, j) + thousands : "") +
			i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
			(decimalCount
				? decimal +
				  Math.abs(amount - i)
						.toFixed(decimalCount)
						.slice(2)
				: "")
		);
	} catch (e) {
		console.log(e);
	}
};

export { kFormatter, decimalFormat };

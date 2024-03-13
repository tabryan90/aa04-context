// Your code here
class Calculator {
	constructor(total){
		this.total = 0
	}

	add(num){
		return this.total = num + this.total
	}

	subtract(num){
		return this.total -= num

	}

	divide(num){
		return this.total = this.total/num
	}

	multiply(num){
		return this.total = this.total * num
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}

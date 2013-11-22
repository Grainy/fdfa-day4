var calculator = (function () {
	function _buttons () {
		
		// 	for (var i = 1; i <9; i++) {
		// 		$('#btn'+(i+1)).on('click', function() {

		$('#btn1').on('click', function () {
			document.form.result.value += "1";
		});

		$('#btn2').on('click', function () {
			document.form.result.value += "2";
		});

		$('#btn3').on('click', function () {
			document.form.result.value += "3";
		});

		$('#btn4').on('click', function () {
			document.form.result.value += "4";
		});

		$('#btn5').on('click', function () {
			document.form.result.value += "5";
		});

		$('#btn6').on('click', function () {
			document.form.result.value += "6";
		});

		$('#btn7').on('click', function () {
			document.form.result.value += "7";
		});

		$('#btn8').on('click', function () {
			document.form.result.value += "8";
		});

		$('#btn9').on('click', function () {
			document.form.result.value += "9";
		});

		$('#btn0').on('click', function () {
			document.form.result.value += "0";
		});

		$('#btnPlus').on('click', function () {
			document.form.result.value += "+";
		});

		$('#btnMinus').on('click', function () {
			document.form.result.value += "-";
		});

		$('#btnMultiply').on('click', function () {
			document.form.result.value += "*";
		});

		$('#btnDivide').on('click', function () {
			document.form.result.value += "/";
		});

		$('#btnDot').on('click', function () {
			document.form.result.value += ".";
		});

		$('#btnClear').on('click', function () {
			document.form.result.value = "";
		});
	}

	function _evaluate () {

		$('#btnEquals').on('click', function () {
			var evaulate = eval(document.form.result.value);
			document.form.result.value = evaulate;
		});
	}

	function init () {
		_buttons();
		_evaluate();
	}

	return {
		init: init
	};

}());

$(function () {
	calculator.init();
});
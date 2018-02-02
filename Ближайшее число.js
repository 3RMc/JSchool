/* Дан массив input, состоящий из целых чисел, а также x – целое число.
Необходимо написать код, который будет находить в данном массиве элемент,
максимально близкий к числу x и выводить его индекс в консоль. */

var input = [5, 20, 40, 55, 9], x = 18;

var result = input.reduce(function(prevNum,nextNum) {
    return Math.abs(prevNum-x) < Math.abs(nextNum-x) ? prevNum: nextNum;
});

console.log(input.indexOf(result));
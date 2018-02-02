/* Напишите свой вариант функции plus, которая будет удовлетворять коду let sum = plus(2)(3); */

function plus(firstTerm){
    return function(secondTerm){
        return firstTerm + secondTerm;
    };
}

let sum = plus(2)(3);

console.log(sum);
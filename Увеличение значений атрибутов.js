/* Дана строка str с HTML. Необходимо при помощи стандартного метода replace() у объекта строки str
умножить значение атрибутов data-count и data-sum в три раза: */

let str = '<b data-count="5"><i data-sum="5"></i></b>';

/* Умножаются значения ТОЛЬКО атрибутов data-count и data-sum */
str = str.replace(/(data-count|data-sum)="(-?\d+(\.\d+)?)"/gi, function(str, attr, num){
    return attr +"=\"" +num*3 +"\"";
});

console.log(str);
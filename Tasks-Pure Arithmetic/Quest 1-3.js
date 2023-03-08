// Quest 1 (triangle)
const triangle = (a, b, c) => {
    const perimeterTriangle = a + b + c;
    const p = perimeterTriangle / 2;
    const areaTriangle = (p * (p - a) * (p - b) * (p - c)) ** 0.5;
    const arr = new Array(perimeterTriangle, areaTriangle)
    return arr;
};
console.log(triangle(3, 4, 5)); // [12, 6]

//Quest 2 (function time)
const time = (hour = 0, minutes = 0, seconds = 0) => {
    const hourToSecond = hour * 3600;
    const minutesToSecond = minutes * 60;
    const resultSumSecond = hourToSecond + minutesToSecond + seconds;
    return resultSumSecond;
};
console.log(time(1, 0, 0));

//Quest 3(Perimeter and area of a rectangle)
const perimeterAndSquare = (a, b) => {
    const perimeter = () => 2 * (a + b);
    const area = () => a * b;
    const array = new Array(perimeter(), area())
    return array;
};
console.log(perimeterAndSquare(2, 3))


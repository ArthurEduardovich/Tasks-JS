// Temperature converter - from degrees Fahrenheit to degrees Celsius

const centigrade = (tempF) => {
    const calcTempC = () => (tempF - 32) * 5/9;
    return Math.round(calcTempC());
}
console.log(centigrade(5.7)) // -15
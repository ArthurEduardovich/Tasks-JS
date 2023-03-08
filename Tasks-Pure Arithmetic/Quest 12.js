// Cost of candy

function costOfSweets(x, y, cost) {
    const calcCostsOneKgX = () => cost / x; // расчёт стоимости 1кг конфет Х
    const calcCostsY = () => y * calcCostsOneKgX(); // расчёт стоимости Y кг конфет
    return calcCostsY();
};

console.log(costOfSweets(4, 6, 8));
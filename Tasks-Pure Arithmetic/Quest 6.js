// Volume and surface area of a cube

const cube = (a) => {
    const calcVolumeCube = () => Math.pow(a, 3);
    const calcAreaCube = () => 6 * a ** 2;
    const arr = new Array(calcVolumeCube(), calcAreaCube());
    return arr;
};
console.log(cube(1))
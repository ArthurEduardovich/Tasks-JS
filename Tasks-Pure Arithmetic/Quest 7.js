// Volume and surface area of a rectangular parallelepiped

const parallelepiped = (a, b, c) => {
    const calcAreaParalleleped = () => a * b * c;
    const calcVolumeParalleleped = () => 2 * (a * b + b * c + a * c);
    return [calcAreaParalleleped(), calcVolumeParalleleped()];
};
console.log(parallelepiped(1, 2, 3))
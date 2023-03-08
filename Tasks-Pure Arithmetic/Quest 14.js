// Miles to feet

const milesToFeet = (miles) => {
    const oneMilestoFout = 5280;
    const convertMilesToFout = () => miles * oneMilestoFout;
    return convertMilesToFout();
}
console.log(milesToFeet(2))
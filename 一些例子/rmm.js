function conversion(number) {
  let sum = number;
  return function () {
    // 129.9元
    sum % 10; //=
    parseInt(sum % 10); //=
    parseInt(sum % 100); //=
    parseInt(sum % 1000); //=
    let tenUnit = parseInt(sum / 10); //=
    let fiveUnit = parseInt((sum % 10) / 5); //=
    let onUnit = parseInt((sum % 10) - 5);
    // 角
    let jiao = parseInt(sum * 10) % 10;
    let fiveAngle = parseInt(jiao / 5);
    let onAngle = parseInt(jiao - 5); //=
    return `找您十元${tenUnit}张,\n五元${fiveUnit}张,\n一元${onUnit}张,\n五角${fiveAngle}张,\n一角${onAngle}张\n`;
  };
}
let num = new conversion(129.9);
console.log(num());

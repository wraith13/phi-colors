const phiColors = require('phi-colors').phiColors;

console.log(phiColors.phi); // 1.618033988749895
const rgba = phiColors.rgbaFromStyle("#FFCC8844"); // {"r":1,"g":0.8,"b":0.5333333333333333,"a":0.26666666666666666}
const hsla = phiColors.rgbaToHsla(rgba); // {"h":0.6058911188392467,"s":0.27034500134658757,"l":0.7777777777777778,"a":0.26666666666666666}
const newColors = [];
for(let i = 0; i < 7; ++i)
{
    const generatedHsla = phiColors.generate
    (
        hsla,   // base color
        i,      // hue arrange index
        0.0,    // saturation arrange index
        0.0,    // lightness arrange index
        0.0     // alpha arrange index
    );
    const generatedRgba = phiColors.hslaToRgba(generatedHsla);
    const generatedStyle = phiColors.rgbaForStyle(generatedRgba);
    newColors.push(generatedStyle);
}
console.log(JSON.stringify(newColors)); // ["#FFCC8844","#EAE1FF44","#97FE9644","#FFC7D944","#B5E0FF44","#D6E57644",

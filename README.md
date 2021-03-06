# phi-colors

phi-colors is a library that generates phi ratio colors that like [this](https://wraith13.github.io/phi-ratio-coloring/phi-ratio-coloring.htm) for JavaScript/TypeScript.

## How to use

```javascript
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
```

## How to build

requires: [Node.js](https://nodejs.org/), [TypeScript Compiler](https://www.npmjs.com/package/typescript)

`tsc -P .` or `tsc -P . -w`

### In VS Code

You can use automatic build. Run `Tasks: Allow Automatic Tasks in Folder` command from command palette ( Mac: <kbd>F1</kbd> or <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd>, Windows and Linux: <kbd>F1</kbd> or <kbd>Shift</kbd>+<kbd>Ctrl</kbd>+<kbd>P</kbd>), and restart VS Code.

## License

[Boost Software License](./LICENSE_1_0.txt)

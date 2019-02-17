"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var source_1 = require("../source");
var assert = require("assert");
describe('phiColors', function () {
    describe('rgbToHsl()', function () {
        it("rgbToHsl({r:0.0,g:0.0,b:0.0})", function () { return assert.deepEqual(source_1.phiColors.rgbToHsl({ r: 0.0, g: 0.0, b: 0.0 }), { h: 0, s: 0, l: 0 }); });
        it("rgbToHsl({r:1.0,g:0.0,b:0.0})", function () { return assert.deepEqual(source_1.phiColors.rgbToHsl({ r: 1.0, g: 0.0, b: 0.0 }), { h: 0, s: 2.0 / 3.0, l: 1.0 / 3.0 }); });
        it("rgbToHsl({r:0.0,g:1.0,b:0.0})", function () { return assert.deepEqual(source_1.phiColors.rgbToHsl({ r: 0.0, g: 1.0, b: 0.0 }), { h: Math.PI * 2.0 / 3.0, s: 2.0 / 3.0, l: 1.0 / 3.0 }); });
        it("rgbToHsl({r:0.0,g:0.0,b:1.0})", function () { return assert.deepEqual(source_1.phiColors.rgbToHsl({ r: 0.0, g: 0.0, b: 1.0 }), { h: -Math.PI * 2.0 / 3.0, s: 2.0 / 3.0, l: 1.0 / 3.0 }); });
        /*
        console.log("rgbToHsl({r:1.0,g:1.0,b:0.0})", rgbToHsl({r:1.0,g:1.0,b:0.0}));
        console.log("rgbToHsl({r:1.0,g:1.0,b:1.0})", rgbToHsl({r:1.0,g:1.0,b:1.0}));
        console.log("rgbToHsl({r:0.5,g:0.5,b:0.5})", rgbToHsl({r:0.5,g:0.5,b:0.5}));
        console.log("rgbToHsl({r:0.1,g:0.0,b:0.0})", rgbToHsl({r:0.1,g:0.0,b:0.0}));
        console.log("rgbToHsl({r:0.1,g:0.1,b:0.0})", rgbToHsl({r:0.1,g:0.1,b:0.0}));
        console.log("rgbToHsl({r:0.9,g:0.0,b:0.0})", rgbToHsl({r:0.9,g:0.0,b:0.0}));
        console.log("rgbToHsl({r:0.9,g:0.9,b:0.0})", rgbToHsl({r:0.9,g:0.9,b:0.0}));
        */
    });
    /*
    describe
    (
        'hslToRgb()',
        () =>
        {
            console.log("hslToRgb(rgbToHsl({r:0.0,g:0.0,b:0.0}))", hslToRgb(rgbToHsl({r:0.0,g:0.0,b:0.0})));
            console.log("hslToRgb(rgbToHsl({r:1.0,g:0.0,b:0.0}))", hslToRgb(rgbToHsl({r:1.0,g:0.0,b:0.0})));
            console.log("hslToRgb(rgbToHsl({r:0.0,g:1.0,b:0.0}))", hslToRgb(rgbToHsl({r:0.0,g:1.0,b:0.0})));
            console.log("hslToRgb(rgbToHsl({r:0.0,g:0.0,b:1.0}))", hslToRgb(rgbToHsl({r:0.0,g:0.0,b:1.0})));
            console.log("hslToRgb(rgbToHsl({r:1.0,g:1.0,b:0.0}))", hslToRgb(rgbToHsl({r:1.0,g:1.0,b:0.0})));
            console.log("hslToRgb(rgbToHsl({r:1.0,g:1.0,b:1.0}))", hslToRgb(rgbToHsl({r:1.0,g:1.0,b:1.0})));
            console.log("hslToRgb(rgbToHsl({r:0.5,g:0.5,b:0.5}))", hslToRgb(rgbToHsl({r:0.5,g:0.5,b:0.5})));
            console.log("hslToRgb(rgbToHsl({r:0.1,g:0.0,b:0.0}))", hslToRgb(rgbToHsl({r:0.1,g:0.0,b:0.0})));
            console.log("hslToRgb(rgbToHsl({r:0.1,g:0.1,b:0.0}))", hslToRgb(rgbToHsl({r:0.1,g:0.1,b:0.0})));
            console.log("hslToRgb(rgbToHsl({r:0.9,g:0.0,b:0.0}))", hslToRgb(rgbToHsl({r:0.9,g:0.0,b:0.0})));
            console.log("hslToRgb(rgbToHsl({r:0.9,g:0.9,b:0.0}))", hslToRgb(rgbToHsl({r:0.9,g:0.9,b:0.0})));
        }
    );
    */
});
//# sourceMappingURL=index.js.map
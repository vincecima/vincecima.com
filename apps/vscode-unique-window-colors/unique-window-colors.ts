import Color, { ColorInstance } from 'color';

interface ColorsInterface {
  sideBarColor_dark: ColorInstance;
  titleBarTextColor_dark: ColorInstance;
  titleBarColor_dark: ColorInstance;
  sideBarColor_light: ColorInstance;
  titleBarTextColor_light: ColorInstance;
  titleBarColor_light: ColorInstance;
}

export function getColors(name: string): ColorsInterface {
    let sideBarColor: ColorInstance = Color('#' + stringToARGB(name));
    let titleBarTextColor: ColorInstance = Color('#ffffff');
    let titleBarColor: ColorInstance = Color('#ffffff');

    const sideBarColor_dark = getColorWithLuminosity(sideBarColor, .02, .027);
    const titleBarTextColor_dark = getColorWithLuminosity(sideBarColor_dark, 0.95, 1);
    const titleBarColor_dark = sideBarColor_dark.lighten(0.4);

    const sideBarColor_light = getColorWithLuminosity(sideBarColor, 0.45, 0.55);
    const titleBarTextColor_light = getColorWithLuminosity(sideBarColor_light, 0, 0.01);
    const titleBarColor_light = sideBarColor_light.lighten(0.1);

    return {
        sideBarColor_dark,
        titleBarTextColor_dark,
        titleBarColor_dark,
        sideBarColor_light,
        titleBarTextColor_light,
        titleBarColor_light
    }
}

const getColorWithLuminosity = (color: ColorInstance, min: number, max: number): ColorInstance => {
    let c: ColorInstance = Color(color.hex());

    while (c.luminosity() > max) {
        c = c.darken(0.01);
    }
    while (c.luminosity() < min) {
        c = c.lighten(0.01);
    }
    return c;
}

function stringToARGB(str: string) {
  return intToARGB(hashCode(str));
}

function hashCode(str: string) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function intToARGB(i: number) {
  var hex = ((i >> 24) & 0xFF).toString(16) +
    ((i >> 16) & 0xFF).toString(16) +
    ((i >> 8) & 0xFF).toString(16) +
    (i & 0xFF).toString(16);
  // Sometimes the string returned will be too short so we 
  // add zeros to pad it out, which later get removed if
  // the length is greater than six.
  hex += '000000';
  return hex.substring(0, 6);
}
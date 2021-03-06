## color/mixer
  

* color/mixer
    * [.name](#module_color/mixer.name)
    * [.lastColor](#module_color/mixer.lastColor)
    * [.blend(color1, color2)](#BITBUCKET-module:color/mixer.blend) ⇒ string
    * [.toRgb(color)](#BITBUCKET-module:color/mixer.toRgb) ⇒ Array


### color/mixer.name
The name of the module.

**Kind**: static constant of [color/mixer](#module_color/mixer)


### color/mixer.lastColor
The most recent blended color.

**Kind**: static property of [color/mixer](#module_color/mixer)


### color/mixer.blend(color1, color2) ⇒ string
Blend two colors together.

**Kind**: static method of [color/mixer](#module_color/mixer)  

| Param  | Type   | Description                              |
| ------ | ------ | ---------------------------------------- |
| color1 | string | The first color, in hexidecimal format.  |
| color2 | string | The second color, in hexidecimal format. |


### color/mixer.toRgb(color) ⇒ Array
Get the red, green, and blue values of a color.

**Kind**: static method of [color/mixer](#module_color/mixer)  

| Param | Type   | Description                     |
| ----- | ------ | ------------------------------- |
| color | string | A color, in hexidecimal format. |



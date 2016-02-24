<a name="module_color/mixer"></a>
## color/mixer
  

* color/mixer
    * [.lastColor](#module_color/mixer.lastColor)
    * [.name](#module_color/mixer.name)
    * [.blend(color1, color2)](#module_color/mixer.blend) ⇒ `string`
    * [.toRgb(color)](#module_color/mixer.toRgb) ⇒ `Array`


<a name="module_color/mixer.lastColor"></a>
### color/mixer.lastColor
The most recent blended color.

**Kind**: static property of [`color/mixer`](#module_color/mixer)


<a name="module_color/mixer.name"></a>
### color/mixer.name
The name of the module.

**Kind**: static constant of [`color/mixer`](#module_color/mixer)


<a name="module_color/mixer.blend"></a>
### color/mixer.blend(color1, color2) ⇒ `string`
Blend two colors together.

**Kind**: static method of [`color/mixer`](#module_color/mixer)  

| Param  | Type     | Description                              |
| ------ | -------- | ---------------------------------------- |
| color1 | `string` | The first color, in hexidecimal format.  |
| color2 | `string` | The second color, in hexidecimal format. |


<a name="module_color/mixer.toRgb"></a>
### color/mixer.toRgb(color) ⇒ `Array`
Get the red, green, and blue values of a color.

**Kind**: static method of [`color/mixer`](#module_color/mixer)  

| Param | Type     | Description                     |
| ----- | -------- | ------------------------------- |
| color | `string` | A color, in hexidecimal format. |



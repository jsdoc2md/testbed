<a name="module_color/mixer"></a>
## color/mixer

* [color/mixer](#module_color/mixer)
    * [.lastColor](#module_color/mixer.lastColor)
    * [.name](#module_color/mixer.name)
    * [.blend(color1, color2)](#module_color/mixer.blend) ⇒ <code>string</code>
    * [.toRgb(color)](#module_color/mixer.toRgb) ⇒ <code>Array</code>

<a name="module_color/mixer.lastColor"></a>
### color/mixer.lastColor
The most recent blended color.

**Kind**: static property of <code>[color/mixer](#module_color/mixer)</code>  
<a name="module_color/mixer.name"></a>
### color/mixer.name
The name of the module.

**Kind**: static constant of <code>[color/mixer](#module_color/mixer)</code>  
<a name="module_color/mixer.blend"></a>
### color/mixer.blend(color1, color2) ⇒ <code>string</code>
Blend two colors together.

**Kind**: static method of <code>[color/mixer](#module_color/mixer)</code>  
**Returns**: <code>string</code> - The blended color.  

| Param | Type | Description |
| --- | --- | --- |
| color1 | <code>string</code> | The first color, in hexidecimal format. |
| color2 | <code>string</code> | The second color, in hexidecimal format. |

<a name="module_color/mixer.toRgb"></a>
### color/mixer.toRgb(color) ⇒ <code>Array</code>
Get the red, green, and blue values of a color.

**Kind**: static method of <code>[color/mixer](#module_color/mixer)</code>  
**Returns**: <code>Array</code> - An array of the red, green, and blue values,
each ranging from 0 to 255.  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | A color, in hexidecimal format. |


## color/mixer

* [color/mixer](#markdown-header-colormixer)
    * [.lastColor](#markdown-header-colormixerlastcolor)
    * [.name](#markdown-header-colormixername)
    * [.blend(color1, color2)](#markdown-header-colormixerblendcolor1-color2-string) ⇒ string
    * [.toRgb(color)](#markdown-header-colormixertorgbcolor-array) ⇒ Array

### color/mixer.lastColor
The most recent blended color.

**Kind**: static property of [color/mixer](#markdown-header-colormixer)  
### color/mixer.name
The name of the module.

**Kind**: static constant of [color/mixer](#markdown-header-colormixer)  
### color/mixer.blend(color1, color2) ⇒ string
Blend two colors together.

**Kind**: static method of [color/mixer](#markdown-header-colormixer)  
**Returns**: string - The blended color.  

| Param | Type | Description |
| --- | --- | --- |
| color1 | string | The first color, in hexidecimal format. |
| color2 | string | The second color, in hexidecimal format. |

### color/mixer.toRgb(color) ⇒ Array
Get the red, green, and blue values of a color.

**Kind**: static method of [color/mixer](#markdown-header-colormixer)  
**Returns**: Array - An array of the red, green, and blue values,
each ranging from 0 to 255.  

| Param | Type | Description |
| --- | --- | --- |
| color | string | A color, in hexidecimal format. |


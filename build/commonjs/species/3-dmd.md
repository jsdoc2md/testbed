<a name="module_0-src"></a>
## 0-src
In biology, a species (abbreviated sp., with the plural form species abbreviated spp.) is one of the basic units of biological classification and a taxonomic rank. A species is often defined as the largest group of organisms capable of interbreeding and producing fertile offspring. While in many cases this definition is adequate, the difficulty of defining species is known as the species problem. Differing measures are often used, such as similarity of DNA, morphology, or ecological niche. Presence of specific locally adapted traits may further subdivide species into "infraspecific taxa" such as subspecies (and in botany other taxa are used, such as varieties, subvarieties, and formae).


* [0-src](#module_0-src)
    * [~Species](#module_0-src..Species)
        * _instance_
            * [.name](#module_0-src..Species+name) : <code>string</code>
            * [.species](#module_0-src..Species+species) : <code>Species</code>
        * _static_
            * [.merge(one, two)](#module_0-src..Species.merge) ⇒ <code>Species</code>

<a name="module_0-src..Species"></a>
### 0-src~Species
**Kind**: inner class of <code>[0-src](#module_0-src)</code>  

* [~Species](#module_0-src..Species)
    * _instance_
        * [.name](#module_0-src..Species+name) : <code>string</code>
        * [.species](#module_0-src..Species+species) : <code>Species</code>
    * _static_
        * [.merge(one, two)](#module_0-src..Species.merge) ⇒ <code>Species</code>

<a name="module_0-src..Species+name"></a>
#### species.name : <code>string</code>
the species name

**Kind**: instance property of <code>[Species](#module_0-src..Species)</code>  
<a name="module_0-src..Species+species"></a>
#### species.species : <code>Species</code>
**Kind**: instance property of <code>[Species](#module_0-src..Species)</code>  
<a name="module_0-src..Species.merge"></a>
#### Species.merge(one, two) ⇒ <code>Species</code>
merge two species into a new one

**Kind**: static method of <code>[Species](#module_0-src..Species)</code>  

| Param | Type | Description |
| --- | --- | --- |
| one | <code>Species</code> | first |
| two | <code>Species</code> | second |


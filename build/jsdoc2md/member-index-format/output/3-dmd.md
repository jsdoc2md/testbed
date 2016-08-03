## Classes

<dl>
<dt><a href="#Animal">Animal</a></dt>
<dd><p>Animals are multicellular, eukaryotic organisms of the kingdom Animalia (also called Metazoa). Their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later on in their lives. Most animals are motile, meaning they can move spontaneously and independently. All animals must ingest other organisms or their products for sustenance (see Heterotroph).</p>
<ul>
<li>some markdown</li>
<li>in the module</li>
<li>description</li>
</ul>
</dd>
<dt><a href="#FurQ">FurQ</a> ⇐ <code><a href="#Rapper">Rapper</a></code></dt>
<dd><p>C*ck, b!tch, c*ck, b!tch, m*therf!cker. You gotta kill people, to respect people.</p>
</dd>
<dt><a href="#Rapper">Rapper</a></dt>
<dd></dd>
<dt><a href="#NewLines">NewLines</a></dt>
<dd><p>A multi-line
class description</p>
</dd>
<dt><a href="#Species">Species</a></dt>
<dd><p>In biology, a species (abbreviated sp., with the plural form species abbreviated spp.) is one of the basic units of biological classification and a taxonomic rank. A species is often defined as the largest group of organisms capable of interbreeding and producing fertile offspring. While in many cases this definition is adequate, the difficulty of defining species is known as the species problem. Differing measures are often used, such as similarity of DNA, morphology, or ecological niche. Presence of specific locally adapted traits may further subdivide species into &quot;infraspecific taxa&quot; such as subspecies (and in botany other taxa are used, such as varieties, subvarieties, and formae).</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#plant">plant()</a></dt>
<dd><p>to plant ones fist in a buster&#39;s mush</p>
</dd>
</dl>

<a name="Animal"></a>

## Animal
Animals are multicellular, eukaryotic organisms of the kingdom Animalia (also called Metazoa). Their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later on in their lives. Most animals are motile, meaning they can move spontaneously and independently. All animals must ingest other organisms or their products for sustenance (see Heterotroph).

- some markdown
- in the module
- description

**Kind**: global class  
**Summary**: It's an animal, yeah?  

* [Animal](#Animal)
    * [new Animal(species, parents)](#new_Animal_new)
    * _instance_
        * [.age](#Animal+age) : <code>number</code>
        * [.species](#Animal+species) : <code>[Species](#Species)</code>
    * _static_
        * [.eMood](#Animal.eMood)

<a name="new_Animal_new"></a>

### new Animal(species, parents)

| Param | Type | Description |
| --- | --- | --- |
| species | <code>array</code> | an array of two parent [Animal](#Animal) objects |
| parents | <code>[Species](#Species)</code> | the species |

<a name="Animal+age"></a>

### animal.age : <code>number</code>
the current age

**Kind**: instance property of <code>[Animal](#Animal)</code>  
**Default**: <code>0</code>  
<a name="Animal+species"></a>

### animal.species : <code>[Species](#Species)</code>
**Kind**: instance property of <code>[Animal](#Animal)</code>  
<a name="Animal.eMood"></a>

### Animal.eMood
Animal moods

**Kind**: static enum of <code>[Animal](#Animal)</code>  
**Properties**

| Name | Default | Description |
| --- | --- | --- |
| satisfied | <code>0</code> | chilling |
| angry | <code>1</code> | pissed off |
| hungry | <code>2</code> | need to eat |

<a name="FurQ"></a>

## FurQ ⇐ <code>[Rapper](#Rapper)</code>
C\*ck, b!tch, c\*ck, b!tch, m\*therf!cker. You gotta kill people, to respect people.

**Kind**: global class  
**Extends:** <code>[Rapper](#Rapper)</code>  
**Emits**: <code>[pop](#FurQ+event_pop)</code>, <code>[slap](#FurQ+event_slap)</code>  
**Access:** public  
**See**: https://www.youtube.com/watch?v=1sxZ4tsp8gc  
**Author:** Chris Morris  

* [FurQ](#FurQ) ⇐ <code>[Rapper](#Rapper)</code>
    * [new FurQ()](#new_FurQ_new)
    * _instance_
        * [.wannaTryIt](#FurQ+wannaTryIt) : <code>string</code>
        * [.LOVE](#FurQ+LOVE) : <code>string</code>
        * [.spit()](#FurQ+spit)
        * [.battle()](#Rapper+battle)
        * [.punch()](#FurQ+punch)
        * ["pop" (zoop)](#FurQ+event_pop)
        * ["slap"](#FurQ+event_slap)
        * _standard_
            * [.kill()](#FurQ+kill)
            * [.respect(done)](#FurQ+respect)
    * _static_
        * [.enemy](#FurQ.enemy) : <code>enum</code>
        * ~~[.peace()](#FurQ.peace)~~
    * _inner_
        * [~onRespect](#FurQ..onRespect) : <code>function</code>

<a name="new_FurQ_new"></a>

### new FurQ()
She's an Uzi lover.

![uzi](https://sampleface.co.uk/wp-content/uploads/2013/07/fur-q-uzi-lover.png)

**Example**  
```js
var uziLover = require("FurQ")
```
<a name="FurQ+wannaTryIt"></a>

### furQ.wannaTryIt : <code>string</code>
**Kind**: instance property of <code>[FurQ](#FurQ)</code>  
**Default**: <code>&quot;bitch&quot;</code>  
**See**

- "Uzi like a metal dick in my hand."
- "Magazine like a big testicle gland."

<a name="FurQ+LOVE"></a>

### furQ.LOVE : <code>string</code>
**Kind**: instance constant of <code>[FurQ](#FurQ)</code>  
**Default**: <code>&quot;UZI&quot;</code>  
<a name="FurQ+spit"></a>

### furQ.spit()
override

**Kind**: instance method of <code>[FurQ](#FurQ)</code>  
**Overrides:** <code>[spit](#Rapper+spit)</code>  
<a name="Rapper+battle"></a>

### furQ.battle()
battle

**Kind**: instance method of <code>[FurQ](#FurQ)</code>  
<a name="FurQ+punch"></a>

### furQ.punch()
to plant ones fist in a buster's mush

**Kind**: instance method of <code>[FurQ](#FurQ)</code>  
<a name="FurQ+event_pop"></a>

### "pop" (zoop)
fire weapon

**Kind**: event emitted by <code>[FurQ](#FurQ)</code>  

| Param | Type | Description |
| --- | --- | --- |
| zoop | <code>boolean</code> | make 'zooping' sound as you fire |

<a name="FurQ+event_slap"></a>

### "slap"
slap man

**Kind**: event emitted by <code>[FurQ](#FurQ)</code>  
<a name="FurQ+kill"></a>

### furQ.kill()
kill

**Kind**: instance method of <code>[FurQ](#FurQ)</code>  
**Category**: standard  
**Example**  
```js
var kill = uziLover.kill()
  
```
**Example**  
```js
uziLover.kill()
```
<a name="FurQ+respect"></a>

### furQ.respect(done)
respect

**Kind**: instance method of <code>[FurQ](#FurQ)</code>  
**Category**: standard  

| Param | Type | Description |
| --- | --- | --- |
| done | <code>[onRespect](#FurQ..onRespect)</code> | called on reciprocation of respect |

**Example**  
```js
uziLover.respect(function(err, gain){
    console.log(gain)
})
```
<a name="FurQ.enemy"></a>

### FurQ.enemy : <code>enum</code>
FUR-Q enemy types

**Kind**: static enum of <code>[FurQ](#FurQ)</code>  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| COCK | <code>number</code> | <code>0</code> | an awful individual |
| BITCH | <code>number</code> | <code>1</code> |  |
| MUTHAFUCKA | <code>number</code> | <code>2</code> |  |

<a name="FurQ.peace"></a>

### ~~FurQ.peace()~~
***Deprecated***

check if at peace

**Kind**: static method of <code>[FurQ](#FurQ)</code>  
**Example**  
```js
var peace = FurQ.peace()
```
<a name="FurQ..onRespect"></a>

### FurQ~onRespect : <code>function</code>
Passed to [respect](#FurQ+respect)

**Kind**: inner typedef of <code>[FurQ](#FurQ)</code>  

| Param | Type | Description |
| --- | --- | --- |
| err | <code>Error</code> | an issue with the punch |
| gain | <code>\*</code> | the respect percentage gained |

<a name="Rapper"></a>

## Rapper
**Kind**: global class  

* [Rapper](#Rapper)
    * _instance_
        * [.spit()](#Rapper+spit)
        * [.battle()](#Rapper+battle)
    * _static_
        * [.train()](#Rapper.train)
            * [~School](#Rapper.train..School)
                * [new School()](#new_Rapper.train..School_new)
                * [.bestStudent](#Rapper.train..School+bestStudent)

<a name="Rapper+spit"></a>

### rapper.spit()
spit

**Kind**: instance method of <code>[Rapper](#Rapper)</code>  
<a name="Rapper+battle"></a>

### rapper.battle()
battle

**Kind**: instance method of <code>[Rapper](#Rapper)</code>  
<a name="Rapper.train"></a>

### Rapper.train()
train new rappers

**Kind**: static method of <code>[Rapper](#Rapper)</code>  

* [.train()](#Rapper.train)
    * [~School](#Rapper.train..School)
        * [new School()](#new_Rapper.train..School_new)
        * [.bestStudent](#Rapper.train..School+bestStudent)

<a name="Rapper.train..School"></a>

#### train~School
**Kind**: inner class of <code>[train](#Rapper.train)</code>  

* [~School](#Rapper.train..School)
    * [new School()](#new_Rapper.train..School_new)
    * [.bestStudent](#Rapper.train..School+bestStudent)

<a name="new_Rapper.train..School_new"></a>

##### new School()
rap school

<a name="Rapper.train..School+bestStudent"></a>

##### school.bestStudent
best student

**Kind**: instance property of <code>[School](#Rapper.train..School)</code>  
<a name="NewLines"></a>

## NewLines
A multi-line
class description

**Kind**: global class  

* [NewLines](#NewLines)
    * [.numbers](#NewLines+numbers)
    * [.method(input)](#NewLines+method) ⇒ <code>number</code>

<a name="NewLines+numbers"></a>

### newLines.numbers
**Kind**: instance property of <code>[NewLines](#NewLines)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| one | <code>number</code> | a property   with newlines for    a change |

<a name="NewLines+method"></a>

### newLines.method(input) ⇒ <code>number</code>
**Kind**: instance method of <code>[NewLines](#NewLines)</code>  
**Returns**: <code>number</code> - the returns
  description also 
  has newlines  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>string</code> | a param description    with an awkward newline   or two. |

<a name="Species"></a>

## Species
In biology, a species (abbreviated sp., with the plural form species abbreviated spp.) is one of the basic units of biological classification and a taxonomic rank. A species is often defined as the largest group of organisms capable of interbreeding and producing fertile offspring. While in many cases this definition is adequate, the difficulty of defining species is known as the species problem. Differing measures are often used, such as similarity of DNA, morphology, or ecological niche. Presence of specific locally adapted traits may further subdivide species into "infraspecific taxa" such as subspecies (and in botany other taxa are used, such as varieties, subvarieties, and formae).

**Kind**: global class  

* [Species](#Species)
    * _instance_
        * [.name](#Species+name) : <code>string</code>
        * [.species](#Species+species) : <code>[Species](#Species)</code>
    * _static_
        * [.merge(one, two)](#Species.merge) ⇒ <code>[Species](#Species)</code>

<a name="Species+name"></a>

### species.name : <code>string</code>
the species name

**Kind**: instance property of <code>[Species](#Species)</code>  
<a name="Species+species"></a>

### species.species : <code>[Species](#Species)</code>
**Kind**: instance property of <code>[Species](#Species)</code>  
<a name="Species.merge"></a>

### Species.merge(one, two) ⇒ <code>[Species](#Species)</code>
merge two species into a new one

**Kind**: static method of <code>[Species](#Species)</code>  

| Param | Type | Description |
| --- | --- | --- |
| one | <code>[Species](#Species)</code> | first |
| two | <code>[Species](#Species)</code> | second |

<a name="plant"></a>

## plant()
to plant ones fist in a buster's mush

**Kind**: global function  

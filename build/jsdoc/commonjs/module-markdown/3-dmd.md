<a name="module_animal"></a>

## animal
Animals are multicellular, eukaryotic organisms of the kingdom Animalia (also called Metazoa). Their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later on in their lives. Most animals are motile, meaning they can move spontaneously and independently. All animals must ingest other organisms or their products for sustenance (see Heterotroph).

| yeah | desc |
| ---- | ---- |
| some | markdown |
| in the | module |
| description | |

**Example**  
```js
var animal = require("animal")
```

* [animal](#module_animal)
    * [~Animal](#module_animal..Animal)
        * [new Animal(species, parents)](#new_module_animal..Animal_new)
        * _instance_
            * [.age](#module_animal..Animal+age) : <code>number</code>
            * [.species](#module_animal..Animal+species) : <code>Species</code>
        * _static_
            * [.eMood](#module_animal..Animal.eMood)

<a name="module_animal..Animal"></a>

### animal~Animal
**Kind**: inner class of <code>[animal](#module_animal)</code>  

* [~Animal](#module_animal..Animal)
    * [new Animal(species, parents)](#new_module_animal..Animal_new)
    * _instance_
        * [.age](#module_animal..Animal+age) : <code>number</code>
        * [.species](#module_animal..Animal+species) : <code>Species</code>
    * _static_
        * [.eMood](#module_animal..Animal.eMood)

<a name="new_module_animal..Animal_new"></a>

#### new Animal(species, parents)

| Param | Type | Description |
| --- | --- | --- |
| species | <code>array</code> | an array of two parent [Animal](Animal) objects |
| parents | <code>Species</code> | the species |

<a name="module_animal..Animal+age"></a>

#### animal.age : <code>number</code>
the current age

**Kind**: instance property of <code>[Animal](#module_animal..Animal)</code>  
**Default**: <code>0</code>  
<a name="module_animal..Animal+species"></a>

#### animal.species : <code>Species</code>
**Kind**: instance property of <code>[Animal](#module_animal..Animal)</code>  
<a name="module_animal..Animal.eMood"></a>

#### Animal.eMood
Animal moods

**Kind**: static enum of <code>[Animal](#module_animal..Animal)</code>  
**Properties**

| Name | Default | Description |
| --- | --- | --- |
| satisfied | <code>0</code> | chilling |
| angry | <code>1</code> | pissed off |
| hungry | <code>2</code> | need to eat |


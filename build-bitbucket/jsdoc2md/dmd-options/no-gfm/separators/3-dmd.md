## Animal
Animals are multicellular, eukaryotic organisms of the kingdom Animalia (also called Metazoa). Their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later on in their lives. Most animals are motile, meaning they can move spontaneously and independently. All animals must ingest other organisms or their products for sustenance (see Heterotroph).

- some markdown
- in the module
- description

**Kind**: global class  
**Summary**: It's an animal, yeah?  

* [Animal](#markdown-header-animal)
    * [new Animal(species, parents)](#markdown-header-new-animalspecies-parents)
    * _instance_
        * [.age](#markdown-header-animalage-number) : number
        * [.species](#markdown-header-animalspecies-species) : Species
    * _static_
        * [.eMood](#markdown-header-animalemood)


* * *

### new Animal(species, parents)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>species</td><td>array</td><td><p>an array of two parent <a href="#Animal">Animal</a> objects</p>
</td>
    </tr><tr>
    <td>parents</td><td>Species</td><td><p>the species</p>
</td>
    </tr>  </tbody>
</table>


* * *

### animal.age : number
the current age

**Kind**: instance property of [Animal](#markdown-header-new-animalspecies-parents)  
**Default**: `0`  

* * *

### animal.species : Species
**Kind**: instance property of [Animal](#markdown-header-new-animalspecies-parents)  

* * *

### Animal.eMood
Animal moods

**Kind**: static enum property of [Animal](#markdown-header-new-animalspecies-parents)  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>satisfied</td><td>`0`</td><td>chilling</td>
    </tr><tr>
    <td>angry</td><td>`1`</td><td>pissed off</td>
    </tr><tr>
    <td>hungry</td><td>`2`</td><td>need to eat</td>
    </tr>  </tbody>
</table>


* * *


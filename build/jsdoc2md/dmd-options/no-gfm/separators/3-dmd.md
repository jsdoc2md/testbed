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
        * [.species](#Animal+species) : <code>Species</code>
    * _static_
        * [.eMood](#Animal.eMood)


* * *

<a name="new_Animal_new"></a>

### new Animal(species, parents)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>species</td><td><code>array</code></td><td><p>an array of two parent <a href="#Animal">Animal</a> objects</p>
</td>
    </tr><tr>
    <td>parents</td><td><code>Species</code></td><td><p>the species</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="Animal+age"></a>

### animal.age : <code>number</code>
the current age

**Kind**: instance property of [<code>Animal</code>](#Animal)  
**Default**: <code>0</code>  

* * *

<a name="Animal+species"></a>

### animal.species : <code>Species</code>
**Kind**: instance property of [<code>Animal</code>](#Animal)  

* * *

<a name="Animal.eMood"></a>

### Animal.eMood
Animal moods

**Kind**: static enum of [<code>Animal</code>](#Animal)  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>satisfied</td><td><code>0</code></td><td><p>chilling</p>
</td>
    </tr><tr>
    <td>angry</td><td><code>1</code></td><td><p>pissed off</p>
</td>
    </tr><tr>
    <td>hungry</td><td><code>2</code></td><td><p>need to eat</p>
</td>
    </tr>  </tbody>
</table>


* * *


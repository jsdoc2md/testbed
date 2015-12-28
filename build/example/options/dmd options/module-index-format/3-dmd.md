## `jsdoc2md --module-index-format dl`
## Modules

<dl>
<dt><a href="#module_animal">animal</a></dt>
<dd><p>Animals are multicellular, eukaryotic organisms of the kingdom Animalia (also called Metazoa). Their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later on in their lives. Most animals are motile, meaning they can move spontaneously and independently. All animals must ingest other organisms or their products for sustenance (see Heterotroph).</p>
<table>
<thead>
<tr>
<th>yeah</th>
<th>desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>some</td>
<td>markdown</td>
</tr>
<tr>
<td>in the</td>
<td>module</td>
</tr>
<tr>
<td>description</td>
<td></td>
</tr>
</tbody>
</table>
</dd>
<dt><a href="#module_animals/0-src">animals/0-src</a></dt>
<dd><p>exports animals</p>
</dd>
<dt><a href="#module_builder">builder</a></dt>
<dd><p>Aside from humans, who are the most prolific and versatile builders, building behaviour is common in many mammals, birds, insects and arachnids. It is also seen in a few species of fish, reptiles, amphibians, molluscs, urochordates, crustaceans, annelids and some other arthropods. It is virtually absent from all the other animal phyla.</p>
</dd>
<dt><a href="#module_file-set">file-set</a></dt>
<dd><p>this module exports a class constructor</p>
</dd>
<dt><a href="#module_cjs/class">cjs/class</a></dt>
<dd><p>exports a class</p>
</dd>
<dt><a href="#module_function-tools">function-tools</a></dt>
<dd><p>This is the module description</p>
</dd>
<dt><a href="#module_farm">farm</a></dt>
<dd><p>test to check deep trees render ok</p>
</dd>
<dt><a href="#module_farm">farm</a></dt>
<dd><p>test to check deep trees render ok</p>
</dd>
<dt><a href="#module_es6-class">es6-class</a></dt>
<dd></dd>
<dt><a href="#module_falias-obj">falias-obj</a></dt>
<dd><p>exports a pointer to a function</p>
</dd>
<dt><a href="#module_cjs/function-alias">cjs/function-alias</a></dt>
<dd><p>exports a pointer to a function</p>
</dd>
<dt><a href="#module_sum-alias">sum-alias</a></dt>
<dd><p>This module exports a simple maths function</p>
</dd>
<dt><a href="#module_function/0-src">function/0-src</a></dt>
<dd><p>This is the module description</p>
</dd>
<dt><a href="#module_cjs/human">cjs/human</a></dt>
<dd><p>exports a class</p>
</dd>
<dt><a href="#module_ignore/0-src">ignore/0-src</a></dt>
<dd><p>module with ignored shiz</p>
</dd>
<dt><a href="#module_linkMod">linkMod</a></dt>
<dd><p>A module. Refer to it using <a href="#module_linkMod">this link</a>.</p>
</dd>
<dt><a href="#module_cjs/object-alias">cjs/object-alias</a></dt>
<dd><p>a module exporting an object</p>
</dd>
<dt><a href="#module_object-alias2/0-src">object-alias2/0-src</a></dt>
<dd><p>simple object export</p>
</dd>
<dt><a href="#module_cyberdyne">cyberdyne</a></dt>
<dd><p>exports an object.. has an inner class.</p>
</dd>
<dt><a href="#module_cattle">cattle</a></dt>
<dd><p>exported object, with-inner-members</p>
</dd>
<dt><a href="#module_one-member">one-member</a></dt>
<dd><p>simple object, one member. It shouldn&#39;t have an index.</p>
</dd>
<dt><a href="#module_heaven">heaven</a></dt>
<dd><p>factory module creating dodgy cloud. object-with-static-class.</p>
</dd>
<dt><a href="#module_cjs/object">cjs/object</a></dt>
<dd><p>a module exporting <code>exports</code> directly</p>
</dd>
<dt><a href="#module_private">private</a></dt>
<dd><p>module with private shiz</p>
</dd>
<dt><a href="#module_single-value/0-src">single-value/0-src</a></dt>
<dd><p>this module exports one value, that&#39;s it</p>
</dd>
<dt><a href="#module_species/0-src">species/0-src</a></dt>
<dd><p>In biology, a species (abbreviated sp., with the plural form species abbreviated spp.) is one of the basic units of biological classification and a taxonomic rank. A species is often defined as the largest group of organisms capable of interbreeding and producing fertile offspring. While in many cases this definition is adequate, the difficulty of defining species is known as the species problem. Differing measures are often used, such as similarity of DNA, morphology, or ecological niche. Presence of specific locally adapted traits may further subdivide species into &quot;infraspecific taxa&quot; such as subspecies (and in botany other taxa are used, such as varieties, subvarieties, and formae).</p>
</dd>
</dl>


## `jsdoc2md --module-index-format grouped`
## Modules

* [animal](#module_animal)
    * [~Animal](#module_animal..Animal)
        * [new Animal(species, parents)](#new_module_animal..Animal_new)
        * _instance_
            * [.age](#module_animal..Animal+age) : <code>number</code>
            * [.species](#module_animal..Animal+species) : <code>Species</code>
        * _static_
            * [.eMood](#module_animal..Animal.eMood)
* [animals/0-src](#module_animals/0-src)
    * _static_
        * [.cat](#module_animals/0-src.cat) : <code>Animal</code>
        * [.dog](#module_animals/0-src.dog) : <code>Animal</code>
    * _inner_
        * [~Animal](#module_animals/0-src..Animal)
            * _instance_
                * [.type](#module_animals/0-src..Animal+type) : <code>Quadroped</code>
            * _inner_
                * [~Quadroped](#module_animals/0-src..Animal..Quadroped)
                    * [.legs](#module_animals/0-src..Animal..Quadroped+legs)
* [builder](#module_builder)
    * [~builder](#module_builder..builder)
        * [.construct()](#module_builder..builder.construct)
        * [.repair()](#module_builder..builder.repair)
* [file-set](#module_file-set)
    * [FileSet](#exp_module_file-set--FileSet) ⏏
        * [new FileSet()](#new_module_file-set--FileSet_new)
        * [.files](#module_file-set--FileSet+files)
        * [.delete(paths)](#module_file-set--FileSet+delete)
* [cjs/class](#module_cjs/class)
    * [ExportedClass](#exp_module_cjs/class--ExportedClass) ⏏
        * [new ExportedClass()](#new_module_cjs/class--ExportedClass_new)
        * _instance_
            * [.prop](#module_cjs/class--ExportedClass+prop)
        * _static_
            * [.staticProp](#module_cjs/class--ExportedClass.staticProp)
        * _inner_
            * [~innerProp](#module_cjs/class--ExportedClass..innerProp)
* [function-tools](#module_function-tools)
    * [.one()](#module_function-tools.one)
* [farm](#module_farm)
    * [Farm](#exp_module_farm--Farm) ⏏
        * [new Farm()](#new_module_farm--Farm_new)
        * _instance_
            * [.equipment](#module_farm--Farm.Farm+equipment) : <code>[Equipment](#module_farm--Farm..Equipment)</code>
        * _static_
            * [.size](#module_farm--Farm.size)
            * [.equipment](#module_farm--Farm.equipment)
                * [.tractor](#module_farm--Farm.equipment.tractor)
                    * [.engine](#module_farm--Farm.equipment.tractor.engine)
                        * [.manufacturer](#module_farm--Farm.equipment.tractor.engine.manufacturer)
                        * [.size](#module_farm--Farm.equipment.tractor.engine.size)
        * _inner_
            * [~Equipment](#module_farm--Farm..Equipment)
                * [.tractor](#module_farm--Farm..Equipment.Equipment+tractor) : <code>[Tractor](#module_farm--Farm..Tractor)</code>
            * [~Tractor](#module_farm--Farm..Tractor)
                * [.engine](#module_farm--Farm..Tractor.Tractor+engine)
                    * [.manufacturer](#module_farm--Farm..Tractor.Tractor+engine.manufacturer)
                    * [.size](#module_farm--Farm..Tractor.Tractor+engine.size)
* [farm](#module_farm)
    * [Farm](#exp_module_farm--Farm) ⏏
        * [new Farm()](#new_module_farm--Farm_new)
        * _instance_
            * [.equipment](#module_farm--Farm.Farm+equipment) : <code>[Equipment](#module_farm--Farm..Equipment)</code>
        * _static_
            * [.size](#module_farm--Farm.size)
            * [.equipment](#module_farm--Farm.equipment)
                * [.tractor](#module_farm--Farm.equipment.tractor)
                    * [.engine](#module_farm--Farm.equipment.tractor.engine)
                        * [.manufacturer](#module_farm--Farm.equipment.tractor.engine.manufacturer)
                        * [.size](#module_farm--Farm.equipment.tractor.engine.size)
        * _inner_
            * [~Equipment](#module_farm--Farm..Equipment)
                * [.tractor](#module_farm--Farm..Equipment.Equipment+tractor) : <code>[Tractor](#module_farm--Farm..Tractor)</code>
            * [~Tractor](#module_farm--Farm..Tractor)
                * [.engine](#module_farm--Farm..Tractor.Tractor+engine)
                    * [.manufacturer](#module_farm--Farm..Tractor.Tractor+engine.manufacturer)
                    * [.size](#module_farm--Farm..Tractor.Tractor+engine.size)
* [es6-class](#module_es6-class)
    * [ExportedClass](#exp_module_es6-class--ExportedClass) ⏏
        * [new ExportedClass(one, two)](#new_module_es6-class--ExportedClass_new)
        * _instance_
            * [.propOne](#module_es6-class--ExportedClass.ExportedClass+propOne) : <code>number</code>
            * [.methodOne()](#module_es6-class--ExportedClass+methodOne)
            * [.methodTwo()](#module_es6-class--ExportedClass+methodTwo)
        * _static_
            * [.shat()](#module_es6-class--ExportedClass.shat)
        * _inner_
            * [~ChildClass](#module_es6-class--ExportedClass..ChildClass) ⇐ <code>ExportedClass</code>
                * [.propThree](#module_es6-class--ExportedClass..ChildClass.ChildClass+propThree)
* [falias-obj](#module_falias-obj)
    * [sum()](#exp_module_falias-obj--sum) ⏏
        * [.extra()](#module_falias-obj--sum.extra)
* [cjs/function-alias](#module_cjs/function-alias)
    * [sum(one, two)](#exp_module_cjs/function-alias--sum) ⇒ <code>number</code> ⏏
        * [.sumthingStatic](#module_cjs/function-alias--sum.sumthingStatic)
* [sum-alias](#module_sum-alias)
    * [sum(a, b)](#exp_module_sum-alias--sum) ⇒ <code>number</code> ⏏
* [function/0-src](#module_function/0-src)
    * [module.exports(one, two)](#exp_module_function/0-src--module.exports) ⇒ <code>object</code> &#124; <code>string</code> ⏏
* [cjs/human](#module_cjs/human)
    * [Human](#exp_module_cjs/human--Human) ⏏
        * [new Human()](#new_module_cjs/human--Human_new)
        * _instance_
            * [.liver](#module_cjs/human--Human+liver) : <code>[Organ](#module_cjs/human--Human..Organ)</code>
        * _inner_
            * [~Organ](#module_cjs/human--Human..Organ)
                * _instance_
                    * [.redCell](#module_cjs/human--Human..Organ+redCell) : <code>[Cell](#module_cjs/human--Human..Organ..Cell)</code>
                * _inner_
                    * [~Cell](#module_cjs/human--Human..Organ..Cell)
* [ignore/0-src](#module_ignore/0-src)
    * [.visible](#module_ignore/0-src.visible)
* [linkMod](#module_linkMod)
    * _static_
        * ["event:MyEvent"](#module_linkMod.event_MyEvent)
    * _inner_
        * [~linksYeah](#module_linkMod..linksYeah) ⇐ <code>[Math](#external_Math)</code>
            * [new linksYeah()](#new_module_linkMod..linksYeah_new)
        * [~Math](#external_Math)
        * [~Date](#external_Date)
* [cjs/object-alias](#module_cjs/object-alias)
    * [teams](#exp_module_cjs/object-alias--teams) ⏏
* [object-alias2/0-src](#module_object-alias2/0-src)
    * [.one](#module_object-alias2/0-src.one)
    * [.two](#module_object-alias2/0-src.two)
    * [.three()](#module_object-alias2/0-src.three)
* [cyberdyne](#module_cyberdyne)
    * _static_
        * [.createMachine()](#module_cyberdyne.createMachine) ⇒ <code>[Machine](#module_cyberdyne..Machine)</code>
    * _inner_
        * [~Machine](#module_cyberdyne..Machine)
            * [new Machine(options)](#new_module_cyberdyne..Machine_new)
            * [.eyes](#module_cyberdyne..Machine+eyes) : <code>number</code>
            * [.vibe](#module_cyberdyne..Machine+vibe) : <code>string</code>
        * [~something](#module_cyberdyne..something)
* [cattle](#module_cattle)
    * _static_
        * [.createCow()](#module_cattle.createCow) ⇒ <code>boolean</code>
    * _inner_
        * [~innerMember](#module_cattle..innerMember)
        * [~innerFuction()](#module_cattle..innerFuction)
        * ~~[~anotherInnerFuction()](#module_cattle..anotherInnerFuction)~~
* [one-member](#module_one-member)
    * [.three(four, five)](#module_one-member.three) ⇒ <code>object</code> &#124; <code>string</code>
* [heaven](#module_heaven)
    * _static_
        * [.Cloud](#module_heaven.Cloud) : <code>[Cloud](#module_heaven..Cloud)</code>
        * [.createCloud()](#module_heaven.createCloud) ⇒ <code>[Cloud](#module_heaven..Cloud)</code>
    * _inner_
        * [~Cloud](#module_heaven..Cloud)
            * [new Cloud(options)](#new_module_heaven..Cloud_new)
            * _instance_
                * [.size](#module_heaven..Cloud+size) : <code>number</code>
                * [.rain](#module_heaven..Cloud+rain) : <code>boolean</code>
            * _static_
                * [.SPACES](#module_heaven..Cloud.SPACES) : <code>number</code>
                * [.classMethod()](#module_heaven..Cloud.classMethod)
        * [~FACT](#module_heaven..FACT) : <code>boolean</code>
* [cjs/object](#module_cjs/object)
    * [.one](#module_cjs/object.one) : <code>number</code>
    * [.two()](#module_cjs/object.two)
* [private](#module_private)
    * [.notprivate](#module_private.notprivate)
* [single-value/0-src](#module_single-value/0-src)
    * [module.exports](#exp_module_single-value/0-src--module.exports) : <code>boolean</code> ⏏
* [species/0-src](#module_species/0-src)
    * [~Species](#module_species/0-src..Species)
        * _instance_
            * [.name](#module_species/0-src..Species+name) : <code>string</code>
            * [.species](#module_species/0-src..Species+species) : <code>Species</code>
        * _static_
            * [.merge(one, two)](#module_species/0-src..Species.merge) ⇒ <code>Species</code>


## `jsdoc2md --module-index-format table`
## Modules

<table>
  <thead>
    <tr>
      <th>Module</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><a href="#module_animal">animal</a></td>
    <td><p>Animals are multicellular, eukaryotic organisms of the kingdom Animalia (also called Metazoa). Their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later on in their lives. Most animals are motile, meaning they can move spontaneously and independently. All animals must ingest other organisms or their products for sustenance (see Heterotroph).</p>
<table>
<thead>
<tr>
<th>yeah</th>
<th>desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>some</td>
<td>markdown</td>
</tr>
<tr>
<td>in the</td>
<td>module</td>
</tr>
<tr>
<td>description</td>
<td></td>
</tr>
</tbody>
</table>
</td>
    </tr>
<tr>
    <td><a href="#module_animals/0-src">animals/0-src</a></td>
    <td><p>exports animals</p>
</td>
    </tr>
<tr>
    <td><a href="#module_builder">builder</a></td>
    <td><p>Aside from humans, who are the most prolific and versatile builders, building behaviour is common in many mammals, birds, insects and arachnids. It is also seen in a few species of fish, reptiles, amphibians, molluscs, urochordates, crustaceans, annelids and some other arthropods. It is virtually absent from all the other animal phyla.</p>
</td>
    </tr>
<tr>
    <td><a href="#module_file-set">file-set</a></td>
    <td><p>this module exports a class constructor</p>
</td>
    </tr>
<tr>
    <td><a href="#module_cjs/class">cjs/class</a></td>
    <td><p>exports a class</p>
</td>
    </tr>
<tr>
    <td><a href="#module_function-tools">function-tools</a></td>
    <td><p>This is the module description</p>
</td>
    </tr>
<tr>
    <td><a href="#module_farm">farm</a></td>
    <td><p>test to check deep trees render ok</p>
</td>
    </tr>
<tr>
    <td><a href="#module_farm">farm</a></td>
    <td><p>test to check deep trees render ok</p>
</td>
    </tr>
<tr>
    <td><a href="#module_es6-class">es6-class</a></td>
    <td></td>
    </tr>
<tr>
    <td><a href="#module_falias-obj">falias-obj</a></td>
    <td><p>exports a pointer to a function</p>
</td>
    </tr>
<tr>
    <td><a href="#module_cjs/function-alias">cjs/function-alias</a></td>
    <td><p>exports a pointer to a function</p>
</td>
    </tr>
<tr>
    <td><a href="#module_sum-alias">sum-alias</a></td>
    <td><p>This module exports a simple maths function</p>
</td>
    </tr>
<tr>
    <td><a href="#module_function/0-src">function/0-src</a></td>
    <td><p>This is the module description</p>
</td>
    </tr>
<tr>
    <td><a href="#module_cjs/human">cjs/human</a></td>
    <td><p>exports a class</p>
</td>
    </tr>
<tr>
    <td><a href="#module_ignore/0-src">ignore/0-src</a></td>
    <td><p>module with ignored shiz</p>
</td>
    </tr>
<tr>
    <td><a href="#module_linkMod">linkMod</a></td>
    <td><p>A module. Refer to it using <a href="#module_linkMod">this link</a>.</p>
</td>
    </tr>
<tr>
    <td><a href="#module_cjs/object-alias">cjs/object-alias</a></td>
    <td><p>a module exporting an object</p>
</td>
    </tr>
<tr>
    <td><a href="#module_object-alias2/0-src">object-alias2/0-src</a></td>
    <td><p>simple object export</p>
</td>
    </tr>
<tr>
    <td><a href="#module_cyberdyne">cyberdyne</a></td>
    <td><p>exports an object.. has an inner class.</p>
</td>
    </tr>
<tr>
    <td><a href="#module_cattle">cattle</a></td>
    <td><p>exported object, with-inner-members</p>
</td>
    </tr>
<tr>
    <td><a href="#module_one-member">one-member</a></td>
    <td><p>simple object, one member. It shouldn&#39;t have an index.</p>
</td>
    </tr>
<tr>
    <td><a href="#module_heaven">heaven</a></td>
    <td><p>factory module creating dodgy cloud. object-with-static-class.</p>
</td>
    </tr>
<tr>
    <td><a href="#module_cjs/object">cjs/object</a></td>
    <td><p>a module exporting <code>exports</code> directly</p>
</td>
    </tr>
<tr>
    <td><a href="#module_private">private</a></td>
    <td><p>module with private shiz</p>
</td>
    </tr>
<tr>
    <td><a href="#module_single-value/0-src">single-value/0-src</a></td>
    <td><p>this module exports one value, that&#39;s it</p>
</td>
    </tr>
<tr>
    <td><a href="#module_species/0-src">species/0-src</a></td>
    <td><p>In biology, a species (abbreviated sp., with the plural form species abbreviated spp.) is one of the basic units of biological classification and a taxonomic rank. A species is often defined as the largest group of organisms capable of interbreeding and producing fertile offspring. While in many cases this definition is adequate, the difficulty of defining species is known as the species problem. Differing measures are often used, such as similarity of DNA, morphology, or ecological niche. Presence of specific locally adapted traits may further subdivide species into &quot;infraspecific taxa&quot; such as subspecies (and in botany other taxa are used, such as varieties, subvarieties, and formae).</p>
</td>
    </tr>
</tbody>
</table>


## `jsdoc2md --module-index-format none`

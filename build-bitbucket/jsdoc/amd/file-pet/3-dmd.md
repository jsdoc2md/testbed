## file-pet
this module returns a pet of files

**Example**  
```js
var cowFiles = FilePet("cow/*")
```

* [file-pet](#markdown-header-filepet)
    * [FilePet](#markdown-header-filepet) ⏏
        * [new FilePet(num)](#markdown-header-new-filepetnum)
        * [.instie](#markdown-header-filepetinstie)
        * [.files](#markdown-header-filepetfiles-boolean) : boolean
        * [.delete(paths)](#markdown-header-filepetdeletepaths)

### FilePet ⏏
this class returns a pet of files

**Kind**: Exported class  
#### new FilePet(num)
this is the contructor


| Param | Type | Description |
| --- | --- | --- |
| num | number | the input number |

**Example**  
```js
  var cowFiles = FilePet("cow/*")
  ```
  
#### filePet.instie
an instance ting

**Kind**: instance property of [FilePet](#markdown-header-new-filepetnum)  
#### filePet.files : boolean
the prototype instance property

**Kind**: instance property of [FilePet](#markdown-header-new-filepetnum)  
**Default**: `true`  
#### filePet.delete(paths)
A prototype instance methy meth

**Kind**: instance method of [FilePet](#markdown-header-new-filepetnum)  

| Param | Type | Description |
| --- | --- | --- |
| paths | array | the paths to delete |


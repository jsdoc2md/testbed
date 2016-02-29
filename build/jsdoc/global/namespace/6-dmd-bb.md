## car : object
**Kind**: global namespace  

* [car](#markdown-header-car-object) : object
    * [.wheels](#markdown-header-carwheels)
    * [.sensors](#markdown-header-carsensors)
    * [.start()](#markdown-header-carstart)
        * [.env](#markdown-header-startenv-object) : object
            * [.weather](#markdown-header-envweather-string) : string
            * [.roads](#markdown-header-envroads-string) : string

### car.wheels
the round things

**Kind**: static property of [car](#markdown-header-car-object)  
### car.sensors
the electronics that always go wrong

**Kind**: static property of [car](#markdown-header-car-object)  
### car.start()
start the car

**Kind**: static method of [car](#markdown-header-car-object)  

| Type |
| --- |
| string | 
| function | 


* [.start()](#markdown-header-carstart)
    * [.env](#markdown-header-startenv-object) : object
        * [.weather](#markdown-header-envweather-string) : string
        * [.roads](#markdown-header-envroads-string) : string

#### start.env : object
decribes the current conditions

**Kind**: instance namespace of start  

* [.env](#markdown-header-startenv-object) : object
    * [.weather](#markdown-header-envweather-string) : string
    * [.roads](#markdown-header-envroads-string) : string

##### env.weather : string
what kind of day is it

**Kind**: static property of env  
**Default**: `"choppy"`  
##### env.roads : string
road condition

**Kind**: static property of env  
**Default**: `"wet"`  

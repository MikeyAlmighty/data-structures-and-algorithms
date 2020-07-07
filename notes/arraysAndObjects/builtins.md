# Objects
let hero = {
	name: "DeadPool",
	realName: "Wade Wilson",
	age: 420
}

# When to use:
* Don't need order
* When you need fast access/insertion/removal

# General Complexity
* access/insertion/removal = O(1)
* searching = O(N)

# Object Methods
* Object.keys - O(N) [Makes sense as it returns array of size N, which represents size of object]
* Object.values - O(N)
* Object.entries - O(N)
* Object.hasOwnProperty - O(1) [Retrieval of value is in constant time, makes sense for retrieval of property] 

# Arrays
let names = ["DeadPool", "AquaMan", "BatMan"]

# When to use:
* When you need order

# General Complexity
* Accessing = O(1)
* Searching = O(N) [Potential worst case is to go through entire Array thus, N]

### Insertion
* Push - End of array = O(1)
* Unshift - First element of Array = O(N) as operation needs to be applied to tail of the array]

### Removal
* Pop - End of array = O(1)
* Shift - First element of Array = O(N) as operation needs to be applied to tail of the array]

# Array Methods
* Array.prototype.slice - O(N)
* Array.prototype.splice - O(N) 
* Array.prototype.concat - O(N) 
* Array.prototype.sort - O(N log N) 
* forEach,map,filter,reduce etc. - O(N) [Operates with each element atleast once]

# Array Prototype Replicas

Just a fun project recreating each of the built in array methods. Replica array methods defined in the [prototypes.js](./prototypes.js) file. Validation testing can be done by running `npm test`

Naming convention for replica methods is `_{{method name}}`

##### Example

```
[1,2,3,4].reduce((a,c) => a + c); // Built in method - returns 10
[1,2,3,4]._reduce((a,c) => a + c); // Replica method - returns 10
```

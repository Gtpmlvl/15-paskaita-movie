'use strict';
console.log('filterDelete.js');


let arr = [{ id:1 }, { id:2 }, { id:3 } ]

arr = arr.filter((obj) => obj.id !== 2); 

console.log('arr ===', arr);
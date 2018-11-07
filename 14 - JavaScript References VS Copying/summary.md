# Summary

## Notes

1. Reference

    We updated `team`. `team` is **not** the array, but is a **reference** to the original array, which is `players`. When we update the original array or any of the arraies, it's going to go back to the reference where it was. 
    
2. How to make a **copy** of an array

    * Use `slice()`: `let team = players.slice();`
    * USe `concat()`: `let team = [].concat(players);`
    * USe ES6 Spread: `let team = [...players];`
    * Use `Array.from()`: `let team = Array.from(players);`

3. Make a **shallow copy** of an object

    * `Object.assign(target, ...sources)`:
        target is the target object that will be returned.
        
        sources are the source object(s).
        
        ```
        const person2 = Object.assign({}, person, { num: 99 });
        ```
        
        `{ num: 99 }` is the new property to update.
        
    * Object spread - new in ECMAScript2018
        
        `const p1 = {...person};`

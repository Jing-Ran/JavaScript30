# Summary

## Notes

1. Destructuring objects: **{}**

    ```
    let gentleman = {
        name: 'bob',
        age: 32,
        weight: 160
    };
    
    // Use default property names
    let {age} = gentleman;
    console.log(age); // 32
    ```
    
    ```
    // Use custom property names
    let {age: gentAge} = gentleman;
    ```
    
    In code: 
    
    ```
    const hero = document.querySelector('.hero');
    
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    ```
    
    `hero` is an HTMLElement object, which contains `offsetHeight` and `offsetWidth` properties. They returns the element's CSS height and width. So they can be written as: 
    
    ```
    const {offsetWidth: width, offsetHeight: height } = hero;
    ```
    
2. `offsetX` and `offsetY` are relative to the **event target**.
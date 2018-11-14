# Summary

## Notes

1. `parseFloat` / `parseInt` is a **function**.

    ```
    strArr.map(str => parseFloat(str));
    
    // Equals to
    strArr.map(parseFloat);
    ```
    
    Because `parseFloat` is a function, it can be passed to `map` directly.
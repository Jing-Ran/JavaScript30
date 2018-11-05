# Summary

## Notes

1. `.key`: key name

## Code

1. If save all pressed keys in an array, it will be huge. We only need the last several. The exact length will match the length of the value saved in the `secretCode` variable.

    Ex. `let secretCode = 'wesbos';`
    
    ```
    pressedKeys.splice(-secretCode.length - 1, pressedKeys.length - secretCode.length);
    ```
    
    The first parameter of the `splice` method is the start point. Using negative number means starting from the end of the array. We want to keep the length of `pressedKeys` matching `secretCode` length, which is 6 in this case. So we start splice from the 7th item from the end.
    
    The second parameter is the number of old array elements to remove. We want to remove all the rest from `pressedKeys` except the last 6.
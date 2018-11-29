# Summary

## Notes

1. Use `setTimeout` to add another class after a time of period.

    ```
    // add class1 first
    ele.classList.add('class1');
    
    // after 200ms, add class2
    setTimeout(() => ele.classList.add('class2'), 200);
    ```
    
    This method can also be used to remove a class after adding it for several seconds.
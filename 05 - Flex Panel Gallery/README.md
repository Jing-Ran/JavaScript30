# Summary

## Notes

1. `transitionend` event
    
    To bring in the words from top and bottom, listens to the `transitionend` event to do `toggleActive` once the transition is finished / once the panel is opened. Multiple transitions are triggered (like `flex`, and `font-size`). The `e.propertyName` helps to find the desire transition.
    
## Upgrade

1. Add `closeAll` function

    To open another panel when one panel is already opened, both two panels will keep the open status. Add a `closeAll` function to close all other opened panels before open a new one.
    
    In `toggleOpen` function, first check if the current panel is opened. 
    
    * If no, the current panel doesn't have the `open` class, (`(!this.classList.contains('open'))` is true):

        * Call `closeAll` function to close other panels;
        
        * Add the `open` class to the current panel:
        `this.classList.toggle('open');`

    * If yes, the current panel has the `open` class, close the current panel: `this.classList.toggle('open');`
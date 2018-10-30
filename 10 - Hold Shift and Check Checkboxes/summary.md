# Summary

## Notes

1. `e.shiftKey` indicates if the shift key was pressed (true or false) when the event occurred.

    There is no need to check `keycode` with this property.
    
## Code Analysis

1. Set a flag variable `inBetween` that marks the starting and ending points of a selection. It is default set to `false`.

    One point I missed is having a variable that marks the starting point and ending point of a selection. Only checkboxes in between the starting point and ending point will be checked. When looping the checkbox list, once hitting the starting point, `inBetween` is `true`. And once hitting the ending point, `inBetween` is set back to `false`.
    
    Two situations: If the starting point is the last checkbox that is clicked, the ending point will be `this` (the one that triggers the `handleCheck` listener). Or the starting point is `this`, and the ending point will be the last clicked checkbox.
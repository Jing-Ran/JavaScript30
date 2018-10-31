# Summary

## Notes

1. `e.shiftKey` indicates if the shift key was pressed (true or false) when the event occurred.

    There is no need to check `keycode` with this property.
    
## Code Analysis

1. Set a flag variable `inBetween` that marks the starting and ending points of a selection. It is default set to `false`.

    One point I missed is having a variable that marks the starting point and ending point of a selection. Only checkboxes in between the starting point and ending point will be checked. When looping the checkbox list, once hitting the starting point, `inBetween` is `true`. And once hitting the ending point, `inBetween` is set back to `false`.
    
    Two situations: If the starting point is the last checkbox that is clicked, the ending point will be `this` (the one that triggers the `handleCheck` listener). Or the starting point is `this`, and the ending point will be the last clicked checkbox.
    
2. Buggy code

    Bugs:

    ```
    - 1
    - 2
    - 3
    - 4
    - 5
    ```
    
    If check 1 to 3, uncheck 2, then press `shift` and check 2 again, all five checkboxes will be checked.
    
    Can't uncheck a group of checkboxes using `shift`.
    
    **Updated code - 1**:
    
    ```
    let isChecked = false;
    
    function handleCheck1(e) {
      if (e.shiftKey && prevChecked !== this) {
        let point1 = checkboxesArr.indexOf(this);
        let point2 = checkboxesArr.indexOf(prevChecked);
    
        // Only loop between point1 and point2
        checkboxesArr
          .slice(Math.min(point1, point2), Math.max(point1, point2) + 1)
          .forEach(cb => cb.checked = isChecked);
        
      }
    
      isChecked = this.checked;
      prevChecked = this;
    }
    ```
    
    Solved bugs mentioned above. New bug: 
    
    ```
    - 1
    - 2
    - 3
    - 4
    - 5
    ```
    
    Check 1 thru 3, then uncheck 3 (or anyone of these three boxes). Then check 5, in theory, 3, 4 and 5 should be checked. But all will be unchecked because `isChecked` is `false`. This happened when uncheck 3.
    
    How Gmail performs: check all starting from the unchecked one (prevChecked) to `this`.
    
    To solve this problem, find the nearest (to `this`) checked item (if there is any). Compare its index to `prevChecked` (now it should be the unchecked one from previous move):
    
    ```
    function handleCheck1(e) {
      if (e.shiftKey && prevChecked !== this) {
        let point1 = checkboxesArr.indexOf(this);
        let point2 = checkboxesArr.indexOf(prevChecked);
    
        isChecked = (this.checked || prevChecked.checked) ? true : false;
    
        // Only loop between point1 and point2
        checkboxesArr
          .slice(Math.min(point1, point2), Math.max(point1, point2) + 1)
          .forEach(cb => cb.checked = isChecked);
      }
      ```
      
      When both points are not checked, don't check anything b/t them. Otherwise, check all b/t them.
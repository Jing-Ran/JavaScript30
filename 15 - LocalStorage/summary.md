# Summary

## Notes

1. Form method `reset()`: restores a form element's default values.

    ```
    input.value = ''; // if default value is ''
    
    // Does the same thing
    input.reset();
    ```

2. `checked` attribute of a checkbox

    ```
    <input type="checkbox" checked="false">
    ```
    
    If you write html code like this, or let `checked` attribute equals to anything, this checkbox will always be checked. So we can do:
    
    ```
    <input type="checkbox" ${item.checked ? 'checked' : ''}>
    ```
    
3. Load data from localStorage directly into the `items` array, don't need to have a fn to load storage.

    ```
    const items = JSON.parse(localStorage.getItem('items')) || [];
    ```
    
4. `Element.matches(selectorString)` - new Element method

    Returns true if the element would matches the specified selector string.
    
    ```
    EX. 
    e.target.matches('input');
    
    EX.
    <li class="endangered">Philippine eagle</li>
    li.matches('.endangered')
    ```
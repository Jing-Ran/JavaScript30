# Summary

# Notes

1. `Date.now()` gives the current time in milliseconds. Don't need `(new Date()).getTime()`.
2. `document.title` update the title of the document.
3. Get elements by `name` attribute:

    ```
    <form name="customForm" id="custom">
        <input type="text" name="minutes" placeholder="Enter Minutes">
    </form>
    ```
    
    ```
    let form = document.customForm;
    
    // nested
    let input = document.customForm.minutes;
    ```
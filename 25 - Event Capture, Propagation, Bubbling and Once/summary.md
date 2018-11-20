# Summary

## Notes

1. Capture from top down, then bubble up.
2. `once: true`
    
    It will listen for an event once, then unbind itself. It's like using `removeEventListener()`.
    
    Always used in online shooping checkout. Only allow the customer clicks the checkout button once.
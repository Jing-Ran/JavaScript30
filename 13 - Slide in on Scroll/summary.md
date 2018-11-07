# Summary

## Code

1. We want the images show when the page is scrolled half way thru an image and hide them when scroll past the bottom of the image. 

    The key is to find tow points:

    * When an img is half shown
        
        ```
        window.scrollY + window.innerHeight = img.offsetTop + img.height / 2
        
        const slideInAt = window.scrollY + window.innerHeight - img.height / 2;
        ```
        
        We can check if `slideInAt` is larger than `img.offsetTop`: 
        
        ```
        const isHalfShown = slideInAt > img.offsetTop;
        ```
        
    * If the page is scrolled past the whole image

        Page top to an image's bottom:
        
        ```
        const imgBtm = img.offsetTop + img.height;
        ```
        
        Check if is not scrolled past the whole image:
        
        ```
        const isNotPast = window.scrollY < imgBtm;
        ```
        
    Check if both `isHalfShown` and `isNotPast` are true. If yes add `active` class. Otherwise, remove the class:
    
    ```
    if (isHalfShown && isNotPast) {
        img.classList.add('active');
    } else {
        img.classList.remove('active');
    }
    ```
    
2. Debounce function

    ```
    function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }
    ```
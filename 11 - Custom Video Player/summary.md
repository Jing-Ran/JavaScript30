# Summary

## Notes

1. Change text content of `<button></button>` tag: `textContent`

    `innerHTML` and `innerText` can also achieve this. But, `innerHTML` has cross site security attacks. For adding text, it's better to avoid it. `innerText` requires some layout system info, due to which the performance decreases.
    
2. Handling media

    1. Events
        
        * `play`
        * `pause`
        * `playing`
        * `timeupdate`: fires when the time indicated by the `currentTime` attribute has been updated, no matter the media is playing or paused. - I listened to `playing` event before which doesn't work while the media is paused.
    
    2. Properties and methods

        * `duration`: media length
        * `currentTime`: current playback time

3. `HTMLElement.offsetWidth`

    Returns the layout width of an element. 
    
    To get the `progress` element's width, can't use `element.style.width` because the `width` is not defined in the stylesheet. 
    
## Code

1. Handle progress bar

    The `scrub` function controls how the progress bar moves when scrubbing a video.
    
    ```
    function scrub(e) {
      const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
      
      video.currentTime = scrubTime;
    }
    ```
    
    `e.offsetX` tells how many pixels I clicked/dragged relative to the container `progress`. The `progress.offsetWidth` gets the width of `progress`. `e.offsetX / progress.offsetWidth` is how much the user clicked/dragged. Then multiply by the video's length. This is the scrub time. Set the scrub time to the video's `currentTime`. The video will be nevigated to that time. And when the `currentTime` is changed, the `timeupdate` event will be fired which triggers the `handleProgress` listener.
    
    ```
    let mousedown = false;
    progress.addEventListener('click', scrub);
    progress.addEventListener('mousemove', (e) => {
        if (mousedown) scrub(e);
    });
    progress.addEventListener('mousedown', () => mousedown = true);
    progress.addEventListener('mouseup', () => mousedown = false);
    ```
    
    The `progress` listens to `click` event so when user clicks to a point on the progress bar, the scrub function is triggered. To handle drag movement, it listens to the `mousemove` event. But if only listens to this event, the scrub function will be called while the mouse moves on the progress bar without mouse down. The scrub function should be triggered when the mouse is down and moving on the progress bar. The `mousedown` variable is created to handle this situation. 
    
    ```
    progress.addEventListener('mousemove', (e) => {
        if (mousedown) scrub(e);
    });
    ``` 
    
    is equal to
    
    ```
    progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
    ```
    
    If `mousedown` is false, there is no need to go on.
    
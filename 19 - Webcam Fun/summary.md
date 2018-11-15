# Summary

## Notes

1. `Navigator.mediaDevices`

    This property returns a `MediaDevices` obj, which provides access to connected media input devices like cameras and mircrophones, as well as screen sharing.
    
    * `getUserMedia()` method prompts the user for permission to use a media input which produces a `MediaStream` with tracks containing the requested types of media.

        It *returns a `Promise`* that resolves to a `MediaStream` obj. If the user denies permission, or matching media is not available, then the promise is rejected w/ `PermissionDeniedError` or `NotFoundError` respectively.
        
        Syntax:
        
        ```
        let promise = navigator.mediaDevices.getUserMedia(constraints);
        ```
        
        The parameter `constraints` is a `MediaStreamConstraints` obj specifying the types of media to request, along w/ any requirements for each type.
        
        ```
        let promise = navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        });
        ```
        
2. `Window.URL` API

    ```
    navigator.mediaDevices.getUserMedia( { video: true, audio: false })
        .then(localMediaStream => {
          // Set the video element src to the localMediaSteam
          // localMediaStream is an obj, and needs to be turned to a url
          video.src = localMediaStream;
        });
    ```
    
    To convert the `localMediaStream` obj to some sort of url using the `window.URL.createObjectURL()`.
    
    `URL.createObjectURL(obj)` is a static method creates a `DOMString` containing a URL representing the obj given in the parameter.
    
3. `Canvas` imports images

    `drawImage(image, x, y[, width, height])` function draws the specified image parameter at the coordinates(x, y). If width and height are specified, the image will be scaled to that size when drawing it onto the canvas.
    
4. Return the `setInterval()`, so whenever you need to stop it, you can call `clearInterval()` on it.

5. Media event - `canplay`

    Triggered when enough data ia available that the media can be played.
    
6. `HTMLCanvasElement.toDataURL(type, encoderOptions)` method return a *data URI* (URLs prefixed w/ the `data:` scheme, allow content creaters to embed small files inline in documents) containing a representation of the image in the formart specified by the `type` parameter.

7. `CanvasRenderingContext2D.getImageData(x, y, width, height)` method returns an `ImageData` obj representing the underlying pixel data for a specified portion of the canvas.

    Image data can be painted onto the canvas using the `putImageData()` method.
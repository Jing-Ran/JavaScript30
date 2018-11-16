# Summary

## Notes

1. `SpeechRecognition` interface of the Web Speech API is the controller interface for the recognition service; this also handles the `SpeechRecognitionEvent` sent from the recognition service.

    ```
    window.SpeechRecognition = window.SpeechRecognition 
    || window.webkitSpeechRecognition;
  
    // Create an instance
    const recognition = new SpeechRecognition();
    ```
    
    * `SpeechRecognition.interimResults`

        if it's set to true, the transcript will populate as the speaker is speaking. Otherwise, speaker needs to stop speaking to populate the script.
        
    * `start()` method starts the speech recognition service listening to incoming audio.

    * `isFinal` read-only property of the `SpeechRecognitionResult` returns a Boolean that states whether this result is final (true) or not. (whether stops speaking)

    * `transcript` read-only property of the `SpeechRecognitionResult` interface returns a string containing the transcript of the recognised word(s).

## Code

1. The `recognition` instance listens to the `result` event and triggers `addTranscript()` fn.

    `e.results` gets the `SpeechRecognitionResultList`, which contains *multiple* `SpeechRecognitionResult` objects. 
    
    Each `SpeechRecognitionResult` object has a `isFinal` property (see above) and contains the `SpeechRecognitionAlternative` obj, which contains individual results in the `transcript` property in string format.
    
    Get the `SpeechRecognitionAlternative` obj at position [0] of each `SpeechRecognitionResult` object:
    
    ```
    Array.from(e.results)
        .map(result => result[0]);
    ```

    
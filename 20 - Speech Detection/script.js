// SpeechRecognition is a global variable lives in the browser, 
// on top of the window
window.SpeechRecognition = window.SpeechRecognition 
  || window.webkitSpeechRecognition;

// Create an instance
const recognition = new SpeechRecognition();
// Populate script as the speaker is speaking
recognition.interimResults = true;

const words = document.querySelector('.words');

let p = document.createElement('p');
words.appendChild(p);


function addTranscript(e) {
  console.log('add transcript');
  // recognition.start();
  let container = words.lastElementChild;
  const transcript = Array.from(e.results)
    // Get SpeechRecognitionAlternative obj at position [0] of 
    // each SpeechRecognitionResult object
    // map in an array
    .map(result => result[0])
    // Get transcript property of each SpeechRecognitionAlternative obj
    // map in an array
    .map(result => result.transcript)
    // Multiple SpeechRecognitionResult objs will yield multiple 
    // transcript items in the array above
    // so join all items to get one string transcript
    .join('');
  container.textContent = transcript;

  if (e.results[0].isFinal) { 
  //Get SpeechRecognitionAlternative obj at position [0], check isFinal prop
    words.appendChild(document.createElement('p'));
  }
  
  // Can add more features
  // Like hooking up with a weather API
  // if transcript.includes('weather'), get the weather
}

// Listen to a result event
recognition.addEventListener('result', addTranscript);
// If only listens to a result event, 
// once stop speaking the result event unbind itself
// So add an end event, when stop speaking, start recognition again
recognition.addEventListener('end', recognition.start);

recognition.start();
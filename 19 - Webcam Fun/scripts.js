const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const takePhotoBtn = document.querySelector('.controls button')

// Pipe video into the video element
function getVideo() {
  navigator.mediaDevices.getUserMedia( { video: true, audio: false })
    .then(localMediaStream => {
      console.log(localMediaStream);
      // Set the video element src to the localMediaSteam
      // localMediaStream is an obj, and needs to be turned to a url
      video.src = window.URL.createObjectURL(localMediaStream);
      // To play the video, otherwise will only get one frame
      video.play();
    })
    // Handle the error if user doesn't allow u to access the camera
    .catch(err => {
      console.log(err);
    });
}

// Get the video and paint it on the to screen onto the canvas ele
function paintToCanvas() {
  const [width, height] = [video.videoWidth, video.videoHeight];
  console.log(width, height);
  // Make sure the canvas has the same width/height as the video
  canvas.width = width;
  canvas.height = height;

  // To keep updating the image in canvas,
  // we can get the img from the video every xx miliseconds
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);

    // For filter adding
    // Take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    // Mess w/ them
    // pixels = rgbSplit(pixels);
    pixels = greenScreen(pixels);
    // Additional effect
    // ctx.globalAlpha = 0.1;
    // Put them back
    pixels = greenScreen(pixels);
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

// Take photo feature
function takePhoto() {
  // Add audio when taking pictures
  snap.currentTime = 0;
  snap.play();

  // Take the data out off canvas
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  //Put the actual photo into the link element
  link.innerHTML = `<img src=${data} alt="Handsome man">`;
  strip.insertBefore(link, strip.firstChild); // prepend
}

// Filters
// Adding filters is taking the image out off the canvas, working on it,
// putting back in
// See the paintToCanvas fn
function redEffect(pixels) {
  // loop over every single pixels
  // stored in the pixels.data special array (can't use map)
  // i += 4 because 0 is r, 1 is g, 2 is b, 3 is alpha
  for (let i = 0; i < pixels.data.length; i+=4) {
    // These are just some random effects
    pixels.data[i + 0] = pixels.data[i + 0] + 100; // red
    pixels.data[i + 1] = pixels.data[i + 0] - 80; // green
    pixels.data[i + 2] = pixels.data[i + 0] * 0.5; // blue
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    // These are just some random effects
    // Take the pixel 150 back to be the red
    // the pixel 100 pixels forward to be the green
    // Pulling apart the r/g/b and moving them to either side
    pixels.data[i - 150] = pixels.data[i + 0]; // red
    pixels.data[i + 100] = pixels.data[i + 1]; // green
    pixels.data[i - 150] = pixels.data[i + 2]; // blue
  }
  return pixels;
}

// How greenScreen works:
// Get all the colors in between these rgb values (ex. a special green), 
// and take them out
function greenScreen(pixels) {
  // hold the max and min green
  const levels = {};

  document.querySelectorAll('.rgb input').forEach(input => {
    levels[input.name] = input.value;
  });
  
  // Loop over every single pixel
  for (let i = 0; i < pixels.data.length; i+=4) {
    let red = pixels.data[i + 0];
    let green = pixels.data[i + 1];
    let  blue = pixels.data[i + 2];
    let alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out by setting alpha
      // alpha is transparence => set this pixel's alpha to 0
      pixels.data[i + 3] = 0;
    }
  }
  return pixels;
}

// getVideo();
video.addEventListener('canplay', paintToCanvas);
takePhotoBtn.addEventListener('click', takePhoto);
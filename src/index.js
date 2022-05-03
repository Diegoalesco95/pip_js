const videoElement = document.getElementById('video');
const button = document.getElementById('button');


async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (error) {
    console.error(error);
  }
}

function init() {
  selectMediaStream();

  button.addEventListener('click', async () => {
    button.disable = true;
    await videoElement.requestPictureInPicture();
    button.disable = false;
  });
}

init();
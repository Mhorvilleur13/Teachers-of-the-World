// Get the modal
const modal = document.getElementById("my-modal");
const modalContent = document.getElementById("modal-content");
const span = document.getElementsByClassName("close")[0];
const photos = document.getElementsByClassName('photo');
const imageHolder = document.getElementById('image-holder');


console.log(photos);


for (let i = 0; i < photos.length; i++) {
  photos[i].addEventListener('click', () => {
    let photo = photos[i].cloneNode(true);
    photo.style.height = "500px";
    photo.style.width = "500px";
    photo.style.filter = "none";
    photo.style.transform = "none";
    imageHolder.insertAdjacentElement("afterbegin", photo);
    modal.style.opacity = 1;
    modal.style.pointerEvents = 'auto';
    modal.style.display = "flex";
  });
};

// When the user clicks on <span> (x), close the modal
if(span !== undefined){
 span.onclick = function () {
  modal.style.display = "none";
  imageHolder.innerHTML = "";
  modal.style.opacity = 0;
  modal.style.pointerEvents = 'none';
 } 
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    imageHolder.innerHTML = "";
    modal.style.opacity = 0;
    modal.style.pointerEvents = 'none';
  }
}

//------------------------------------- Burger Menu -------------------------------


const hamburger = document.getElementById('burger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
  navUL.classList.toggle('show');
});


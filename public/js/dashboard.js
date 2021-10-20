// get the modal
var modalWindow = document.getElementById("modal_window");
var modalWrapper = document.getElementById("modal_wrapper");

// assigns to the button that opens the modal
var openBtn = document.getElementById("open_modal");

// assigns to the div that closes the modal
var closeBtn = document.getElementById("close_modal");

/* submission modal copied from https://www.the-art-of-web.com/javascript/feedback-modal-window/
 Original JavaScript code by Chirp Internet: chirpinternet.eu
 Please acknowledge use of this code by including this header.
*/
const openModal = (e) => {
  modalWrapper.className = "overlay";
    var overflow = modalWindow.offsetHeight - document.documentElement.clientHeight;
    if(overflow > 0) {
      modalWindow.style.maxHeight = (parseInt(window.getComputedStyle(modalWindow).height) - overflow) + "px";
    }
    modalWindow.style.marginTop = (-modalWindow.offsetHeight)/2 + "px";
    modalWindow.style.marginLeft = (-modalWindow.offsetWidth)/2 + "px";
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
};

var closeModal = (e) => {
  modalWrapper.className = "";
  e.preventDefault ? e.preventDefault() : e.returnValue = false;
};

/* const newPostHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/posts/new`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
}; */

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

/* document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler); */

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

document
  .querySelector(".del-btn")
  .addEventListener("click", delButtonHandler);
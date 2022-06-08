// chargement de la CSS du Framework Ionic
import "@ionic/core/css/ionic.bundle.css";
import { defineCustomElements as pwaElements } from "@ionic/pwa-elements/loader";
import { defineCustomElements } from "@ionic/core/loader";
import { Camera, CameraResultType } from "@capacitor/camera";
import { Storage } from "@capacitor/storage";

pwaElements(window);

let lastPicture = null;

const init = async () => {
  // chargement de tous les composants
  // la démarche n'est pas optimale car nous importons tous les composants
  await defineCustomElements();

  getArticles();

  document
    .getElementById("take-picture")
    .addEventListener("click", takePicture);

  document
    .getElementById("close-modal-button")
    .addEventListener("click", closeModal);

  document
    .getElementById("post-picture-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const title = document.getElementById("title-input").value;
      const description = document.getElementById("description-input").value;

      await Storage.set({
        key: crypto.randomUUID(),
        value: JSON.stringify({
          title: title,
          description: description,
          url: lastPicture,
        }),
      });

      closeModal();
      getArticles();
    });
};

const closeModal = () => {
  document.getElementById("form-modal").setAttribute("is-open", false);
};

const openModal = () => {
  document.getElementById("form-modal").setAttribute("is-open", true);
};

const getArticles = async () => {
  const { keys } = await Storage.keys();
  const pictures = (
    await Promise.all(keys.map((key) => Storage.get({ key })))
  ).map((storageResult) => JSON.parse(storageResult.value));

  const response = await fetch(
    "https://devfest-nantes-2018-api.cleverapps.io/blog"
  );
  const data = await response.json();

  const eventList = document.getElementById("event-list");

  const src = "https://devfest2018.gdgnantes.com/";

  pictures.forEach((picture) => {
    eventList.innerHTML += createCard(
      picture.title,
      picture.description,
      picture.url
    );
  });

  data.forEach((event) => {
    eventList.innerHTML += createCard(
      event.title,
      event.brief,
      src + event.image
    );
  });
};

function createCard(title, brief, image) {
  return (
    "<ion-card>\n" +
    '<img src="' +
    image +
    '" />\n' +
    "<ion-card-header>" +
    "<ion-card-title>" +
    title +
    "</ion-card-title>" +
    "</ion-card-header>\n" +
    "      <ion-card-content>\n" +
    brief +
    "      </ion-card-content>\n" +
    "    </ion-card>"
  );
}

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri,
  });

  lastPicture = image.webPath;
  document.getElementById("title-input").value = "";
  document.getElementById("description-input").value = "";

  openModal();
};

init();

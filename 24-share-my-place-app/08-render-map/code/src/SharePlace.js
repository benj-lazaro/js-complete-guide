import { Modal } from "./UI/Modal";
import { Map } from "./UI/Map";

class PlaceFinder {
  // Constructor Method
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

    // Hook-up Event Handlers
    locateUserBtn.addEventListener("click", this.locateUserHandler.bind(this));
    addressForm.addEventListener("submit", this.findAddressHandler.bind(this));
  }

  // Method that selects the DOM element where Google Maps will be rendered
  selectPlace(coordinates) {
    // Check if a "Map" object already exists
    if (this.map) {
      this.map.render(coordinates);
    } else {
      // Instantiate a new object from the Class "Map"
      this.map = new Map(coordinates);
    }
  }

  // Event Handlers
  locateUserHandler() {
    // Check for geolocation API browser support
    if (!navigator.geolocation) {
      alert(
        "Location features is NOT available. Use a modern browser or manually enter an address.",
      );
      return;
    }

    // Create an instance of the Class "Modal"
    const modal = new Modal(
      "loading-modal-content",
      "Loading location, please wait.",
    );

    // Load the "loading spinner" modal
    modal.show();

    // Get user's current geolocation position
    navigator.geolocation.getCurrentPosition(
      (success) => {
        // Hide the "loading spinner" modal
        modal.hide();

        // Get user's current coordinates
        const coordinates = {
          latitude: success.coords.latitude,
          longitude: success.coords.longitude,
        };

        // Render Google Maps w/ user coordinates in the DOM
        this.selectPlace(coordinates);
      },
      (error) => {
        // Hide the "loading spinner" modal
        modal.hide();
        alert(
          "Could NOT locate you unfortunately. Please enter an address manually.",
        );
      },
    );
  }

  findAddressHandler() {}
}

const placeFinder = new PlaceFinder();

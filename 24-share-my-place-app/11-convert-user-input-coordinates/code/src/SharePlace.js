import { Modal } from "./UI/Modal";
import { Map } from "./UI/Map";
import { getCoordsFromAddress } from "./Utility/Location";

class PlaceFinder {
  // Constructor Method
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

    // Hook-up Event Handlers
    locateUserBtn.addEventListener("click", this.locateUserHandler.bind(this));
    addressForm.addEventListener("submit", this.findAddressHandler.bind(this));
  }

  // Method that renders the (OpenLayers) map on the DOM
  selectPlace(coordinates) {
    // Use current map if already rendered
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }
  }

  // Event Handler (method) that locates a user's current location
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

        // Render the map in the DOM
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

  // Event Handler (method) that locates a user's coordinates based on provided address
  async findAddressHandler(event) {
    event.preventDefault();
    const address = event.target.querySelector("input").value;

    // User input validation
    if (!address || address.trim().length === 0) {
      alert("Invalid address entered, please try again!");
      return;
    }

    // Create an instance of the Class "Modal"
    const modal = new Modal(
      "loading-modal-content",
      "Loading location, please wait.",
    );

    // Load "loading spinner" modal
    modal.show();

    // Get coordinates based on user-input address
    const coordinates = await getCoordsFromAddress(address);

    // Render submitted address on the map
    try {
      this.selectPlace(coordinates);
    } catch (error) {
      alert(error.message);
    }

    // Hide "loading spinner" modal
    modal.hide();
  }
}

const placeFinder = new PlaceFinder();

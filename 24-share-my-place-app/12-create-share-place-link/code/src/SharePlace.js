import { Modal } from "./UI/Modal";
import { Map } from "./UI/Map";
import { getCoordsFromAddress, getAddressFromCoords } from "./Utility/Location";

class PlaceFinder {
  // Constructor Method
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");
    this.shareBtn = document.getElementById("share-btn");

    // Hook-up Event Handlers
    locateUserBtn.addEventListener("click", this.locateUserHandler.bind(this));
    // this.shareBtn.addEventListener("click");
    addressForm.addEventListener("submit", this.findAddressHandler.bind(this));
  }

  // Method that renders the (OpenLayers) map on the DOM
  selectPlace(coordinates, address) {
    // Use current map if already rendered
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }

    // Enable the "Share Place" button
    this.shareBtn.disable = false;

    // Select the "share link" field
    const sharedLinkInputElement = document.getElementById("share-link");

    sharedLinkInputElement.value = `${location.origin}/my-place?address=${encodeURI(address)}&lat=${coordinates.latitude}&lon=${coordinates.longitude}`;
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
      async (success) => {
        // Get user's current coordinates
        const coordinates = {
          latitude: success.coords.latitude,
          longitude: success.coords.longitude,
        };

        // Get the named address based on the fetched coordinates
        const address = await getAddressFromCoords(coordinates);

        // Hide the "loading spinner" modal
        modal.hide();

        // Render the map in the DOM
        this.selectPlace(coordinates, address);
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
      this.selectPlace(coordinates, address);
    } catch (error) {
      alert(error.message);
    }

    // Hide "loading spinner" modal
    modal.hide();
  }
}

const placeFinder = new PlaceFinder();

class PlaceFinder {
  // Constructor Method
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

    // Hook-up Event Handlers
    locateUserBtn.addEventListener("click", this.locateUserHandler);
    addressForm.addEventListener("submit", this.findAddressHandler);
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

    // Get user's current geolocation position
    navigator.geolocation.getCurrentPosition(
      (success) => {
        const coordinates = {
          latitude: success.coords.latitude,
          longitude: success.coords.longitude,
        };

        console.log(coordinates);
      },
      (error) => {
        alert(
          "Could NOT locate you unfortunately. Please enter an address manually.",
        );
      },
    );
  }

  findAddressHandler() {}
}

const placeFinder = new PlaceFinder();

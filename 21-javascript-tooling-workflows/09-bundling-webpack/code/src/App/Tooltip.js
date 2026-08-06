// Import the Class Component (as default) & a named export item as JavaScript modules
import Cmp, { doSomething } from "./Component";

// Sub-Class that handles the button "More Info" of a "ProjectItem" object
export class Tooltip extends Cmp {
  constructor(closeNotifierFunction, text, hostElementId) {
    super(hostElementId);
    this.closeNotifier = closeNotifierFunction;
    this.text = text;

    this.closeTooltip = () => {
      this.detach();
      this.closeNotifier();
    };

    this.create();
  }

  // Method that closes a "ProjectItem" object's tooltip & resets it to "false"
  // closeTooltip = () => {
  //   this.detach();
  //   this.closeNotifier();
  // };

  // Method that renders a "ProjectItem" object's tooltip on the DOM
  create() {
    // Create an Element node "div" that contains a tooltip
    const tooltipElement = document.createElement("div");
    tooltipElement.className = "card";

    // Fetch the HTML element <template> & its content
    const tooltipTemplate = document.getElementById("tooltip");
    const tooltipBody = document.importNode(tooltipTemplate.content, true);

    tooltipBody.querySelector("p").textContent = this.text;
    tooltipElement.append(tooltipBody);

    // Fetch the position information of the clicked "More Info" button
    // console.log(this.hostElement.getBoundingClientRect());

    // Fetch the host element's leftmost, topmost positions, height & parent element scroll down
    const hostElPosLeft = this.hostElement.offsetLeft;
    const hostElPosTop = this.hostElement.offsetTop;
    const hostElHeight = this.hostElement.clientHeight;
    const parentElementScrolling = this.hostElement.parentElement.scrollTop;
    // console.log(hostElPosLeft, hostElPosTop, hostElHeight, parentElementScrolling);

    // Position the tooltip content
    const x = hostElPosLeft + 20;
    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;

    // Mimics assigning values to CSS Selectors
    tooltipElement.style.position = "absolute";
    tooltipElement.style.left = x + "px";
    tooltipElement.style.top = y + "px";

    // Add Event listener to close a tooltip content
    tooltipElement.addEventListener("click", this.closeTooltip);

    // Dynamically creates a Class property & store Element node to be attached to the DOM
    this.element = tooltipElement;
  }
}

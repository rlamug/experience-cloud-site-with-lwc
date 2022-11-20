import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";
import ModelSDisplayPageBackground from "@salesforce/resourceUrl/ModelSDisplayPageBackground";

export default class ModelSDisplay extends NavigationMixin(LightningElement) {
  get backgroundImage() {
    return `height:644px; background-repeat:no-repeat; background-position:center; background-size:cover; background-image:url(${ModelSDisplayPageBackground})`;
  }

  navigateToDesignPage() {
    this[NavigationMixin.Navigate]({
      type: "comm__namedPage",
      attributes: {
        name: "Error"
      }
    });
  }
}

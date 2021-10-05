import { Component } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { GenericViewerComponent } from '../generic-viewer/generic-viewer.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private popoverController: PopoverController, private modalController: ModalController) { }

  async showPopover() {
    const modal = await this.popoverController.create({
      component: GenericViewerComponent,
      cssClass: "gridviews",
      componentProps: {
        title: `Email from Joe`,
        content:
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum tortor lacus, ac interdum ipsum bibendum vel. Aenean non nibh gravida, ullamcorper mi at, tempor nulla. Proin malesuada tellus ut ullamcorper accumsan. Donec semper justo vulputate neque tempus ultricies. Proin non aliquet ipsum. Praesent mauris sem, facilisis eu justo nec, euismod imperdiet tellus. Duis eget justo congue, lacinia orci sed, fermentum urna. Quisque sed massa faucibus, interdum dolor rhoncus, molestie erat. Proin suscipit ante non mauris volutpat egestas. Donec a ultrices ligula. Mauris in felis vel dui consectetur viverra. Nam vitae quam in arcu aliquam aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras non velit nisl. Donec viverra, magna quis vestibulum volutpat, metus ante tincidunt augue, non porta nisi mi sit amet neque. Proin dapibus eros vitae nibh tincidunt, blandit rhoncus est porttitor.<br/><br/>` +
          `Nulla facilisi. Suspendisse semper, velit a sodales hendrerit, eros nisi fermentum felis, at varius urna felis at mauris. Nam id diam eget dolor tempor tincidunt. Etiam id cursus sem. Etiam pharetra lobortis dolor, id molestie orci dapibus quis. Integer tincidunt mauris ut lorem semper, et dignissim ante porta. Phasellus egestas at urna at accumsan. Proin a vulputate lectus, sit amet ultricies nisi. Praesent venenatis aliquet ex, ac malesuada purus luctus id. Donec interdum massa non libero faucibus, a tristique erat laoreet. Phasellus sed lectus vehicula, sollicitudin tellus sed, ultrices odio. Sed sagittis, neque et pretium iaculis, felis neque sagittis eros, vitae porttitor ipsum diam vel sapien. Duis purus orci, finibus et molestie ut, imperdiet nec est. Praesent nec tempor risus.<br/><br/>` +
          `Integer ac commodo orci. Sed vehicula sodales sodales. Vivamus nec felis quis orci vestibulum ultricies. Nullam aliquet tincidunt eros quis vehicula. Vivamus bibendum, sapien rhoncus malesuada venenatis, libero eros dictum nunc, quis sodales purus justo sed nisi. Curabitur nec eros viverra, accumsan enim at, tempor libero. Nam ac enim urna. Duis in placerat dui, a vestibulum eros. Pellentesque at elementum leo. Cras fermentum sem ac arcu tincidunt, at venenatis felis finibus. Morbi tristique nisi eget elementum tincidunt. Integer bibendum placerat consectetur. Phasellus laoreet erat laoreet auctor lobortis. Nullam lobortis odio sit amet convallis finibus. Curabitur consequat libero eget malesuada fermentum.<br/><br/>`
      }
    });
    modal.onDidDismiss().then((response) => {
      if (response.data !== undefined) {
      }
    });
    return await modal.present();
  }

  async showModal() {
    const modal = await this.modalController.create({
      component: GenericViewerComponent,
      cssClass: "gridviews",
      componentProps: {
        title: `Email from Joe`,
        content:
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum tortor lacus, ac interdum ipsum bibendum vel. Aenean non nibh gravida, ullamcorper mi at, tempor nulla. Proin malesuada tellus ut ullamcorper accumsan. Donec semper justo vulputate neque tempus ultricies. Proin non aliquet ipsum. Praesent mauris sem, facilisis eu justo nec, euismod imperdiet tellus. Duis eget justo congue, lacinia orci sed, fermentum urna. Quisque sed massa faucibus, interdum dolor rhoncus, molestie erat. Proin suscipit ante non mauris volutpat egestas. Donec a ultrices ligula. Mauris in felis vel dui consectetur viverra. Nam vitae quam in arcu aliquam aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras non velit nisl. Donec viverra, magna quis vestibulum volutpat, metus ante tincidunt augue, non porta nisi mi sit amet neque. Proin dapibus eros vitae nibh tincidunt, blandit rhoncus est porttitor.<br/><br/>` +
          `Nulla facilisi. Suspendisse semper, velit a sodales hendrerit, eros nisi fermentum felis, at varius urna felis at mauris. Nam id diam eget dolor tempor tincidunt. Etiam id cursus sem. Etiam pharetra lobortis dolor, id molestie orci dapibus quis. Integer tincidunt mauris ut lorem semper, et dignissim ante porta. Phasellus egestas at urna at accumsan. Proin a vulputate lectus, sit amet ultricies nisi. Praesent venenatis aliquet ex, ac malesuada purus luctus id. Donec interdum massa non libero faucibus, a tristique erat laoreet. Phasellus sed lectus vehicula, sollicitudin tellus sed, ultrices odio. Sed sagittis, neque et pretium iaculis, felis neque sagittis eros, vitae porttitor ipsum diam vel sapien. Duis purus orci, finibus et molestie ut, imperdiet nec est. Praesent nec tempor risus.<br/><br/>` +
          `Integer ac commodo orci. Sed vehicula sodales sodales. Vivamus nec felis quis orci vestibulum ultricies. Nullam aliquet tincidunt eros quis vehicula. Vivamus bibendum, sapien rhoncus malesuada venenatis, libero eros dictum nunc, quis sodales purus justo sed nisi. Curabitur nec eros viverra, accumsan enim at, tempor libero. Nam ac enim urna. Duis in placerat dui, a vestibulum eros. Pellentesque at elementum leo. Cras fermentum sem ac arcu tincidunt, at venenatis felis finibus. Morbi tristique nisi eget elementum tincidunt. Integer bibendum placerat consectetur. Phasellus laoreet erat laoreet auctor lobortis. Nullam lobortis odio sit amet convallis finibus. Curabitur consequat libero eget malesuada fermentum.<br/><br/>`
      }
    });
    return await modal.present();
  }
}

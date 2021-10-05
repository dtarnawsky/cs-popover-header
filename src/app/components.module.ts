import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GenericViewerComponent } from './generic-viewer/generic-viewer.component';

@NgModule({
  declarations: [
      GenericViewerComponent
  ],
  exports: [
      GenericViewerComponent
  ],
  imports: [
    CommonModule, IonicModule
  ],
})
export class ComponentsModule { }

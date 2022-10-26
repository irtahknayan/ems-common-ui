import { NgModule } from '@angular/core';
import { EmsCommonUiComponent } from './ems-common-ui.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [
    EmsCommonUiComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
  ],
  exports: [
    EmsCommonUiComponent
  ]
})
export class EmsCommonUiModule { }

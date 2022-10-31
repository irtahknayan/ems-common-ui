import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { EmsCommonUiComponent } from './ems-common-ui.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    EmsCommonUiComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    BrowserModule,
    RouterModule
  ],
  exports: [
    EmsCommonUiComponent,
    HeaderComponent,
    LayoutComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class EmsCommonUiModule { }

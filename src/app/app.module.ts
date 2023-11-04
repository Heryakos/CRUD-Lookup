import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingComponent } from './setting/setting.component';
import { TableModule } from "primeng/table";
import { MatButtonModule } from '@angular/material/button'
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideNavComponent } from './SideMenu/side-nav/side-nav.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatTable, MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlowMeasurementTypeComponent } from './setting/flow-measurement-type/flow-measurement-type.component';
import { LkMasterComponent } from './setting/lk-master/lk-master.component';
import { DropdownModule } from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import { SimpleNotificationsModule } from 'angular2-notifications';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    SideNavComponent,
    FlowMeasurementTypeComponent,
    LkMasterComponent,
    // SideNavComponent
  ],
  imports: [
    BrowserModule,
    DialogModule,
    ButtonModule,
    TableModule,
    AppRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatCheckboxModule,
    SimpleNotificationsModule.forRoot(),
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatListModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    DropdownModule,
    CheckboxModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

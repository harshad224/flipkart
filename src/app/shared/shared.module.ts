import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { DropdownService } from "./dropdown/dropdown.service";
import { DropdownmobileComponent } from './dropdown/dropdownmobile/dropdownmobile.component';
import { DropdowntvComponent } from './dropdown/dropdowntv/dropdowntv.component';
import { DropdownmenComponent } from './dropdown/dropdownmen/dropdownmen.component';
import { DropdownwomenComponent } from './dropdown/dropdownwomen/dropdownwomen.component';
import { DropdownbabyComponent } from './dropdown/dropdownbaby/dropdownbaby.component';
import { DropdownhomeComponent } from './dropdown/dropdownhome/dropdownhome.component';
import { DropdownsportComponent } from './dropdown/dropdownsport/dropdownsport.component';
import { DropdownModule } from "./dropdown/dropdown.module";
import { BrowserModule } from "@angular/platform-browser";



@NgModule({
    declarations: [
    ],
    imports: [CommonModule, BrowserModule, HttpClientModule, DropdownModule],
    exports: [
        DropdownComponent,
    ],
    providers: [DropdownService]
})
export class SharedModule {

}
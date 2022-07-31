import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { DropdownService } from "./dropdown/dropdown.service";
import { DropdownModule } from "./dropdown/dropdown.module";
import { BrowserModule } from "@angular/platform-browser";
import { InnerDropdownModule } from "./inner/innerdropdown.module";
// import { InnerDropdownModule } from "./inner/innerdropdown.module";



@NgModule({
    declarations: [
    ],
    imports: [CommonModule, BrowserModule, HttpClientModule, DropdownModule,InnerDropdownModule],
    exports: [
        DropdownComponent,
    ],
    providers: [DropdownService]
})
export class SharedModule {

}

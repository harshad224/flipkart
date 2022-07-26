import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { DropDownDirective } from "./dropdown/dropdown.directives";
import { DropdownService } from "./dropdown/dropdown.service";



@NgModule({
    declarations: [
        DropdownComponent,
        DropDownDirective
    ],
    imports: [CommonModule, HttpClientModule],
    exports: [
        DropdownComponent,
    ],
    providers: [DropdownService]
})
export class SharedModule {

}
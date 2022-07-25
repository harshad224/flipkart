import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { MobileComponent } from "./mobile.component";
import { MobileRoutingModule } from "./mobile.routing";



@NgModule({
    declarations: [
        MobileComponent,
    ],
    imports: [CommonModule, MobileRoutingModule, SharedModule],
    exports: [
        MobileComponent,
    ]
})
export class MobileModule {

}
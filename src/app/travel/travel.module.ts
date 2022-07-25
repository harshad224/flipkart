import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { TravelRoutingModule } from "./travel.routing";
import { TravelComponent } from "./travel.component";



@NgModule({
    declarations: [
        TravelComponent,
    ],
    imports: [CommonModule, TravelRoutingModule, SharedModule],
    exports: [
        TravelComponent,
    ]
})
export class TravelModule {

}
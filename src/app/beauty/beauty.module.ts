import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { BeautyComponent } from "./beauty.component";
import { BeautyRoutingModule } from "./beauty.routing";


@NgModule({
    declarations: [
        BeautyComponent,
    ],
    imports: [CommonModule, BeautyRoutingModule, SharedModule],
    exports: [
        BeautyComponent,
    ]
})
export class BeautyModule {

}
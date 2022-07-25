import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { FashionComponent } from "./fashion.component";
import { FashionRoutingModule } from "./fashion.routing";


@NgModule({
    declarations: [
        FashionComponent,
    ],
    imports: [CommonModule, FashionRoutingModule, SharedModule],
    exports: [
        FashionComponent,
    ]
})
export class FashionModule {

}
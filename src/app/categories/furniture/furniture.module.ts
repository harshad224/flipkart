import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { FurnitureComponent } from "./furniture.component";
import { FurnitureRoutingModule } from "./furniture.routing";


@NgModule({
    declarations: [
        FurnitureComponent,
    ],
    imports: [CommonModule, FurnitureRoutingModule, SharedModule],
    exports: [
        FurnitureComponent,
    ]
})
export class FurnitureModule {

}

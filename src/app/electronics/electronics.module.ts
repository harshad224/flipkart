import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ElectronicsComponent } from "./electronics.component";
import { ElectronicsRoutingModule } from "./electronics.routing";


@NgModule({
    declarations: [
        ElectronicsComponent,
    ],
    imports: [CommonModule, ElectronicsRoutingModule, SharedModule],
    exports: [
        ElectronicsComponent,
    ]
})
export class ElectronicsModule {

}
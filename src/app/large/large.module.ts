import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LargeComponent } from '../large/large.component';
import { SharedModule } from "../shared/shared.module";
import { LargeRoutingModule } from "./large.routing";


@NgModule({
    declarations: [
        LargeComponent,
    ],
    imports: [CommonModule, LargeRoutingModule, SharedModule],
    exports: [
        LargeComponent,
    ]
})
export class LargeModule {

}
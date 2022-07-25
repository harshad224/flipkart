import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { GroceryComponent } from "./grocery.component";
import { GroceryRoutingModule } from "./grocery.routing";


@NgModule({
    declarations: [
        GroceryComponent,
    ],
    imports: [CommonModule, GroceryRoutingModule, SharedModule],
    exports: [
        GroceryComponent,
    ]
})
export class GroceryModule {

}
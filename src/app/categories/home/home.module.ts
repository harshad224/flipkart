import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing";


@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [CommonModule, HomeRoutingModule, SharedModule],
    exports: [
        HomeComponent,
    ]
})
export class HomeModule {

}

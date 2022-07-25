import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BeautyComponent } from '../beauty/beauty.component';
import { HomepageComponent } from "./homepage.component";
import { HomePageRoutingModule } from "./homepage.routing";

@NgModule({
    declarations: [
        HomepageComponent,
    ],
    imports: [CommonModule, HomePageRoutingModule],
    exports: [
        HomepageComponent,
    ]
})
export class HomePageModule {

}
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/views/panel/dashboard/dashboard.component';
import { PanelRoutingModule } from "./panel-routing.module";

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        PanelRoutingModule
    ],
    exports: [],
    providers: [],
})
export class PanelModule {}
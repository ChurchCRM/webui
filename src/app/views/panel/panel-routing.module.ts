import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const panelRouting: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(panelRouting) ],
    exports: [RouterModule],
})
export class PanelRoutingModule {}
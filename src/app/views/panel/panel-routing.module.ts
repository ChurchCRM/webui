import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PanelComponent } from './panel.component';

const panelRouting: Routes = [
    {
        path: '',
        component: PanelComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(panelRouting) ],
    exports: [RouterModule],
})
export class PanelRoutingModule {}
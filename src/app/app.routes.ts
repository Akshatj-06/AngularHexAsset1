import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AssetComponent } from './components/asset/asset.component';
import { AssetRequestComponent } from './components/asset-request/asset-request.component';
import { ServiceRequestComponent } from './components/service-request/service-request.component';
import { AssetAllocationComponent } from './components/asset-allocation/asset-allocation.component';
import { AuditRequestComponent } from './components/audit-request/audit-request.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path: 'app',
        component: AppComponent
    },
    {
        path: '',
        component:LayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ]
    },

    {
        path: "User",
        component: UserComponent
    },
    {
        path: "Asset",
        component: AssetComponent
    },
    {
        path: "Asset-Request",
        component: AssetRequestComponent
    },
    {
        path: "Service-Request",
        component: ServiceRequestComponent
    },
    {
        path: "Asset-Allocation",
        component: AssetAllocationComponent
    },
    {
        path: "Audit-Request",
        component: AuditRequestComponent
    },
];

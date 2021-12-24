import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/transaction/dashboard.component";
import { IconsComponent } from "../../pages/compte/icons.component";
import { CreatecompteComponent } from "src/app/pages/createcompte/createcompte.component";
import { RetirerArgentComponent } from "src/app/pages/retirer-argent/retirer-argent.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "addcompte", component: CreatecompteComponent },
  { path: "RetirerArgent", component: RetirerArgentComponent },
  // { path: "rtl", component: RtlComponent }
];

import { Routes } from "@angular/router";

import { TransactionComponent } from "../../pages/transaction/transaction.component";
import { CompteComponent } from "../../pages/compte/compte.component";
import { CreatecompteComponent } from "src/app/pages/createcompte/createcompte.component";
import { RetirerArgentComponent } from "src/app/pages/retirer-argent/retirer-argent.component";
import { DeposerArgentComponent } from "src/app/pages/deposer-argent/deposer-argent.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "transaction", component: TransactionComponent },
  { path: "compte", component: CompteComponent },
  { path: "addcompte", component: CreatecompteComponent },
  { path: "RetirerArgent", component: RetirerArgentComponent },
  { path: "DeposerArgent", component: DeposerArgentComponent },
  
  // { path: "rtl", component: RtlComponent }
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component'
import {InvoiceComponent} from './components/invoice/invoice.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'checkout', component: InvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

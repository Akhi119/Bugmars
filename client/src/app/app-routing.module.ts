import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnclouserDetailsComponent } from 'src/components/enclouser-details/enclouser-details.component';
import { FarmDetailsComponent } from 'src/components/farm-details/farm-details.component';
import { HomeComponent } from 'src/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'enclouser-details', component: EnclouserDetailsComponent },
  { path: 'farm-details', component: FarmDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

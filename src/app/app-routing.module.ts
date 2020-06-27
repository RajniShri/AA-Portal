import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverComponent } from './PersonalAuto/driver/driver.component';
import { VehicleComponent } from './PersonalAuto/vehicle/vehicle.component';


const routes: Routes = [
  { path: 'driver', component: DriverComponent},
  { path: 'vehicle', component: VehicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

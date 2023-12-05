import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ScreenComponent } from './screen/screen.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'screen',
    component: ScreenComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

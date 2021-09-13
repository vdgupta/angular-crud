import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddataComponent } from './adddata/adddata.component';
import { EditComponent } from './edit/edit.component';
import { EmployelistComponent } from './employelist/employelist.component';

const routes: Routes = [{path:'',component:EmployelistComponent},
{path:"edit/:id",component:EditComponent},

{path:"add",component:AdddataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRepoComponent } from './create-repo/create-repo.component';
import { DeleteRepoComponent } from './delete-repo/delete-repo.component';
import { GetRepoComponent } from './get-repo/get-repo.component';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';



const routes: Routes = [
  // {path: '' , component : ChatDialogComponent },
  {path: 'create' , component : CreateRepoComponent},
  {path: 'delete' , component : DeleteRepoComponent},
  {path: 'get' , component: GetRepoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CreateRepoComponent, DeleteRepoComponent , GetRepoComponent, ChatDialogComponent ]

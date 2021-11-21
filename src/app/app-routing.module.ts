import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientGuard } from './client.guard';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ClientDetailesComponent } from './components/client-detailes/client-detailes.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClosedArticlesComponent } from './components/closed-articles/closed-articles.component';
import { DealComponent } from './components/deal/deal.component';
import { DeletedArticlesComponent } from './components/deleted-articles/deleted-articles.component';
import { LoginComponent } from './components/login/login.component';
import { MessageComponent } from './components/message/message.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProfilComponent } from './components/profil/profil.component';
import { RequestComponent } from './components/request/request.component';
import { RequestsComponent } from './components/requests/requests.component';
import { SellerDetailsComponent } from './components/seller-details/seller-details.component';
import { NotClientGuard } from './not-client.guard';

const routes: Routes = [
  { path: 'home', component: AdminPanelComponent, canActivate: [ClientGuard] },
  { path: 'login', component: LoginComponent, canActivate: [NotClientGuard] },




  {
    path: 'dashboard', component: AdminPanelComponent,
    children: [
      { path: 'articles', component: ArticlesComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'deleted', component: DeletedArticlesComponent },
      { path: 'closed', component: ClosedArticlesComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'requests', component: RequestsComponent },
      { path: 'deal/:id', component: DealComponent },
      { path: '', component: ArticlesComponent },
      { path: 'settings', component: ProfilComponent },
      { path: 'article/:id', component: ArticleComponent },
      { path: 'message/:id', component: MessageComponent },
      { path: 'client/:id', component: ClientDetailesComponent },
      { path: 'request/:id', component: RequestComponent },
    ],
    canActivate: [ClientGuard]
  },

  { path: '**', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { UniversityComponent } from './components/university/university.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ClientHttpInterceptor } from './client-http-interceptor';
import { ProfilComponent } from './components/profil/profil.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { DeletedArticlesComponent } from './components/deleted-articles/deleted-articles.component';
import { ClosedArticlesComponent } from './components/closed-articles/closed-articles.component';
import { SellerDetailsComponent } from './components/seller-details/seller-details.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { DealComponent } from './components/deal/deal.component';
import { ClientDetailesComponent } from './components/client-detailes/client-detailes.component';
import { MessagesComponent } from './components/messages/messages.component';
import { RequestsComponent } from './components/requests/requests.component';
import { RequestComponent } from './components/request/request.component';
import { ClientsComponent } from './components/clients/clients.component';
import { MessageComponent } from './components/message/message.component';
import { RouterModule } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { ExamsComponent } from './components/exams/exams.component';
import { UnstatisticsComponent } from './components/unstatistics/unstatistics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { AddBranchComponent } from './components/add-branch/add-branch.component';
import { BranchViewComponent } from './components/branch-view/branch-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ArticleComponent,
    AdminPanelComponent,
    ProfilComponent,
    ArticlesComponent,
    DeletedArticlesComponent,
    ClosedArticlesComponent,
    SellerDetailsComponent,
    NotificationsComponent,
    DealComponent,
    ClientDetailesComponent,
    MessagesComponent,
    RequestsComponent,
    RequestComponent,
    ClientsComponent,
    MessageComponent,
    StudentsComponent,
    TeachersComponent,
    ExamsComponent,
    UniversityComponent,
    UnstatisticsComponent,
    AddBranchComponent,
    BranchViewComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ClientHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ArticleComponent,
    AdminPanelComponent,
    // ArticleCardComponent,
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
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
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

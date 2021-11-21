import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddArticleRequest } from '../modules/add-article-request';
import { Article } from '../modules/article';
import { Deal } from '../modules/deal';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient:HttpClient) { }

  // addArticle(addArticleRequest:AddArticleRequest):Observable<string>{
  //  return this.httpClient.post<string>("/api/v0/client/add/",addArticleRequest);
  // }
  // updateArticle(article:Article):Observable<string>{
  //   return this.httpClient.put<string>("/api/v0/client/update/article/",article);
  //  }
  // addArticleImg(img:any,articleId:number,id:number):Observable<string>{
  //   const formData = new FormData();
  //   formData.append("image", img)
  //   return this.httpClient.post<string>(`/api/v0/client/article/img/${articleId}/${id}`,formData);
  // }
  // makeImgMain(img:string,articleId:string):Observable<string>{
  //   return this.httpClient.get<string>(`/api/v0/client/article/main/${articleId}/${img}`);
  // }
  deleteArticleimage(articleId:number,img:string):Observable<string>{
    return this.httpClient.delete<string>(`/api/v0/client/${articleId}/${img}`);
  }
  getArticles():Observable<Article[]>{
    return this.httpClient.get<Article[]>(`/api/v0/admin/activeArticles`);
  }
  getClosedArticles():Observable<Article[]>{
    return this.httpClient.get<Article[]>(`/api/v0/admin/closedArticles`);
  }
  getDeletedArticles():Observable<Article[]>{
    return this.httpClient.get<Article[]>(`/api/v0/admin/deletedArticles`);
  }
  getDealByArticleId(articleId:number):Observable<Deal>{
    return this.httpClient.get<Deal>(`/api/v0/client/deal/${articleId}`);
  }
  deleteArticle(articleId:number):Observable<string>{
    return this.httpClient.delete<string>(`/api/v0/admin/deleteArticle/${articleId}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/modules/article';
import { AccountService } from 'src/app/services/account.service';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-deleted-articles',
  templateUrl: './deleted-articles.component.html',
  styleUrls: ['./deleted-articles.component.css']
})
export class DeletedArticlesComponent implements OnInit {
  articles:Article[]=[];
  constructor(private accountService:AccountService,private articleService:ArticleService, private router: Router) { }

  ngOnInit(): void {
    this.articleService.getDeletedArticles().subscribe(data=>{
      this.articles=data;
    })
  }
  view(id: number): void {
    this.router.navigateByUrl(`/dashboard/article/${id}`);
  }

}

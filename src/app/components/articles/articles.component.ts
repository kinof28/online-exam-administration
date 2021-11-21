import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/modules/article';
import { Deal } from 'src/app/modules/deal';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  deal: Deal = new Deal();
  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(data => {
      this.articles = data;
    });
  }
  delete(id: number): void {
        if (confirm("are u sure that u want to delete this article ?\n this action can not be undone please be carefull")){
          this.articleService.deleteArticle(id).subscribe(data=>{
            this.ngOnInit();
          });
      }

  }
  view(id: number): void {
    this.router.navigateByUrl(`/dashboard/article/${id}`);
  }

}

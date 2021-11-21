import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/modules/article';
import { ArticleService } from 'src/app/services/article.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article = new Article();
  id: number;
  mainImage: any;
  del:boolean=true;
  constructor(private router: ActivatedRoute
    , private rout:Router
    , private articleService: ArticleService
    , private search: SearchService) {
    this.id = Number(this.router.snapshot.paramMap.get("id"));
  }

  ngOnInit(): void {
    this.search.getArticleById(this.id).subscribe(response => {
      this.article = response;
      if(response===null) return;
      this.mainImage = `/api/v0/public/img/${this.article.id}/${this.article.mainImage ? this.article.mainImage : 1}`;
      
    });
    this.search.getArticleByIdT(this.id).subscribe(data=>{
      if(data===null) this.del=false;
    })
  }
  imageClicked(img: string): void {
    this.mainImage = `/api/v0/public/img/${this.article.id}/${img}`;
  }
  delete(): void {
    if (confirm("are u sure that u want to delete this article ?\n this action can not be undone please be carefull")){
      this.articleService.deleteArticle(this.id).subscribe(data=>{
        this.rout.navigateByUrl("/dashboard/deleted");
      });
  }

}
}

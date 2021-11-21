import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/modules/article';
import { AccountService } from 'src/app/services/account.service';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-closed-articles',
  templateUrl: './closed-articles.component.html',
  styleUrls: ['./closed-articles.component.css']
})
export class ClosedArticlesComponent implements OnInit {
  articles:Article[]=[];
  constructor(private accountService:AccountService,private articleService:ArticleService, private router: Router) { }

  ngOnInit(): void {
    this.articleService.getClosedArticles().subscribe(data=>{
      this.articles=data;
    })
  }
  // request(id:number):void{
  //   this.articleService.requestJoin(id).subscribe(console.log);
  // }
  // lostInterest(id:number):void{
  //   this.articleService.lostInterest(id).subscribe(data=>{
  //     this.ngOnInit();
  //   });
  // }
  view(id: number): void {
    this.router.navigateByUrl(`/dashboard/article/${id}`);
  }

}

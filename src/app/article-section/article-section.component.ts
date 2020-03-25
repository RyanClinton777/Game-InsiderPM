import { Component, OnInit } from '@angular/core';
import ArticleJson from '../../assets/Articles.json'; //local JSON file

@Component({
  selector: 'app-article-section',
  templateUrl: './article-section.component.html',
  styleUrls: ['./article-section.component.css']
})
export class ArticleSectionComponent implements OnInit {
    articleData: any = []; //array to hold articles

  constructor() { 
    console.log('Reading local json files'); //PRINT FOR DEBUGGING
  }

  ngOnInit(): void {
    console.log(ArticleJson); //DISPLAY CONTENTS OF JSON FILE IN CONSOLE
    this.articleData = ArticleJson;
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {

  public courseName:any;

  public angularChapters=[
    {"id":1,"name":"Binding"},
    {"id":2,"name":"Routing"},
    {"id":3,"name":"Services"}
    ];
    public nodeChapters=[
    {"id":1,"name":"ABC"},
    {"id":2,"name":"DEF"},
    {"id":3,"name":"GHI"}
    ];
    public vueJsChapters=[
    {"id":1,"name":"ABC"},
    {"id":2,"name":"DEF"},
    {"id":3,"name":"GHI"}
    ];
    public MangoDbChapters=[
    {"id":1,"name":"ABC"},
    {"id":2,"name":"DEF"},
    {"id":3,"name":"GHI"}
    ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  onAngSelect(angChapter){
    this.router.navigate(['/course/angular',angChapter.id]);
  }

  onNodeSelect(nodeChapter){
    this.router.navigate(['/course/node',nodeChapter.id]);
  }

  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('name');
    this.courseName= name;
  }

}
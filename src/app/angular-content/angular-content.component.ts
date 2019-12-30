import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-angular-content',
  templateUrl: './angular-content.component.html',
  styleUrls: ['./angular-content.component.css']
})
export class AngularContentComponent implements OnInit {

  public chapterId;

  public angularChapters=[
    {"id":1,"name":"Binding"},
    {"id":2,"name":"Routing"},
    {"id":3,"name":"Services"}
    ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.chapterId=id;
    });
  }

  onSelect(angchapter){
    this.router.navigate(['/course/angular',angchapter.id]);
  }

}
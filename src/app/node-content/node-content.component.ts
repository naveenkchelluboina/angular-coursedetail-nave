import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-node-content',
  templateUrl: './node-content.component.html',
  styleUrls: ['./node-content.component.css']
})
export class NodeContentComponent implements OnInit {
  
  public chapterId;

   public nodeChapters=[
    {"id":1,"name":"ABC"},
    {"id":2,"name":"DEF"},
    {"id":3,"name":"GHI"}
    ];


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.chapterId=id;
    });
  }

  onSelect(nodechapter){
    this.router.navigate(['/course/node',nodechapter.id]);
  }

}
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-backoffice-navbar',
  templateUrl: './backoffice-navbar.component.html',
  styleUrls: ['./backoffice-navbar.component.scss']
})
export class BackofficeNavbarComponent implements OnInit {

  @Input() title;
  public url;
  public id;
  public list;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    debugger
    this.url = '/' + this.router.url.split('/').splice(1, 2).join('/')
    this.id = this.route.snapshot.paramMap.get("id");
    this.list=this.router.url.split('/').length===3
  }

}

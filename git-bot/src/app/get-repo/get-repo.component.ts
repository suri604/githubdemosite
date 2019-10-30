import { Component, OnInit } from '@angular/core';
import { GitserviceService } from '../gitservice.service';

@Component({
  selector: 'app-get-repo',
  templateUrl: './get-repo.component.html',
  styleUrls: ['./get-repo.component.css']
})
export class GetRepoComponent implements OnInit {
   repos: any;
  constructor(private gitserviceService: GitserviceService) { }

  ngOnInit() {
  }
  onClick() {
    this.gitserviceService.getAllRepos().subscribe(data => {
      this.repos = data;
    });
  }
}

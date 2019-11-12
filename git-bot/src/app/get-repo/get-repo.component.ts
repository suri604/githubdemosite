import { Component, OnInit } from '@angular/core';
import { GitserviceService } from '../gitservice.service';

@Component({
  selector: 'app-get-repo',
  templateUrl: './get-repo.component.html',
  styleUrls: ['./get-repo.component.css']
})
export class GetRepoComponent implements OnInit {
  public repos: any =[];
  public repo:any =[];
  constructor(private gitserviceService: GitserviceService) {
   }

  ngOnInit() {
    this.gitserviceService.getAllRepos().subscribe(data => {
      this.repos = data;
    });
  }
}

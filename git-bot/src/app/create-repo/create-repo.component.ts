import { Component, OnInit } from '@angular/core';
import { GitserviceService } from './../gitservice.service';

@Component({
  selector: 'app-create-repo',
  templateUrl: './create-repo.component.html',
  styleUrls: ['./create-repo.component.css']
})
export class CreateRepoComponent implements OnInit {

  constructor(private gitserviceService: GitserviceService) { }

  ngOnInit() {
    }
    createRepo(repoName) {
      this.gitserviceService.createRepo(repoName).subscribe(data => {
        console.log(data);
      });
    }

}

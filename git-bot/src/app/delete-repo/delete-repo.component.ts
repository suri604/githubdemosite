import { Component, OnInit } from '@angular/core';
import { GitserviceService } from '../gitservice.service';

@Component({
  selector: 'app-delete-repo',
  templateUrl: './delete-repo.component.html',
  styleUrls: ['./delete-repo.component.css']
})
export class DeleteRepoComponent implements OnInit {

  constructor(private gitserviceService: GitserviceService) { }

  ngOnInit() {
  }
  deleteRepo(repoName) {
    this.gitserviceService.deleteRepo(repoName).subscribe(data => {
      console.log(data);
    });
  }

}

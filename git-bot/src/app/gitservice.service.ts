import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GitserviceService {
  constructor(private http: HttpClient) { }
  private _profileUrl: string = 'https://api.github.com/user/suri604/repos';
  private _createUrl: string = 'https://api.github.com/user/repos';
  private _token: string = '?access_token=bd6c35dbd7dcd25bb530c7249ccbac02427d4880';
  private _deleteUrl: string = 'https://api.github.com/repos/suri604/';
  getAllRepos() {
    return this.http.get(this._profileUrl + this._token);
  }
  createRepo(repoName){
    let repoBody = {
      "name": repoName,
      "description": "testing",
      "homepage": "https://github.com",
      "private": false,
      "has_issues": true,
      "has_projects": true,
      "has_wiki": true
    };
    return this.http.post(this._createUrl + this._token, repoBody);
  }
  deleteRepo(repoName) {
    return this.http.delete(this._deleteUrl + repoName + this._token);
  }
}
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-honor-list',
  templateUrl: './honor-list.component.html',
  styleUrls: ['./honor-list.component.scss']
})
export class HonorListComponent implements OnInit {

  repoCount: number;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://api.github.com/users/mahozad/repos')
      .subscribe((data: Array<any>) => this.repoCount = data.length);
  }
}

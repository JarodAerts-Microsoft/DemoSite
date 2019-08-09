import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/services/api-service/api-service.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  list;

  loading = false;

  constructor(private apiService: ApiServiceService) {
    this.loading = true;
    this.apiService.GetListOfMembers().subscribe((data) => {
      this.list = data;
      console.log(data);
      this.loading = false;
    });
  }

  ngOnInit() {
  }

}

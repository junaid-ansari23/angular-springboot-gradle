import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isRunning: boolean = false;
  isError: boolean = false;
  host: string = 'http://localhost:8080';
  //status endpoint
  api_status: string = '/api/status'
  //status endpoint (when running angular & backend seperately)
  api_status_local: string = this.host+this.api_status;
  app_status: any = '';
  app_refresh_time: any ='';

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {

    this.isRunning = true;
    this.http.get(this.api_status)
      .catch((e: any) => Observable.throw(this.errorHandler(e)))
      .subscribe(response => {
        let data = response.json();
        this.app_status = data.status;
        this.app_refresh_time = data.refresh_time;
        this.isRunning = false;
  })}
  
  private errorHandler(error: any): void {
    this.isRunning = false;
    this.isError = true;
    console.log("Error in fetching status data", error)
  }

}

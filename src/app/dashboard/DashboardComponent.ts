import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-component',
  templateUrl: './DashboardComponent.html',
  styleUrls: ['./DashboardComponent.css']
})
export class DashboardComponent
{
  public title: string;

  constructor()
  {
    this.title = "Dashboard";
  }
}

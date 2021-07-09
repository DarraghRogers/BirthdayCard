import { Component, OnInit } from "@angular/core";
import { ToastrService } from "../common/toastr.service";
import { EventService } from "./shared/events.service";

@Component({
  template: `
  <div class="container">
    <h1>Happy Birthday Wishes from some friends :)</h1>
  <hr/>
  <div class="row">
    <div *ngFor="let event of events" class="col-md-5">
      <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
      </div>
    </div>
  </div>
`
})

export class EventsListComponent implements OnInit{

  events: any;
  constructor(
    private eventService: EventService,
    private toastr: ToastrService) {  }

  ngOnInit(){
    this.eventService.getEvents().subscribe(events => {
      this.events = events
    });
  }

  handleThumbnailClick(eventName){
    this.toastr.success(eventName);
  }

}

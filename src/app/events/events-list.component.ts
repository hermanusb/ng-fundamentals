import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

declare let toastr;

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming events</h1>
        <hr>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventsListComponent implements OnInit {
    events:[];
    constructor(private eventService: EventService) {
    }
    
    handleThumbnailClick(eventName:string) {
        toastr.success(eventName);
    }

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }
}
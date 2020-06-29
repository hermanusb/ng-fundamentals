import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

declare let toastr;

@Component({
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
    constructor(private eventService: EventService, private toastrService: ToastrService) {
    }
    
    handleThumbnailClick(eventName:string) {
        this.toastrService.info(eventName);
    }

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }
}
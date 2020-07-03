import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ISession } from '../shared/event.model'
import { restrictedWords } from '../shared/restricted-words.validator';

@Component({
    templateUrl: './create-session.component.html',
    styles: [`
        em { color:#e05c65; float:right; padding-left:10px}
        .error input, .error select, .error textarea { background-color:#e3c3c5 }
        .error::-webkit-input-placeholder { color: #999 } 
    `]
})
export class CreateSessionComponent implements OnInit {
    newSessionForm: FormGroup;

    name: FormControl
    presenter: FormControl
    duration: FormControl
    level: FormControl
    abstract: FormControl

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required,
        Validators.maxLength(400), restrictedWords(['baar', 'soap'])]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    

    saveSession(formValues) {
        let session: ISession = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        }
        console.log(session);
    }

}
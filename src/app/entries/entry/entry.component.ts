import { Component } from '@angular/core';

@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})

export class EntryComponent {
    title: string = 'My first Photo';
    photo: string = 'https://picsum.photos/800/500' //'http://placehold.it/800x500?text=Angular+Basics';
    description: string = 'A Description of my first Photo';
    comments: any[] = [
        { name: "John", comment: "A Comment" },
        { name: "Frank", comment: "A Comment" },
        { name: "Josef", comment: "A Comment" },
        { name: "Barbara", comment: "A Comment" },
        { name: "Peter", comment: "A Comment" },
    ]
}



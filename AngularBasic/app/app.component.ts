import {Component} from 'angular2/core';

import {commentComponent} from './comment.component'
@Component({
    selector: 'my-app',
    template: `
    <h1>Changed by me!!!</h1><mycomment></mycomment>
    {{title}}
     <ul>
       <li *ngFor="#list of listTitle">
        {{ list }}
      </li>
     </ul>
    `,
    directives: [commentComponent]
})
export class AppComponent {
    title = "Title adds";
    listTitle = ["title1","title2","title3"];
 }
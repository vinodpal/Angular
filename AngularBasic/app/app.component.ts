import {Component} from 'angular2/core';
import {commentComponent} from './comment.component'
@Component({
    selector: 'my-app',
    template: '<h1>Changed by me!!!</h1><mycomment></mycomment>',
    directives: [commentComponent]
})
export class AppComponent { }
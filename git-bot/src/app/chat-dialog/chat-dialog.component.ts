import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { scan } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;

  constructor(public chat: ChatService, private router:Router) { }

  ngOnInit() {
     this.messages = this.chat.conversation.asObservable()
      .pipe(
        scan((acc, val) => acc.concat(val))
      );
  }

  sendMessage() {
    // this.chat.converse(this.formValue);
    // this.formValue = '';
    if(this.formValue =='create')
    {
       this.router.navigateByUrl('/create');
    }
    if(this.formValue =='delete')
    {
       this.router.navigateByUrl('/delete');
    }
    if(this.formValue == 'show')
    {
      this.router.navigateByUrl('/get');
   }

  }

}
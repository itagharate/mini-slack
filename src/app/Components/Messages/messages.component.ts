import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message, MessagesService } from '../../Services/messages.service';
import { FormsModule } from '@angular/forms';



@Component({
    selector: "app-messages",
    standalone: true,
    imports: [ FormsModule, CommonModule],
    templateUrl: "./messages.component.html",
    styleUrl: "./messages.component.css"
})
export class MessagesComponent {
    @Input() message!: Message;
    constructor(private MessagesService: MessagesService) {
    }
 
}

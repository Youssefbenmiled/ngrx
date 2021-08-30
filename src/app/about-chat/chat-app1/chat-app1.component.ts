import { Component, OnInit } from '@angular/core';
import { io,Socket } from "socket.io-client";
import { ActivatedRoute,Router } from "@angular/router";
@Component({
  selector: 'app-chat-app1',
  templateUrl: './chat-app1.component.html',
  styleUrls: ['./chat-app1.component.css']
})
export class ChatApp1Component implements OnInit {
  socket:Socket=io('http://localhost:3000')
  conversation:string[]=[]
  room:string
  constructor(private actifRouter:ActivatedRoute) {
    this.actifRouter.params.subscribe(data=>this.room=data.id);

   }

  ngOnInit(): void {
    const name=prompt('user s name');


    this.socket.on('connect',()=>{//tnajem tna7eha
    this.socket.emit('join-room',this.room,(roomName)=>this.conversation.push(`You joined on room ${roomName}`))




    this.socket.emit('new-user',name)
      this.socket.on('user-joined',user=>this.conversation.push(`${user} connected`))

      this.socket.on('receive-chat-msg',object=>{
      this.conversation.push(`${object.name} : ${object.message}`)

    }
      )
    })



    this.socket.on('user-disconnected',(user)=>this.conversation.push(`${user} disconnected`))

    // this.socket.emit('obj','hello',[1,2,3],{"name":"anis"},45)
  }

  sendMessage(msg:HTMLInputElement){
    this.conversation.push(`You : ${msg.value}`)//afichage de votre message
    this.socket.emit('send-chat-msg',msg.value)
    msg.value=""

  }
}

import { Component, OnInit } from '@angular/core';
import { io,Socket } from "socket.io-client";
@Component({
  selector: 'app-chat-app1',
  templateUrl: './chat-app1.component.html',
  styleUrls: ['./chat-app1.component.css']
})
export class ChatApp1Component implements OnInit {
  socket:Socket=io('http://localhost:3000')
  constructor() { }

  ngOnInit(): void {
    const name=prompt('user s name');
    // this.socket.on('connect',()=>{//tnajem tna7eha
      console.log(`You joined`)

      this.socket.emit('new-user',name)
      this.socket.on('user-joined',user=>console.log(`${user} connected`))

      this.socket.on('receive-msg',object=>console.log(`${object.name} : ${object.message}`))
    // })
    this.socket.on('user-disconnected',(user)=>console.log(`${user} disconnected`))

  }

  sendMessage(msg:HTMLInputElement){
    console.log(`You : ${msg.value}`)//afichage de votre message
    this.socket.emit('send-chat-msg',msg.value)
    msg.value=""

  }
}

import { Component, OnInit } from '@angular/core';

import { io, Socket } from "socket.io-client";

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css']
})
export class SocketComponent implements OnInit {
  socket:Socket=io('http://localhost:3000')
  userSocket:Socket=io('http://localhost:3000/user');
  msg:string
  constructor() { }

  ngOnInit(): void {
    let count=0
    this.socket.on('connect', ()=>{
      this.socket.on('receive-message',(message)=>{console.log(message);this.msg=message})

      setInterval(()=>{
        this.socket.volatile.emit('ping',count++)
      },1000)
    })

    this.userSocket.on('connect_error',error=>{
      console.log(error.message)
    })


  }

  send(msg:HTMLInputElement,room:HTMLInputElement){

    this.socket.emit('send-message',msg.value,room.value);
    // this.socket.on('send-message-all',message=>this.msg=message)
  }

  join(room:HTMLInputElement){
    this.socket.emit('join-room',room.value,(joinedRoom)=>{
      console.log(joinedRoom)
    })

  }

  connect(){
    this.socket.connect()
  }


  disconnect(){
    this.socket.disconnect()
  }


}

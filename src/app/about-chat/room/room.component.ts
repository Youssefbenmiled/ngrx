import { Component, OnInit } from '@angular/core';
import { io,Socket } from "socket.io-client";


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  rooms:string[]=[]
  socket:Socket=io('http://localhost:3000')
  constructor() { }

  ngOnInit(): void {
    this.socket.on('connect',()=>{

    })
  }

  createRoom(room:HTMLInputElement){
    this.rooms.push(room.value)

    room.value=''
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {
  choosenUrl: any;
  constructor() { }
  pausebool: boolean = false;

  @Output() messageEvent = new EventEmitter<string>();

  files=[
    {
      url: '../assets/songs/song1.mp3',
      name: 'song1'
    },
    {
      url: '../assets/songs/song2.mp3',
      name: 'song1'
    }
  ];
  // this.files[0] выбирает первый массив в обьекте files и берет из него url
  audioObj = new Audio(this.files[0].url);


  chooseFile(url){
    this.choosenUrl = url;
    console.log("playlist choosenUrl " + this.choosenUrl)
    this.messageEvent.emit(this.choosenUrl)
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  pausebool: boolean = false;
  setValueDeaf = 0.5;
  progressValue: any;
  @Input() choosenUrl: any;
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

  openFile(url){
    this.audioObj.src = url;
    this.audioObj.load();
    this.audioObj.play();
    this.pausebool = true;

  }
  receaveMessage($event){
    this.choosenUrl = $event;
    console.log("choosenUrl "+ this.choosenUrl)
    this.openFile(this.choosenUrl)
  }

  play(){
    this.audioObj.play();
    this.pausebool = true;
  }
  pause(){
    this.audioObj.pause();
  }
  stop(){
    this.audioObj.pause();
    this.audioObj.currentTime = 0;
  }
  pauseSwitch(){
    if (this.pausebool == true){
      this.pause()
      console.log("false")
      this.pausebool = false;
    } else{
      this.play()
      console.log("true" + this.choosenUrl)
      this.pausebool = true;
    }
  }
  setVolume(event){
    this.audioObj.volume = event.target.value;
  }
  setButtonVolume(val){
    if (val == 0){
      this.setValueDeaf = 0;
      this.audioObj.volume = val;
      console.log(this.setValueDeaf)
    } else {
      this.setValueDeaf = 1;
      this.audioObj.volume = val;
      console.log(this.setValueDeaf)
    }
  }

  setProgressValue(){
    this.progressValue = (this.audioObj.currentTime / this.audioObj.duration)
    console.log("update value")
  }






  constructor() { }

  ngOnInit(): void {
  }

}

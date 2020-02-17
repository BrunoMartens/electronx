import { Component, OnInit } from '@angular/core';
import { ipcRenderer } from 'electron';

@Component({
  selector: 'electronx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'analyzer';

  ngOnInit(): void {
    ipcRenderer.on('file-change', (args)=>{
      console.log (`ng ${args}`);
    })
    
    ipcRenderer.send('analyzer-ready'); 
  }
}

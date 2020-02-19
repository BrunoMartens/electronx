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
    
    const Datastore = require('nedb');
        const db = new Datastore({filename: 'c:/Temp/ps/test.db', autoload: true });

        const doc = { hello: 'world'
                , n: 5
                , today: new Date()
                , nedbIsAwesome: true
                , notthere: null
                , notToBeSaved: undefined  // Will not be saved
                , fruits: [ 'apple', 'orange', 'pear' ]
                , infos: { name: 'nedb' }
                };

        db.insert(doc, function (err, newDoc) {   // Callback is optional
        // newDoc is the newly inserted document, including its _id
        // newDoc has no key called notToBeSaved since its value was undefined
        const t = 0;
        });
  }
}

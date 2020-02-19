import SquirrelEvents from './app/events/squirrel.events';
import ElectronEvents from './app/events/electron.events';
import UpdateEvents from './app/events/update.events';
import { app, BrowserWindow } from 'electron';
import App from './app/app';


export default class Main {

    static initialize() {
        if (SquirrelEvents.handleEvents()) {
            // squirrel event handled (except first run event) and app will exit in 1000ms, so don't do anything else
            app.quit();
        }
    }

    static bootstrapApp() {
        try{

        
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
        }catch (error){
            console.log(error);
        }
        App.main(app, BrowserWindow);
    }

    static bootstrapAppEvents() {
        ElectronEvents.bootstrapElectronEvents();

        // initialize auto updater service
        if (!App.isDevelopmentMode()) {
            // UpdateEvents.initAutoUpdateService();
        }
    }

}

// handle setup events as quickly as possible
Main.initialize();

// bootstrap app
Main.bootstrapApp();
Main.bootstrapAppEvents();
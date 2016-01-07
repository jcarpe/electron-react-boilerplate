/**
 * Main electron 
 */

var app 			= require( 'app' ),
	conf 			= require( './app-config.json' ),
	BrowserWindow 	= require( 'browser-window' );
	
var mainWindow = null;

/**
 * Quit application when all windows are force closed
 */
app.on( 'window-all-closed', function () {
	if ( process.platform != 'darwin' ) {
		app.quit();
	}
});

/**
 * On complete electron initialization, open the mai applicaiton window and load out entrypoint index
 * file. Also includes main application settings from app-config.json.
 */
app.on( 'ready', function () {

	// create the browser window
	mainWindow = new BrowserWindow({ 
		width: conf.width,
		height: conf.height,
		resizable: false,
		title: 'El Guapo',
		icon: './images/elguapo.png',
		frame: true
	});

	mainWindow.loadURL('file://' + __dirname + '/' + conf.entryView);

	if ( conf.devTools ) {
		mainWindow.openDevTools();
	}
	
	// when the main window is closed, quit the application
	mainWindow.on('closed', function () {
		mainWindow = null;
		app.quit();
	});

});
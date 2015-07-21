$.index.activity.onCreateOptionsMenu = function(e) { 
	var menu = e.menu; 
	
	Alloy.Globals.Menu.AddItem(menu, "Home", Ti.App.Android.R.drawable.ic_home_white_24dp, function(e){
		alert("clicked on home");
	});
	
	Alloy.Globals.Menu.AddItem(menu, "Library", Ti.App.Android.R.drawable.ic_library_music_white_24dp, function(e){
		alert("clicked on library");
	});

	Alloy.Globals.Menu.AddItem(menu, "Favorites", Ti.App.Android.R.drawable.ic_favorite_border_white_24dp, function(e){
		alert("clicked on Favorites");
	});

};



$.index.open();


$.index.activity.onCreateOptionsMenu = function(e) { 
	var menu = e.menu; 
	
	var home = menu.add({ 
		title : "Home", 
		icon : Ti.App.Android.R.drawable.ic_home_white_24dp, 
		showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM 
	}); 
	home.addEventListener("click", function(e) { 
		alert("Home!");
	}); 
	
	
	var library = menu.add({
		title: "Library",
		icon: Ti.App.Android.R.drawable.ic_library_music_white_24dp,
		showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM
	});
	library.addEventListener("click", function(e) { 
		alert("Library!"); 
	}); 
	
	
	var favorites = menu.add({
		title: "Library",
		icon: Ti.App.Android.R.drawable.ic_favorite_border_white_24dp,
		showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM
	});
	favorites.addEventListener("click", function(e) { 
		alert("Favorites!"); 
	}); 
	
	
	
};



$.index.open();


MainCtrl = function($scope, $location) {
  $scope['mainCtrl'] = this;

  this.location_ = $location;
  this.productName = "My Product Name";
  this.isAuthenticatedUser = true;
  this.menuItems = [
	  {
		  text: "Creat",
		  url: "create",
	  },
	  {
		  text: "List",
		  url: "list",
	  },
	  {
		  text: "Print",
		  url: "print",
	  },
	  {
		  text: "Add",
		  url: "add",
	  },
	  {
		  text: "Edit",
		  url: "edit",
	  }
    ];
}

MainCtrl.prototype.isSelected = function(index) {
	var menuUrl = this.menuItems[index].url;
	return this.location_.path().indexOf(menuUrl) == 0;
}

MainCtrl.prototype.setPath = function(url) {
	this.location_.url(url);
}

MainCtrl.prototype.isShowItem = function(index) {
	return true;
}

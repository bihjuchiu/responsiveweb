
CreateCtrl = function($scope) {
  $scope['createCtrl'] = this;
  
  this.scope = $scope;
  this.title = "Create item";
  
  this.sourceInfo = {
	  current: "",
	  sourceList: ["Source1", "Source2"]
  };
  
  this.owner = "owner1";
  
  this.coOwner = {
		  familyCount: 1,
          friendCount: 0,
		  total: 1
  };
  
  this.dateInfo = {
		  current: new Date(2015, 11, 11, 1, 30, 0, 0) 
  };
  
  this.isTimeAvailable = true;
  
  this.mode = "Auto";
  
  this.timeInfo = {
		  current: {
	   	    value: 0,
      	    display: '12:00 PM'
		  },
		  timeList: [
		     {
		    	 value: 0,
		    	 display: '12:00 PM'
		     },
		     {
		    	 value: 1,
		    	 display: '1:00 PM'
		     },
		     {
		    	 value: 2,
		    	 display: '2:00 PM'
		     },
		     {
		    	 value: 3,
		    	 display: '3:00 PM'
		     },
		     {
		    	 value: 4,
		    	 display: '4:00 PM'
		     }
		  ]
  };
  this.typeInfo = {
		  current: {},
		  availableList: [
            "Type1",
		    "Type2"
		  ],
		  selectedList: []
  };
};

CreateCtrl.prototype.totalCountChangeHandler = function(newValue) {
	this.coOwner["total"] = this.coOwner["familyCount"] + this.coOwner["friendCount"];
};

CreateCtrl.prototype.testButtonClicked = function() {
  alert(this.dateInfo["current"]);
};

CreateCtrl.prototype.timeChangeHandler = function(time) {
	alert(time.display);
};

CreateCtrl.prototype.modeChangeListener = function(newValue) {
	this.mode = newValue;
};

CreateCtrl.prototype.addType = function() {
    var index = this.typeInfo['availableList'].indexOf(this.typeInfo['current']);
    if (index === -1) {
    	return;
    }
    this.typeInfo['availableList'].splice(index, 1);
    this.typeInfo['selectedList'].push(this.typeInfo['current']);
    this.typeInfo['availableList'].sort(new function(a, b) {
    	return a - b;
    });
};

CreateCtrl.prototype.resetType = function() {
	var length = this.typeInfo['selectedList'].length;
	if (length > 0) {
		for (var i = 0; i < length; i++) {
	      this.typeInfo['availableList'].push(this.typeInfo['selectedList'][0]);
		  this.typeInfo['selectedList'].splice(0, 1);
		}
		this.typeInfo['availableList'].sort(new function(a, b) {
			return a - b;
		});
	}
	this.typeInfo['current'] = '';
	
};

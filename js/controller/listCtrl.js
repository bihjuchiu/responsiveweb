
ListCtrl = function($scope) {
  $scope['listCtrl'] = this;
  
  this.scope = $scope;
  this.title = "List items";
  this.listData = [
      {
    	  time: 'Jan 1, 2014 12:30 PM PST8PDT',
    	  item: 'Item 1',
    	  owner: 'Owner 1',
    	  size: 10
      },
      {
    	  time: 'Jan 2, 2014 12:30 PM PST8PDT',
    	  item: 'Item 2',
    	  owner: 'Owner 2',
    	  size: 20
      },
      {
    	  time: 'Jan 3, 2014 12:30 PM PST8PDT',
    	  item: 'Item 3',
    	  owner: 'Owner 3',
    	  size: 30
      },
      {
    	  time: 'Jan 4, 2014 12:30 PM PST8PDT',
    	  item: 'Item 4',
    	  owner: 'Owner 4',
    	  size: 40
      },
      {
    	  time: 'Jan 5, 2014 12:30 PM PST8PDT',
    	  item: 'Item 5',
    	  owner: 'Owner 5',
    	  size: 50
      },
      {
    	  time: 'Jan 6, 2014 12:30 PM PST8PDT',
    	  item: 'Item 6',
    	  owner: 'Owner 6',
    	  size: 60
      }
  ];
};


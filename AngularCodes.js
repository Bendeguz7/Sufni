/* To know:
sublimtext
bootstrap
SQL

HTML input elements are called HTML controls:
input,select,button,textarea 

/* 1 
<!DOCTYPE html>
<html>
<head>
<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min.js"></script>
</head>
<body>

<div ng-app="" ng-controller="myController">

<button ng-click="count = count + 1">Click Me!</button>

<p>{{ count }}</p>

</div>
<script>
function myController($scope) {
    $scope.count = 0;
}
</script> 

</body>
</html>
*/
/* 2 button + click + fg
The value ng-hide="true" makes an HTML element invisible.
The value ng-hide="false" makes the element visible

<!DOCTYPE html>
<html>

<head>
<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min.js"></script>
</head>

<body>

<div ng-app="" ng-controller="personController">

<button ng-click="toggle()">Hide user</button>

<p ng-hide="myVar">
First Name: <input type=text ng-model="firstName"><br>
Last Name: <input type=text ng-model="lastName"><br><br>
Full Name: {{firstName + " " + lastName}}
</p>

</div>

<script>
function personController($scope) {
    $scope.firstName = "John",
    $scope.lastName = "Doe"
    $scope.myVar = false;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };
}
</script> 

</body>
</html>
*/
/* 3 Basic 
Modules define applications. All application controllers should 
belong to a module.
Modules make your application more readable, 
and keep the global namespace clean.
Your application should have at least one module file, and 
one controller file for each controller.
The [] parameter in the module definition can be used 
to define dependent modules.

mindegyik ctrl KÜLÖN FILE-ba!!!

<!DOCTYPE html>
<html ng-app="hello">
<head>
<meta charset="UTF-8">
<title>hello module</title>
<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular.min.js"></script>
<script src="modules.js"></script>
<script src="helloCtrls.js"></script>
</head>
<body>
<div  ng-controller="helloCtrl">
	<p ng-bind="text"></p>
</div>
</body>
</html>


modules.js
var hello = angular.module("hello", []); 


helloCtrls.js:
hello.controller("helloCtrl", function($scope) { 
	$scope.text = "Hello CwWorld";
})


*/
/* paraméter átadás controllernek:
Javascript:

var app = angular.module('angularApp', []);

app.controller('MainCtrl', function($scope, name, id) {
    $scope.id = id;
    $scope.name = name;
    // and more init
});
Html:

<!DOCTYPE html>
<html ng-app="angularApp">
  <head lang="en">
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.0.3/angular.min.js"></script>
    <script src="app.js"></script>
    <script>
       app.value("name", "James").value("id", "007");
    </script>
  </head>
  <body ng-controller="MainCtrl">
    <h1>I am  {{name}} {{id}}</h1>
  </body>
</html>
*/
/* replace.. uppercase
<!DOCTYPE html>
<html ng-app="hello">
<head>
<meta charset="UTF-8">
<title>hello module</title>
<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular.min.js"></script>
<script src="modules.js"></script>
<script src="helloCtrls.js"></script>

<script>
	   var p1="tx", v1="Hol van Putyin kabátja?", p2="key", v2="Putyin";
       hello.value(p1, v1).value(p2,v2);

</script>
</head>
<body>
<div  ng-controller="helloCtrl">
	<p ng-bind="text"></p>
</div>

</body>
</html>


modules.js
var hello = angular.module("hello", []); 




helloCtrls.js
hello.controller('helloCtrl', function($scope,tx,key) {
   $scope.text = tx.replace(key,key.toUpperCase()); 
});
*/
/*  change style..btn #0
<!DOCTYPE html>
<html ng-app="hello">
<head>
<meta charset="UTF-8">
<title>hello module</title>
<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular.min.js"></script>
<script src="modules.js"></script>
<script src="helloCtrls.js"></script>


</head>
<body>
<input type="button" value="set color" ng-click="myStyle={color:'red'}">
<input type="button" value="set background" ng-click="myStyle={'background-color':'blue'}">
<input type="button" value="clear" ng-click="myStyle={}">
<br/>
<span ng-style="myStyle">Sample Text</span>
<pre>myStyle={{myStyle}}</pre
</body>

</html>



*/
/*  change color,size,italic.. #1
<!DOCTYPE html>
<html ng-app="hello">
<head>
<meta charset="UTF-8">
<title>hello module</title>
<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular.min.js"></script>
<script src="modules.js"></script>
<script src="helloCtrls.js"></script>
<link rel="stylesheet" type="text/css" href="helloCss.css" />


</head>
<body>
<p ng-class="{changeColor: Color, changeSize: Size, italic: Italic}">
Changes Will be Seen in Me
</p>
    <input type="checkbox" ng-model="Color"> Color <br>
    <input type="checkbox" ng-model="Size">  Size <br>
    <input type="checkbox" ng-model="Italic"> Italic 

</body>

</html>


helloCss.css
.strike {
  text-decoration: line-through;
}
.bold {
    font-weight: bold;
}
.red {
    color: red;
}

.changeColor {
    color:blue;
}
.changeSize {
    font-size:30px;
}
.italic {
    font-style:italic;
}
*/
/*  change style .. all #2

<!DOCTYPE html>
<html ng-app="hello">
<head>
<meta charset="UTF-8">
<title>hello module</title>
<link rel="stylesheet" type="text/css" href="helloCss.css" />
<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular.min.js"></script>

<script src="modules.js"></script>
<script src="helloCtrls.js"></script>



</head>


<body>

<p ng-class="{strike: deleted, bold: important, red: error}">Map Syntax Example</p>
<input type="checkbox" ng-model="deleted"> deleted (apply "strike" class)<br>
<input type="checkbox" ng-model="important"> important (apply "bold" class)<br>
<input type="checkbox" ng-model="error"> error (apply "red" class)
<hr>
<p ng-class="style">Using String Syntax</p>
<input type="text" ng-model="style" placeholder="Type: bold strike red">
<hr>
<p ng-class="[style1, style2, style3]">Using Array Syntax</p>
<input ng-model="style1" placeholder="Type: bold, strike or red"><br>
<input ng-model="style2" placeholder="Type: bold, strike or red"><br>
<input ng-model="style3" placeholder="Type: bold, strike or red"><br>

</body>

</html>

nincs controller! csak css és html
css:

.strike {
  text-decoration: line-through;
}
.bold {
    font-weight: bold;
}
.red {
    color: red;
}


*/
/*  img src változóban
<!DOCTYPE html>
<html ng-app="hello">
<head>
<meta charset="UTF-8">
<title>hello module</title>
<link rel="stylesheet" type="text/css" href="helloCss.css" />
<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular.min.js"></script>
<script src="modules.js"></script>
<script src="helloCtrls.js"></script>
</head>
<body>
<div  ng-init="iname='gfont.jpg'">
	<img ng-src="{{iname}}"/>
</div >
</body>

</html>

*/
/*  imgbuttonra klikk
<!DOCTYPE html>
<html ng-app="hello">
<head>
<meta charset="UTF-8">
<title>hello module</title>
<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular.min.js"></script>
<link rel="stylesheet" type="text/css" href="helloCss.css" />
<script src="modules.js"></script>
<script src="helloCtrls.js"></script>
</head>

<body>
<div ng-init="iname='gfont.jpg'" ng-controller="iconCtrl">
	<img ng-src="{{iname}}" ng-click="setImage()">
</div>
</body>

</html>


ctrl:
hello.controller('iconCtrl', function($scope) {
    $scope.setImage = function() {
      //$scope.mainImageUrl = imageUrl;
	  alert("hello");
    };
  });

/*

*/
/*  ionic-modal #1
The Modal is a content pane that can go over the user's main view temporarily. 
Usually used for making a choice or editing an item.

index.html
<!DOCTYPE html>
<html>

  <head>
    <link rel="stylesheet" href="http://code.ionicframework.com/1.0.0-beta.6/css/ionic.css" />
    <script src="http://code.ionicframework.com/1.0.0-beta.6/js/ionic.bundle.js"></script>
    <link rel="stylesheet" href="/css/style.css" />
    <script src="/js/script.js"></script>
	
  </head>

  <body ng-app="ionicApp">
    <ion-header-bar class="bar-energized">
      <h1 class="title">Contact Info</h1>
    </ion-header-bar>
    <ion-content>
    <div class="card" ng-controller='MainCtrl' ng-click="openModal()">
      <div class="item item-divider">
        {{contact.name}}
      </div>
      <div class="item item-text-wrap">
        {{contact.info}}
      </div>
    </div>
    </ion-content>
 
  

  </script>
  </body>

</html>

script.js:
var app = angular.module('ionicApp', ['ionic'])

app.controller('MainCtrl', function($scope, $ionicModal) {
  $scope.contact = {
    name: 'Mittens Cat',
    info: 'Tap anywhere on the card to open the modal'
  }

  $ionicModal.fromTemplateUrl('templates/contact-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })

  $scope.openModal = function() {
    $scope.modal.show()
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
})

contact-modal.html
    <div class="modal">
      <ion-header-bar>
        <h1 class="title">Edit Contact</h1>
      </ion-header-bar>
      <ion-content>
        <div class="list">
          <label class="item item-input">
            <span class="input-label">Name</span>
            <input type="text" ng-model="contact.name">
          </label>
          <label class="item item-input">
            <span class="input-label">Info</span>
            <input type="text" ng-model="contact.info">
          </label>
        </div>

        <button class="button button-full button-energized" ng-click="closeModal()">Done</button>
      </ion-content>
    </div>


style.css
body { }



*/
/*  ng-class
semmi js ! ng-class tudja!
 		<i ng-class="{'icon ion-ios-glasses sFont': fSize, 'icon ion-ios-glasses-outline lFont': !fSize}" ng-click="fSize=!fSize"></i>
*/
/* factory-service

html:
<div ng-controller="c1">
		<br>var1= <strong>{{data.firstName}}</strong> {{data.lastName}}			
	</div>
	<div ng-controller="c2">
		var2= {{data.firstName}} {{data.lastName}}	
		<p ng-click='ud("pontyi","bontyi")'> klikk </p>
	</div>

	<div ng-controller="ss">
		<p ng-click='ss()'> klikk </p>
	</div>

factory:
hello.factory('MyService', function(){
  return {
    data: {
      firstName: 'Sanci',
      lastName: 'Banci'
    },
    update: function(first, last) {
      this.data.firstName = first;
      this.data.lastName = last;
    }
  };
});


controllers:
hello.controller('ss', function ($scope, MyService) {
    $scope.data = MyService.data;
	$scope.ss = function() {
		alert($scope.data.firstName);  
	}
});

hello.controller('c1', function($scope, MyService){
   $scope.data = MyService.data;

   $scope.ud = function(first, last) {
     MyService.update(first, last);
   }
});

hello.controller('c2', function($scope, MyService){
   $scope.data = MyService.data;

   $scope.ud = function(first, last) {
     MyService.update(first, last);
   }
});

/
*/
/* alert
<div ng-controller='sc' ng-click=sa('belllo')>
		klikk
</div>

hello.controller('sc', function($scope) {
	$scope.sa = function(msg) {
		alert(msg);  
	}
});


*/
/* gVars
	<div ng-controller="c2">
		<br>var1= <strong>{{data.fLarge}}</strong> {{data.lastName}}			
	</div>
	<div ng-controller="c1">
		{{data.fLarge}}
		<p ng-click='setfLarge()'> klikk </p>
	</div>
	
	
	hello.controller('c1', function($scope, gVars){
   $scope.data = gVars.data;

   $scope.setfLarge = function() {
     gVars.fLargeSet();
   },
   $scope.setLastName = function() {
     gVars.lastNameSet(fn,ln);
   }
     
});

hello.controller('c2', function($scope, gVars){
   $scope.data = gVars.data;
});
	

hello.factory('gVars', function(){
  return {
    data: {
      fLarge: false,
      lastName: 'Banci'
    },
    fLargeSet: function() {
      this.data.fLarge = !this.data.fLarge;
    },
    lastNameSet: function(last) {
      this.data.lastName = last;
    }
  };
});


*/
/*  local storage
<!DOCTYPE html>
<html ng-app="hello">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    <title></title>

    <link href="lib/ionic/css/ionic.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link rel="stylesheet" href="lib/font-awesome/css/font-awesome.min.css">
    <!-- IF using Sass (run gulp sass first), then uncomment below and remove the CSS includes above
    <link href="css/ionic.app.css" rel="stylesheet">
    -->

    <!-- ionic/angularjs js -->
    <script src="lib/ionic/js/ionic.bundle.js"></script>

    <!-- cordova script (this will be a 404 during development) -->
    <script src="cordova.js"></script>

	<script src="ngStorage.min.js"></script>
    <!-- your app's js -->
    <script src="js/app.js"></script>
    <script src="js/controllers.js"></script>
    <script src="js/services.js"></script>
	
  </head>
  <body>
		<div ng-controller="cStorageIn">
			<input type="text" ng-model="txIn1">	
			<input type="text" ng-model="txIn2">		
            <button ng-click="textSet()">Set</button>
			<br>
            {{data.txIn}}
        </div>
		<div ng-controller="ExampleController">	<br>
            <button ng-click="save()">Save</button>
            <button ng-click="load()">Load</button>
            <br>	<br>
            <div id="movie" ng-bind="data.strgText">  </div>
        </div>
		
   </body>
</html>


.js

hello.factory('gVars', function(){
  return {
    data: {
      fLarge: false,
      lastName: 'Banci',
	  strgText:''
    },
    fLargeSet: function() {
      this.data.fLarge = !this.data.fLarge;
    },
    lastNameSet: function(last) {
      this.data.lastName = last;
    },
	fstrgTextSet: function(tx) {
      this.data.strgText = tx;
	}
  };
});



hello.controller('cStorageIn', function($scope, gVars){
   $scope.data = gVars.data;
   $scope.txIn = "11111111111   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyend At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy   At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 2222222222222222222222222222";
   $scope.txIn1 = " Eleje ";
   $scope.txIn2 = " Vége ";
   $scope.textSet= function() {
      gVars.fstrgTextSet($scope.txIn1+$scope.txIn+$scope.txIn2);
	  
    }
});

hello.controller("ExampleController", function($scope, gVars, $localStorage) {
				$scope.data = gVars.data;
                $scope.save = function() {
                    $localStorage.message = gVars.data.strgText;
                }
 
                $scope.load = function() {
                    $scope.data.strgText = $localStorage.message;
                }
 
});



*/
/* localhost test/server test 
<!DOCTYPE html>
<html>

<head>
<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>

<body>

<div ng-app="myApp" ng-controller="customersCtrl"> 

<ul>
  <li ng-repeat="x in names">
    {{ x.Name + ', ' + x.Country }}
  </li>
</ul>

</div>

<script>
var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("server.php")
  .success(function (response) {$scope.names = response;});
});
</script>

</body>
</html>


php:

[
{
"Name" : "Alfreds Futterkiste",
"City" : "Berlin",
"Country" : "Germany"
},
{
"Name" : "Berglunds snabbköp",
"City" : "Lulea",
"Country" : "Sweden"
},
{
"Name" : "Centro comercial Moctezuma",
"City" : "México D.F.",
"Country" : "Mexico"
},
{
"Name" : "Ernst Handel",
"City" : "Graz",
"Country" : "Austria"
},
{
"Name" : "FISSA Fabrica Inter. Salchichas S.A.",
"City" : "Madrid",
"Country" : "Spain"
},
{
"Name" : "Galería del gastrónomo",
"City" : "Barcelona",
"Country" : "Spain"
},
{
"Name" : "Island Trading",
"City" : "Cowes",
"Country" : "UK"
},
{
"Name" : "Königlich Essen",
"City" : "Brandenburg",
"Country" : "Germany"
},
{
"Name" : "Laughing Bacchus Wine Cellars",
"City" : "Vancouver",
"Country" : "Canada"
},
{
"Name" : "Magazzini Alimentari Riuniti",
"City" : "Bergamo",
"Country" : "Italy"
},
{
"Name" : "North/South",
"City" : "London",
"Country" : "UK"
},
{
"Name" : "Paris spécialités",
"City" : "Paris",
"Country" : "France"
},
{
"Name" : "Rattlesnake Canyon Grocery",
"City" : "Albuquerque",
"Country" : "USA"
},
{
"Name" : "Simons bistro",
"City" : "Kobenhavn",
"Country" : "Denmark"
},
{
"Name" : "The Big Cheese",
"City" : "Portland",
"Country" : "USA"
},
{
"Name" : "Vaffeljernet",
"City" : "Arhus",
"Country" : "Denmark"
},
{
"Name" : "Wolski Zajazd",
"City" : "Warszawa",
"Country" : "Poland"
}
]



*/
/* angular.element($0).scope();

angular.element(document.getElementById('elementId')).scope();
angular.element($0).scope();

*/
/*  bind-html 

<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example - example-example61-production</title>
  <script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-sanitize.js"></script>
 
  <script src="/js/script.js"></script>
    
</head>
<body ng-app="bindHtmlExample">
  <div ng-controller="ExampleController">
 <p ng-bind-html="myHTML"></p>
</div>
</body>
</html>


script.js

angular.module('bindHtmlExample', ['ngSanitize'])
.controller('ExampleController', ['$scope', function($scope) {
  $scope.myHTML ='<p dir="ltr"><span>Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan orosz kiv&#xE1;l&#xF3;s&#xE1;gok &#xE9;letrajz&#xE1;r&#xF3;l van sz&#xF3;, mint Rettegett Iv&#xE1;n vagy &#xE9;ppen I. P&#xE9;ter c&#xE1;r. Ha k&#xE9;rdezik, megeml&#xED;ti, hogy a XI. sz&#xE1;zadi perzsa k&#xF6;lt&#x151;, Omar Khajj&#xE1;m l&#xED;r&#xE1;ja k&#xF6;zel &#xE1;ll a sz&#xED;v&#xE9;hez (kedves k&#xF6;tet&#xE9;t egy&#xE9;bk&#xE9;nt volt feles&#xE9;g&#xE9;t&#x151;l kapta), emellett list&#xE1;j&#xE1;n Ernest Hemingway, Jack London &#xE9;s Jules Verne is megfordult m&#xE1;r, hazafias &#xE9;rzelmeit pedig Tolsztoj &#xE9;s Dosztojevszkij sorol&#xE1;s&#xE1;val szokta letudni. Saj&#xE1;t bevall&#xE1;sa szerint kifejezetten &#xE9;lvezte Alexandre Dumas m&#x171;v&#xE9;t, </span><span>A h&#xE1;rom test&#x151;r</span><span>t, de &#xE1;ll&#xED;t&#xF3;lag egyszer, m&#xE9;g 2006-ban l&#xE1;tt&#xE1;k a fiatal &#xED;r&#xF3;, Zahar Prilepin egyik thriller&#xE9;t, a </span><span>Szankj&#xE1;</span><span>t is a kez&#xE9;ben. A hozz&#xE1; k&#xF6;zel &#xE1;ll&#xF3;k szerint viszont az eln&#xF6;k nem kifejezetten a bet&#x171;k szerelmese.</span></p> <p dir="ltr"><span>&#xC9;rdekes egy&#xE9;bk&#xE9;nt, hogy Putyin &#xED;zl&#xE9;se valamelyest lek&#xE9;pezi az orosz t&#xE1;rsadalom irodalmi &#xE9;rdekl&#x151;d&#xE9;s&#xE9;t is &#x2013; l&#xE9;tezik m&#xE1;r egy sz&#xE1;zas lista, amire b&#xE1;rki szavazhat a <a href="http://www.100bestbooks.ru/" target="_blank">100bestbooks.ru</a> oldalon, jelenleg a lista els&#x151; hely&#xE9;n Bulgakov &#xE1;ll &#xE9;s </span><span>A Mester &#xE9;s Margarita</span><span>, a top 10-ben Tolsztoj k&#xE9;tszer, Dosztojevszkij h&#xE1;romszor szerepel, Dumas Putyin &#xE1;ltal is kedvelt m&#x171;ve viszont kicsit lecs&#xFA;szott, az 55. helyen fesz&#xED;t jelenleg. </span></p> <p dir="ltr"><span>Mutatunk &#xF6;t k&#xF6;nyvet, ami val&#xF3;sz&#xED;n&#x171;leg soha nem ker&#xFC;l fel a&#xA0;<span>f&#xE9;nyes homlok&#xFA;&#xA0;</span><span>KGB</span><span>-tiszt kedvenceinek list&#xE1;j&#xE1;ra, de kicsit jobban meg&#xE9;rthet&#x151; bel&#x151;l&#xFC;k, hogy milyen is keleti bar&#xE1;taink &#xE9;lete.&#xA0;</span></span></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_39849_masolata.jpg" alt="covers_39849_masolata.jpg" class="imgleft" width="251" height="391">Vlagyimir Szorokin: Az opricsnyik egy napja</strong></p> <p dir="ltr"><span>2028-ban Oroszorsz&#xE1;gban gy&#x151;z&#xF6;tt a nemzeti eszme, &#xE9;s visszat&#xE9;r Rettegett Iv&#xE1;n modellje. A Nyugati Fal m&#xF6;g&#xF6;tt ism&#xE9;t a c&#xE1;r atyuska az &#xFA;r, minden nyugati szabads&#xE1;gjogot elt&#xF6;r&#xF6;ltek, &#xE9;s m&#x171;k&#xF6;dik az opricsnyina, a mag&#xE1;nhadsereg, amelynek legf&#x151;bb feladata a k&#xF6;ny&#xF6;rtelen b&#xFC;ntet&#xE9;s. A reg&#xE9;ny egy Komjaga nev&#x171; opricsnyik egy napj&#xE1;t mes&#xE9;li el, aki lecsillap&#xED;tva k&#xED;nz&#xF3; m&#xE1;snaposs&#xE1;g&#xE1;t elindul a szok&#xE1;sos napi feny&#xED;t&#x151; k&#xF6;r&#xFA;tj&#xE1;ra. Szorokin sz&#xFC;rre&#xE1;lis, kegyetlen reg&#xE9;nye egy&#xE9;bk&#xE9;nt Szolzsenyicin h&#xED;res l&#xE1;gerreg&#xE9;ny&#xE9;nek, az Ivan Gyenyiszovics egy napj&#xE1;nak a parodisztikus parafr&#xE1;zisa. B&#xE1;r a szerz&#x151; tagadta, hogy Putyin rendszer&#xE9;r&#x151;l &#xED;rta volna m&#x171;v&#xE9;t, az orosz viszonyokat ismerve lehetetlen nem gondolni arra, hogy val&#xF3;j&#xE1;ban a jelenkori Oroszorsz&#xE1;g szat&#xED;r&#xE1;ja ez a reg&#xE9;ny.</span></p> <p dir="ltr"><a href="http://Dmitry%20Glukhovsky A posztapokaliptikus irodalom mindent elt&#xF6;r&#xF6;l" target="_blank"><span>Interj&#xFA;nk Vlagyimir Szorokinnal&gt;&gt;</span></a></p> <p><a id="more7089193" name="more7089193"></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2015/01/12/szorokin_az_orosz_lelek_tomjen_ho_es_ver" target="_blank"><span><br class="kix-line-break"></span></a><strong>Dmitrij Bikov: ZSD &#x2013; avagy ki&#xE9; Oroszorsz&#xE1;g</strong></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_90505_masolata.jpg" alt="covers_90505_masolata.jpg" class="imgright" width="251" height="371"></strong><span>A monument&#xE1;lis, csaknem egykil&#xF3;s, 745 oldalas reg&#xE9;ny szint&#xE9;n a j&#xF6;v&#x151;ben j&#xE1;tsz&#xF3;dik. M&#xE9;ghozz&#xE1; egy olyan vil&#xE1;gban, ahol az orsz&#xE1;g bels&#x151; etnikai fesz&#xFC;lts&#xE9;gei felsz&#xED;nre t&#xF6;rnek, &#xE9;s v&#xE9;res h&#xE1;bor&#xFA; robban ki a var&#xE9;gok &#xE9;s a kaz&#xE1;rok k&#xF6;z&#xF6;tt. A harc m&#xE1;r az elej&#xE9;t&#x151;l fogva &#xE9;rtelmetlen, de t&#xF6;rt&#xE9;nelmi m&#xED;toszok &#xE9;s babon&#xE1;k m&#xE1;r teljesen rabul ejtett&#xE9;k az egym&#xE1;s kiirt&#xE1;s&#xE1;n f&#xE1;radoz&#xF3; feleket, mik&#xF6;zben a t&#xF6;rzs&#xF6;k&#xF6;s lakoss&#xE1;g v&#xE1;rja, hogy a szemben &#xE1;ll&#xF3; &#x151;sellens&#xE9;gek v&#xE9;gre d&#xF6;nt&#xE9;sre vigy&#xE9;k a h&#xE1;bor&#xFA;t. Bikov nem hi&#xE1;ba dolgozott egy &#xE9;vtizeden &#xE1;t a reg&#xE9;nyen, hiszen a ZSD val&#xF3;s&#xE1;gos kultk&#xF6;nyv lett, &#xE9;s minden bizonnyal az egyik legk&#xFC;l&#xF6;nlegesebb &#xE9;s leghumorosabb ut&#xF3;pia az ut&#xF3;bbi &#xE9;vekben, amely minden t&#xFA;lz&#xE1;sa ellen&#xE9;re m&#xE9;gis r&#xE1;mutat arra a t&#xE9;nyre, hogy a jelenkor Oroszorsz&#xE1;g&#xE1;ban milyen puszt&#xED;t&#xF3; erej&#x171; etnikai ellent&#xE9;tek fesz&#xFC;lnek.</span><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/viktor-pelevin-p51.jpg" alt="viktor-pelevin-p51.jpg" class="imgleft open-in-modal" width="251" height="410">Viktor Pelevin: P5 -&#xA0;Pindoszt&#xE1;n politikai pigmeusai</strong></p> <p dir="ltr"><span>Az orosz szt&#xE1;rszerz&#x151; &#xF6;t elbesz&#xE9;l&#xE9;s&#xE9;t egybegy&#x171;jt&#x151; k&#xF6;tet bor&#xED;t&#xF3;j&#xE1;n nem v&#xE9;letlen&#xFC;l &#xE9;keskedik az </span><span>Igaz t&#xF6;rt&#xE9;net alapj&#xE1;n</span><span> felirat. Az elk&#xE9;peszt&#x151; fant&#xE1;zi&#xE1;j&#xFA; Pelevin a </span><span>Pindoszt&#xE1;n politikai pigmeusai &#x2013; P&#xE1;, pederaszt&#xE1;k</span><span> alc&#xED;m&#x171; k&#xF6;nyv&#xE9;ben minden benne van, ami&#xE9;rt az &#xED;r&#xF3;t im&#xE1;dni vagy &#xE9;ppen ut&#xE1;lni lehet: a csavaros, groteszk t&#xF6;rt&#xE9;netek sz&#xED;nhelye minden v&#xE1;ratlan &#xE9;s hihetetlen fordulat ellen&#xE9;re a jelenkori Oroszorsz&#xE1;g. Az oligarch&#xE1;k uralta vil&#xE1;gban nemcsak a hatalom, de a bulv&#xE1;rm&#xE9;dia &#xE9;s annak kritika n&#xE9;lk&#xFC;li fogyaszt&#xF3;i is pelleng&#xE9;re &#xE1;ll&#xED;ttatnak. Mindehhez persze n&#xE9;lk&#xFC;l&#xF6;zhetetlen a Pelevinre mindig is jellemz&#x151; cybervil&#xE1;g, no &#xE9;s n&#xE9;mi keleti filoz&#xF3;fia.</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2010/09/07/pelevin_p5" target="_blank"><span><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></span></a></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/859607_5_masolata.jpg" alt="859607_5_masolata.jpg" class="imgright" width="250" height="370">Dmitry Glukhovsky: Orosz n&#xE9;pellenes mes&#xE9;k</strong><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><span>Miut&#xE1;n az orosz fantasztikus irodalom egyik legn&#xE9;pszer&#x171;bb szerz&#x151;je diszkr&#xE9;ten visszautas&#xED;totta a felk&#xE9;r&#xE9;st, hogy vegye &#xE1;t Nyikita Mihalkov hely&#xE9;t Putyin tan&#xE1;csad&#xF3; bizotts&#xE1;g&#xE1;ban, gyorsan tett r&#xF3;la, hogy a hatalomnak m&#xE9;g egyszer esz&#xE9;be se jusson a neve, ha loj&#xE1;lis &#xE9;rtelmis&#xE9;git keresnek. Ezzel a k&#xF6;tettel Glukhovsky sikeresen bizony&#xED;tja, hogy nemcsak a sci-fi m&#x171;faj&#xE1;ban k&#xE9;pes nagyot alkotni. A n&#xE9;pellenes mes&#xE9;kben pontosan mutatja be a korrupci&#xF3;val &#xE1;tsz&#x151;tt orosz mindennapokat. Az &#xE1;llami szint&#x171; n&#xE9;pbut&#xED;t&#xE1;st, a tekint&#xE9;lyelv&#x171;s&#xE9;g elfogad&#xE1;s&#xE1;t le&#xED;r&#xF3; t&#xF6;rt&#xE9;netekb&#x151;l term&#xE9;szetesen nem hi&#xE1;nyozhatnak az&#xE9;rt a szerz&#x151;re jellemz&#x151; fantasztikus elemek sem, de mindezek t&#xF6;k&#xE9;letesen illeszkednek a nagyon is hihet&#x151; elbesz&#xE9;l&#xE9;sek cselekm&#xE9;ny&#xE9;be.&#xA0;</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_nepellenes_mesek" target="_blank"><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_647" target="_blank"><span>Interj&#xFA;nk&#xA0;Dmitry Glukhovskyval&gt;&gt;</span></a></p> <p><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/735666f_masolata.gif" alt="735666f_masolata.gif" class="imgleft" width="249" height="351">Anna Arutunyan: A Putyin-var&#xE1;zs</strong></p> <p>Az orosz-amerikai &#xFA;js&#xE1;g&#xED;r&#xF3; hossz&#xFA; ideje igyekszik meg&#xE9;rteni a jelenlegi orosz rendszer &#xE9;s az eln&#xF6;k titk&#xE1;t. Nem egyszer&#x171;en egy politikus &#xE9;letrajz&#xE1;t &#xED;rja meg ebben a k&#xF6;nyv&#xE9;ben, hanem t&#xF6;rt&#xE9;nelmi tapasztalatokb&#xF3;l pr&#xF3;b&#xE1;lja felfejteni a l&#xE1;tszatdemokr&#xE1;cia m&#x171;k&#xF6;d&#xE9;s&#xE9;nek logik&#xE1;j&#xE1;t, bemutatni a mindent &#xE1;tsz&#xF6;v&#x151; korrupci&#xF3;t, az elhatalmasod&#xF3; b&#xFC;rokr&#xE1;ci&#xE1;t. Feszegeti azt a k&#xE9;rd&#xE9;st is, hogy vajon a maffiaszer&#x171;en m&#x171;k&#xF6;d&#x151; oligarch&#xE1;k ir&#xE1;ny&#xED;tj&#xE1;k-e t&#xE9;nylegesen Oroszorsz&#xE1;got, illetve azt, hogy mi a c&#xE1;r atyuska szerep&#xE9;t bet&#xF6;lt&#x151; Putyin var&#xE1;zs&#xE1;nak titka.</p> <p><a href="http://konyves.blog.hu/2014/09/08/mindenki_benne_van_anna_arutunyan_putyin-varazs" target="_blank">Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</a></p> <p style="text-align: right;"><strong>Szerz&#x151;:&#xA0;Di&#xF3;szegi-Horv&#xE1;th N&#xF3;ra</strong></p> <p style="text-align: right;">&#xA0;<em><span id="docs-internal-guid-e3e8a6be-02f5-97d0-7f87-82ef17091dcb">A cikk eredetileg a K&#xF6;nyvesMagazin t&#xE9;li sz&#xE1;m&#xE1;ban jelent meg.</span></em></p> <!-- <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:trackback="http://madskills.com/public/xml/rss/module/trackback/"><rdf:Description rdf:about="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:identifier="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:title="5 reg&eacute;ny, amib&#337;l jobban meg&eacute;rthetj&uuml;k Oroszorsz&aacute;got" dc:subject="Trackback" dc:description="Vlagyimir Putyin meglehet&#337;sen sz&#369;kszav&uacute;, ha irodalomr&oacute;l van sz&oacute;, annyit viszont tudni lehet, hogy a t&ouml;rt&eacute;nelem &eacute;s a filoz&oacute;fia kiemelten &eacute;rdekli, f&#337;k&eacute;nt ha olyan orosz kiv&aacute;l&oacute;s&aacute;gok &eacute;letrajz&aacute;r&oacute;l van sz.." dc:creator=".konyvesblog." dc:date="Tue, 20 Jan 2015 09:11:00 +0100" trackback:ping=""></rdf:Description></rdf:RDF> --> <div class="clear"></div>'
 
  
  ;
}]);

*/
/*  két adathalmaz, két controller,
<!DOCTYPE html>
<html ng-app="myApp" >

<head>
<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>

<body>

	<div ng-controller="c1"> 
		<ul>
			<li ng-repeat="x in titles">
				{{ x.title + ', ' + x.lead }}
			</li>
		</ul>
	</div>

	<div ng-controller="c2"> 
		<ul>
			<li ng-repeat="x in entries">
				{{ x.Entry }}
			</li>
		</ul>
	</div>

<script>
var app = angular.module('myApp', []);
app.controller('c1', function($scope, $http) {
  $http.get("server1.php")
  .success(function (response) {$scope.titles = response;});
});
app.controller('c2', function($scope, $http) {
  $http.get("server2.php")
  .success(function (response) {$scope.entries = response;});
});
</script>

</body>
</html>

server1.php

[
{
"id" : "1",
"title" : "title Alfreds Futterkiste",
"lead" : "lead Berlin",
"author" : "author Germany"
},
{
"id" : "2",
"title" : "title Berglunds snabbköp",
"lead" : "lead Lulea",
"author" : "author  Sweden"
}
]

server2.php
[
{
"id" : "1",
"Entry" : "entry  2Germany"
},
{
"id" : "2",
"Entry" : "entry   2Sweden"
}
]




*/
/*  két adathalmaz, egy controller,
<!DOCTYPE html>
<html ng-app="myApp" >

<head>
<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>

<body>
hhh
	<div ng-controller="c1"> 
		<ul>
			<li ng-repeat="x in titles">
				{{ x.title + ', ' + x.lead }}
			</li>
		</ul>

		<ul>
			<li ng-repeat="x in entries">
				{{ x.Entry }}
			</li>
		</ul>
	</div>

<script>
var app = angular.module('myApp', []);
app.controller('c1', function($scope, $http) {
  $http.get("server1.php")
  .success(function (response) {$scope.titles = response;})
  .error(function(response, status, headers, config) {/*error status*//*});
  $http.get("server2.php")
  .success(function (response) {$scope.entries = response;})
  .error(function(response, status, headers, config) {/*error status*//*});
});


	  
</script>

</body>
</html>

server1.php

[
{
"id" : "1",
"title" : "title Alfreds Futterkiste",
"lead" : "lead Berlin",
"author" : "author Germany"
},
{
"id" : "2",
"title" : "title Berglunds snabbköp",
"lead" : "lead Lulea",
"author" : "author  Sweden"
}
]

server2.php
[
{
"id" : "1",
"Entry" : "entry  2Germany"
},
{
"id" : "2",
"Entry" : "entry   2Sweden"
}
]

*/
/*  $q asynchron példa
<!DOCTYPE html>
<html>

<head>
  <script data-require="jquery@*" data-semver="2.0.3" src="http://code.jquery.com/jquery-2.0.3.min.js"></script>
  <script data-require="angular.js@*" data-semver="1.3.0-beta.5" src="https://code.angularjs.org/1.3.0-beta.5/angular.js"></script>
  <link rel="stylesheet" href="css/style.css" />
  <script src="js/script.js"></script>
</head>

<body ng-app='myApp'
      ng-controller='PromisesPromisesCtrl'>
  <h1>HTML Fetcher</h1>

  <button ng-click='addUrl()'>Add...</ng-click>
  <button ng-click='executeCalls(urls)'>Go Get Em</button>
  <hr/>
  <div ng-repeat='url in urls'>
    <input type='text' ng-model='url.url'> {{ url.url }} <br/>
  </div>
  <hr/>

  <h2>Logs</h2>
  <p ng-repeat='record in log track by $index'>
     <span ng-bind='record'></span>
  </p>
</body>

</html>

script.js:
(function() { 
  'use strict';

  angular.module('myApp', [])
  .controller('PromisesPromisesCtrl', function($scope, asyncService) {
    $scope.log = [
    ];

    $scope.urls = [
      { url: 'templates/ajax1.html'},
      { url: 'templates/ajax2.html'},
      { url: 'templates/ajax3.html'}
    ];

    $scope.addUrl = function() {
      $scope.urls.push('http://');
    };

    $scope.executeCalls = function() {
       $scope.log.length = 0;

       asyncService.loadDataFromUrls($scope.urls)
         .then(
           function(data) {
           $scope.results = data;
           $scope.log.push(Date.now() + ' - SUCCESS = ' + JSON.stringify(data));
          },
          function(error) {
           $scope.log.push(Date.now() + ' - ERROR - calls failed, error is\n\n' + JSON.stringify(error));
          },
          function(update) {
           $scope.log.push(Date.now() + ' - UPDATE - ' + update);
          });
    };
  }).service('asyncService', function($http, $q) {
      return {
        loadDataFromUrls: function(urls) {
          var deferred = $q.defer();
          var urlCalls = [];
          angular.forEach(urls, function(url) {
            urlCalls.push($http.get(url.url));
          });
          // they may, in fact, all be done, but this
          // executes the callbacks in then, once they are
          // completely finished.
          $q.all(urlCalls)
          .then(
            function(results) {
            deferred.resolve(
              JSON.stringify(results))
          },
          function(errors) {
            deferred.reject(errors);
          },
          function(updates) {
            deferred.update(updates);
          });
          return deferred.promise;
        }
      };
    });
  }());
  
ajax1.html:
<p>This is ajax 1</p>
ajax2.html:
<p>This is ajax 2</p>
ajax3.html:
<p>This is ajax 3</p>


style.css
üres
*/
/*  $q asynchron példa -- egyszerû
http://stackoverflow.com/questions/12505760/processing-http-response-in-service

<!DOCTYPE html>
<html ng-app="kBlog" >

<head>
<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>

<body>

	<div  ng-controller="MainCtrl" > 
	<button ng-click="getTitles('server1.php')"></button>
		<ul>
		<ul>	
			<li ng-repeat="x in titles" >
				<p ng-bind="x.id"></p>
				<p ng-bind="x.title"></p>
				<p ng-bind="x.lead"></p>
				<p ng-bind="x.author"></p>
			</li>
		</ul>
	</div>
	
<script>
var app = angular.module('kBlog', []);

app.factory('myService', function($http) {
  var myService = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get('server1.php').then(function (response) {
        // The then function here is an opportunity to modify the response
        console.log(response);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller	  
	  console.log('promi');
  console.log(promise);
      return promise;

    }
  };
  return myService;
});

app.controller('MainCtrl', function( myService,$scope) {
  // Call the async method and then do stuff with what is returned inside our own then function
  myService.async().then(function(d) {
    $scope.titles = d;
   console.log('d');
  console.log(d);
  });
});






app.controller('sc1', function ($scope, ss1) {
	$scope.getTitles = function(mfile) {
		service.getMovie(mfile) 
		.then(function(titles) {
		$scope.titles = titles;
		});
	};
});

</script>

</body>
</html>

server1.php
[
{
"id" : "1",
"title" : "title Alfreds Futterkiste",
"lead" : "lead Berlin",
"author" : "author Germany"
},
{
"id" : "2",
"title" : "title Berglunds snabbköp",
"lead" : "lead Lulea",
"author" : "author  Sweden"
}
]


*/
/*  nested controllers példa
nested: a divben és nem a js-ben!!!!
magyarázat: http://fdietz.github.io/recipes-with-angular-js/controllers/sharing-models-between-nested-controllers.html
<!DOCTYPE html>
<html>

<head>

<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>

<body ng-app="MyApp">
  <div ng-controller="MyCtrl">
    <label>Primitive</label>
    <input type="text" ng-model="name">

    <label>Object</label>
    <input type="text" ng-model="user.name">

    <div class="nested" ng-controller="MyNestedCtrl">
      <label>Primitive</label>
      <input type="text" ng-model="name">

      <label>Primitive with explicit $parent reference</label>
      <input type="text" ng-model="$parent.name">

      <label>Object</label>
      <input type="text" ng-model="user.name">
    </div>
  </div>
  
<script>
var app = angular.module("MyApp", []);

app.controller("MyCtrl", function($scope) {
  $scope.name = "Peter";
  $scope.user = {
    name: "Parker"
  };
});

app.controller("MyNestedCtrl", function($scope) {
})

</script>

</body>
</html>

*/
/*  dbOk test 
<!DOCTYPE html>
<html>
<head>
</head>
<body>
	
<script>

	var dbs= {
		db1Ok: false, 
		db2Ok: false, 
		Ok: function() {
			return (this.db1Ok && this.db2Ok);
		},
		setdb1Ok: function(oke) {
			this.db1Ok=oke;
		},
		setdb2Ok: function(oke) {
			this.db2Ok=oke;
		}
	};

dbs.setdb1Ok(false);
dbs.setdb2Ok(true);
alert(dbs.Ok()); 

</script>

</body>
</html>

*/
/*  local storage 1 (Hello World)
<!DOCTYPE html>
<html ng-app="app">

<head>
	<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
    <script src="lib/ngStorage.min.js"></script>

</head>

	<body>
		<div ng-controller="ExampleController">
			Push Save first then Load!			
			<br>
			<br>
			<button ng-click="save()">Save</button>
			<button ng-click="load()">Load</button>
			<br>
			{{data}}
		</div>
		
		<script>
            var app = angular.module("app", ["ngStorage"]);
            app.controller("ExampleController", function($scope, $localStorage) {
 
                $scope.save = function() {
                    $localStorage.message = "Hello World";
                }
 
                $scope.load = function() {
                    $scope.data = $localStorage.message;
                }
 
            });
        </script>
	</body>
</html>
*/
/*  local storage 2
<!DOCTYPE html>
<html ng-app="app">

  <head>
	<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
    <script src="lib/ngStorage.min.js"></script>

  </head>
jjj
  <body ng-controller="Ctrl">
    <button ng-click="$storage.x = $storage.x + 1">{{$storage.x}}</button> + <button ng-click="$storage.y = $storage.y + 1">{{$storage.y}}</button> = {{$storage.x + $storage.y}}
  
      <script>
      var app=angular.module('app', ['ngStorage']);
      
      app.controller('Ctrl', function($scope,$localStorage){
        $scope.$storage = $localStorage.$default({x: 12});
      });
    </script>
  
  
  </body>

</html>

*/
/*  local storage 3
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
	<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
    <script src="lib/ngStorage.min.js"></script>

    
</head>
<body>
<div ng-app="myModule">
    <div id="myPanel" class="panel" ng-controller="myCtrl">
    <h5> Using ngStorage (local and session web storage)</h5>

        Small term:<input ng-model="terms.small">   
		<br><br>
		Big term:<input ng-model="terms.big">     
		<br><br>
		Result: 
        {{$l_storage.small}} 
		represents 
		{{$s_storage.result | number:3}}
		% from 
		{{$l_storage.big}}
	
       	<br><br>
		
        <button ng-click="deleteSmallAndBigTermsFromLocalStorage()">
         Delete Small And Big Terms from Local Storage
		</button>
     	<br><br>
        <button ng-click="deleteAllTermsFromLocalAndSessionStorage()">
          Delete All Terms from Local/Session Storage
		</button>
		<br><br>
        <button ng-click="resetSmallAndBigTermsFromLocalStorageTo0()">
          Reset Small And Big Terms from Local Storage To 0</button>
      	<br><br>	<br><br>
	         <button ng-click="addTermsInLocalStorage()">
         	addTermsInLocalStorage</button>
	  <br><br>	<br><br>
        small= {{$l_storage.small}} 
		<br><br>	
		big={{$l_storage.big}}
		<br><br>	
		{{$s_storage.result | number:3}}
		% 
	
    </div>
</div>



<script>
 var app=angular.module("myModule", ['ngStorage']);
 app.controller("myCtrl", function ($scope, $localStorage, $sessionStorage) {

    $scope.terms = {small: "1", big: "10", percent: "100"};

//$localStorage.$reset();
//console.log($localStorage);

    $scope.$l_storage = $localStorage;
    $scope.$s_storage = $sessionStorage;
                            
    $localStorage = $localStorage.$default({small: $scope.terms.small});             
    $localStorage = $localStorage.$default({big: $scope.terms.big});  
    $localStorage = $localStorage.$default({percent: $scope.terms.percent}); 
    $sessionStorage = $sessionStorage.$default({result: 0});
//console.log($localStorage);

	$scope.addTermsInLocalStorage = function(){
		addLocal();
	}	
	
	$scope.addResultInSessionStorage = function(result) {                  
			$sessionStorage.result = result;
    }                  

    $scope.deleteSmallAndBigTermsFromLocalStorage = function(){                        
        delete $localStorage.small;
        delete $localStorage.big;
    }

    $scope.resetSmallAndBigTermsFromLocalStorageTo0 = function(){                        
         $scope.terms = {small: "10", big: "100", percent: "100"};
    }

    $scope.deleteAllTermsFromLocalAndSessionStorage = function(){                        
        $localStorage.$reset(); //delete all
        $sessionStorage.$reset();
        //$localStorage.$reset({small: "0",big: "0", percent: "100"}); //reset a specific object
    }                    

    $scope.$watch('terms', 'addTermsInLocalStorage()', true);
	
	function addLocal(){
		$localStorage.small = $scope.terms.small;
		$localStorage.big = $scope.terms.big;

		if(angular.isUndefined($localStorage.percent)){                       
			$localStorage.percent = $localStorage.$default({percent: $scope.terms.percent}); 
		}
		var result = ($localStorage.small * $localStorage.percent)/$localStorage.big;
		console.log("result");console.log(result);
		$scope.addResultInSessionStorage(result);
	
	};
});
</script>
</body>
</html>


*/
/*  local storage, array.concat()
<!DOCTYPE html>
<html ng-app="app">

<head>
	<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
    <script src="lib/ngStorage.min.js"></script>

</head>

	<body>
		<div ng-controller="ExampleController">
			Push Save first then Load!			
			<br>
			<br>
			<button ng-click="save()">Save</button>
			<button ng-click="load()">Load</button>
			<br>
			<ul>
			<li ng-repeat="x in data" >
				<p ng-bind="x.id"></p>
				<p ng-bind="x.title"></p>
				<p ng-bind="x.lead"></p>
				<p ng-bind="x.author"></p>
				<p ng-bind="x.date"></p>
			</li>
			</ul>
		</div>
		
		
		
		<script>
            var app = angular.module("app", ["ngStorage"]);
            app.controller("ExampleController", function($scope, $localStorage) {
 
                $scope.save = function() {
					//$localStorage.message=[];
					//$localStorage.message.push({"id" : "3","title" : "3 both  title ","lead" : "3 both  lead ","author" : "3 both  author ","date" : "3 both  date ","entry" : "3 both  entry "});
					var a2 =[];
					a2.push({"id" : "1","title" : "1 both  title ","lead" : "1 both  lead ","author" : "1 both  author ","date" : "1 both  date ","entry" : "1 both  entry "});
				
					$localStorage.message=$localStorage.message.concat(a2);
				}
 
                $scope.load = function() {
                    $scope.data = $localStorage.message;
                }
 
            });
        </script>
	</body>
</html>

*/

/*  kBlog            **********

*/
/*  CikkDetailController   -- orig
.controller('CikkDetailController', function($scope,  $http, $stateParams) {
  

    $http({
        method: "get",
        url: "http://ec2-54-148-137-106.us-west-2.compute.amazonaws.com/kb_api/api.php?one_post=1&id="+$stateParams.cikkId,
        
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}

    }).success(function(response, status, headers, config) {
        
       console.log(response);
       $scope.cikk = response;
    });
})


*/
/*  homeController -- orig
.controller('homeController', function($scope, $http) {
   $http({
        method: "get",
        url: "http://ec2-54-148-137-106.us-west-2.compute.amazonaws.com/kb_api/api.php?all_posts=1",
        
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}

    }).success(function(response, status, headers, config) {
        
       //console.log(response);
       $scope.cikkek = response;
    });


})

*/
/*  kblog 1 bind-html --> sanitize = HTML be tagol .. kell hozzá : angular-sanitize.js
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example - example-example61-production</title>
  <script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-sanitize.js"></script>
 
  <script src="/js/script.js"></script>
  

  
</head>
<body ng-app="bindHtmlExample">
  
  
  <div ng-controller="ExampleController">
	<ul>	
	<!--
		<li ng-repeat="x in cimek">
			<h1 ng-bind-html="x.id"></h1>
			<p ng-bind-html="x.title"></p>
			<p ng-bind-html="x.lead"></p>
			<br>
	-->
		<li ng-repeat="x in cikkek">
			<h3 ng-bind-html="x.id"></h3> 
			<p ng-bind-html="x.title"></p>
			<p ng-bind-html="x.lead"></p>
			<span ng-bind-html="x.Entry"></span> 
		</li>
		
	</ul>
  </div>
	

</body>
</html>

script.js
angular.module('bindHtmlExample', ['ngSanitize'])
.controller('ExampleController', ['$scope', function($scope) {
  $scope.cikkek =[
{'id': '1', 'title': '1 regény, amibõl jobban megérthetjük Oroszországot','url': 'http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot','author': '.konyvesblog.','Entry' :'<p dir="ltr"><span>Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan orosz kiv&#xE1;l&#xF3;s&#xE1;gok &#xE9;letrajz&#xE1;r&#xF3;l van sz&#xF3;, mint Rettegett Iv&#xE1;n vagy &#xE9;ppen I. P&#xE9;ter c&#xE1;r. Ha k&#xE9;rdezik, megeml&#xED;ti, hogy a XI. sz&#xE1;zadi perzsa k&#xF6;lt&#x151;, Omar Khajj&#xE1;m l&#xED;r&#xE1;ja k&#xF6;zel &#xE1;ll a sz&#xED;v&#xE9;hez (kedves k&#xF6;tet&#xE9;t egy&#xE9;bk&#xE9;nt volt feles&#xE9;g&#xE9;t&#x151;l kapta), emellett list&#xE1;j&#xE1;n Ernest Hemingway, Jack London &#xE9;s Jules Verne is megfordult m&#xE1;r, hazafias &#xE9;rzelmeit pedig Tolsztoj &#xE9;s Dosztojevszkij sorol&#xE1;s&#xE1;val szokta letudni. Saj&#xE1;t bevall&#xE1;sa szerint kifejezetten &#xE9;lvezte Alexandre Dumas m&#x171;v&#xE9;t, </span><span>A h&#xE1;rom test&#x151;r</span><span>t, de &#xE1;ll&#xED;t&#xF3;lag egyszer, m&#xE9;g 2006-ban l&#xE1;tt&#xE1;k a fiatal &#xED;r&#xF3;, Zahar Prilepin egyik thriller&#xE9;t, a </span><span>Szankj&#xE1;</span><span>t is a kez&#xE9;ben. A hozz&#xE1; k&#xF6;zel &#xE1;ll&#xF3;k szerint viszont az eln&#xF6;k nem kifejezetten a bet&#x171;k szerelmese.</span></p> <p dir="ltr"><span>&#xC9;rdekes egy&#xE9;bk&#xE9;nt, hogy Putyin &#xED;zl&#xE9;se valamelyest lek&#xE9;pezi az orosz t&#xE1;rsadalom irodalmi &#xE9;rdekl&#x151;d&#xE9;s&#xE9;t is &#x2013; l&#xE9;tezik m&#xE1;r egy sz&#xE1;zas lista, amire b&#xE1;rki szavazhat a <a href="http://www.100bestbooks.ru/" target="_blank">100bestbooks.ru</a> oldalon, jelenleg a lista els&#x151; hely&#xE9;n Bulgakov &#xE1;ll &#xE9;s </span><span>A Mester &#xE9;s Margarita</span><span>, a top 10-ben Tolsztoj k&#xE9;tszer, Dosztojevszkij h&#xE1;romszor szerepel, Dumas Putyin &#xE1;ltal is kedvelt m&#x171;ve viszont kicsit lecs&#xFA;szott, az 55. helyen fesz&#xED;t jelenleg. </span></p> <p dir="ltr"><span>Mutatunk &#xF6;t k&#xF6;nyvet, ami val&#xF3;sz&#xED;n&#x171;leg soha nem ker&#xFC;l fel a&#xA0;<span>f&#xE9;nyes homlok&#xFA;&#xA0;</span><span>KGB</span><span>-tiszt kedvenceinek list&#xE1;j&#xE1;ra, de kicsit jobban meg&#xE9;rthet&#x151; bel&#x151;l&#xFC;k, hogy milyen is keleti bar&#xE1;taink &#xE9;lete.&#xA0;</span></span></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_39849_masolata.jpg" alt="covers_39849_masolata.jpg" class="imgleft" width="251" height="391">Vlagyimir Szorokin: Az opricsnyik egy napja</strong></p> <p dir="ltr"><span>2028-ban Oroszorsz&#xE1;gban gy&#x151;z&#xF6;tt a nemzeti eszme, &#xE9;s visszat&#xE9;r Rettegett Iv&#xE1;n modellje. A Nyugati Fal m&#xF6;g&#xF6;tt ism&#xE9;t a c&#xE1;r atyuska az &#xFA;r, minden nyugati szabads&#xE1;gjogot elt&#xF6;r&#xF6;ltek, &#xE9;s m&#x171;k&#xF6;dik az opricsnyina, a mag&#xE1;nhadsereg, amelynek legf&#x151;bb feladata a k&#xF6;ny&#xF6;rtelen b&#xFC;ntet&#xE9;s. A reg&#xE9;ny egy Komjaga nev&#x171; opricsnyik egy napj&#xE1;t mes&#xE9;li el, aki lecsillap&#xED;tva k&#xED;nz&#xF3; m&#xE1;snaposs&#xE1;g&#xE1;t elindul a szok&#xE1;sos napi feny&#xED;t&#x151; k&#xF6;r&#xFA;tj&#xE1;ra. Szorokin sz&#xFC;rre&#xE1;lis, kegyetlen reg&#xE9;nye egy&#xE9;bk&#xE9;nt Szolzsenyicin h&#xED;res l&#xE1;gerreg&#xE9;ny&#xE9;nek, az Ivan Gyenyiszovics egy napj&#xE1;nak a parodisztikus parafr&#xE1;zisa. B&#xE1;r a szerz&#x151; tagadta, hogy Putyin rendszer&#xE9;r&#x151;l &#xED;rta volna m&#x171;v&#xE9;t, az orosz viszonyokat ismerve lehetetlen nem gondolni arra, hogy val&#xF3;j&#xE1;ban a jelenkori Oroszorsz&#xE1;g szat&#xED;r&#xE1;ja ez a reg&#xE9;ny.</span></p> <p dir="ltr"><a href="http://Dmitry%20Glukhovsky A posztapokaliptikus irodalom mindent elt&#xF6;r&#xF6;l" target="_blank"><span>Interj&#xFA;nk Vlagyimir Szorokinnal&gt;&gt;</span></a></p> <p><a id="more7089193" name="more7089193"></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2015/01/12/szorokin_az_orosz_lelek_tomjen_ho_es_ver" target="_blank"><span><br class="kix-line-break"></span></a><strong>Dmitrij Bikov: ZSD &#x2013; avagy ki&#xE9; Oroszorsz&#xE1;g</strong></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_90505_masolata.jpg" alt="covers_90505_masolata.jpg" class="imgright" width="251" height="371"></strong><span>A monument&#xE1;lis, csaknem egykil&#xF3;s, 745 oldalas reg&#xE9;ny szint&#xE9;n a j&#xF6;v&#x151;ben j&#xE1;tsz&#xF3;dik. M&#xE9;ghozz&#xE1; egy olyan vil&#xE1;gban, ahol az orsz&#xE1;g bels&#x151; etnikai fesz&#xFC;lts&#xE9;gei felsz&#xED;nre t&#xF6;rnek, &#xE9;s v&#xE9;res h&#xE1;bor&#xFA; robban ki a var&#xE9;gok &#xE9;s a kaz&#xE1;rok k&#xF6;z&#xF6;tt. A harc m&#xE1;r az elej&#xE9;t&#x151;l fogva &#xE9;rtelmetlen, de t&#xF6;rt&#xE9;nelmi m&#xED;toszok &#xE9;s babon&#xE1;k m&#xE1;r teljesen rabul ejtett&#xE9;k az egym&#xE1;s kiirt&#xE1;s&#xE1;n f&#xE1;radoz&#xF3; feleket, mik&#xF6;zben a t&#xF6;rzs&#xF6;k&#xF6;s lakoss&#xE1;g v&#xE1;rja, hogy a szemben &#xE1;ll&#xF3; &#x151;sellens&#xE9;gek v&#xE9;gre d&#xF6;nt&#xE9;sre vigy&#xE9;k a h&#xE1;bor&#xFA;t. Bikov nem hi&#xE1;ba dolgozott egy &#xE9;vtizeden &#xE1;t a reg&#xE9;nyen, hiszen a ZSD val&#xF3;s&#xE1;gos kultk&#xF6;nyv lett, &#xE9;s minden bizonnyal az egyik legk&#xFC;l&#xF6;nlegesebb &#xE9;s leghumorosabb ut&#xF3;pia az ut&#xF3;bbi &#xE9;vekben, amely minden t&#xFA;lz&#xE1;sa ellen&#xE9;re m&#xE9;gis r&#xE1;mutat arra a t&#xE9;nyre, hogy a jelenkor Oroszorsz&#xE1;g&#xE1;ban milyen puszt&#xED;t&#xF3; erej&#x171; etnikai ellent&#xE9;tek fesz&#xFC;lnek.</span><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/viktor-pelevin-p51.jpg" alt="viktor-pelevin-p51.jpg" class="imgleft open-in-modal" width="251" height="410">Viktor Pelevin: P5 -&#xA0;Pindoszt&#xE1;n politikai pigmeusai</strong></p> <p dir="ltr"><span>Az orosz szt&#xE1;rszerz&#x151; &#xF6;t elbesz&#xE9;l&#xE9;s&#xE9;t egybegy&#x171;jt&#x151; k&#xF6;tet bor&#xED;t&#xF3;j&#xE1;n nem v&#xE9;letlen&#xFC;l &#xE9;keskedik az </span><span>Igaz t&#xF6;rt&#xE9;net alapj&#xE1;n</span><span> felirat. Az elk&#xE9;peszt&#x151; fant&#xE1;zi&#xE1;j&#xFA; Pelevin a </span><span>Pindoszt&#xE1;n politikai pigmeusai &#x2013; P&#xE1;, pederaszt&#xE1;k</span><span> alc&#xED;m&#x171; k&#xF6;nyv&#xE9;ben minden benne van, ami&#xE9;rt az &#xED;r&#xF3;t im&#xE1;dni vagy &#xE9;ppen ut&#xE1;lni lehet: a csavaros, groteszk t&#xF6;rt&#xE9;netek sz&#xED;nhelye minden v&#xE1;ratlan &#xE9;s hihetetlen fordulat ellen&#xE9;re a jelenkori Oroszorsz&#xE1;g. Az oligarch&#xE1;k uralta vil&#xE1;gban nemcsak a hatalom, de a bulv&#xE1;rm&#xE9;dia &#xE9;s annak kritika n&#xE9;lk&#xFC;li fogyaszt&#xF3;i is pelleng&#xE9;re &#xE1;ll&#xED;ttatnak. Mindehhez persze n&#xE9;lk&#xFC;l&#xF6;zhetetlen a Pelevinre mindig is jellemz&#x151; cybervil&#xE1;g, no &#xE9;s n&#xE9;mi keleti filoz&#xF3;fia.</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2010/09/07/pelevin_p5" target="_blank"><span><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></span></a></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/859607_5_masolata.jpg" alt="859607_5_masolata.jpg" class="imgright" width="250" height="370">Dmitry Glukhovsky: Orosz n&#xE9;pellenes mes&#xE9;k</strong><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><span>Miut&#xE1;n az orosz fantasztikus irodalom egyik legn&#xE9;pszer&#x171;bb szerz&#x151;je diszkr&#xE9;ten visszautas&#xED;totta a felk&#xE9;r&#xE9;st, hogy vegye &#xE1;t Nyikita Mihalkov hely&#xE9;t Putyin tan&#xE1;csad&#xF3; bizotts&#xE1;g&#xE1;ban, gyorsan tett r&#xF3;la, hogy a hatalomnak m&#xE9;g egyszer esz&#xE9;be se jusson a neve, ha loj&#xE1;lis &#xE9;rtelmis&#xE9;git keresnek. Ezzel a k&#xF6;tettel Glukhovsky sikeresen bizony&#xED;tja, hogy nemcsak a sci-fi m&#x171;faj&#xE1;ban k&#xE9;pes nagyot alkotni. A n&#xE9;pellenes mes&#xE9;kben pontosan mutatja be a korrupci&#xF3;val &#xE1;tsz&#x151;tt orosz mindennapokat. Az &#xE1;llami szint&#x171; n&#xE9;pbut&#xED;t&#xE1;st, a tekint&#xE9;lyelv&#x171;s&#xE9;g elfogad&#xE1;s&#xE1;t le&#xED;r&#xF3; t&#xF6;rt&#xE9;netekb&#x151;l term&#xE9;szetesen nem hi&#xE1;nyozhatnak az&#xE9;rt a szerz&#x151;re jellemz&#x151; fantasztikus elemek sem, de mindezek t&#xF6;k&#xE9;letesen illeszkednek a nagyon is hihet&#x151; elbesz&#xE9;l&#xE9;sek cselekm&#xE9;ny&#xE9;be.&#xA0;</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_nepellenes_mesek" target="_blank"><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_647" target="_blank"><span>Interj&#xFA;nk&#xA0;Dmitry Glukhovskyval&gt;&gt;</span></a></p> <p><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/735666f_masolata.gif" alt="735666f_masolata.gif" class="imgleft" width="249" height="351">Anna Arutunyan: A Putyin-var&#xE1;zs</strong></p> <p>Az orosz-amerikai &#xFA;js&#xE1;g&#xED;r&#xF3; hossz&#xFA; ideje igyekszik meg&#xE9;rteni a jelenlegi orosz rendszer &#xE9;s az eln&#xF6;k titk&#xE1;t. Nem egyszer&#x171;en egy politikus &#xE9;letrajz&#xE1;t &#xED;rja meg ebben a k&#xF6;nyv&#xE9;ben, hanem t&#xF6;rt&#xE9;nelmi tapasztalatokb&#xF3;l pr&#xF3;b&#xE1;lja felfejteni a l&#xE1;tszatdemokr&#xE1;cia m&#x171;k&#xF6;d&#xE9;s&#xE9;nek logik&#xE1;j&#xE1;t, bemutatni a mindent &#xE1;tsz&#xF6;v&#x151; korrupci&#xF3;t, az elhatalmasod&#xF3; b&#xFC;rokr&#xE1;ci&#xE1;t. Feszegeti azt a k&#xE9;rd&#xE9;st is, hogy vajon a maffiaszer&#x171;en m&#x171;k&#xF6;d&#x151; oligarch&#xE1;k ir&#xE1;ny&#xED;tj&#xE1;k-e t&#xE9;nylegesen Oroszorsz&#xE1;got, illetve azt, hogy mi a c&#xE1;r atyuska szerep&#xE9;t bet&#xF6;lt&#x151; Putyin var&#xE1;zs&#xE1;nak titka.</p> <p><a href="http://konyves.blog.hu/2014/09/08/mindenki_benne_van_anna_arutunyan_putyin-varazs" target="_blank">Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</a></p> <p style="text-align: right;"><strong>Szerz&#x151;:&#xA0;Di&#xF3;szegi-Horv&#xE1;th N&#xF3;ra</strong></p> <p style="text-align: right;">&#xA0;<em><span id="docs-internal-guid-e3e8a6be-02f5-97d0-7f87-82ef17091dcb">A cikk eredetileg a K&#xF6;nyvesMagazin t&#xE9;li sz&#xE1;m&#xE1;ban jelent meg.</span></em></p> <!-- <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:trackback="http://madskills.com/public/xml/rss/module/trackback/"><rdf:Description rdf:about="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:identifier="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:title="5 reg&eacute;ny, amib&#337;l jobban meg&eacute;rthetj&uuml;k Oroszorsz&aacute;got" dc:subject="Trackback" dc:description="Vlagyimir Putyin meglehet&#337;sen sz&#369;kszav&uacute;, ha irodalomr&oacute;l van sz&oacute;, annyit viszont tudni lehet, hogy a t&ouml;rt&eacute;nelem &eacute;s a filoz&oacute;fia kiemelten &eacute;rdekli, f&#337;k&eacute;nt ha olyan orosz kiv&aacute;l&oacute;s&aacute;gok &eacute;letrajz&aacute;r&oacute;l van sz.." dc:creator=".konyvesblog." dc:date="Tue, 20 Jan 2015 09:11:00 +0100" trackback:ping=""></rdf:Description></rdf:RDF> --> <div class="clear"></div>'},
{'id': '2', 'title': '3 regény, amibõl jobban megérthetjük Oroszországot','url': 'http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot','author': '.konyvesblog.','Entry' :'<p dir="ltr"><span>Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan orosz kiv&#xE1;l&#xF3;s&#xE1;gok &#xE9;letrajz&#xE1;r&#xF3;l van sz&#xF3;, mint Rettegett Iv&#xE1;n vagy &#xE9;ppen I. P&#xE9;ter c&#xE1;r. Ha k&#xE9;rdezik, megeml&#xED;ti, hogy a XI. sz&#xE1;zadi perzsa k&#xF6;lt&#x151;, Omar Khajj&#xE1;m l&#xED;r&#xE1;ja k&#xF6;zel &#xE1;ll a sz&#xED;v&#xE9;hez (kedves k&#xF6;tet&#xE9;t egy&#xE9;bk&#xE9;nt volt feles&#xE9;g&#xE9;t&#x151;l kapta), emellett list&#xE1;j&#xE1;n Ernest Hemingway, Jack London &#xE9;s Jules Verne is megfordult m&#xE1;r, hazafias &#xE9;rzelmeit pedig Tolsztoj &#xE9;s Dosztojevszkij sorol&#xE1;s&#xE1;val szokta letudni. Saj&#xE1;t bevall&#xE1;sa szerint kifejezetten &#xE9;lvezte Alexandre Dumas m&#x171;v&#xE9;t, </span><span>A h&#xE1;rom test&#x151;r</span><span>t, de &#xE1;ll&#xED;t&#xF3;lag egyszer, m&#xE9;g 2006-ban l&#xE1;tt&#xE1;k a fiatal &#xED;r&#xF3;, Zahar Prilepin egyik thriller&#xE9;t, a </span><span>Szankj&#xE1;</span><span>t is a kez&#xE9;ben. A hozz&#xE1; k&#xF6;zel &#xE1;ll&#xF3;k szerint viszont az eln&#xF6;k nem kifejezetten a bet&#x171;k szerelmese.</span></p> <p dir="ltr"><span>&#xC9;rdekes egy&#xE9;bk&#xE9;nt, hogy Putyin &#xED;zl&#xE9;se valamelyest lek&#xE9;pezi az orosz t&#xE1;rsadalom irodalmi &#xE9;rdekl&#x151;d&#xE9;s&#xE9;t is &#x2013; l&#xE9;tezik m&#xE1;r egy sz&#xE1;zas lista, amire b&#xE1;rki szavazhat a <a href="http://www.100bestbooks.ru/" target="_blank">100bestbooks.ru</a> oldalon, jelenleg a lista els&#x151; hely&#xE9;n Bulgakov &#xE1;ll &#xE9;s </span><span>A Mester &#xE9;s Margarita</span><span>, a top 10-ben Tolsztoj k&#xE9;tszer, Dosztojevszkij h&#xE1;romszor szerepel, Dumas Putyin &#xE1;ltal is kedvelt m&#x171;ve viszont kicsit lecs&#xFA;szott, az 55. helyen fesz&#xED;t jelenleg. </span></p> <p dir="ltr"><span>Mutatunk &#xF6;t k&#xF6;nyvet, ami val&#xF3;sz&#xED;n&#x171;leg soha nem ker&#xFC;l fel a&#xA0;<span>f&#xE9;nyes homlok&#xFA;&#xA0;</span><span>KGB</span><span>-tiszt kedvenceinek list&#xE1;j&#xE1;ra, de kicsit jobban meg&#xE9;rthet&#x151; bel&#x151;l&#xFC;k, hogy milyen is keleti bar&#xE1;taink &#xE9;lete.&#xA0;</span></span></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_39849_masolata.jpg" alt="covers_39849_masolata.jpg" class="imgleft" width="251" height="391">Vlagyimir Szorokin: Az opricsnyik egy napja</strong></p> <p dir="ltr"><span>2028-ban Oroszorsz&#xE1;gban gy&#x151;z&#xF6;tt a nemzeti eszme, &#xE9;s visszat&#xE9;r Rettegett Iv&#xE1;n modellje. A Nyugati Fal m&#xF6;g&#xF6;tt ism&#xE9;t a c&#xE1;r atyuska az &#xFA;r, minden nyugati szabads&#xE1;gjogot elt&#xF6;r&#xF6;ltek, &#xE9;s m&#x171;k&#xF6;dik az opricsnyina, a mag&#xE1;nhadsereg, amelynek legf&#x151;bb feladata a k&#xF6;ny&#xF6;rtelen b&#xFC;ntet&#xE9;s. A reg&#xE9;ny egy Komjaga nev&#x171; opricsnyik egy napj&#xE1;t mes&#xE9;li el, aki lecsillap&#xED;tva k&#xED;nz&#xF3; m&#xE1;snaposs&#xE1;g&#xE1;t elindul a szok&#xE1;sos napi feny&#xED;t&#x151; k&#xF6;r&#xFA;tj&#xE1;ra. Szorokin sz&#xFC;rre&#xE1;lis, kegyetlen reg&#xE9;nye egy&#xE9;bk&#xE9;nt Szolzsenyicin h&#xED;res l&#xE1;gerreg&#xE9;ny&#xE9;nek, az Ivan Gyenyiszovics egy napj&#xE1;nak a parodisztikus parafr&#xE1;zisa. B&#xE1;r a szerz&#x151; tagadta, hogy Putyin rendszer&#xE9;r&#x151;l &#xED;rta volna m&#x171;v&#xE9;t, az orosz viszonyokat ismerve lehetetlen nem gondolni arra, hogy val&#xF3;j&#xE1;ban a jelenkori Oroszorsz&#xE1;g szat&#xED;r&#xE1;ja ez a reg&#xE9;ny.</span></p> <p dir="ltr"><a href="http://Dmitry%20Glukhovsky A posztapokaliptikus irodalom mindent elt&#xF6;r&#xF6;l" target="_blank"><span>Interj&#xFA;nk Vlagyimir Szorokinnal&gt;&gt;</span></a></p> <p><a id="more7089193" name="more7089193"></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2015/01/12/szorokin_az_orosz_lelek_tomjen_ho_es_ver" target="_blank"><span><br class="kix-line-break"></span></a><strong>Dmitrij Bikov: ZSD &#x2013; avagy ki&#xE9; Oroszorsz&#xE1;g</strong></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_90505_masolata.jpg" alt="covers_90505_masolata.jpg" class="imgright" width="251" height="371"></strong><span>A monument&#xE1;lis, csaknem egykil&#xF3;s, 745 oldalas reg&#xE9;ny szint&#xE9;n a j&#xF6;v&#x151;ben j&#xE1;tsz&#xF3;dik. M&#xE9;ghozz&#xE1; egy olyan vil&#xE1;gban, ahol az orsz&#xE1;g bels&#x151; etnikai fesz&#xFC;lts&#xE9;gei felsz&#xED;nre t&#xF6;rnek, &#xE9;s v&#xE9;res h&#xE1;bor&#xFA; robban ki a var&#xE9;gok &#xE9;s a kaz&#xE1;rok k&#xF6;z&#xF6;tt. A harc m&#xE1;r az elej&#xE9;t&#x151;l fogva &#xE9;rtelmetlen, de t&#xF6;rt&#xE9;nelmi m&#xED;toszok &#xE9;s babon&#xE1;k m&#xE1;r teljesen rabul ejtett&#xE9;k az egym&#xE1;s kiirt&#xE1;s&#xE1;n f&#xE1;radoz&#xF3; feleket, mik&#xF6;zben a t&#xF6;rzs&#xF6;k&#xF6;s lakoss&#xE1;g v&#xE1;rja, hogy a szemben &#xE1;ll&#xF3; &#x151;sellens&#xE9;gek v&#xE9;gre d&#xF6;nt&#xE9;sre vigy&#xE9;k a h&#xE1;bor&#xFA;t. Bikov nem hi&#xE1;ba dolgozott egy &#xE9;vtizeden &#xE1;t a reg&#xE9;nyen, hiszen a ZSD val&#xF3;s&#xE1;gos kultk&#xF6;nyv lett, &#xE9;s minden bizonnyal az egyik legk&#xFC;l&#xF6;nlegesebb &#xE9;s leghumorosabb ut&#xF3;pia az ut&#xF3;bbi &#xE9;vekben, amely minden t&#xFA;lz&#xE1;sa ellen&#xE9;re m&#xE9;gis r&#xE1;mutat arra a t&#xE9;nyre, hogy a jelenkor Oroszorsz&#xE1;g&#xE1;ban milyen puszt&#xED;t&#xF3; erej&#x171; etnikai ellent&#xE9;tek fesz&#xFC;lnek.</span><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/viktor-pelevin-p51.jpg" alt="viktor-pelevin-p51.jpg" class="imgleft open-in-modal" width="251" height="410">Viktor Pelevin: P5 -&#xA0;Pindoszt&#xE1;n politikai pigmeusai</strong></p> <p dir="ltr"><span>Az orosz szt&#xE1;rszerz&#x151; &#xF6;t elbesz&#xE9;l&#xE9;s&#xE9;t egybegy&#x171;jt&#x151; k&#xF6;tet bor&#xED;t&#xF3;j&#xE1;n nem v&#xE9;letlen&#xFC;l &#xE9;keskedik az </span><span>Igaz t&#xF6;rt&#xE9;net alapj&#xE1;n</span><span> felirat. Az elk&#xE9;peszt&#x151; fant&#xE1;zi&#xE1;j&#xFA; Pelevin a </span><span>Pindoszt&#xE1;n politikai pigmeusai &#x2013; P&#xE1;, pederaszt&#xE1;k</span><span> alc&#xED;m&#x171; k&#xF6;nyv&#xE9;ben minden benne van, ami&#xE9;rt az &#xED;r&#xF3;t im&#xE1;dni vagy &#xE9;ppen ut&#xE1;lni lehet: a csavaros, groteszk t&#xF6;rt&#xE9;netek sz&#xED;nhelye minden v&#xE1;ratlan &#xE9;s hihetetlen fordulat ellen&#xE9;re a jelenkori Oroszorsz&#xE1;g. Az oligarch&#xE1;k uralta vil&#xE1;gban nemcsak a hatalom, de a bulv&#xE1;rm&#xE9;dia &#xE9;s annak kritika n&#xE9;lk&#xFC;li fogyaszt&#xF3;i is pelleng&#xE9;re &#xE1;ll&#xED;ttatnak. Mindehhez persze n&#xE9;lk&#xFC;l&#xF6;zhetetlen a Pelevinre mindig is jellemz&#x151; cybervil&#xE1;g, no &#xE9;s n&#xE9;mi keleti filoz&#xF3;fia.</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2010/09/07/pelevin_p5" target="_blank"><span><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></span></a></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/859607_5_masolata.jpg" alt="859607_5_masolata.jpg" class="imgright" width="250" height="370">Dmitry Glukhovsky: Orosz n&#xE9;pellenes mes&#xE9;k</strong><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><span>Miut&#xE1;n az orosz fantasztikus irodalom egyik legn&#xE9;pszer&#x171;bb szerz&#x151;je diszkr&#xE9;ten visszautas&#xED;totta a felk&#xE9;r&#xE9;st, hogy vegye &#xE1;t Nyikita Mihalkov hely&#xE9;t Putyin tan&#xE1;csad&#xF3; bizotts&#xE1;g&#xE1;ban, gyorsan tett r&#xF3;la, hogy a hatalomnak m&#xE9;g egyszer esz&#xE9;be se jusson a neve, ha loj&#xE1;lis &#xE9;rtelmis&#xE9;git keresnek. Ezzel a k&#xF6;tettel Glukhovsky sikeresen bizony&#xED;tja, hogy nemcsak a sci-fi m&#x171;faj&#xE1;ban k&#xE9;pes nagyot alkotni. A n&#xE9;pellenes mes&#xE9;kben pontosan mutatja be a korrupci&#xF3;val &#xE1;tsz&#x151;tt orosz mindennapokat. Az &#xE1;llami szint&#x171; n&#xE9;pbut&#xED;t&#xE1;st, a tekint&#xE9;lyelv&#x171;s&#xE9;g elfogad&#xE1;s&#xE1;t le&#xED;r&#xF3; t&#xF6;rt&#xE9;netekb&#x151;l term&#xE9;szetesen nem hi&#xE1;nyozhatnak az&#xE9;rt a szerz&#x151;re jellemz&#x151; fantasztikus elemek sem, de mindezek t&#xF6;k&#xE9;letesen illeszkednek a nagyon is hihet&#x151; elbesz&#xE9;l&#xE9;sek cselekm&#xE9;ny&#xE9;be.&#xA0;</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_nepellenes_mesek" target="_blank"><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_647" target="_blank"><span>Interj&#xFA;nk&#xA0;Dmitry Glukhovskyval&gt;&gt;</span></a></p> <p><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/735666f_masolata.gif" alt="735666f_masolata.gif" class="imgleft" width="249" height="351">Anna Arutunyan: A Putyin-var&#xE1;zs</strong></p> <p>Az orosz-amerikai &#xFA;js&#xE1;g&#xED;r&#xF3; hossz&#xFA; ideje igyekszik meg&#xE9;rteni a jelenlegi orosz rendszer &#xE9;s az eln&#xF6;k titk&#xE1;t. Nem egyszer&#x171;en egy politikus &#xE9;letrajz&#xE1;t &#xED;rja meg ebben a k&#xF6;nyv&#xE9;ben, hanem t&#xF6;rt&#xE9;nelmi tapasztalatokb&#xF3;l pr&#xF3;b&#xE1;lja felfejteni a l&#xE1;tszatdemokr&#xE1;cia m&#x171;k&#xF6;d&#xE9;s&#xE9;nek logik&#xE1;j&#xE1;t, bemutatni a mindent &#xE1;tsz&#xF6;v&#x151; korrupci&#xF3;t, az elhatalmasod&#xF3; b&#xFC;rokr&#xE1;ci&#xE1;t. Feszegeti azt a k&#xE9;rd&#xE9;st is, hogy vajon a maffiaszer&#x171;en m&#x171;k&#xF6;d&#x151; oligarch&#xE1;k ir&#xE1;ny&#xED;tj&#xE1;k-e t&#xE9;nylegesen Oroszorsz&#xE1;got, illetve azt, hogy mi a c&#xE1;r atyuska szerep&#xE9;t bet&#xF6;lt&#x151; Putyin var&#xE1;zs&#xE1;nak titka.</p> <p><a href="http://konyves.blog.hu/2014/09/08/mindenki_benne_van_anna_arutunyan_putyin-varazs" target="_blank">Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</a></p> <p style="text-align: right;"><strong>Szerz&#x151;:&#xA0;Di&#xF3;szegi-Horv&#xE1;th N&#xF3;ra</strong></p> <p style="text-align: right;">&#xA0;<em><span id="docs-internal-guid-e3e8a6be-02f5-97d0-7f87-82ef17091dcb">A cikk eredetileg a K&#xF6;nyvesMagazin t&#xE9;li sz&#xE1;m&#xE1;ban jelent meg.</span></em></p> <!-- <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:trackback="http://madskills.com/public/xml/rss/module/trackback/"><rdf:Description rdf:about="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:identifier="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:title="5 reg&eacute;ny, amib&#337;l jobban meg&eacute;rthetj&uuml;k Oroszorsz&aacute;got" dc:subject="Trackback" dc:description="Vlagyimir Putyin meglehet&#337;sen sz&#369;kszav&uacute;, ha irodalomr&oacute;l van sz&oacute;, annyit viszont tudni lehet, hogy a t&ouml;rt&eacute;nelem &eacute;s a filoz&oacute;fia kiemelten &eacute;rdekli, f&#337;k&eacute;nt ha olyan orosz kiv&aacute;l&oacute;s&aacute;gok &eacute;letrajz&aacute;r&oacute;l van sz.." dc:creator=".konyvesblog." dc:date="Tue, 20 Jan 2015 09:11:00 +0100" trackback:ping=""></rdf:Description></rdf:RDF> --> <div class="clear"></div>'},  
{'id': '3', 'title': '1 regény, amibõl jobban megérthetjük Oroszországot','url': 'http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot','author': '.konyvesblog.','Entry' :'<p dir="ltr"><span>Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan orosz kiv&#xE1;l&#xF3;s&#xE1;gok &#xE9;letrajz&#xE1;r&#xF3;l van sz&#xF3;, mint Rettegett Iv&#xE1;n vagy &#xE9;ppen I. P&#xE9;ter c&#xE1;r. Ha k&#xE9;rdezik, megeml&#xED;ti, hogy a XI. sz&#xE1;zadi perzsa k&#xF6;lt&#x151;, Omar Khajj&#xE1;m l&#xED;r&#xE1;ja k&#xF6;zel &#xE1;ll a sz&#xED;v&#xE9;hez (kedves k&#xF6;tet&#xE9;t egy&#xE9;bk&#xE9;nt volt feles&#xE9;g&#xE9;t&#x151;l kapta), emellett list&#xE1;j&#xE1;n Ernest Hemingway, Jack London &#xE9;s Jules Verne is megfordult m&#xE1;r, hazafias &#xE9;rzelmeit pedig Tolsztoj &#xE9;s Dosztojevszkij sorol&#xE1;s&#xE1;val szokta letudni. Saj&#xE1;t bevall&#xE1;sa szerint kifejezetten &#xE9;lvezte Alexandre Dumas m&#x171;v&#xE9;t, </span><span>A h&#xE1;rom test&#x151;r</span><span>t, de &#xE1;ll&#xED;t&#xF3;lag egyszer, m&#xE9;g 2006-ban l&#xE1;tt&#xE1;k a fiatal &#xED;r&#xF3;, Zahar Prilepin egyik thriller&#xE9;t, a </span><span>Szankj&#xE1;</span><span>t is a kez&#xE9;ben. A hozz&#xE1; k&#xF6;zel &#xE1;ll&#xF3;k szerint viszont az eln&#xF6;k nem kifejezetten a bet&#x171;k szerelmese.</span></p> <p dir="ltr"><span>&#xC9;rdekes egy&#xE9;bk&#xE9;nt, hogy Putyin &#xED;zl&#xE9;se valamelyest lek&#xE9;pezi az orosz t&#xE1;rsadalom irodalmi &#xE9;rdekl&#x151;d&#xE9;s&#xE9;t is &#x2013; l&#xE9;tezik m&#xE1;r egy sz&#xE1;zas lista, amire b&#xE1;rki szavazhat a <a href="http://www.100bestbooks.ru/" target="_blank">100bestbooks.ru</a> oldalon, jelenleg a lista els&#x151; hely&#xE9;n Bulgakov &#xE1;ll &#xE9;s </span><span>A Mester &#xE9;s Margarita</span><span>, a top 10-ben Tolsztoj k&#xE9;tszer, Dosztojevszkij h&#xE1;romszor szerepel, Dumas Putyin &#xE1;ltal is kedvelt m&#x171;ve viszont kicsit lecs&#xFA;szott, az 55. helyen fesz&#xED;t jelenleg. </span></p> <p dir="ltr"><span>Mutatunk &#xF6;t k&#xF6;nyvet, ami val&#xF3;sz&#xED;n&#x171;leg soha nem ker&#xFC;l fel a&#xA0;<span>f&#xE9;nyes homlok&#xFA;&#xA0;</span><span>KGB</span><span>-tiszt kedvenceinek list&#xE1;j&#xE1;ra, de kicsit jobban meg&#xE9;rthet&#x151; bel&#x151;l&#xFC;k, hogy milyen is keleti bar&#xE1;taink &#xE9;lete.&#xA0;</span></span></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_39849_masolata.jpg" alt="covers_39849_masolata.jpg" class="imgleft" width="251" height="391">Vlagyimir Szorokin: Az opricsnyik egy napja</strong></p> <p dir="ltr"><span>2028-ban Oroszorsz&#xE1;gban gy&#x151;z&#xF6;tt a nemzeti eszme, &#xE9;s visszat&#xE9;r Rettegett Iv&#xE1;n modellje. A Nyugati Fal m&#xF6;g&#xF6;tt ism&#xE9;t a c&#xE1;r atyuska az &#xFA;r, minden nyugati szabads&#xE1;gjogot elt&#xF6;r&#xF6;ltek, &#xE9;s m&#x171;k&#xF6;dik az opricsnyina, a mag&#xE1;nhadsereg, amelynek legf&#x151;bb feladata a k&#xF6;ny&#xF6;rtelen b&#xFC;ntet&#xE9;s. A reg&#xE9;ny egy Komjaga nev&#x171; opricsnyik egy napj&#xE1;t mes&#xE9;li el, aki lecsillap&#xED;tva k&#xED;nz&#xF3; m&#xE1;snaposs&#xE1;g&#xE1;t elindul a szok&#xE1;sos napi feny&#xED;t&#x151; k&#xF6;r&#xFA;tj&#xE1;ra. Szorokin sz&#xFC;rre&#xE1;lis, kegyetlen reg&#xE9;nye egy&#xE9;bk&#xE9;nt Szolzsenyicin h&#xED;res l&#xE1;gerreg&#xE9;ny&#xE9;nek, az Ivan Gyenyiszovics egy napj&#xE1;nak a parodisztikus parafr&#xE1;zisa. B&#xE1;r a szerz&#x151; tagadta, hogy Putyin rendszer&#xE9;r&#x151;l &#xED;rta volna m&#x171;v&#xE9;t, az orosz viszonyokat ismerve lehetetlen nem gondolni arra, hogy val&#xF3;j&#xE1;ban a jelenkori Oroszorsz&#xE1;g szat&#xED;r&#xE1;ja ez a reg&#xE9;ny.</span></p> <p dir="ltr"><a href="http://Dmitry%20Glukhovsky A posztapokaliptikus irodalom mindent elt&#xF6;r&#xF6;l" target="_blank"><span>Interj&#xFA;nk Vlagyimir Szorokinnal&gt;&gt;</span></a></p> <p><a id="more7089193" name="more7089193"></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2015/01/12/szorokin_az_orosz_lelek_tomjen_ho_es_ver" target="_blank"><span><br class="kix-line-break"></span></a><strong>Dmitrij Bikov: ZSD &#x2013; avagy ki&#xE9; Oroszorsz&#xE1;g</strong></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_90505_masolata.jpg" alt="covers_90505_masolata.jpg" class="imgright" width="251" height="371"></strong><span>A monument&#xE1;lis, csaknem egykil&#xF3;s, 745 oldalas reg&#xE9;ny szint&#xE9;n a j&#xF6;v&#x151;ben j&#xE1;tsz&#xF3;dik. M&#xE9;ghozz&#xE1; egy olyan vil&#xE1;gban, ahol az orsz&#xE1;g bels&#x151; etnikai fesz&#xFC;lts&#xE9;gei felsz&#xED;nre t&#xF6;rnek, &#xE9;s v&#xE9;res h&#xE1;bor&#xFA; robban ki a var&#xE9;gok &#xE9;s a kaz&#xE1;rok k&#xF6;z&#xF6;tt. A harc m&#xE1;r az elej&#xE9;t&#x151;l fogva &#xE9;rtelmetlen, de t&#xF6;rt&#xE9;nelmi m&#xED;toszok &#xE9;s babon&#xE1;k m&#xE1;r teljesen rabul ejtett&#xE9;k az egym&#xE1;s kiirt&#xE1;s&#xE1;n f&#xE1;radoz&#xF3; feleket, mik&#xF6;zben a t&#xF6;rzs&#xF6;k&#xF6;s lakoss&#xE1;g v&#xE1;rja, hogy a szemben &#xE1;ll&#xF3; &#x151;sellens&#xE9;gek v&#xE9;gre d&#xF6;nt&#xE9;sre vigy&#xE9;k a h&#xE1;bor&#xFA;t. Bikov nem hi&#xE1;ba dolgozott egy &#xE9;vtizeden &#xE1;t a reg&#xE9;nyen, hiszen a ZSD val&#xF3;s&#xE1;gos kultk&#xF6;nyv lett, &#xE9;s minden bizonnyal az egyik legk&#xFC;l&#xF6;nlegesebb &#xE9;s leghumorosabb ut&#xF3;pia az ut&#xF3;bbi &#xE9;vekben, amely minden t&#xFA;lz&#xE1;sa ellen&#xE9;re m&#xE9;gis r&#xE1;mutat arra a t&#xE9;nyre, hogy a jelenkor Oroszorsz&#xE1;g&#xE1;ban milyen puszt&#xED;t&#xF3; erej&#x171; etnikai ellent&#xE9;tek fesz&#xFC;lnek.</span><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/viktor-pelevin-p51.jpg" alt="viktor-pelevin-p51.jpg" class="imgleft open-in-modal" width="251" height="410">Viktor Pelevin: P5 -&#xA0;Pindoszt&#xE1;n politikai pigmeusai</strong></p> <p dir="ltr"><span>Az orosz szt&#xE1;rszerz&#x151; &#xF6;t elbesz&#xE9;l&#xE9;s&#xE9;t egybegy&#x171;jt&#x151; k&#xF6;tet bor&#xED;t&#xF3;j&#xE1;n nem v&#xE9;letlen&#xFC;l &#xE9;keskedik az </span><span>Igaz t&#xF6;rt&#xE9;net alapj&#xE1;n</span><span> felirat. Az elk&#xE9;peszt&#x151; fant&#xE1;zi&#xE1;j&#xFA; Pelevin a </span><span>Pindoszt&#xE1;n politikai pigmeusai &#x2013; P&#xE1;, pederaszt&#xE1;k</span><span> alc&#xED;m&#x171; k&#xF6;nyv&#xE9;ben minden benne van, ami&#xE9;rt az &#xED;r&#xF3;t im&#xE1;dni vagy &#xE9;ppen ut&#xE1;lni lehet: a csavaros, groteszk t&#xF6;rt&#xE9;netek sz&#xED;nhelye minden v&#xE1;ratlan &#xE9;s hihetetlen fordulat ellen&#xE9;re a jelenkori Oroszorsz&#xE1;g. Az oligarch&#xE1;k uralta vil&#xE1;gban nemcsak a hatalom, de a bulv&#xE1;rm&#xE9;dia &#xE9;s annak kritika n&#xE9;lk&#xFC;li fogyaszt&#xF3;i is pelleng&#xE9;re &#xE1;ll&#xED;ttatnak. Mindehhez persze n&#xE9;lk&#xFC;l&#xF6;zhetetlen a Pelevinre mindig is jellemz&#x151; cybervil&#xE1;g, no &#xE9;s n&#xE9;mi keleti filoz&#xF3;fia.</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2010/09/07/pelevin_p5" target="_blank"><span><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></span></a></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/859607_5_masolata.jpg" alt="859607_5_masolata.jpg" class="imgright" width="250" height="370">Dmitry Glukhovsky: Orosz n&#xE9;pellenes mes&#xE9;k</strong><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><span>Miut&#xE1;n az orosz fantasztikus irodalom egyik legn&#xE9;pszer&#x171;bb szerz&#x151;je diszkr&#xE9;ten visszautas&#xED;totta a felk&#xE9;r&#xE9;st, hogy vegye &#xE1;t Nyikita Mihalkov hely&#xE9;t Putyin tan&#xE1;csad&#xF3; bizotts&#xE1;g&#xE1;ban, gyorsan tett r&#xF3;la, hogy a hatalomnak m&#xE9;g egyszer esz&#xE9;be se jusson a neve, ha loj&#xE1;lis &#xE9;rtelmis&#xE9;git keresnek. Ezzel a k&#xF6;tettel Glukhovsky sikeresen bizony&#xED;tja, hogy nemcsak a sci-fi m&#x171;faj&#xE1;ban k&#xE9;pes nagyot alkotni. A n&#xE9;pellenes mes&#xE9;kben pontosan mutatja be a korrupci&#xF3;val &#xE1;tsz&#x151;tt orosz mindennapokat. Az &#xE1;llami szint&#x171; n&#xE9;pbut&#xED;t&#xE1;st, a tekint&#xE9;lyelv&#x171;s&#xE9;g elfogad&#xE1;s&#xE1;t le&#xED;r&#xF3; t&#xF6;rt&#xE9;netekb&#x151;l term&#xE9;szetesen nem hi&#xE1;nyozhatnak az&#xE9;rt a szerz&#x151;re jellemz&#x151; fantasztikus elemek sem, de mindezek t&#xF6;k&#xE9;letesen illeszkednek a nagyon is hihet&#x151; elbesz&#xE9;l&#xE9;sek cselekm&#xE9;ny&#xE9;be.&#xA0;</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_nepellenes_mesek" target="_blank"><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_647" target="_blank"><span>Interj&#xFA;nk&#xA0;Dmitry Glukhovskyval&gt;&gt;</span></a></p> <p><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/735666f_masolata.gif" alt="735666f_masolata.gif" class="imgleft" width="249" height="351">Anna Arutunyan: A Putyin-var&#xE1;zs</strong></p> <p>Az orosz-amerikai &#xFA;js&#xE1;g&#xED;r&#xF3; hossz&#xFA; ideje igyekszik meg&#xE9;rteni a jelenlegi orosz rendszer &#xE9;s az eln&#xF6;k titk&#xE1;t. Nem egyszer&#x171;en egy politikus &#xE9;letrajz&#xE1;t &#xED;rja meg ebben a k&#xF6;nyv&#xE9;ben, hanem t&#xF6;rt&#xE9;nelmi tapasztalatokb&#xF3;l pr&#xF3;b&#xE1;lja felfejteni a l&#xE1;tszatdemokr&#xE1;cia m&#x171;k&#xF6;d&#xE9;s&#xE9;nek logik&#xE1;j&#xE1;t, bemutatni a mindent &#xE1;tsz&#xF6;v&#x151; korrupci&#xF3;t, az elhatalmasod&#xF3; b&#xFC;rokr&#xE1;ci&#xE1;t. Feszegeti azt a k&#xE9;rd&#xE9;st is, hogy vajon a maffiaszer&#x171;en m&#x171;k&#xF6;d&#x151; oligarch&#xE1;k ir&#xE1;ny&#xED;tj&#xE1;k-e t&#xE9;nylegesen Oroszorsz&#xE1;got, illetve azt, hogy mi a c&#xE1;r atyuska szerep&#xE9;t bet&#xF6;lt&#x151; Putyin var&#xE1;zs&#xE1;nak titka.</p> <p><a href="http://konyves.blog.hu/2014/09/08/mindenki_benne_van_anna_arutunyan_putyin-varazs" target="_blank">Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</a></p> <p style="text-align: right;"><strong>Szerz&#x151;:&#xA0;Di&#xF3;szegi-Horv&#xE1;th N&#xF3;ra</strong></p> <p style="text-align: right;">&#xA0;<em><span id="docs-internal-guid-e3e8a6be-02f5-97d0-7f87-82ef17091dcb">A cikk eredetileg a K&#xF6;nyvesMagazin t&#xE9;li sz&#xE1;m&#xE1;ban jelent meg.</span></em></p> <!-- <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:trackback="http://madskills.com/public/xml/rss/module/trackback/"><rdf:Description rdf:about="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:identifier="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:title="5 reg&eacute;ny, amib&#337;l jobban meg&eacute;rthetj&uuml;k Oroszorsz&aacute;got" dc:subject="Trackback" dc:description="Vlagyimir Putyin meglehet&#337;sen sz&#369;kszav&uacute;, ha irodalomr&oacute;l van sz&oacute;, annyit viszont tudni lehet, hogy a t&ouml;rt&eacute;nelem &eacute;s a filoz&oacute;fia kiemelten &eacute;rdekli, f&#337;k&eacute;nt ha olyan orosz kiv&aacute;l&oacute;s&aacute;gok &eacute;letrajz&aacute;r&oacute;l van sz.." dc:creator=".konyvesblog." dc:date="Tue, 20 Jan 2015 09:11:00 +0100" trackback:ping=""></rdf:Description></rdf:RDF> --> <div class="clear"></div>'},
{'id': '4', 'title': '3 regény, amibõl jobban megérthetjük Oroszországot','url': 'http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot','author': '.konyvesblog.','Entry' :'<p dir="ltr"><span>Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan orosz kiv&#xE1;l&#xF3;s&#xE1;gok &#xE9;letrajz&#xE1;r&#xF3;l van sz&#xF3;, mint Rettegett Iv&#xE1;n vagy &#xE9;ppen I. P&#xE9;ter c&#xE1;r. Ha k&#xE9;rdezik, megeml&#xED;ti, hogy a XI. sz&#xE1;zadi perzsa k&#xF6;lt&#x151;, Omar Khajj&#xE1;m l&#xED;r&#xE1;ja k&#xF6;zel &#xE1;ll a sz&#xED;v&#xE9;hez (kedves k&#xF6;tet&#xE9;t egy&#xE9;bk&#xE9;nt volt feles&#xE9;g&#xE9;t&#x151;l kapta), emellett list&#xE1;j&#xE1;n Ernest Hemingway, Jack London &#xE9;s Jules Verne is megfordult m&#xE1;r, hazafias &#xE9;rzelmeit pedig Tolsztoj &#xE9;s Dosztojevszkij sorol&#xE1;s&#xE1;val szokta letudni. Saj&#xE1;t bevall&#xE1;sa szerint kifejezetten &#xE9;lvezte Alexandre Dumas m&#x171;v&#xE9;t, </span><span>A h&#xE1;rom test&#x151;r</span><span>t, de &#xE1;ll&#xED;t&#xF3;lag egyszer, m&#xE9;g 2006-ban l&#xE1;tt&#xE1;k a fiatal &#xED;r&#xF3;, Zahar Prilepin egyik thriller&#xE9;t, a </span><span>Szankj&#xE1;</span><span>t is a kez&#xE9;ben. A hozz&#xE1; k&#xF6;zel &#xE1;ll&#xF3;k szerint viszont az eln&#xF6;k nem kifejezetten a bet&#x171;k szerelmese.</span></p> <p dir="ltr"><span>&#xC9;rdekes egy&#xE9;bk&#xE9;nt, hogy Putyin &#xED;zl&#xE9;se valamelyest lek&#xE9;pezi az orosz t&#xE1;rsadalom irodalmi &#xE9;rdekl&#x151;d&#xE9;s&#xE9;t is &#x2013; l&#xE9;tezik m&#xE1;r egy sz&#xE1;zas lista, amire b&#xE1;rki szavazhat a <a href="http://www.100bestbooks.ru/" target="_blank">100bestbooks.ru</a> oldalon, jelenleg a lista els&#x151; hely&#xE9;n Bulgakov &#xE1;ll &#xE9;s </span><span>A Mester &#xE9;s Margarita</span><span>, a top 10-ben Tolsztoj k&#xE9;tszer, Dosztojevszkij h&#xE1;romszor szerepel, Dumas Putyin &#xE1;ltal is kedvelt m&#x171;ve viszont kicsit lecs&#xFA;szott, az 55. helyen fesz&#xED;t jelenleg. </span></p> <p dir="ltr"><span>Mutatunk &#xF6;t k&#xF6;nyvet, ami val&#xF3;sz&#xED;n&#x171;leg soha nem ker&#xFC;l fel a&#xA0;<span>f&#xE9;nyes homlok&#xFA;&#xA0;</span><span>KGB</span><span>-tiszt kedvenceinek list&#xE1;j&#xE1;ra, de kicsit jobban meg&#xE9;rthet&#x151; bel&#x151;l&#xFC;k, hogy milyen is keleti bar&#xE1;taink &#xE9;lete.&#xA0;</span></span></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_39849_masolata.jpg" alt="covers_39849_masolata.jpg" class="imgleft" width="251" height="391">Vlagyimir Szorokin: Az opricsnyik egy napja</strong></p> <p dir="ltr"><span>2028-ban Oroszorsz&#xE1;gban gy&#x151;z&#xF6;tt a nemzeti eszme, &#xE9;s visszat&#xE9;r Rettegett Iv&#xE1;n modellje. A Nyugati Fal m&#xF6;g&#xF6;tt ism&#xE9;t a c&#xE1;r atyuska az &#xFA;r, minden nyugati szabads&#xE1;gjogot elt&#xF6;r&#xF6;ltek, &#xE9;s m&#x171;k&#xF6;dik az opricsnyina, a mag&#xE1;nhadsereg, amelynek legf&#x151;bb feladata a k&#xF6;ny&#xF6;rtelen b&#xFC;ntet&#xE9;s. A reg&#xE9;ny egy Komjaga nev&#x171; opricsnyik egy napj&#xE1;t mes&#xE9;li el, aki lecsillap&#xED;tva k&#xED;nz&#xF3; m&#xE1;snaposs&#xE1;g&#xE1;t elindul a szok&#xE1;sos napi feny&#xED;t&#x151; k&#xF6;r&#xFA;tj&#xE1;ra. Szorokin sz&#xFC;rre&#xE1;lis, kegyetlen reg&#xE9;nye egy&#xE9;bk&#xE9;nt Szolzsenyicin h&#xED;res l&#xE1;gerreg&#xE9;ny&#xE9;nek, az Ivan Gyenyiszovics egy napj&#xE1;nak a parodisztikus parafr&#xE1;zisa. B&#xE1;r a szerz&#x151; tagadta, hogy Putyin rendszer&#xE9;r&#x151;l &#xED;rta volna m&#x171;v&#xE9;t, az orosz viszonyokat ismerve lehetetlen nem gondolni arra, hogy val&#xF3;j&#xE1;ban a jelenkori Oroszorsz&#xE1;g szat&#xED;r&#xE1;ja ez a reg&#xE9;ny.</span></p> <p dir="ltr"><a href="http://Dmitry%20Glukhovsky A posztapokaliptikus irodalom mindent elt&#xF6;r&#xF6;l" target="_blank"><span>Interj&#xFA;nk Vlagyimir Szorokinnal&gt;&gt;</span></a></p> <p><a id="more7089193" name="more7089193"></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2015/01/12/szorokin_az_orosz_lelek_tomjen_ho_es_ver" target="_blank"><span><br class="kix-line-break"></span></a><strong>Dmitrij Bikov: ZSD &#x2013; avagy ki&#xE9; Oroszorsz&#xE1;g</strong></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_90505_masolata.jpg" alt="covers_90505_masolata.jpg" class="imgright" width="251" height="371"></strong><span>A monument&#xE1;lis, csaknem egykil&#xF3;s, 745 oldalas reg&#xE9;ny szint&#xE9;n a j&#xF6;v&#x151;ben j&#xE1;tsz&#xF3;dik. M&#xE9;ghozz&#xE1; egy olyan vil&#xE1;gban, ahol az orsz&#xE1;g bels&#x151; etnikai fesz&#xFC;lts&#xE9;gei felsz&#xED;nre t&#xF6;rnek, &#xE9;s v&#xE9;res h&#xE1;bor&#xFA; robban ki a var&#xE9;gok &#xE9;s a kaz&#xE1;rok k&#xF6;z&#xF6;tt. A harc m&#xE1;r az elej&#xE9;t&#x151;l fogva &#xE9;rtelmetlen, de t&#xF6;rt&#xE9;nelmi m&#xED;toszok &#xE9;s babon&#xE1;k m&#xE1;r teljesen rabul ejtett&#xE9;k az egym&#xE1;s kiirt&#xE1;s&#xE1;n f&#xE1;radoz&#xF3; feleket, mik&#xF6;zben a t&#xF6;rzs&#xF6;k&#xF6;s lakoss&#xE1;g v&#xE1;rja, hogy a szemben &#xE1;ll&#xF3; &#x151;sellens&#xE9;gek v&#xE9;gre d&#xF6;nt&#xE9;sre vigy&#xE9;k a h&#xE1;bor&#xFA;t. Bikov nem hi&#xE1;ba dolgozott egy &#xE9;vtizeden &#xE1;t a reg&#xE9;nyen, hiszen a ZSD val&#xF3;s&#xE1;gos kultk&#xF6;nyv lett, &#xE9;s minden bizonnyal az egyik legk&#xFC;l&#xF6;nlegesebb &#xE9;s leghumorosabb ut&#xF3;pia az ut&#xF3;bbi &#xE9;vekben, amely minden t&#xFA;lz&#xE1;sa ellen&#xE9;re m&#xE9;gis r&#xE1;mutat arra a t&#xE9;nyre, hogy a jelenkor Oroszorsz&#xE1;g&#xE1;ban milyen puszt&#xED;t&#xF3; erej&#x171; etnikai ellent&#xE9;tek fesz&#xFC;lnek.</span><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/viktor-pelevin-p51.jpg" alt="viktor-pelevin-p51.jpg" class="imgleft open-in-modal" width="251" height="410">Viktor Pelevin: P5 -&#xA0;Pindoszt&#xE1;n politikai pigmeusai</strong></p> <p dir="ltr"><span>Az orosz szt&#xE1;rszerz&#x151; &#xF6;t elbesz&#xE9;l&#xE9;s&#xE9;t egybegy&#x171;jt&#x151; k&#xF6;tet bor&#xED;t&#xF3;j&#xE1;n nem v&#xE9;letlen&#xFC;l &#xE9;keskedik az </span><span>Igaz t&#xF6;rt&#xE9;net alapj&#xE1;n</span><span> felirat. Az elk&#xE9;peszt&#x151; fant&#xE1;zi&#xE1;j&#xFA; Pelevin a </span><span>Pindoszt&#xE1;n politikai pigmeusai &#x2013; P&#xE1;, pederaszt&#xE1;k</span><span> alc&#xED;m&#x171; k&#xF6;nyv&#xE9;ben minden benne van, ami&#xE9;rt az &#xED;r&#xF3;t im&#xE1;dni vagy &#xE9;ppen ut&#xE1;lni lehet: a csavaros, groteszk t&#xF6;rt&#xE9;netek sz&#xED;nhelye minden v&#xE1;ratlan &#xE9;s hihetetlen fordulat ellen&#xE9;re a jelenkori Oroszorsz&#xE1;g. Az oligarch&#xE1;k uralta vil&#xE1;gban nemcsak a hatalom, de a bulv&#xE1;rm&#xE9;dia &#xE9;s annak kritika n&#xE9;lk&#xFC;li fogyaszt&#xF3;i is pelleng&#xE9;re &#xE1;ll&#xED;ttatnak. Mindehhez persze n&#xE9;lk&#xFC;l&#xF6;zhetetlen a Pelevinre mindig is jellemz&#x151; cybervil&#xE1;g, no &#xE9;s n&#xE9;mi keleti filoz&#xF3;fia.</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2010/09/07/pelevin_p5" target="_blank"><span><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></span></a></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/859607_5_masolata.jpg" alt="859607_5_masolata.jpg" class="imgright" width="250" height="370">Dmitry Glukhovsky: Orosz n&#xE9;pellenes mes&#xE9;k</strong><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><span>Miut&#xE1;n az orosz fantasztikus irodalom egyik legn&#xE9;pszer&#x171;bb szerz&#x151;je diszkr&#xE9;ten visszautas&#xED;totta a felk&#xE9;r&#xE9;st, hogy vegye &#xE1;t Nyikita Mihalkov hely&#xE9;t Putyin tan&#xE1;csad&#xF3; bizotts&#xE1;g&#xE1;ban, gyorsan tett r&#xF3;la, hogy a hatalomnak m&#xE9;g egyszer esz&#xE9;be se jusson a neve, ha loj&#xE1;lis &#xE9;rtelmis&#xE9;git keresnek. Ezzel a k&#xF6;tettel Glukhovsky sikeresen bizony&#xED;tja, hogy nemcsak a sci-fi m&#x171;faj&#xE1;ban k&#xE9;pes nagyot alkotni. A n&#xE9;pellenes mes&#xE9;kben pontosan mutatja be a korrupci&#xF3;val &#xE1;tsz&#x151;tt orosz mindennapokat. Az &#xE1;llami szint&#x171; n&#xE9;pbut&#xED;t&#xE1;st, a tekint&#xE9;lyelv&#x171;s&#xE9;g elfogad&#xE1;s&#xE1;t le&#xED;r&#xF3; t&#xF6;rt&#xE9;netekb&#x151;l term&#xE9;szetesen nem hi&#xE1;nyozhatnak az&#xE9;rt a szerz&#x151;re jellemz&#x151; fantasztikus elemek sem, de mindezek t&#xF6;k&#xE9;letesen illeszkednek a nagyon is hihet&#x151; elbesz&#xE9;l&#xE9;sek cselekm&#xE9;ny&#xE9;be.&#xA0;</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_nepellenes_mesek" target="_blank"><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_647" target="_blank"><span>Interj&#xFA;nk&#xA0;Dmitry Glukhovskyval&gt;&gt;</span></a></p> <p><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/735666f_masolata.gif" alt="735666f_masolata.gif" class="imgleft" width="249" height="351">Anna Arutunyan: A Putyin-var&#xE1;zs</strong></p> <p>Az orosz-amerikai &#xFA;js&#xE1;g&#xED;r&#xF3; hossz&#xFA; ideje igyekszik meg&#xE9;rteni a jelenlegi orosz rendszer &#xE9;s az eln&#xF6;k titk&#xE1;t. Nem egyszer&#x171;en egy politikus &#xE9;letrajz&#xE1;t &#xED;rja meg ebben a k&#xF6;nyv&#xE9;ben, hanem t&#xF6;rt&#xE9;nelmi tapasztalatokb&#xF3;l pr&#xF3;b&#xE1;lja felfejteni a l&#xE1;tszatdemokr&#xE1;cia m&#x171;k&#xF6;d&#xE9;s&#xE9;nek logik&#xE1;j&#xE1;t, bemutatni a mindent &#xE1;tsz&#xF6;v&#x151; korrupci&#xF3;t, az elhatalmasod&#xF3; b&#xFC;rokr&#xE1;ci&#xE1;t. Feszegeti azt a k&#xE9;rd&#xE9;st is, hogy vajon a maffiaszer&#x171;en m&#x171;k&#xF6;d&#x151; oligarch&#xE1;k ir&#xE1;ny&#xED;tj&#xE1;k-e t&#xE9;nylegesen Oroszorsz&#xE1;got, illetve azt, hogy mi a c&#xE1;r atyuska szerep&#xE9;t bet&#xF6;lt&#x151; Putyin var&#xE1;zs&#xE1;nak titka.</p> <p><a href="http://konyves.blog.hu/2014/09/08/mindenki_benne_van_anna_arutunyan_putyin-varazs" target="_blank">Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</a></p> <p style="text-align: right;"><strong>Szerz&#x151;:&#xA0;Di&#xF3;szegi-Horv&#xE1;th N&#xF3;ra</strong></p> <p style="text-align: right;">&#xA0;<em><span id="docs-internal-guid-e3e8a6be-02f5-97d0-7f87-82ef17091dcb">A cikk eredetileg a K&#xF6;nyvesMagazin t&#xE9;li sz&#xE1;m&#xE1;ban jelent meg.</span></em></p> <!-- <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:trackback="http://madskills.com/public/xml/rss/module/trackback/"><rdf:Description rdf:about="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:identifier="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:title="5 reg&eacute;ny, amib&#337;l jobban meg&eacute;rthetj&uuml;k Oroszorsz&aacute;got" dc:subject="Trackback" dc:description="Vlagyimir Putyin meglehet&#337;sen sz&#369;kszav&uacute;, ha irodalomr&oacute;l van sz&oacute;, annyit viszont tudni lehet, hogy a t&ouml;rt&eacute;nelem &eacute;s a filoz&oacute;fia kiemelten &eacute;rdekli, f&#337;k&eacute;nt ha olyan orosz kiv&aacute;l&oacute;s&aacute;gok &eacute;letrajz&aacute;r&oacute;l van sz.." dc:creator=".konyvesblog." dc:date="Tue, 20 Jan 2015 09:11:00 +0100" trackback:ping=""></rdf:Description></rdf:RDF> --> <div class="clear"></div>'}, 
{'id': '5', 'title': '1 regény, amibõl jobban megérthetjük Oroszországot','url': 'http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot','author': '.konyvesblog.','Entry' :'<p dir="ltr"><span>Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan orosz kiv&#xE1;l&#xF3;s&#xE1;gok &#xE9;letrajz&#xE1;r&#xF3;l van sz&#xF3;, mint Rettegett Iv&#xE1;n vagy &#xE9;ppen I. P&#xE9;ter c&#xE1;r. Ha k&#xE9;rdezik, megeml&#xED;ti, hogy a XI. sz&#xE1;zadi perzsa k&#xF6;lt&#x151;, Omar Khajj&#xE1;m l&#xED;r&#xE1;ja k&#xF6;zel &#xE1;ll a sz&#xED;v&#xE9;hez (kedves k&#xF6;tet&#xE9;t egy&#xE9;bk&#xE9;nt volt feles&#xE9;g&#xE9;t&#x151;l kapta), emellett list&#xE1;j&#xE1;n Ernest Hemingway, Jack London &#xE9;s Jules Verne is megfordult m&#xE1;r, hazafias &#xE9;rzelmeit pedig Tolsztoj &#xE9;s Dosztojevszkij sorol&#xE1;s&#xE1;val szokta letudni. Saj&#xE1;t bevall&#xE1;sa szerint kifejezetten &#xE9;lvezte Alexandre Dumas m&#x171;v&#xE9;t, </span><span>A h&#xE1;rom test&#x151;r</span><span>t, de &#xE1;ll&#xED;t&#xF3;lag egyszer, m&#xE9;g 2006-ban l&#xE1;tt&#xE1;k a fiatal &#xED;r&#xF3;, Zahar Prilepin egyik thriller&#xE9;t, a </span><span>Szankj&#xE1;</span><span>t is a kez&#xE9;ben. A hozz&#xE1; k&#xF6;zel &#xE1;ll&#xF3;k szerint viszont az eln&#xF6;k nem kifejezetten a bet&#x171;k szerelmese.</span></p> <p dir="ltr"><span>&#xC9;rdekes egy&#xE9;bk&#xE9;nt, hogy Putyin &#xED;zl&#xE9;se valamelyest lek&#xE9;pezi az orosz t&#xE1;rsadalom irodalmi &#xE9;rdekl&#x151;d&#xE9;s&#xE9;t is &#x2013; l&#xE9;tezik m&#xE1;r egy sz&#xE1;zas lista, amire b&#xE1;rki szavazhat a <a href="http://www.100bestbooks.ru/" target="_blank">100bestbooks.ru</a> oldalon, jelenleg a lista els&#x151; hely&#xE9;n Bulgakov &#xE1;ll &#xE9;s </span><span>A Mester &#xE9;s Margarita</span><span>, a top 10-ben Tolsztoj k&#xE9;tszer, Dosztojevszkij h&#xE1;romszor szerepel, Dumas Putyin &#xE1;ltal is kedvelt m&#x171;ve viszont kicsit lecs&#xFA;szott, az 55. helyen fesz&#xED;t jelenleg. </span></p> <p dir="ltr"><span>Mutatunk &#xF6;t k&#xF6;nyvet, ami val&#xF3;sz&#xED;n&#x171;leg soha nem ker&#xFC;l fel a&#xA0;<span>f&#xE9;nyes homlok&#xFA;&#xA0;</span><span>KGB</span><span>-tiszt kedvenceinek list&#xE1;j&#xE1;ra, de kicsit jobban meg&#xE9;rthet&#x151; bel&#x151;l&#xFC;k, hogy milyen is keleti bar&#xE1;taink &#xE9;lete.&#xA0;</span></span></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_39849_masolata.jpg" alt="covers_39849_masolata.jpg" class="imgleft" width="251" height="391">Vlagyimir Szorokin: Az opricsnyik egy napja</strong></p> <p dir="ltr"><span>2028-ban Oroszorsz&#xE1;gban gy&#x151;z&#xF6;tt a nemzeti eszme, &#xE9;s visszat&#xE9;r Rettegett Iv&#xE1;n modellje. A Nyugati Fal m&#xF6;g&#xF6;tt ism&#xE9;t a c&#xE1;r atyuska az &#xFA;r, minden nyugati szabads&#xE1;gjogot elt&#xF6;r&#xF6;ltek, &#xE9;s m&#x171;k&#xF6;dik az opricsnyina, a mag&#xE1;nhadsereg, amelynek legf&#x151;bb feladata a k&#xF6;ny&#xF6;rtelen b&#xFC;ntet&#xE9;s. A reg&#xE9;ny egy Komjaga nev&#x171; opricsnyik egy napj&#xE1;t mes&#xE9;li el, aki lecsillap&#xED;tva k&#xED;nz&#xF3; m&#xE1;snaposs&#xE1;g&#xE1;t elindul a szok&#xE1;sos napi feny&#xED;t&#x151; k&#xF6;r&#xFA;tj&#xE1;ra. Szorokin sz&#xFC;rre&#xE1;lis, kegyetlen reg&#xE9;nye egy&#xE9;bk&#xE9;nt Szolzsenyicin h&#xED;res l&#xE1;gerreg&#xE9;ny&#xE9;nek, az Ivan Gyenyiszovics egy napj&#xE1;nak a parodisztikus parafr&#xE1;zisa. B&#xE1;r a szerz&#x151; tagadta, hogy Putyin rendszer&#xE9;r&#x151;l &#xED;rta volna m&#x171;v&#xE9;t, az orosz viszonyokat ismerve lehetetlen nem gondolni arra, hogy val&#xF3;j&#xE1;ban a jelenkori Oroszorsz&#xE1;g szat&#xED;r&#xE1;ja ez a reg&#xE9;ny.</span></p> <p dir="ltr"><a href="http://Dmitry%20Glukhovsky A posztapokaliptikus irodalom mindent elt&#xF6;r&#xF6;l" target="_blank"><span>Interj&#xFA;nk Vlagyimir Szorokinnal&gt;&gt;</span></a></p> <p><a id="more7089193" name="more7089193"></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2015/01/12/szorokin_az_orosz_lelek_tomjen_ho_es_ver" target="_blank"><span><br class="kix-line-break"></span></a><strong>Dmitrij Bikov: ZSD &#x2013; avagy ki&#xE9; Oroszorsz&#xE1;g</strong></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_90505_masolata.jpg" alt="covers_90505_masolata.jpg" class="imgright" width="251" height="371"></strong><span>A monument&#xE1;lis, csaknem egykil&#xF3;s, 745 oldalas reg&#xE9;ny szint&#xE9;n a j&#xF6;v&#x151;ben j&#xE1;tsz&#xF3;dik. M&#xE9;ghozz&#xE1; egy olyan vil&#xE1;gban, ahol az orsz&#xE1;g bels&#x151; etnikai fesz&#xFC;lts&#xE9;gei felsz&#xED;nre t&#xF6;rnek, &#xE9;s v&#xE9;res h&#xE1;bor&#xFA; robban ki a var&#xE9;gok &#xE9;s a kaz&#xE1;rok k&#xF6;z&#xF6;tt. A harc m&#xE1;r az elej&#xE9;t&#x151;l fogva &#xE9;rtelmetlen, de t&#xF6;rt&#xE9;nelmi m&#xED;toszok &#xE9;s babon&#xE1;k m&#xE1;r teljesen rabul ejtett&#xE9;k az egym&#xE1;s kiirt&#xE1;s&#xE1;n f&#xE1;radoz&#xF3; feleket, mik&#xF6;zben a t&#xF6;rzs&#xF6;k&#xF6;s lakoss&#xE1;g v&#xE1;rja, hogy a szemben &#xE1;ll&#xF3; &#x151;sellens&#xE9;gek v&#xE9;gre d&#xF6;nt&#xE9;sre vigy&#xE9;k a h&#xE1;bor&#xFA;t. Bikov nem hi&#xE1;ba dolgozott egy &#xE9;vtizeden &#xE1;t a reg&#xE9;nyen, hiszen a ZSD val&#xF3;s&#xE1;gos kultk&#xF6;nyv lett, &#xE9;s minden bizonnyal az egyik legk&#xFC;l&#xF6;nlegesebb &#xE9;s leghumorosabb ut&#xF3;pia az ut&#xF3;bbi &#xE9;vekben, amely minden t&#xFA;lz&#xE1;sa ellen&#xE9;re m&#xE9;gis r&#xE1;mutat arra a t&#xE9;nyre, hogy a jelenkor Oroszorsz&#xE1;g&#xE1;ban milyen puszt&#xED;t&#xF3; erej&#x171; etnikai ellent&#xE9;tek fesz&#xFC;lnek.</span><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/viktor-pelevin-p51.jpg" alt="viktor-pelevin-p51.jpg" class="imgleft open-in-modal" width="251" height="410">Viktor Pelevin: P5 -&#xA0;Pindoszt&#xE1;n politikai pigmeusai</strong></p> <p dir="ltr"><span>Az orosz szt&#xE1;rszerz&#x151; &#xF6;t elbesz&#xE9;l&#xE9;s&#xE9;t egybegy&#x171;jt&#x151; k&#xF6;tet bor&#xED;t&#xF3;j&#xE1;n nem v&#xE9;letlen&#xFC;l &#xE9;keskedik az </span><span>Igaz t&#xF6;rt&#xE9;net alapj&#xE1;n</span><span> felirat. Az elk&#xE9;peszt&#x151; fant&#xE1;zi&#xE1;j&#xFA; Pelevin a </span><span>Pindoszt&#xE1;n politikai pigmeusai &#x2013; P&#xE1;, pederaszt&#xE1;k</span><span> alc&#xED;m&#x171; k&#xF6;nyv&#xE9;ben minden benne van, ami&#xE9;rt az &#xED;r&#xF3;t im&#xE1;dni vagy &#xE9;ppen ut&#xE1;lni lehet: a csavaros, groteszk t&#xF6;rt&#xE9;netek sz&#xED;nhelye minden v&#xE1;ratlan &#xE9;s hihetetlen fordulat ellen&#xE9;re a jelenkori Oroszorsz&#xE1;g. Az oligarch&#xE1;k uralta vil&#xE1;gban nemcsak a hatalom, de a bulv&#xE1;rm&#xE9;dia &#xE9;s annak kritika n&#xE9;lk&#xFC;li fogyaszt&#xF3;i is pelleng&#xE9;re &#xE1;ll&#xED;ttatnak. Mindehhez persze n&#xE9;lk&#xFC;l&#xF6;zhetetlen a Pelevinre mindig is jellemz&#x151; cybervil&#xE1;g, no &#xE9;s n&#xE9;mi keleti filoz&#xF3;fia.</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2010/09/07/pelevin_p5" target="_blank"><span><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></span></a></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/859607_5_masolata.jpg" alt="859607_5_masolata.jpg" class="imgright" width="250" height="370">Dmitry Glukhovsky: Orosz n&#xE9;pellenes mes&#xE9;k</strong><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><span>Miut&#xE1;n az orosz fantasztikus irodalom egyik legn&#xE9;pszer&#x171;bb szerz&#x151;je diszkr&#xE9;ten visszautas&#xED;totta a felk&#xE9;r&#xE9;st, hogy vegye &#xE1;t Nyikita Mihalkov hely&#xE9;t Putyin tan&#xE1;csad&#xF3; bizotts&#xE1;g&#xE1;ban, gyorsan tett r&#xF3;la, hogy a hatalomnak m&#xE9;g egyszer esz&#xE9;be se jusson a neve, ha loj&#xE1;lis &#xE9;rtelmis&#xE9;git keresnek. Ezzel a k&#xF6;tettel Glukhovsky sikeresen bizony&#xED;tja, hogy nemcsak a sci-fi m&#x171;faj&#xE1;ban k&#xE9;pes nagyot alkotni. A n&#xE9;pellenes mes&#xE9;kben pontosan mutatja be a korrupci&#xF3;val &#xE1;tsz&#x151;tt orosz mindennapokat. Az &#xE1;llami szint&#x171; n&#xE9;pbut&#xED;t&#xE1;st, a tekint&#xE9;lyelv&#x171;s&#xE9;g elfogad&#xE1;s&#xE1;t le&#xED;r&#xF3; t&#xF6;rt&#xE9;netekb&#x151;l term&#xE9;szetesen nem hi&#xE1;nyozhatnak az&#xE9;rt a szerz&#x151;re jellemz&#x151; fantasztikus elemek sem, de mindezek t&#xF6;k&#xE9;letesen illeszkednek a nagyon is hihet&#x151; elbesz&#xE9;l&#xE9;sek cselekm&#xE9;ny&#xE9;be.&#xA0;</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_nepellenes_mesek" target="_blank"><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_647" target="_blank"><span>Interj&#xFA;nk&#xA0;Dmitry Glukhovskyval&gt;&gt;</span></a></p> <p><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/735666f_masolata.gif" alt="735666f_masolata.gif" class="imgleft" width="249" height="351">Anna Arutunyan: A Putyin-var&#xE1;zs</strong></p> <p>Az orosz-amerikai &#xFA;js&#xE1;g&#xED;r&#xF3; hossz&#xFA; ideje igyekszik meg&#xE9;rteni a jelenlegi orosz rendszer &#xE9;s az eln&#xF6;k titk&#xE1;t. Nem egyszer&#x171;en egy politikus &#xE9;letrajz&#xE1;t &#xED;rja meg ebben a k&#xF6;nyv&#xE9;ben, hanem t&#xF6;rt&#xE9;nelmi tapasztalatokb&#xF3;l pr&#xF3;b&#xE1;lja felfejteni a l&#xE1;tszatdemokr&#xE1;cia m&#x171;k&#xF6;d&#xE9;s&#xE9;nek logik&#xE1;j&#xE1;t, bemutatni a mindent &#xE1;tsz&#xF6;v&#x151; korrupci&#xF3;t, az elhatalmasod&#xF3; b&#xFC;rokr&#xE1;ci&#xE1;t. Feszegeti azt a k&#xE9;rd&#xE9;st is, hogy vajon a maffiaszer&#x171;en m&#x171;k&#xF6;d&#x151; oligarch&#xE1;k ir&#xE1;ny&#xED;tj&#xE1;k-e t&#xE9;nylegesen Oroszorsz&#xE1;got, illetve azt, hogy mi a c&#xE1;r atyuska szerep&#xE9;t bet&#xF6;lt&#x151; Putyin var&#xE1;zs&#xE1;nak titka.</p> <p><a href="http://konyves.blog.hu/2014/09/08/mindenki_benne_van_anna_arutunyan_putyin-varazs" target="_blank">Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</a></p> <p style="text-align: right;"><strong>Szerz&#x151;:&#xA0;Di&#xF3;szegi-Horv&#xE1;th N&#xF3;ra</strong></p> <p style="text-align: right;">&#xA0;<em><span id="docs-internal-guid-e3e8a6be-02f5-97d0-7f87-82ef17091dcb">A cikk eredetileg a K&#xF6;nyvesMagazin t&#xE9;li sz&#xE1;m&#xE1;ban jelent meg.</span></em></p> <!-- <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:trackback="http://madskills.com/public/xml/rss/module/trackback/"><rdf:Description rdf:about="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:identifier="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:title="5 reg&eacute;ny, amib&#337;l jobban meg&eacute;rthetj&uuml;k Oroszorsz&aacute;got" dc:subject="Trackback" dc:description="Vlagyimir Putyin meglehet&#337;sen sz&#369;kszav&uacute;, ha irodalomr&oacute;l van sz&oacute;, annyit viszont tudni lehet, hogy a t&ouml;rt&eacute;nelem &eacute;s a filoz&oacute;fia kiemelten &eacute;rdekli, f&#337;k&eacute;nt ha olyan orosz kiv&aacute;l&oacute;s&aacute;gok &eacute;letrajz&aacute;r&oacute;l van sz.." dc:creator=".konyvesblog." dc:date="Tue, 20 Jan 2015 09:11:00 +0100" trackback:ping=""></rdf:Description></rdf:RDF> --> <div class="clear"></div>'},
{'id': '6', 'title': '3 regény, amibõl jobban megérthetjük Oroszországot','url': 'http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot','author': '.konyvesblog.','Entry' :'<p dir="ltr"><span>Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan orosz kiv&#xE1;l&#xF3;s&#xE1;gok &#xE9;letrajz&#xE1;r&#xF3;l van sz&#xF3;, mint Rettegett Iv&#xE1;n vagy &#xE9;ppen I. P&#xE9;ter c&#xE1;r. Ha k&#xE9;rdezik, megeml&#xED;ti, hogy a XI. sz&#xE1;zadi perzsa k&#xF6;lt&#x151;, Omar Khajj&#xE1;m l&#xED;r&#xE1;ja k&#xF6;zel &#xE1;ll a sz&#xED;v&#xE9;hez (kedves k&#xF6;tet&#xE9;t egy&#xE9;bk&#xE9;nt volt feles&#xE9;g&#xE9;t&#x151;l kapta), emellett list&#xE1;j&#xE1;n Ernest Hemingway, Jack London &#xE9;s Jules Verne is megfordult m&#xE1;r, hazafias &#xE9;rzelmeit pedig Tolsztoj &#xE9;s Dosztojevszkij sorol&#xE1;s&#xE1;val szokta letudni. Saj&#xE1;t bevall&#xE1;sa szerint kifejezetten &#xE9;lvezte Alexandre Dumas m&#x171;v&#xE9;t, </span><span>A h&#xE1;rom test&#x151;r</span><span>t, de &#xE1;ll&#xED;t&#xF3;lag egyszer, m&#xE9;g 2006-ban l&#xE1;tt&#xE1;k a fiatal &#xED;r&#xF3;, Zahar Prilepin egyik thriller&#xE9;t, a </span><span>Szankj&#xE1;</span><span>t is a kez&#xE9;ben. A hozz&#xE1; k&#xF6;zel &#xE1;ll&#xF3;k szerint viszont az eln&#xF6;k nem kifejezetten a bet&#x171;k szerelmese.</span></p> <p dir="ltr"><span>&#xC9;rdekes egy&#xE9;bk&#xE9;nt, hogy Putyin &#xED;zl&#xE9;se valamelyest lek&#xE9;pezi az orosz t&#xE1;rsadalom irodalmi &#xE9;rdekl&#x151;d&#xE9;s&#xE9;t is &#x2013; l&#xE9;tezik m&#xE1;r egy sz&#xE1;zas lista, amire b&#xE1;rki szavazhat a <a href="http://www.100bestbooks.ru/" target="_blank">100bestbooks.ru</a> oldalon, jelenleg a lista els&#x151; hely&#xE9;n Bulgakov &#xE1;ll &#xE9;s </span><span>A Mester &#xE9;s Margarita</span><span>, a top 10-ben Tolsztoj k&#xE9;tszer, Dosztojevszkij h&#xE1;romszor szerepel, Dumas Putyin &#xE1;ltal is kedvelt m&#x171;ve viszont kicsit lecs&#xFA;szott, az 55. helyen fesz&#xED;t jelenleg. </span></p> <p dir="ltr"><span>Mutatunk &#xF6;t k&#xF6;nyvet, ami val&#xF3;sz&#xED;n&#x171;leg soha nem ker&#xFC;l fel a&#xA0;<span>f&#xE9;nyes homlok&#xFA;&#xA0;</span><span>KGB</span><span>-tiszt kedvenceinek list&#xE1;j&#xE1;ra, de kicsit jobban meg&#xE9;rthet&#x151; bel&#x151;l&#xFC;k, hogy milyen is keleti bar&#xE1;taink &#xE9;lete.&#xA0;</span></span></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_39849_masolata.jpg" alt="covers_39849_masolata.jpg" class="imgleft" width="251" height="391">Vlagyimir Szorokin: Az opricsnyik egy napja</strong></p> <p dir="ltr"><span>2028-ban Oroszorsz&#xE1;gban gy&#x151;z&#xF6;tt a nemzeti eszme, &#xE9;s visszat&#xE9;r Rettegett Iv&#xE1;n modellje. A Nyugati Fal m&#xF6;g&#xF6;tt ism&#xE9;t a c&#xE1;r atyuska az &#xFA;r, minden nyugati szabads&#xE1;gjogot elt&#xF6;r&#xF6;ltek, &#xE9;s m&#x171;k&#xF6;dik az opricsnyina, a mag&#xE1;nhadsereg, amelynek legf&#x151;bb feladata a k&#xF6;ny&#xF6;rtelen b&#xFC;ntet&#xE9;s. A reg&#xE9;ny egy Komjaga nev&#x171; opricsnyik egy napj&#xE1;t mes&#xE9;li el, aki lecsillap&#xED;tva k&#xED;nz&#xF3; m&#xE1;snaposs&#xE1;g&#xE1;t elindul a szok&#xE1;sos napi feny&#xED;t&#x151; k&#xF6;r&#xFA;tj&#xE1;ra. Szorokin sz&#xFC;rre&#xE1;lis, kegyetlen reg&#xE9;nye egy&#xE9;bk&#xE9;nt Szolzsenyicin h&#xED;res l&#xE1;gerreg&#xE9;ny&#xE9;nek, az Ivan Gyenyiszovics egy napj&#xE1;nak a parodisztikus parafr&#xE1;zisa. B&#xE1;r a szerz&#x151; tagadta, hogy Putyin rendszer&#xE9;r&#x151;l &#xED;rta volna m&#x171;v&#xE9;t, az orosz viszonyokat ismerve lehetetlen nem gondolni arra, hogy val&#xF3;j&#xE1;ban a jelenkori Oroszorsz&#xE1;g szat&#xED;r&#xE1;ja ez a reg&#xE9;ny.</span></p> <p dir="ltr"><a href="http://Dmitry%20Glukhovsky A posztapokaliptikus irodalom mindent elt&#xF6;r&#xF6;l" target="_blank"><span>Interj&#xFA;nk Vlagyimir Szorokinnal&gt;&gt;</span></a></p> <p><a id="more7089193" name="more7089193"></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2015/01/12/szorokin_az_orosz_lelek_tomjen_ho_es_ver" target="_blank"><span><br class="kix-line-break"></span></a><strong>Dmitrij Bikov: ZSD &#x2013; avagy ki&#xE9; Oroszorsz&#xE1;g</strong></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_90505_masolata.jpg" alt="covers_90505_masolata.jpg" class="imgright" width="251" height="371"></strong><span>A monument&#xE1;lis, csaknem egykil&#xF3;s, 745 oldalas reg&#xE9;ny szint&#xE9;n a j&#xF6;v&#x151;ben j&#xE1;tsz&#xF3;dik. M&#xE9;ghozz&#xE1; egy olyan vil&#xE1;gban, ahol az orsz&#xE1;g bels&#x151; etnikai fesz&#xFC;lts&#xE9;gei felsz&#xED;nre t&#xF6;rnek, &#xE9;s v&#xE9;res h&#xE1;bor&#xFA; robban ki a var&#xE9;gok &#xE9;s a kaz&#xE1;rok k&#xF6;z&#xF6;tt. A harc m&#xE1;r az elej&#xE9;t&#x151;l fogva &#xE9;rtelmetlen, de t&#xF6;rt&#xE9;nelmi m&#xED;toszok &#xE9;s babon&#xE1;k m&#xE1;r teljesen rabul ejtett&#xE9;k az egym&#xE1;s kiirt&#xE1;s&#xE1;n f&#xE1;radoz&#xF3; feleket, mik&#xF6;zben a t&#xF6;rzs&#xF6;k&#xF6;s lakoss&#xE1;g v&#xE1;rja, hogy a szemben &#xE1;ll&#xF3; &#x151;sellens&#xE9;gek v&#xE9;gre d&#xF6;nt&#xE9;sre vigy&#xE9;k a h&#xE1;bor&#xFA;t. Bikov nem hi&#xE1;ba dolgozott egy &#xE9;vtizeden &#xE1;t a reg&#xE9;nyen, hiszen a ZSD val&#xF3;s&#xE1;gos kultk&#xF6;nyv lett, &#xE9;s minden bizonnyal az egyik legk&#xFC;l&#xF6;nlegesebb &#xE9;s leghumorosabb ut&#xF3;pia az ut&#xF3;bbi &#xE9;vekben, amely minden t&#xFA;lz&#xE1;sa ellen&#xE9;re m&#xE9;gis r&#xE1;mutat arra a t&#xE9;nyre, hogy a jelenkor Oroszorsz&#xE1;g&#xE1;ban milyen puszt&#xED;t&#xF3; erej&#x171; etnikai ellent&#xE9;tek fesz&#xFC;lnek.</span><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/viktor-pelevin-p51.jpg" alt="viktor-pelevin-p51.jpg" class="imgleft open-in-modal" width="251" height="410">Viktor Pelevin: P5 -&#xA0;Pindoszt&#xE1;n politikai pigmeusai</strong></p> <p dir="ltr"><span>Az orosz szt&#xE1;rszerz&#x151; &#xF6;t elbesz&#xE9;l&#xE9;s&#xE9;t egybegy&#x171;jt&#x151; k&#xF6;tet bor&#xED;t&#xF3;j&#xE1;n nem v&#xE9;letlen&#xFC;l &#xE9;keskedik az </span><span>Igaz t&#xF6;rt&#xE9;net alapj&#xE1;n</span><span> felirat. Az elk&#xE9;peszt&#x151; fant&#xE1;zi&#xE1;j&#xFA; Pelevin a </span><span>Pindoszt&#xE1;n politikai pigmeusai &#x2013; P&#xE1;, pederaszt&#xE1;k</span><span> alc&#xED;m&#x171; k&#xF6;nyv&#xE9;ben minden benne van, ami&#xE9;rt az &#xED;r&#xF3;t im&#xE1;dni vagy &#xE9;ppen ut&#xE1;lni lehet: a csavaros, groteszk t&#xF6;rt&#xE9;netek sz&#xED;nhelye minden v&#xE1;ratlan &#xE9;s hihetetlen fordulat ellen&#xE9;re a jelenkori Oroszorsz&#xE1;g. Az oligarch&#xE1;k uralta vil&#xE1;gban nemcsak a hatalom, de a bulv&#xE1;rm&#xE9;dia &#xE9;s annak kritika n&#xE9;lk&#xFC;li fogyaszt&#xF3;i is pelleng&#xE9;re &#xE1;ll&#xED;ttatnak. Mindehhez persze n&#xE9;lk&#xFC;l&#xF6;zhetetlen a Pelevinre mindig is jellemz&#x151; cybervil&#xE1;g, no &#xE9;s n&#xE9;mi keleti filoz&#xF3;fia.</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2010/09/07/pelevin_p5" target="_blank"><span><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></span></a></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/859607_5_masolata.jpg" alt="859607_5_masolata.jpg" class="imgright" width="250" height="370">Dmitry Glukhovsky: Orosz n&#xE9;pellenes mes&#xE9;k</strong><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><span>Miut&#xE1;n az orosz fantasztikus irodalom egyik legn&#xE9;pszer&#x171;bb szerz&#x151;je diszkr&#xE9;ten visszautas&#xED;totta a felk&#xE9;r&#xE9;st, hogy vegye &#xE1;t Nyikita Mihalkov hely&#xE9;t Putyin tan&#xE1;csad&#xF3; bizotts&#xE1;g&#xE1;ban, gyorsan tett r&#xF3;la, hogy a hatalomnak m&#xE9;g egyszer esz&#xE9;be se jusson a neve, ha loj&#xE1;lis &#xE9;rtelmis&#xE9;git keresnek. Ezzel a k&#xF6;tettel Glukhovsky sikeresen bizony&#xED;tja, hogy nemcsak a sci-fi m&#x171;faj&#xE1;ban k&#xE9;pes nagyot alkotni. A n&#xE9;pellenes mes&#xE9;kben pontosan mutatja be a korrupci&#xF3;val &#xE1;tsz&#x151;tt orosz mindennapokat. Az &#xE1;llami szint&#x171; n&#xE9;pbut&#xED;t&#xE1;st, a tekint&#xE9;lyelv&#x171;s&#xE9;g elfogad&#xE1;s&#xE1;t le&#xED;r&#xF3; t&#xF6;rt&#xE9;netekb&#x151;l term&#xE9;szetesen nem hi&#xE1;nyozhatnak az&#xE9;rt a szerz&#x151;re jellemz&#x151; fantasztikus elemek sem, de mindezek t&#xF6;k&#xE9;letesen illeszkednek a nagyon is hihet&#x151; elbesz&#xE9;l&#xE9;sek cselekm&#xE9;ny&#xE9;be.&#xA0;</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_nepellenes_mesek" target="_blank"><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_647" target="_blank"><span>Interj&#xFA;nk&#xA0;Dmitry Glukhovskyval&gt;&gt;</span></a></p> <p><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/735666f_masolata.gif" alt="735666f_masolata.gif" class="imgleft" width="249" height="351">Anna Arutunyan: A Putyin-var&#xE1;zs</strong></p> <p>Az orosz-amerikai &#xFA;js&#xE1;g&#xED;r&#xF3; hossz&#xFA; ideje igyekszik meg&#xE9;rteni a jelenlegi orosz rendszer &#xE9;s az eln&#xF6;k titk&#xE1;t. Nem egyszer&#x171;en egy politikus &#xE9;letrajz&#xE1;t &#xED;rja meg ebben a k&#xF6;nyv&#xE9;ben, hanem t&#xF6;rt&#xE9;nelmi tapasztalatokb&#xF3;l pr&#xF3;b&#xE1;lja felfejteni a l&#xE1;tszatdemokr&#xE1;cia m&#x171;k&#xF6;d&#xE9;s&#xE9;nek logik&#xE1;j&#xE1;t, bemutatni a mindent &#xE1;tsz&#xF6;v&#x151; korrupci&#xF3;t, az elhatalmasod&#xF3; b&#xFC;rokr&#xE1;ci&#xE1;t. Feszegeti azt a k&#xE9;rd&#xE9;st is, hogy vajon a maffiaszer&#x171;en m&#x171;k&#xF6;d&#x151; oligarch&#xE1;k ir&#xE1;ny&#xED;tj&#xE1;k-e t&#xE9;nylegesen Oroszorsz&#xE1;got, illetve azt, hogy mi a c&#xE1;r atyuska szerep&#xE9;t bet&#xF6;lt&#x151; Putyin var&#xE1;zs&#xE1;nak titka.</p> <p><a href="http://konyves.blog.hu/2014/09/08/mindenki_benne_van_anna_arutunyan_putyin-varazs" target="_blank">Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</a></p> <p style="text-align: right;"><strong>Szerz&#x151;:&#xA0;Di&#xF3;szegi-Horv&#xE1;th N&#xF3;ra</strong></p> <p style="text-align: right;">&#xA0;<em><span id="docs-internal-guid-e3e8a6be-02f5-97d0-7f87-82ef17091dcb">A cikk eredetileg a K&#xF6;nyvesMagazin t&#xE9;li sz&#xE1;m&#xE1;ban jelent meg.</span></em></p> <!-- <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:trackback="http://madskills.com/public/xml/rss/module/trackback/"><rdf:Description rdf:about="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:identifier="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:title="5 reg&eacute;ny, amib&#337;l jobban meg&eacute;rthetj&uuml;k Oroszorsz&aacute;got" dc:subject="Trackback" dc:description="Vlagyimir Putyin meglehet&#337;sen sz&#369;kszav&uacute;, ha irodalomr&oacute;l van sz&oacute;, annyit viszont tudni lehet, hogy a t&ouml;rt&eacute;nelem &eacute;s a filoz&oacute;fia kiemelten &eacute;rdekli, f&#337;k&eacute;nt ha olyan orosz kiv&aacute;l&oacute;s&aacute;gok &eacute;letrajz&aacute;r&oacute;l van sz.." dc:creator=".konyvesblog." dc:date="Tue, 20 Jan 2015 09:11:00 +0100" trackback:ping=""></rdf:Description></rdf:RDF> --> <div class="clear"></div>'},  
{'id': '7', 'title': '1 regény, amibõl jobban megérthetjük Oroszországot','url': 'http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot','author': '.konyvesblog.','Entry' :'<p dir="ltr"><span>Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan orosz kiv&#xE1;l&#xF3;s&#xE1;gok &#xE9;letrajz&#xE1;r&#xF3;l van sz&#xF3;, mint Rettegett Iv&#xE1;n vagy &#xE9;ppen I. P&#xE9;ter c&#xE1;r. Ha k&#xE9;rdezik, megeml&#xED;ti, hogy a XI. sz&#xE1;zadi perzsa k&#xF6;lt&#x151;, Omar Khajj&#xE1;m l&#xED;r&#xE1;ja k&#xF6;zel &#xE1;ll a sz&#xED;v&#xE9;hez (kedves k&#xF6;tet&#xE9;t egy&#xE9;bk&#xE9;nt volt feles&#xE9;g&#xE9;t&#x151;l kapta), emellett list&#xE1;j&#xE1;n Ernest Hemingway, Jack London &#xE9;s Jules Verne is megfordult m&#xE1;r, hazafias &#xE9;rzelmeit pedig Tolsztoj &#xE9;s Dosztojevszkij sorol&#xE1;s&#xE1;val szokta letudni. Saj&#xE1;t bevall&#xE1;sa szerint kifejezetten &#xE9;lvezte Alexandre Dumas m&#x171;v&#xE9;t, </span><span>A h&#xE1;rom test&#x151;r</span><span>t, de &#xE1;ll&#xED;t&#xF3;lag egyszer, m&#xE9;g 2006-ban l&#xE1;tt&#xE1;k a fiatal &#xED;r&#xF3;, Zahar Prilepin egyik thriller&#xE9;t, a </span><span>Szankj&#xE1;</span><span>t is a kez&#xE9;ben. A hozz&#xE1; k&#xF6;zel &#xE1;ll&#xF3;k szerint viszont az eln&#xF6;k nem kifejezetten a bet&#x171;k szerelmese.</span></p> <p dir="ltr"><span>&#xC9;rdekes egy&#xE9;bk&#xE9;nt, hogy Putyin &#xED;zl&#xE9;se valamelyest lek&#xE9;pezi az orosz t&#xE1;rsadalom irodalmi &#xE9;rdekl&#x151;d&#xE9;s&#xE9;t is &#x2013; l&#xE9;tezik m&#xE1;r egy sz&#xE1;zas lista, amire b&#xE1;rki szavazhat a <a href="http://www.100bestbooks.ru/" target="_blank">100bestbooks.ru</a> oldalon, jelenleg a lista els&#x151; hely&#xE9;n Bulgakov &#xE1;ll &#xE9;s </span><span>A Mester &#xE9;s Margarita</span><span>, a top 10-ben Tolsztoj k&#xE9;tszer, Dosztojevszkij h&#xE1;romszor szerepel, Dumas Putyin &#xE1;ltal is kedvelt m&#x171;ve viszont kicsit lecs&#xFA;szott, az 55. helyen fesz&#xED;t jelenleg. </span></p> <p dir="ltr"><span>Mutatunk &#xF6;t k&#xF6;nyvet, ami val&#xF3;sz&#xED;n&#x171;leg soha nem ker&#xFC;l fel a&#xA0;<span>f&#xE9;nyes homlok&#xFA;&#xA0;</span><span>KGB</span><span>-tiszt kedvenceinek list&#xE1;j&#xE1;ra, de kicsit jobban meg&#xE9;rthet&#x151; bel&#x151;l&#xFC;k, hogy milyen is keleti bar&#xE1;taink &#xE9;lete.&#xA0;</span></span></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_39849_masolata.jpg" alt="covers_39849_masolata.jpg" class="imgleft" width="251" height="391">Vlagyimir Szorokin: Az opricsnyik egy napja</strong></p> <p dir="ltr"><span>2028-ban Oroszorsz&#xE1;gban gy&#x151;z&#xF6;tt a nemzeti eszme, &#xE9;s visszat&#xE9;r Rettegett Iv&#xE1;n modellje. A Nyugati Fal m&#xF6;g&#xF6;tt ism&#xE9;t a c&#xE1;r atyuska az &#xFA;r, minden nyugati szabads&#xE1;gjogot elt&#xF6;r&#xF6;ltek, &#xE9;s m&#x171;k&#xF6;dik az opricsnyina, a mag&#xE1;nhadsereg, amelynek legf&#x151;bb feladata a k&#xF6;ny&#xF6;rtelen b&#xFC;ntet&#xE9;s. A reg&#xE9;ny egy Komjaga nev&#x171; opricsnyik egy napj&#xE1;t mes&#xE9;li el, aki lecsillap&#xED;tva k&#xED;nz&#xF3; m&#xE1;snaposs&#xE1;g&#xE1;t elindul a szok&#xE1;sos napi feny&#xED;t&#x151; k&#xF6;r&#xFA;tj&#xE1;ra. Szorokin sz&#xFC;rre&#xE1;lis, kegyetlen reg&#xE9;nye egy&#xE9;bk&#xE9;nt Szolzsenyicin h&#xED;res l&#xE1;gerreg&#xE9;ny&#xE9;nek, az Ivan Gyenyiszovics egy napj&#xE1;nak a parodisztikus parafr&#xE1;zisa. B&#xE1;r a szerz&#x151; tagadta, hogy Putyin rendszer&#xE9;r&#x151;l &#xED;rta volna m&#x171;v&#xE9;t, az orosz viszonyokat ismerve lehetetlen nem gondolni arra, hogy val&#xF3;j&#xE1;ban a jelenkori Oroszorsz&#xE1;g szat&#xED;r&#xE1;ja ez a reg&#xE9;ny.</span></p> <p dir="ltr"><a href="http://Dmitry%20Glukhovsky A posztapokaliptikus irodalom mindent elt&#xF6;r&#xF6;l" target="_blank"><span>Interj&#xFA;nk Vlagyimir Szorokinnal&gt;&gt;</span></a></p> <p><a id="more7089193" name="more7089193"></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2015/01/12/szorokin_az_orosz_lelek_tomjen_ho_es_ver" target="_blank"><span><br class="kix-line-break"></span></a><strong>Dmitrij Bikov: ZSD &#x2013; avagy ki&#xE9; Oroszorsz&#xE1;g</strong></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_90505_masolata.jpg" alt="covers_90505_masolata.jpg" class="imgright" width="251" height="371"></strong><span>A monument&#xE1;lis, csaknem egykil&#xF3;s, 745 oldalas reg&#xE9;ny szint&#xE9;n a j&#xF6;v&#x151;ben j&#xE1;tsz&#xF3;dik. M&#xE9;ghozz&#xE1; egy olyan vil&#xE1;gban, ahol az orsz&#xE1;g bels&#x151; etnikai fesz&#xFC;lts&#xE9;gei felsz&#xED;nre t&#xF6;rnek, &#xE9;s v&#xE9;res h&#xE1;bor&#xFA; robban ki a var&#xE9;gok &#xE9;s a kaz&#xE1;rok k&#xF6;z&#xF6;tt. A harc m&#xE1;r az elej&#xE9;t&#x151;l fogva &#xE9;rtelmetlen, de t&#xF6;rt&#xE9;nelmi m&#xED;toszok &#xE9;s babon&#xE1;k m&#xE1;r teljesen rabul ejtett&#xE9;k az egym&#xE1;s kiirt&#xE1;s&#xE1;n f&#xE1;radoz&#xF3; feleket, mik&#xF6;zben a t&#xF6;rzs&#xF6;k&#xF6;s lakoss&#xE1;g v&#xE1;rja, hogy a szemben &#xE1;ll&#xF3; &#x151;sellens&#xE9;gek v&#xE9;gre d&#xF6;nt&#xE9;sre vigy&#xE9;k a h&#xE1;bor&#xFA;t. Bikov nem hi&#xE1;ba dolgozott egy &#xE9;vtizeden &#xE1;t a reg&#xE9;nyen, hiszen a ZSD val&#xF3;s&#xE1;gos kultk&#xF6;nyv lett, &#xE9;s minden bizonnyal az egyik legk&#xFC;l&#xF6;nlegesebb &#xE9;s leghumorosabb ut&#xF3;pia az ut&#xF3;bbi &#xE9;vekben, amely minden t&#xFA;lz&#xE1;sa ellen&#xE9;re m&#xE9;gis r&#xE1;mutat arra a t&#xE9;nyre, hogy a jelenkor Oroszorsz&#xE1;g&#xE1;ban milyen puszt&#xED;t&#xF3; erej&#x171; etnikai ellent&#xE9;tek fesz&#xFC;lnek.</span><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/viktor-pelevin-p51.jpg" alt="viktor-pelevin-p51.jpg" class="imgleft open-in-modal" width="251" height="410">Viktor Pelevin: P5 -&#xA0;Pindoszt&#xE1;n politikai pigmeusai</strong></p> <p dir="ltr"><span>Az orosz szt&#xE1;rszerz&#x151; &#xF6;t elbesz&#xE9;l&#xE9;s&#xE9;t egybegy&#x171;jt&#x151; k&#xF6;tet bor&#xED;t&#xF3;j&#xE1;n nem v&#xE9;letlen&#xFC;l &#xE9;keskedik az </span><span>Igaz t&#xF6;rt&#xE9;net alapj&#xE1;n</span><span> felirat. Az elk&#xE9;peszt&#x151; fant&#xE1;zi&#xE1;j&#xFA; Pelevin a </span><span>Pindoszt&#xE1;n politikai pigmeusai &#x2013; P&#xE1;, pederaszt&#xE1;k</span><span> alc&#xED;m&#x171; k&#xF6;nyv&#xE9;ben minden benne van, ami&#xE9;rt az &#xED;r&#xF3;t im&#xE1;dni vagy &#xE9;ppen ut&#xE1;lni lehet: a csavaros, groteszk t&#xF6;rt&#xE9;netek sz&#xED;nhelye minden v&#xE1;ratlan &#xE9;s hihetetlen fordulat ellen&#xE9;re a jelenkori Oroszorsz&#xE1;g. Az oligarch&#xE1;k uralta vil&#xE1;gban nemcsak a hatalom, de a bulv&#xE1;rm&#xE9;dia &#xE9;s annak kritika n&#xE9;lk&#xFC;li fogyaszt&#xF3;i is pelleng&#xE9;re &#xE1;ll&#xED;ttatnak. Mindehhez persze n&#xE9;lk&#xFC;l&#xF6;zhetetlen a Pelevinre mindig is jellemz&#x151; cybervil&#xE1;g, no &#xE9;s n&#xE9;mi keleti filoz&#xF3;fia.</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2010/09/07/pelevin_p5" target="_blank"><span><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></span></a></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/859607_5_masolata.jpg" alt="859607_5_masolata.jpg" class="imgright" width="250" height="370">Dmitry Glukhovsky: Orosz n&#xE9;pellenes mes&#xE9;k</strong><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><span>Miut&#xE1;n az orosz fantasztikus irodalom egyik legn&#xE9;pszer&#x171;bb szerz&#x151;je diszkr&#xE9;ten visszautas&#xED;totta a felk&#xE9;r&#xE9;st, hogy vegye &#xE1;t Nyikita Mihalkov hely&#xE9;t Putyin tan&#xE1;csad&#xF3; bizotts&#xE1;g&#xE1;ban, gyorsan tett r&#xF3;la, hogy a hatalomnak m&#xE9;g egyszer esz&#xE9;be se jusson a neve, ha loj&#xE1;lis &#xE9;rtelmis&#xE9;git keresnek. Ezzel a k&#xF6;tettel Glukhovsky sikeresen bizony&#xED;tja, hogy nemcsak a sci-fi m&#x171;faj&#xE1;ban k&#xE9;pes nagyot alkotni. A n&#xE9;pellenes mes&#xE9;kben pontosan mutatja be a korrupci&#xF3;val &#xE1;tsz&#x151;tt orosz mindennapokat. Az &#xE1;llami szint&#x171; n&#xE9;pbut&#xED;t&#xE1;st, a tekint&#xE9;lyelv&#x171;s&#xE9;g elfogad&#xE1;s&#xE1;t le&#xED;r&#xF3; t&#xF6;rt&#xE9;netekb&#x151;l term&#xE9;szetesen nem hi&#xE1;nyozhatnak az&#xE9;rt a szerz&#x151;re jellemz&#x151; fantasztikus elemek sem, de mindezek t&#xF6;k&#xE9;letesen illeszkednek a nagyon is hihet&#x151; elbesz&#xE9;l&#xE9;sek cselekm&#xE9;ny&#xE9;be.&#xA0;</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_nepellenes_mesek" target="_blank"><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_647" target="_blank"><span>Interj&#xFA;nk&#xA0;Dmitry Glukhovskyval&gt;&gt;</span></a></p> <p><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/735666f_masolata.gif" alt="735666f_masolata.gif" class="imgleft" width="249" height="351">Anna Arutunyan: A Putyin-var&#xE1;zs</strong></p> <p>Az orosz-amerikai &#xFA;js&#xE1;g&#xED;r&#xF3; hossz&#xFA; ideje igyekszik meg&#xE9;rteni a jelenlegi orosz rendszer &#xE9;s az eln&#xF6;k titk&#xE1;t. Nem egyszer&#x171;en egy politikus &#xE9;letrajz&#xE1;t &#xED;rja meg ebben a k&#xF6;nyv&#xE9;ben, hanem t&#xF6;rt&#xE9;nelmi tapasztalatokb&#xF3;l pr&#xF3;b&#xE1;lja felfejteni a l&#xE1;tszatdemokr&#xE1;cia m&#x171;k&#xF6;d&#xE9;s&#xE9;nek logik&#xE1;j&#xE1;t, bemutatni a mindent &#xE1;tsz&#xF6;v&#x151; korrupci&#xF3;t, az elhatalmasod&#xF3; b&#xFC;rokr&#xE1;ci&#xE1;t. Feszegeti azt a k&#xE9;rd&#xE9;st is, hogy vajon a maffiaszer&#x171;en m&#x171;k&#xF6;d&#x151; oligarch&#xE1;k ir&#xE1;ny&#xED;tj&#xE1;k-e t&#xE9;nylegesen Oroszorsz&#xE1;got, illetve azt, hogy mi a c&#xE1;r atyuska szerep&#xE9;t bet&#xF6;lt&#x151; Putyin var&#xE1;zs&#xE1;nak titka.</p> <p><a href="http://konyves.blog.hu/2014/09/08/mindenki_benne_van_anna_arutunyan_putyin-varazs" target="_blank">Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</a></p> <p style="text-align: right;"><strong>Szerz&#x151;:&#xA0;Di&#xF3;szegi-Horv&#xE1;th N&#xF3;ra</strong></p> <p style="text-align: right;">&#xA0;<em><span id="docs-internal-guid-e3e8a6be-02f5-97d0-7f87-82ef17091dcb">A cikk eredetileg a K&#xF6;nyvesMagazin t&#xE9;li sz&#xE1;m&#xE1;ban jelent meg.</span></em></p> <!-- <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:trackback="http://madskills.com/public/xml/rss/module/trackback/"><rdf:Description rdf:about="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:identifier="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:title="5 reg&eacute;ny, amib&#337;l jobban meg&eacute;rthetj&uuml;k Oroszorsz&aacute;got" dc:subject="Trackback" dc:description="Vlagyimir Putyin meglehet&#337;sen sz&#369;kszav&uacute;, ha irodalomr&oacute;l van sz&oacute;, annyit viszont tudni lehet, hogy a t&ouml;rt&eacute;nelem &eacute;s a filoz&oacute;fia kiemelten &eacute;rdekli, f&#337;k&eacute;nt ha olyan orosz kiv&aacute;l&oacute;s&aacute;gok &eacute;letrajz&aacute;r&oacute;l van sz.." dc:creator=".konyvesblog." dc:date="Tue, 20 Jan 2015 09:11:00 +0100" trackback:ping=""></rdf:Description></rdf:RDF> --> <div class="clear"></div>'}
]


 $scope.cimek =[
{'id': '1',  'author': '.konyvesblog.', 'date': '2014-12-12', 'lead': '1 Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan o', 'title': '1 regény, amibõl jobban megérthetjük Oroszországot'},
{'id': '2',  'author': '.konyvesblog.', 'date': '2014-12-12', 'lead': '2 Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan o', 'title': '2 regény, amibõl jobban megérthetjük Oroszországot'},
{'id': '3',  'author': '.konyvesblog.', 'date': '2014-12-12', 'lead': '3 Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan o', 'title': '3 regény, amibõl jobban megérthetjük Oroszországot'},
{'id': '4',  'author': '.konyvesblog.', 'date': '2014-12-12', 'lead': '4 Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan o', 'title': '4 regény, amibõl jobban megérthetjük Oroszországot'},
{'id': '5',  'author': '.konyvesblog.', 'date': '2014-12-12', 'lead': '5 Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan o', 'title': '5 regény, amibõl jobban megérthetjük Oroszországot'},
{'id': '6',  'author': '.konyvesblog.', 'date': '2014-12-12', 'lead': '6 Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan o', 'title': '6 regény, amibõl jobban megérthetjük Oroszországot'},
{'id': '7',  'author': '.konyvesblog.', 'date': '2014-12-12', 'lead': '7 Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan o', 'title': '7 regény, amibõl jobban megérthetjük Oroszországot'}
]

}]);




*/
/*  kblog 2 ng-if 

<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example - example-example61-production</title>
  <script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-sanitize.js"></script>
 
  <script src="/js/script.js"></script>
    
</head>
<body ng-app="offBlog">
  
  
  <div ng-controller="listCtrl">
	<ul ng-if="showDetails" >	
		<li ng-repeat="x in titles">
			<!-- <h3 ng-bind-html="x.id"></h3>  -->
			<button ng-click="getDetails(x.id)">{{x.id}}</button>			
			<p  ng-bind-html="x.title"></p>
			<p ng-bind-html="x.lead"></p>
		</li>	
	</ul> 
	<span ng-bind-html="detail.entry"></span> 
  </div>
	

</body>
</html>


script.js

angular.module('offBlog', ['ngSanitize'])
.controller('listCtrl', ['$scope', function($scope) {
  $scope.showDetails=true;
  $scope.articles =[
{'id': 1, 'title': '1 regény, amibõl jobban megérthetjük Oroszországot','url': 'http://konyves.blog.hu/2015/01/20/1_regeny_amibol_jobban_megerthetjuk_oroszorszagot','author': '.konyvesblog.','entry' :'<p dir="ltr"><span> 1 Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan orosz kiv&#xE1;l&#xF3;s&#xE1;gok &#xE9;letrajz&#xE1;r&#xF3;l van sz&#xF3;, mint Rettegett Iv&#xE1;n vagy &#xE9;ppen I. P&#xE9;ter c&#xE1;r. Ha k&#xE9;rdezik, megeml&#xED;ti, hogy a XI. sz&#xE1;zadi perzsa k&#xF6;lt&#x151;, Omar Khajj&#xE1;m l&#xED;r&#xE1;ja k&#xF6;zel &#xE1;ll a sz&#xED;v&#xE9;hez (kedves k&#xF6;tet&#xE9;t egy&#xE9;bk&#xE9;nt volt feles&#xE9;g&#xE9;t&#x151;l kapta), emellett list&#xE1;j&#xE1;n Ernest Hemingway, Jack London &#xE9;s Jules Verne is megfordult m&#xE1;r, hazafias &#xE9;rzelmeit pedig Tolsztoj &#xE9;s Dosztojevszkij sorol&#xE1;s&#xE1;val szokta letudni. Saj&#xE1;t bevall&#xE1;sa szerint kifejezetten &#xE9;lvezte Alexandre Dumas m&#x171;v&#xE9;t, </span><span>A h&#xE1;rom test&#x151;r</span><span>t, de &#xE1;ll&#xED;t&#xF3;lag egyszer, m&#xE9;g 2006-ban l&#xE1;tt&#xE1;k a fiatal &#xED;r&#xF3;, Zahar Prilepin egyik thriller&#xE9;t, a </span><span>Szankj&#xE1;</span><span>t is a kez&#xE9;ben. A hozz&#xE1; k&#xF6;zel &#xE1;ll&#xF3;k szerint viszont az eln&#xF6;k nem kifejezetten a bet&#x171;k szerelmese.</span></p> <p dir="ltr"><span>&#xC9;rdekes egy&#xE9;bk&#xE9;nt, hogy Putyin &#xED;zl&#xE9;se valamelyest lek&#xE9;pezi az orosz t&#xE1;rsadalom irodalmi &#xE9;rdekl&#x151;d&#xE9;s&#xE9;t is &#x2013; l&#xE9;tezik m&#xE1;r egy sz&#xE1;zas lista, amire b&#xE1;rki szavazhat a <a href="http://www.100bestbooks.ru/" target="_blank">100bestbooks.ru</a> oldalon, jelenleg a lista els&#x151; hely&#xE9;n Bulgakov &#xE1;ll &#xE9;s </span><span>A Mester &#xE9;s Margarita</span><span>, a top 10-ben Tolsztoj k&#xE9;tszer, Dosztojevszkij h&#xE1;romszor szerepel, Dumas Putyin &#xE1;ltal is kedvelt m&#x171;ve viszont kicsit lecs&#xFA;szott, az 55. helyen fesz&#xED;t jelenleg. </span></p> <p dir="ltr"><span>Mutatunk &#xF6;t k&#xF6;nyvet, ami val&#xF3;sz&#xED;n&#x171;leg soha nem ker&#xFC;l fel a&#xA0;<span>f&#xE9;nyes homlok&#xFA;&#xA0;</span><span>KGB</span><span>-tiszt kedvenceinek list&#xE1;j&#xE1;ra, de kicsit jobban meg&#xE9;rthet&#x151; bel&#x151;l&#xFC;k, hogy milyen is keleti bar&#xE1;taink &#xE9;lete.&#xA0;</span></span></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_39849_masolata.jpg" alt="covers_39849_masolata.jpg" class="imgleft" width="251" height="391">Vlagyimir Szorokin: Az opricsnyik egy napja</strong></p> <p dir="ltr"><span>2028-ban Oroszorsz&#xE1;gban gy&#x151;z&#xF6;tt a nemzeti eszme, &#xE9;s visszat&#xE9;r Rettegett Iv&#xE1;n modellje. A Nyugati Fal m&#xF6;g&#xF6;tt ism&#xE9;t a c&#xE1;r atyuska az &#xFA;r, minden nyugati szabads&#xE1;gjogot elt&#xF6;r&#xF6;ltek, &#xE9;s m&#x171;k&#xF6;dik az opricsnyina, a mag&#xE1;nhadsereg, amelynek legf&#x151;bb feladata a k&#xF6;ny&#xF6;rtelen b&#xFC;ntet&#xE9;s. A reg&#xE9;ny egy Komjaga nev&#x171; opricsnyik egy napj&#xE1;t mes&#xE9;li el, aki lecsillap&#xED;tva k&#xED;nz&#xF3; m&#xE1;snaposs&#xE1;g&#xE1;t elindul a szok&#xE1;sos napi feny&#xED;t&#x151; k&#xF6;r&#xFA;tj&#xE1;ra. Szorokin sz&#xFC;rre&#xE1;lis, kegyetlen reg&#xE9;nye egy&#xE9;bk&#xE9;nt Szolzsenyicin h&#xED;res l&#xE1;gerreg&#xE9;ny&#xE9;nek, az Ivan Gyenyiszovics egy napj&#xE1;nak a parodisztikus parafr&#xE1;zisa. B&#xE1;r a szerz&#x151; tagadta, hogy Putyin rendszer&#xE9;r&#x151;l &#xED;rta volna m&#x171;v&#xE9;t, az orosz viszonyokat ismerve lehetetlen nem gondolni arra, hogy val&#xF3;j&#xE1;ban a jelenkori Oroszorsz&#xE1;g szat&#xED;r&#xE1;ja ez a reg&#xE9;ny.</span></p> <p dir="ltr"><a href="http://Dmitry%20Glukhovsky A posztapokaliptikus irodalom mindent elt&#xF6;r&#xF6;l" target="_blank"><span>Interj&#xFA;nk Vlagyimir Szorokinnal&gt;&gt;</span></a></p> <p><a id="more7089193" name="more7089193"></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2015/01/12/szorokin_az_orosz_lelek_tomjen_ho_es_ver" target="_blank"><span><br class="kix-line-break"></span></a><strong>Dmitrij Bikov: ZSD &#x2013; avagy ki&#xE9; Oroszorsz&#xE1;g</strong></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_90505_masolata.jpg" alt="covers_90505_masolata.jpg" class="imgright" width="251" height="371"></strong><span>A monument&#xE1;lis, csaknem egykil&#xF3;s, 745 oldalas reg&#xE9;ny szint&#xE9;n a j&#xF6;v&#x151;ben j&#xE1;tsz&#xF3;dik. M&#xE9;ghozz&#xE1; egy olyan vil&#xE1;gban, ahol az orsz&#xE1;g bels&#x151; etnikai fesz&#xFC;lts&#xE9;gei felsz&#xED;nre t&#xF6;rnek, &#xE9;s v&#xE9;res h&#xE1;bor&#xFA; robban ki a var&#xE9;gok &#xE9;s a kaz&#xE1;rok k&#xF6;z&#xF6;tt. A harc m&#xE1;r az elej&#xE9;t&#x151;l fogva &#xE9;rtelmetlen, de t&#xF6;rt&#xE9;nelmi m&#xED;toszok &#xE9;s babon&#xE1;k m&#xE1;r teljesen rabul ejtett&#xE9;k az egym&#xE1;s kiirt&#xE1;s&#xE1;n f&#xE1;radoz&#xF3; feleket, mik&#xF6;zben a t&#xF6;rzs&#xF6;k&#xF6;s lakoss&#xE1;g v&#xE1;rja, hogy a szemben &#xE1;ll&#xF3; &#x151;sellens&#xE9;gek v&#xE9;gre d&#xF6;nt&#xE9;sre vigy&#xE9;k a h&#xE1;bor&#xFA;t. Bikov nem hi&#xE1;ba dolgozott egy &#xE9;vtizeden &#xE1;t a reg&#xE9;nyen, hiszen a ZSD val&#xF3;s&#xE1;gos kultk&#xF6;nyv lett, &#xE9;s minden bizonnyal az egyik legk&#xFC;l&#xF6;nlegesebb &#xE9;s leghumorosabb ut&#xF3;pia az ut&#xF3;bbi &#xE9;vekben, amely minden t&#xFA;lz&#xE1;sa ellen&#xE9;re m&#xE9;gis r&#xE1;mutat arra a t&#xE9;nyre, hogy a jelenkor Oroszorsz&#xE1;g&#xE1;ban milyen puszt&#xED;t&#xF3; erej&#x171; etnikai ellent&#xE9;tek fesz&#xFC;lnek.</span><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/viktor-pelevin-p51.jpg" alt="viktor-pelevin-p51.jpg" class="imgleft open-in-modal" width="251" height="410">Viktor Pelevin: P5 -&#xA0;Pindoszt&#xE1;n politikai pigmeusai</strong></p> <p dir="ltr"><span>Az orosz szt&#xE1;rszerz&#x151; &#xF6;t elbesz&#xE9;l&#xE9;s&#xE9;t egybegy&#x171;jt&#x151; k&#xF6;tet bor&#xED;t&#xF3;j&#xE1;n nem v&#xE9;letlen&#xFC;l &#xE9;keskedik az </span><span>Igaz t&#xF6;rt&#xE9;net alapj&#xE1;n</span><span> felirat. Az elk&#xE9;peszt&#x151; fant&#xE1;zi&#xE1;j&#xFA; Pelevin a </span><span>Pindoszt&#xE1;n politikai pigmeusai &#x2013; P&#xE1;, pederaszt&#xE1;k</span><span> alc&#xED;m&#x171; k&#xF6;nyv&#xE9;ben minden benne van, ami&#xE9;rt az &#xED;r&#xF3;t im&#xE1;dni vagy &#xE9;ppen ut&#xE1;lni lehet: a csavaros, groteszk t&#xF6;rt&#xE9;netek sz&#xED;nhelye minden v&#xE1;ratlan &#xE9;s hihetetlen fordulat ellen&#xE9;re a jelenkori Oroszorsz&#xE1;g. Az oligarch&#xE1;k uralta vil&#xE1;gban nemcsak a hatalom, de a bulv&#xE1;rm&#xE9;dia &#xE9;s annak kritika n&#xE9;lk&#xFC;li fogyaszt&#xF3;i is pelleng&#xE9;re &#xE1;ll&#xED;ttatnak. Mindehhez persze n&#xE9;lk&#xFC;l&#xF6;zhetetlen a Pelevinre mindig is jellemz&#x151; cybervil&#xE1;g, no &#xE9;s n&#xE9;mi keleti filoz&#xF3;fia.</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2010/09/07/pelevin_p5" target="_blank"><span><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></span></a></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/859607_5_masolata.jpg" alt="859607_5_masolata.jpg" class="imgright" width="250" height="370">Dmitry Glukhovsky: Orosz n&#xE9;pellenes mes&#xE9;k</strong><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><span>Miut&#xE1;n az orosz fantasztikus irodalom egyik legn&#xE9;pszer&#x171;bb szerz&#x151;je diszkr&#xE9;ten visszautas&#xED;totta a felk&#xE9;r&#xE9;st, hogy vegye &#xE1;t Nyikita Mihalkov hely&#xE9;t Putyin tan&#xE1;csad&#xF3; bizotts&#xE1;g&#xE1;ban, gyorsan tett r&#xF3;la, hogy a hatalomnak m&#xE9;g egyszer esz&#xE9;be se jusson a neve, ha loj&#xE1;lis &#xE9;rtelmis&#xE9;git keresnek. Ezzel a k&#xF6;tettel Glukhovsky sikeresen bizony&#xED;tja, hogy nemcsak a sci-fi m&#x171;faj&#xE1;ban k&#xE9;pes nagyot alkotni. A n&#xE9;pellenes mes&#xE9;kben pontosan mutatja be a korrupci&#xF3;val &#xE1;tsz&#x151;tt orosz mindennapokat. Az &#xE1;llami szint&#x171; n&#xE9;pbut&#xED;t&#xE1;st, a tekint&#xE9;lyelv&#x171;s&#xE9;g elfogad&#xE1;s&#xE1;t le&#xED;r&#xF3; t&#xF6;rt&#xE9;netekb&#x151;l term&#xE9;szetesen nem hi&#xE1;nyozhatnak az&#xE9;rt a szerz&#x151;re jellemz&#x151; fantasztikus elemek sem, de mindezek t&#xF6;k&#xE9;letesen illeszkednek a nagyon is hihet&#x151; elbesz&#xE9;l&#xE9;sek cselekm&#xE9;ny&#xE9;be.&#xA0;</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_nepellenes_mesek" target="_blank"><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_647" target="_blank"><span>Interj&#xFA;nk&#xA0;Dmitry Glukhovskyval&gt;&gt;</span></a></p> <p><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/735666f_masolata.gif" alt="735666f_masolata.gif" class="imgleft" width="249" height="351">Anna Arutunyan: A Putyin-var&#xE1;zs</strong></p> <p>Az orosz-amerikai &#xFA;js&#xE1;g&#xED;r&#xF3; hossz&#xFA; ideje igyekszik meg&#xE9;rteni a jelenlegi orosz rendszer &#xE9;s az eln&#xF6;k titk&#xE1;t. Nem egyszer&#x171;en egy politikus &#xE9;letrajz&#xE1;t &#xED;rja meg ebben a k&#xF6;nyv&#xE9;ben, hanem t&#xF6;rt&#xE9;nelmi tapasztalatokb&#xF3;l pr&#xF3;b&#xE1;lja felfejteni a l&#xE1;tszatdemokr&#xE1;cia m&#x171;k&#xF6;d&#xE9;s&#xE9;nek logik&#xE1;j&#xE1;t, bemutatni a mindent &#xE1;tsz&#xF6;v&#x151; korrupci&#xF3;t, az elhatalmasod&#xF3; b&#xFC;rokr&#xE1;ci&#xE1;t. Feszegeti azt a k&#xE9;rd&#xE9;st is, hogy vajon a maffiaszer&#x171;en m&#x171;k&#xF6;d&#x151; oligarch&#xE1;k ir&#xE1;ny&#xED;tj&#xE1;k-e t&#xE9;nylegesen Oroszorsz&#xE1;got, illetve azt, hogy mi a c&#xE1;r atyuska szerep&#xE9;t bet&#xF6;lt&#x151; Putyin var&#xE1;zs&#xE1;nak titka.</p> <p><a href="http://konyves.blog.hu/2014/09/08/mindenki_benne_van_anna_arutunyan_putyin-varazs" target="_blank">Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</a></p> <p style="text-align: right;"><strong>Szerz&#x151;:&#xA0;Di&#xF3;szegi-Horv&#xE1;th N&#xF3;ra</strong></p> <p style="text-align: right;">&#xA0;<em><span id="docs-internal-guid-e3e8a6be-02f5-97d0-7f87-82ef17091dcb">A cikk eredetileg a K&#xF6;nyvesMagazin t&#xE9;li sz&#xE1;m&#xE1;ban jelent meg.</span></em></p> <!-- <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:trackback="http://madskills.com/public/xml/rss/module/trackback/"><rdf:Description rdf:about="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:identifier="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:title="5 reg&eacute;ny, amib&#337;l jobban meg&eacute;rthetj&uuml;k Oroszorsz&aacute;got" dc:subject="Trackback" dc:description="Vlagyimir Putyin meglehet&#337;sen sz&#369;kszav&uacute;, ha irodalomr&oacute;l van sz&oacute;, annyit viszont tudni lehet, hogy a t&ouml;rt&eacute;nelem &eacute;s a filoz&oacute;fia kiemelten &eacute;rdekli, f&#337;k&eacute;nt ha olyan orosz kiv&aacute;l&oacute;s&aacute;gok &eacute;letrajz&aacute;r&oacute;l van sz.." dc:creator=".konyvesblog." dc:date="Tue, 20 Jan 2015 09:11:00 +0100" trackback:ping=""></rdf:Description></rdf:RDF> --> <div class="clear"></div>'},
{'id': 2, 'title': '2 regény, amibõl jobban megérthetjük Oroszországot','url': 'http://konyves.blog.hu/2015/01/20/2_regeny_amibol_jobban_megerthetjuk_oroszorszagot','author': '.konyvesblog.','entry' :'<p dir="ltr"><span> 2 Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan orosz kiv&#xE1;l&#xF3;s&#xE1;gok &#xE9;letrajz&#xE1;r&#xF3;l van sz&#xF3;, mint Rettegett Iv&#xE1;n vagy &#xE9;ppen I. P&#xE9;ter c&#xE1;r. Ha k&#xE9;rdezik, megeml&#xED;ti, hogy a XI. sz&#xE1;zadi perzsa k&#xF6;lt&#x151;, Omar Khajj&#xE1;m l&#xED;r&#xE1;ja k&#xF6;zel &#xE1;ll a sz&#xED;v&#xE9;hez (kedves k&#xF6;tet&#xE9;t egy&#xE9;bk&#xE9;nt volt feles&#xE9;g&#xE9;t&#x151;l kapta), emellett list&#xE1;j&#xE1;n Ernest Hemingway, Jack London &#xE9;s Jules Verne is megfordult m&#xE1;r, hazafias &#xE9;rzelmeit pedig Tolsztoj &#xE9;s Dosztojevszkij sorol&#xE1;s&#xE1;val szokta letudni. Saj&#xE1;t bevall&#xE1;sa szerint kifejezetten &#xE9;lvezte Alexandre Dumas m&#x171;v&#xE9;t, </span><span>A h&#xE1;rom test&#x151;r</span><span>t, de &#xE1;ll&#xED;t&#xF3;lag egyszer, m&#xE9;g 2006-ban l&#xE1;tt&#xE1;k a fiatal &#xED;r&#xF3;, Zahar Prilepin egyik thriller&#xE9;t, a </span><span>Szankj&#xE1;</span><span>t is a kez&#xE9;ben. A hozz&#xE1; k&#xF6;zel &#xE1;ll&#xF3;k szerint viszont az eln&#xF6;k nem kifejezetten a bet&#x171;k szerelmese.</span></p> <p dir="ltr"><span>&#xC9;rdekes egy&#xE9;bk&#xE9;nt, hogy Putyin &#xED;zl&#xE9;se valamelyest lek&#xE9;pezi az orosz t&#xE1;rsadalom irodalmi &#xE9;rdekl&#x151;d&#xE9;s&#xE9;t is &#x2013; l&#xE9;tezik m&#xE1;r egy sz&#xE1;zas lista, amire b&#xE1;rki szavazhat a <a href="http://www.100bestbooks.ru/" target="_blank">100bestbooks.ru</a> oldalon, jelenleg a lista els&#x151; hely&#xE9;n Bulgakov &#xE1;ll &#xE9;s </span><span>A Mester &#xE9;s Margarita</span><span>, a top 10-ben Tolsztoj k&#xE9;tszer, Dosztojevszkij h&#xE1;romszor szerepel, Dumas Putyin &#xE1;ltal is kedvelt m&#x171;ve viszont kicsit lecs&#xFA;szott, az 55. helyen fesz&#xED;t jelenleg. </span></p> <p dir="ltr"><span>Mutatunk &#xF6;t k&#xF6;nyvet, ami val&#xF3;sz&#xED;n&#x171;leg soha nem ker&#xFC;l fel a&#xA0;<span>f&#xE9;nyes homlok&#xFA;&#xA0;</span><span>KGB</span><span>-tiszt kedvenceinek list&#xE1;j&#xE1;ra, de kicsit jobban meg&#xE9;rthet&#x151; bel&#x151;l&#xFC;k, hogy milyen is keleti bar&#xE1;taink &#xE9;lete.&#xA0;</span></span></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_39849_masolata.jpg" alt="covers_39849_masolata.jpg" class="imgleft" width="251" height="391">Vlagyimir Szorokin: Az opricsnyik egy napja</strong></p> <p dir="ltr"><span>2028-ban Oroszorsz&#xE1;gban gy&#x151;z&#xF6;tt a nemzeti eszme, &#xE9;s visszat&#xE9;r Rettegett Iv&#xE1;n modellje. A Nyugati Fal m&#xF6;g&#xF6;tt ism&#xE9;t a c&#xE1;r atyuska az &#xFA;r, minden nyugati szabads&#xE1;gjogot elt&#xF6;r&#xF6;ltek, &#xE9;s m&#x171;k&#xF6;dik az opricsnyina, a mag&#xE1;nhadsereg, amelynek legf&#x151;bb feladata a k&#xF6;ny&#xF6;rtelen b&#xFC;ntet&#xE9;s. A reg&#xE9;ny egy Komjaga nev&#x171; opricsnyik egy napj&#xE1;t mes&#xE9;li el, aki lecsillap&#xED;tva k&#xED;nz&#xF3; m&#xE1;snaposs&#xE1;g&#xE1;t elindul a szok&#xE1;sos napi feny&#xED;t&#x151; k&#xF6;r&#xFA;tj&#xE1;ra. Szorokin sz&#xFC;rre&#xE1;lis, kegyetlen reg&#xE9;nye egy&#xE9;bk&#xE9;nt Szolzsenyicin h&#xED;res l&#xE1;gerreg&#xE9;ny&#xE9;nek, az Ivan Gyenyiszovics egy napj&#xE1;nak a parodisztikus parafr&#xE1;zisa. B&#xE1;r a szerz&#x151; tagadta, hogy Putyin rendszer&#xE9;r&#x151;l &#xED;rta volna m&#x171;v&#xE9;t, az orosz viszonyokat ismerve lehetetlen nem gondolni arra, hogy val&#xF3;j&#xE1;ban a jelenkori Oroszorsz&#xE1;g szat&#xED;r&#xE1;ja ez a reg&#xE9;ny.</span></p> <p dir="ltr"><a href="http://Dmitry%20Glukhovsky A posztapokaliptikus irodalom mindent elt&#xF6;r&#xF6;l" target="_blank"><span>Interj&#xFA;nk Vlagyimir Szorokinnal&gt;&gt;</span></a></p> <p><a id="more7089193" name="more7089193"></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2015/01/12/szorokin_az_orosz_lelek_tomjen_ho_es_ver" target="_blank"><span><br class="kix-line-break"></span></a><strong>Dmitrij Bikov: ZSD &#x2013; avagy ki&#xE9; Oroszorsz&#xE1;g</strong></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_90505_masolata.jpg" alt="covers_90505_masolata.jpg" class="imgright" width="251" height="371"></strong><span>A monument&#xE1;lis, csaknem egykil&#xF3;s, 745 oldalas reg&#xE9;ny szint&#xE9;n a j&#xF6;v&#x151;ben j&#xE1;tsz&#xF3;dik. M&#xE9;ghozz&#xE1; egy olyan vil&#xE1;gban, ahol az orsz&#xE1;g bels&#x151; etnikai fesz&#xFC;lts&#xE9;gei felsz&#xED;nre t&#xF6;rnek, &#xE9;s v&#xE9;res h&#xE1;bor&#xFA; robban ki a var&#xE9;gok &#xE9;s a kaz&#xE1;rok k&#xF6;z&#xF6;tt. A harc m&#xE1;r az elej&#xE9;t&#x151;l fogva &#xE9;rtelmetlen, de t&#xF6;rt&#xE9;nelmi m&#xED;toszok &#xE9;s babon&#xE1;k m&#xE1;r teljesen rabul ejtett&#xE9;k az egym&#xE1;s kiirt&#xE1;s&#xE1;n f&#xE1;radoz&#xF3; feleket, mik&#xF6;zben a t&#xF6;rzs&#xF6;k&#xF6;s lakoss&#xE1;g v&#xE1;rja, hogy a szemben &#xE1;ll&#xF3; &#x151;sellens&#xE9;gek v&#xE9;gre d&#xF6;nt&#xE9;sre vigy&#xE9;k a h&#xE1;bor&#xFA;t. Bikov nem hi&#xE1;ba dolgozott egy &#xE9;vtizeden &#xE1;t a reg&#xE9;nyen, hiszen a ZSD val&#xF3;s&#xE1;gos kultk&#xF6;nyv lett, &#xE9;s minden bizonnyal az egyik legk&#xFC;l&#xF6;nlegesebb &#xE9;s leghumorosabb ut&#xF3;pia az ut&#xF3;bbi &#xE9;vekben, amely minden t&#xFA;lz&#xE1;sa ellen&#xE9;re m&#xE9;gis r&#xE1;mutat arra a t&#xE9;nyre, hogy a jelenkor Oroszorsz&#xE1;g&#xE1;ban milyen puszt&#xED;t&#xF3; erej&#x171; etnikai ellent&#xE9;tek fesz&#xFC;lnek.</span><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/viktor-pelevin-p51.jpg" alt="viktor-pelevin-p51.jpg" class="imgleft open-in-modal" width="251" height="410">Viktor Pelevin: P5 -&#xA0;Pindoszt&#xE1;n politikai pigmeusai</strong></p> <p dir="ltr"><span>Az orosz szt&#xE1;rszerz&#x151; &#xF6;t elbesz&#xE9;l&#xE9;s&#xE9;t egybegy&#x171;jt&#x151; k&#xF6;tet bor&#xED;t&#xF3;j&#xE1;n nem v&#xE9;letlen&#xFC;l &#xE9;keskedik az </span><span>Igaz t&#xF6;rt&#xE9;net alapj&#xE1;n</span><span> felirat. Az elk&#xE9;peszt&#x151; fant&#xE1;zi&#xE1;j&#xFA; Pelevin a </span><span>Pindoszt&#xE1;n politikai pigmeusai &#x2013; P&#xE1;, pederaszt&#xE1;k</span><span> alc&#xED;m&#x171; k&#xF6;nyv&#xE9;ben minden benne van, ami&#xE9;rt az &#xED;r&#xF3;t im&#xE1;dni vagy &#xE9;ppen ut&#xE1;lni lehet: a csavaros, groteszk t&#xF6;rt&#xE9;netek sz&#xED;nhelye minden v&#xE1;ratlan &#xE9;s hihetetlen fordulat ellen&#xE9;re a jelenkori Oroszorsz&#xE1;g. Az oligarch&#xE1;k uralta vil&#xE1;gban nemcsak a hatalom, de a bulv&#xE1;rm&#xE9;dia &#xE9;s annak kritika n&#xE9;lk&#xFC;li fogyaszt&#xF3;i is pelleng&#xE9;re &#xE1;ll&#xED;ttatnak. Mindehhez persze n&#xE9;lk&#xFC;l&#xF6;zhetetlen a Pelevinre mindig is jellemz&#x151; cybervil&#xE1;g, no &#xE9;s n&#xE9;mi keleti filoz&#xF3;fia.</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2010/09/07/pelevin_p5" target="_blank"><span><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></span></a></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/859607_5_masolata.jpg" alt="859607_5_masolata.jpg" class="imgright" width="250" height="370">Dmitry Glukhovsky: Orosz n&#xE9;pellenes mes&#xE9;k</strong><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><span>Miut&#xE1;n az orosz fantasztikus irodalom egyik legn&#xE9;pszer&#x171;bb szerz&#x151;je diszkr&#xE9;ten visszautas&#xED;totta a felk&#xE9;r&#xE9;st, hogy vegye &#xE1;t Nyikita Mihalkov hely&#xE9;t Putyin tan&#xE1;csad&#xF3; bizotts&#xE1;g&#xE1;ban, gyorsan tett r&#xF3;la, hogy a hatalomnak m&#xE9;g egyszer esz&#xE9;be se jusson a neve, ha loj&#xE1;lis &#xE9;rtelmis&#xE9;git keresnek. Ezzel a k&#xF6;tettel Glukhovsky sikeresen bizony&#xED;tja, hogy nemcsak a sci-fi m&#x171;faj&#xE1;ban k&#xE9;pes nagyot alkotni. A n&#xE9;pellenes mes&#xE9;kben pontosan mutatja be a korrupci&#xF3;val &#xE1;tsz&#x151;tt orosz mindennapokat. Az &#xE1;llami szint&#x171; n&#xE9;pbut&#xED;t&#xE1;st, a tekint&#xE9;lyelv&#x171;s&#xE9;g elfogad&#xE1;s&#xE1;t le&#xED;r&#xF3; t&#xF6;rt&#xE9;netekb&#x151;l term&#xE9;szetesen nem hi&#xE1;nyozhatnak az&#xE9;rt a szerz&#x151;re jellemz&#x151; fantasztikus elemek sem, de mindezek t&#xF6;k&#xE9;letesen illeszkednek a nagyon is hihet&#x151; elbesz&#xE9;l&#xE9;sek cselekm&#xE9;ny&#xE9;be.&#xA0;</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_nepellenes_mesek" target="_blank"><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_647" target="_blank"><span>Interj&#xFA;nk&#xA0;Dmitry Glukhovskyval&gt;&gt;</span></a></p> <p><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/735666f_masolata.gif" alt="735666f_masolata.gif" class="imgleft" width="249" height="351">Anna Arutunyan: A Putyin-var&#xE1;zs</strong></p> <p>Az orosz-amerikai &#xFA;js&#xE1;g&#xED;r&#xF3; hossz&#xFA; ideje igyekszik meg&#xE9;rteni a jelenlegi orosz rendszer &#xE9;s az eln&#xF6;k titk&#xE1;t. Nem egyszer&#x171;en egy politikus &#xE9;letrajz&#xE1;t &#xED;rja meg ebben a k&#xF6;nyv&#xE9;ben, hanem t&#xF6;rt&#xE9;nelmi tapasztalatokb&#xF3;l pr&#xF3;b&#xE1;lja felfejteni a l&#xE1;tszatdemokr&#xE1;cia m&#x171;k&#xF6;d&#xE9;s&#xE9;nek logik&#xE1;j&#xE1;t, bemutatni a mindent &#xE1;tsz&#xF6;v&#x151; korrupci&#xF3;t, az elhatalmasod&#xF3; b&#xFC;rokr&#xE1;ci&#xE1;t. Feszegeti azt a k&#xE9;rd&#xE9;st is, hogy vajon a maffiaszer&#x171;en m&#x171;k&#xF6;d&#x151; oligarch&#xE1;k ir&#xE1;ny&#xED;tj&#xE1;k-e t&#xE9;nylegesen Oroszorsz&#xE1;got, illetve azt, hogy mi a c&#xE1;r atyuska szerep&#xE9;t bet&#xF6;lt&#x151; Putyin var&#xE1;zs&#xE1;nak titka.</p> <p><a href="http://konyves.blog.hu/2014/09/08/mindenki_benne_van_anna_arutunyan_putyin-varazs" target="_blank">Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</a></p> <p style="text-align: right;"><strong>Szerz&#x151;:&#xA0;Di&#xF3;szegi-Horv&#xE1;th N&#xF3;ra</strong></p> <p style="text-align: right;">&#xA0;<em><span id="docs-internal-guid-e3e8a6be-02f5-97d0-7f87-82ef17091dcb">A cikk eredetileg a K&#xF6;nyvesMagazin t&#xE9;li sz&#xE1;m&#xE1;ban jelent meg.</span></em></p> <!-- <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:trackback="http://madskills.com/public/xml/rss/module/trackback/"><rdf:Description rdf:about="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:identifier="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:title="5 reg&eacute;ny, amib&#337;l jobban meg&eacute;rthetj&uuml;k Oroszorsz&aacute;got" dc:subject="Trackback" dc:description="Vlagyimir Putyin meglehet&#337;sen sz&#369;kszav&uacute;, ha irodalomr&oacute;l van sz&oacute;, annyit viszont tudni lehet, hogy a t&ouml;rt&eacute;nelem &eacute;s a filoz&oacute;fia kiemelten &eacute;rdekli, f&#337;k&eacute;nt ha olyan orosz kiv&aacute;l&oacute;s&aacute;gok &eacute;letrajz&aacute;r&oacute;l van sz.." dc:creator=".konyvesblog." dc:date="Tue, 20 Jan 2015 09:11:00 +0100" trackback:ping=""></rdf:Description></rdf:RDF> --> <div class="clear"></div>'},  
{'id': 3, 'title': '3 regény, amibõl jobban megérthetjük Oroszországot','url': 'http://konyves.blog.hu/2015/01/20/3_regeny_amibol_jobban_megerthetjuk_oroszorszagot','author': '.konyvesblog.','entry' :'<p dir="ltr"><span> 3 Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan orosz kiv&#xE1;l&#xF3;s&#xE1;gok &#xE9;letrajz&#xE1;r&#xF3;l van sz&#xF3;, mint Rettegett Iv&#xE1;n vagy &#xE9;ppen I. P&#xE9;ter c&#xE1;r. Ha k&#xE9;rdezik, megeml&#xED;ti, hogy a XI. sz&#xE1;zadi perzsa k&#xF6;lt&#x151;, Omar Khajj&#xE1;m l&#xED;r&#xE1;ja k&#xF6;zel &#xE1;ll a sz&#xED;v&#xE9;hez (kedves k&#xF6;tet&#xE9;t egy&#xE9;bk&#xE9;nt volt feles&#xE9;g&#xE9;t&#x151;l kapta), emellett list&#xE1;j&#xE1;n Ernest Hemingway, Jack London &#xE9;s Jules Verne is megfordult m&#xE1;r, hazafias &#xE9;rzelmeit pedig Tolsztoj &#xE9;s Dosztojevszkij sorol&#xE1;s&#xE1;val szokta letudni. Saj&#xE1;t bevall&#xE1;sa szerint kifejezetten &#xE9;lvezte Alexandre Dumas m&#x171;v&#xE9;t, </span><span>A h&#xE1;rom test&#x151;r</span><span>t, de &#xE1;ll&#xED;t&#xF3;lag egyszer, m&#xE9;g 2006-ban l&#xE1;tt&#xE1;k a fiatal &#xED;r&#xF3;, Zahar Prilepin egyik thriller&#xE9;t, a </span><span>Szankj&#xE1;</span><span>t is a kez&#xE9;ben. A hozz&#xE1; k&#xF6;zel &#xE1;ll&#xF3;k szerint viszont az eln&#xF6;k nem kifejezetten a bet&#x171;k szerelmese.</span></p> <p dir="ltr"><span>&#xC9;rdekes egy&#xE9;bk&#xE9;nt, hogy Putyin &#xED;zl&#xE9;se valamelyest lek&#xE9;pezi az orosz t&#xE1;rsadalom irodalmi &#xE9;rdekl&#x151;d&#xE9;s&#xE9;t is &#x2013; l&#xE9;tezik m&#xE1;r egy sz&#xE1;zas lista, amire b&#xE1;rki szavazhat a <a href="http://www.100bestbooks.ru/" target="_blank">100bestbooks.ru</a> oldalon, jelenleg a lista els&#x151; hely&#xE9;n Bulgakov &#xE1;ll &#xE9;s </span><span>A Mester &#xE9;s Margarita</span><span>, a top 10-ben Tolsztoj k&#xE9;tszer, Dosztojevszkij h&#xE1;romszor szerepel, Dumas Putyin &#xE1;ltal is kedvelt m&#x171;ve viszont kicsit lecs&#xFA;szott, az 55. helyen fesz&#xED;t jelenleg. </span></p> <p dir="ltr"><span>Mutatunk &#xF6;t k&#xF6;nyvet, ami val&#xF3;sz&#xED;n&#x171;leg soha nem ker&#xFC;l fel a&#xA0;<span>f&#xE9;nyes homlok&#xFA;&#xA0;</span><span>KGB</span><span>-tiszt kedvenceinek list&#xE1;j&#xE1;ra, de kicsit jobban meg&#xE9;rthet&#x151; bel&#x151;l&#xFC;k, hogy milyen is keleti bar&#xE1;taink &#xE9;lete.&#xA0;</span></span></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_39849_masolata.jpg" alt="covers_39849_masolata.jpg" class="imgleft" width="251" height="391">Vlagyimir Szorokin: Az opricsnyik egy napja</strong></p> <p dir="ltr"><span>2028-ban Oroszorsz&#xE1;gban gy&#x151;z&#xF6;tt a nemzeti eszme, &#xE9;s visszat&#xE9;r Rettegett Iv&#xE1;n modellje. A Nyugati Fal m&#xF6;g&#xF6;tt ism&#xE9;t a c&#xE1;r atyuska az &#xFA;r, minden nyugati szabads&#xE1;gjogot elt&#xF6;r&#xF6;ltek, &#xE9;s m&#x171;k&#xF6;dik az opricsnyina, a mag&#xE1;nhadsereg, amelynek legf&#x151;bb feladata a k&#xF6;ny&#xF6;rtelen b&#xFC;ntet&#xE9;s. A reg&#xE9;ny egy Komjaga nev&#x171; opricsnyik egy napj&#xE1;t mes&#xE9;li el, aki lecsillap&#xED;tva k&#xED;nz&#xF3; m&#xE1;snaposs&#xE1;g&#xE1;t elindul a szok&#xE1;sos napi feny&#xED;t&#x151; k&#xF6;r&#xFA;tj&#xE1;ra. Szorokin sz&#xFC;rre&#xE1;lis, kegyetlen reg&#xE9;nye egy&#xE9;bk&#xE9;nt Szolzsenyicin h&#xED;res l&#xE1;gerreg&#xE9;ny&#xE9;nek, az Ivan Gyenyiszovics egy napj&#xE1;nak a parodisztikus parafr&#xE1;zisa. B&#xE1;r a szerz&#x151; tagadta, hogy Putyin rendszer&#xE9;r&#x151;l &#xED;rta volna m&#x171;v&#xE9;t, az orosz viszonyokat ismerve lehetetlen nem gondolni arra, hogy val&#xF3;j&#xE1;ban a jelenkori Oroszorsz&#xE1;g szat&#xED;r&#xE1;ja ez a reg&#xE9;ny.</span></p> <p dir="ltr"><a href="http://Dmitry%20Glukhovsky A posztapokaliptikus irodalom mindent elt&#xF6;r&#xF6;l" target="_blank"><span>Interj&#xFA;nk Vlagyimir Szorokinnal&gt;&gt;</span></a></p> <p><a id="more7089193" name="more7089193"></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2015/01/12/szorokin_az_orosz_lelek_tomjen_ho_es_ver" target="_blank"><span><br class="kix-line-break"></span></a><strong>Dmitrij Bikov: ZSD &#x2013; avagy ki&#xE9; Oroszorsz&#xE1;g</strong></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_90505_masolata.jpg" alt="covers_90505_masolata.jpg" class="imgright" width="251" height="371"></strong><span>A monument&#xE1;lis, csaknem egykil&#xF3;s, 745 oldalas reg&#xE9;ny szint&#xE9;n a j&#xF6;v&#x151;ben j&#xE1;tsz&#xF3;dik. M&#xE9;ghozz&#xE1; egy olyan vil&#xE1;gban, ahol az orsz&#xE1;g bels&#x151; etnikai fesz&#xFC;lts&#xE9;gei felsz&#xED;nre t&#xF6;rnek, &#xE9;s v&#xE9;res h&#xE1;bor&#xFA; robban ki a var&#xE9;gok &#xE9;s a kaz&#xE1;rok k&#xF6;z&#xF6;tt. A harc m&#xE1;r az elej&#xE9;t&#x151;l fogva &#xE9;rtelmetlen, de t&#xF6;rt&#xE9;nelmi m&#xED;toszok &#xE9;s babon&#xE1;k m&#xE1;r teljesen rabul ejtett&#xE9;k az egym&#xE1;s kiirt&#xE1;s&#xE1;n f&#xE1;radoz&#xF3; feleket, mik&#xF6;zben a t&#xF6;rzs&#xF6;k&#xF6;s lakoss&#xE1;g v&#xE1;rja, hogy a szemben &#xE1;ll&#xF3; &#x151;sellens&#xE9;gek v&#xE9;gre d&#xF6;nt&#xE9;sre vigy&#xE9;k a h&#xE1;bor&#xFA;t. Bikov nem hi&#xE1;ba dolgozott egy &#xE9;vtizeden &#xE1;t a reg&#xE9;nyen, hiszen a ZSD val&#xF3;s&#xE1;gos kultk&#xF6;nyv lett, &#xE9;s minden bizonnyal az egyik legk&#xFC;l&#xF6;nlegesebb &#xE9;s leghumorosabb ut&#xF3;pia az ut&#xF3;bbi &#xE9;vekben, amely minden t&#xFA;lz&#xE1;sa ellen&#xE9;re m&#xE9;gis r&#xE1;mutat arra a t&#xE9;nyre, hogy a jelenkor Oroszorsz&#xE1;g&#xE1;ban milyen puszt&#xED;t&#xF3; erej&#x171; etnikai ellent&#xE9;tek fesz&#xFC;lnek.</span><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/viktor-pelevin-p51.jpg" alt="viktor-pelevin-p51.jpg" class="imgleft open-in-modal" width="251" height="410">Viktor Pelevin: P5 -&#xA0;Pindoszt&#xE1;n politikai pigmeusai</strong></p> <p dir="ltr"><span>Az orosz szt&#xE1;rszerz&#x151; &#xF6;t elbesz&#xE9;l&#xE9;s&#xE9;t egybegy&#x171;jt&#x151; k&#xF6;tet bor&#xED;t&#xF3;j&#xE1;n nem v&#xE9;letlen&#xFC;l &#xE9;keskedik az </span><span>Igaz t&#xF6;rt&#xE9;net alapj&#xE1;n</span><span> felirat. Az elk&#xE9;peszt&#x151; fant&#xE1;zi&#xE1;j&#xFA; Pelevin a </span><span>Pindoszt&#xE1;n politikai pigmeusai &#x2013; P&#xE1;, pederaszt&#xE1;k</span><span> alc&#xED;m&#x171; k&#xF6;nyv&#xE9;ben minden benne van, ami&#xE9;rt az &#xED;r&#xF3;t im&#xE1;dni vagy &#xE9;ppen ut&#xE1;lni lehet: a csavaros, groteszk t&#xF6;rt&#xE9;netek sz&#xED;nhelye minden v&#xE1;ratlan &#xE9;s hihetetlen fordulat ellen&#xE9;re a jelenkori Oroszorsz&#xE1;g. Az oligarch&#xE1;k uralta vil&#xE1;gban nemcsak a hatalom, de a bulv&#xE1;rm&#xE9;dia &#xE9;s annak kritika n&#xE9;lk&#xFC;li fogyaszt&#xF3;i is pelleng&#xE9;re &#xE1;ll&#xED;ttatnak. Mindehhez persze n&#xE9;lk&#xFC;l&#xF6;zhetetlen a Pelevinre mindig is jellemz&#x151; cybervil&#xE1;g, no &#xE9;s n&#xE9;mi keleti filoz&#xF3;fia.</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2010/09/07/pelevin_p5" target="_blank"><span><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></span></a></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/859607_5_masolata.jpg" alt="859607_5_masolata.jpg" class="imgright" width="250" height="370">Dmitry Glukhovsky: Orosz n&#xE9;pellenes mes&#xE9;k</strong><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><span>Miut&#xE1;n az orosz fantasztikus irodalom egyik legn&#xE9;pszer&#x171;bb szerz&#x151;je diszkr&#xE9;ten visszautas&#xED;totta a felk&#xE9;r&#xE9;st, hogy vegye &#xE1;t Nyikita Mihalkov hely&#xE9;t Putyin tan&#xE1;csad&#xF3; bizotts&#xE1;g&#xE1;ban, gyorsan tett r&#xF3;la, hogy a hatalomnak m&#xE9;g egyszer esz&#xE9;be se jusson a neve, ha loj&#xE1;lis &#xE9;rtelmis&#xE9;git keresnek. Ezzel a k&#xF6;tettel Glukhovsky sikeresen bizony&#xED;tja, hogy nemcsak a sci-fi m&#x171;faj&#xE1;ban k&#xE9;pes nagyot alkotni. A n&#xE9;pellenes mes&#xE9;kben pontosan mutatja be a korrupci&#xF3;val &#xE1;tsz&#x151;tt orosz mindennapokat. Az &#xE1;llami szint&#x171; n&#xE9;pbut&#xED;t&#xE1;st, a tekint&#xE9;lyelv&#x171;s&#xE9;g elfogad&#xE1;s&#xE1;t le&#xED;r&#xF3; t&#xF6;rt&#xE9;netekb&#x151;l term&#xE9;szetesen nem hi&#xE1;nyozhatnak az&#xE9;rt a szerz&#x151;re jellemz&#x151; fantasztikus elemek sem, de mindezek t&#xF6;k&#xE9;letesen illeszkednek a nagyon is hihet&#x151; elbesz&#xE9;l&#xE9;sek cselekm&#xE9;ny&#xE9;be.&#xA0;</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_nepellenes_mesek" target="_blank"><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_647" target="_blank"><span>Interj&#xFA;nk&#xA0;Dmitry Glukhovskyval&gt;&gt;</span></a></p> <p><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/735666f_masolata.gif" alt="735666f_masolata.gif" class="imgleft" width="249" height="351">Anna Arutunyan: A Putyin-var&#xE1;zs</strong></p> <p>Az orosz-amerikai &#xFA;js&#xE1;g&#xED;r&#xF3; hossz&#xFA; ideje igyekszik meg&#xE9;rteni a jelenlegi orosz rendszer &#xE9;s az eln&#xF6;k titk&#xE1;t. Nem egyszer&#x171;en egy politikus &#xE9;letrajz&#xE1;t &#xED;rja meg ebben a k&#xF6;nyv&#xE9;ben, hanem t&#xF6;rt&#xE9;nelmi tapasztalatokb&#xF3;l pr&#xF3;b&#xE1;lja felfejteni a l&#xE1;tszatdemokr&#xE1;cia m&#x171;k&#xF6;d&#xE9;s&#xE9;nek logik&#xE1;j&#xE1;t, bemutatni a mindent &#xE1;tsz&#xF6;v&#x151; korrupci&#xF3;t, az elhatalmasod&#xF3; b&#xFC;rokr&#xE1;ci&#xE1;t. Feszegeti azt a k&#xE9;rd&#xE9;st is, hogy vajon a maffiaszer&#x171;en m&#x171;k&#xF6;d&#x151; oligarch&#xE1;k ir&#xE1;ny&#xED;tj&#xE1;k-e t&#xE9;nylegesen Oroszorsz&#xE1;got, illetve azt, hogy mi a c&#xE1;r atyuska szerep&#xE9;t bet&#xF6;lt&#x151; Putyin var&#xE1;zs&#xE1;nak titka.</p> <p><a href="http://konyves.blog.hu/2014/09/08/mindenki_benne_van_anna_arutunyan_putyin-varazs" target="_blank">Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</a></p> <p style="text-align: right;"><strong>Szerz&#x151;:&#xA0;Di&#xF3;szegi-Horv&#xE1;th N&#xF3;ra</strong></p> <p style="text-align: right;">&#xA0;<em><span id="docs-internal-guid-e3e8a6be-02f5-97d0-7f87-82ef17091dcb">A cikk eredetileg a K&#xF6;nyvesMagazin t&#xE9;li sz&#xE1;m&#xE1;ban jelent meg.</span></em></p> <!-- <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:trackback="http://madskills.com/public/xml/rss/module/trackback/"><rdf:Description rdf:about="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:identifier="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:title="5 reg&eacute;ny, amib&#337;l jobban meg&eacute;rthetj&uuml;k Oroszorsz&aacute;got" dc:subject="Trackback" dc:description="Vlagyimir Putyin meglehet&#337;sen sz&#369;kszav&uacute;, ha irodalomr&oacute;l van sz&oacute;, annyit viszont tudni lehet, hogy a t&ouml;rt&eacute;nelem &eacute;s a filoz&oacute;fia kiemelten &eacute;rdekli, f&#337;k&eacute;nt ha olyan orosz kiv&aacute;l&oacute;s&aacute;gok &eacute;letrajz&aacute;r&oacute;l van sz.." dc:creator=".konyvesblog." dc:date="Tue, 20 Jan 2015 09:11:00 +0100" trackback:ping=""></rdf:Description></rdf:RDF> --> <div class="clear"></div>'},
{'id': 4, 'title': '4 regény, amibõl jobban megérthetjük Oroszországot','url': 'http://konyves.blog.hu/2015/01/20/4_regeny_amibol_jobban_megerthetjuk_oroszorszagot','author': '.konyvesblog.','entry' :'<p dir="ltr"><span> 4 Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan orosz kiv&#xE1;l&#xF3;s&#xE1;gok &#xE9;letrajz&#xE1;r&#xF3;l van sz&#xF3;, mint Rettegett Iv&#xE1;n vagy &#xE9;ppen I. P&#xE9;ter c&#xE1;r. Ha k&#xE9;rdezik, megeml&#xED;ti, hogy a XI. sz&#xE1;zadi perzsa k&#xF6;lt&#x151;, Omar Khajj&#xE1;m l&#xED;r&#xE1;ja k&#xF6;zel &#xE1;ll a sz&#xED;v&#xE9;hez (kedves k&#xF6;tet&#xE9;t egy&#xE9;bk&#xE9;nt volt feles&#xE9;g&#xE9;t&#x151;l kapta), emellett list&#xE1;j&#xE1;n Ernest Hemingway, Jack London &#xE9;s Jules Verne is megfordult m&#xE1;r, hazafias &#xE9;rzelmeit pedig Tolsztoj &#xE9;s Dosztojevszkij sorol&#xE1;s&#xE1;val szokta letudni. Saj&#xE1;t bevall&#xE1;sa szerint kifejezetten &#xE9;lvezte Alexandre Dumas m&#x171;v&#xE9;t, </span><span>A h&#xE1;rom test&#x151;r</span><span>t, de &#xE1;ll&#xED;t&#xF3;lag egyszer, m&#xE9;g 2006-ban l&#xE1;tt&#xE1;k a fiatal &#xED;r&#xF3;, Zahar Prilepin egyik thriller&#xE9;t, a </span><span>Szankj&#xE1;</span><span>t is a kez&#xE9;ben. A hozz&#xE1; k&#xF6;zel &#xE1;ll&#xF3;k szerint viszont az eln&#xF6;k nem kifejezetten a bet&#x171;k szerelmese.</span></p> <p dir="ltr"><span>&#xC9;rdekes egy&#xE9;bk&#xE9;nt, hogy Putyin &#xED;zl&#xE9;se valamelyest lek&#xE9;pezi az orosz t&#xE1;rsadalom irodalmi &#xE9;rdekl&#x151;d&#xE9;s&#xE9;t is &#x2013; l&#xE9;tezik m&#xE1;r egy sz&#xE1;zas lista, amire b&#xE1;rki szavazhat a <a href="http://www.100bestbooks.ru/" target="_blank">100bestbooks.ru</a> oldalon, jelenleg a lista els&#x151; hely&#xE9;n Bulgakov &#xE1;ll &#xE9;s </span><span>A Mester &#xE9;s Margarita</span><span>, a top 10-ben Tolsztoj k&#xE9;tszer, Dosztojevszkij h&#xE1;romszor szerepel, Dumas Putyin &#xE1;ltal is kedvelt m&#x171;ve viszont kicsit lecs&#xFA;szott, az 55. helyen fesz&#xED;t jelenleg. </span></p> <p dir="ltr"><span>Mutatunk &#xF6;t k&#xF6;nyvet, ami val&#xF3;sz&#xED;n&#x171;leg soha nem ker&#xFC;l fel a&#xA0;<span>f&#xE9;nyes homlok&#xFA;&#xA0;</span><span>KGB</span><span>-tiszt kedvenceinek list&#xE1;j&#xE1;ra, de kicsit jobban meg&#xE9;rthet&#x151; bel&#x151;l&#xFC;k, hogy milyen is keleti bar&#xE1;taink &#xE9;lete.&#xA0;</span></span></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_39849_masolata.jpg" alt="covers_39849_masolata.jpg" class="imgleft" width="251" height="391">Vlagyimir Szorokin: Az opricsnyik egy napja</strong></p> <p dir="ltr"><span>2028-ban Oroszorsz&#xE1;gban gy&#x151;z&#xF6;tt a nemzeti eszme, &#xE9;s visszat&#xE9;r Rettegett Iv&#xE1;n modellje. A Nyugati Fal m&#xF6;g&#xF6;tt ism&#xE9;t a c&#xE1;r atyuska az &#xFA;r, minden nyugati szabads&#xE1;gjogot elt&#xF6;r&#xF6;ltek, &#xE9;s m&#x171;k&#xF6;dik az opricsnyina, a mag&#xE1;nhadsereg, amelynek legf&#x151;bb feladata a k&#xF6;ny&#xF6;rtelen b&#xFC;ntet&#xE9;s. A reg&#xE9;ny egy Komjaga nev&#x171; opricsnyik egy napj&#xE1;t mes&#xE9;li el, aki lecsillap&#xED;tva k&#xED;nz&#xF3; m&#xE1;snaposs&#xE1;g&#xE1;t elindul a szok&#xE1;sos napi feny&#xED;t&#x151; k&#xF6;r&#xFA;tj&#xE1;ra. Szorokin sz&#xFC;rre&#xE1;lis, kegyetlen reg&#xE9;nye egy&#xE9;bk&#xE9;nt Szolzsenyicin h&#xED;res l&#xE1;gerreg&#xE9;ny&#xE9;nek, az Ivan Gyenyiszovics egy napj&#xE1;nak a parodisztikus parafr&#xE1;zisa. B&#xE1;r a szerz&#x151; tagadta, hogy Putyin rendszer&#xE9;r&#x151;l &#xED;rta volna m&#x171;v&#xE9;t, az orosz viszonyokat ismerve lehetetlen nem gondolni arra, hogy val&#xF3;j&#xE1;ban a jelenkori Oroszorsz&#xE1;g szat&#xED;r&#xE1;ja ez a reg&#xE9;ny.</span></p> <p dir="ltr"><a href="http://Dmitry%20Glukhovsky A posztapokaliptikus irodalom mindent elt&#xF6;r&#xF6;l" target="_blank"><span>Interj&#xFA;nk Vlagyimir Szorokinnal&gt;&gt;</span></a></p> <p><a id="more7089193" name="more7089193"></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2015/01/12/szorokin_az_orosz_lelek_tomjen_ho_es_ver" target="_blank"><span><br class="kix-line-break"></span></a><strong>Dmitrij Bikov: ZSD &#x2013; avagy ki&#xE9; Oroszorsz&#xE1;g</strong></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_90505_masolata.jpg" alt="covers_90505_masolata.jpg" class="imgright" width="251" height="371"></strong><span>A monument&#xE1;lis, csaknem egykil&#xF3;s, 745 oldalas reg&#xE9;ny szint&#xE9;n a j&#xF6;v&#x151;ben j&#xE1;tsz&#xF3;dik. M&#xE9;ghozz&#xE1; egy olyan vil&#xE1;gban, ahol az orsz&#xE1;g bels&#x151; etnikai fesz&#xFC;lts&#xE9;gei felsz&#xED;nre t&#xF6;rnek, &#xE9;s v&#xE9;res h&#xE1;bor&#xFA; robban ki a var&#xE9;gok &#xE9;s a kaz&#xE1;rok k&#xF6;z&#xF6;tt. A harc m&#xE1;r az elej&#xE9;t&#x151;l fogva &#xE9;rtelmetlen, de t&#xF6;rt&#xE9;nelmi m&#xED;toszok &#xE9;s babon&#xE1;k m&#xE1;r teljesen rabul ejtett&#xE9;k az egym&#xE1;s kiirt&#xE1;s&#xE1;n f&#xE1;radoz&#xF3; feleket, mik&#xF6;zben a t&#xF6;rzs&#xF6;k&#xF6;s lakoss&#xE1;g v&#xE1;rja, hogy a szemben &#xE1;ll&#xF3; &#x151;sellens&#xE9;gek v&#xE9;gre d&#xF6;nt&#xE9;sre vigy&#xE9;k a h&#xE1;bor&#xFA;t. Bikov nem hi&#xE1;ba dolgozott egy &#xE9;vtizeden &#xE1;t a reg&#xE9;nyen, hiszen a ZSD val&#xF3;s&#xE1;gos kultk&#xF6;nyv lett, &#xE9;s minden bizonnyal az egyik legk&#xFC;l&#xF6;nlegesebb &#xE9;s leghumorosabb ut&#xF3;pia az ut&#xF3;bbi &#xE9;vekben, amely minden t&#xFA;lz&#xE1;sa ellen&#xE9;re m&#xE9;gis r&#xE1;mutat arra a t&#xE9;nyre, hogy a jelenkor Oroszorsz&#xE1;g&#xE1;ban milyen puszt&#xED;t&#xF3; erej&#x171; etnikai ellent&#xE9;tek fesz&#xFC;lnek.</span><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/viktor-pelevin-p51.jpg" alt="viktor-pelevin-p51.jpg" class="imgleft open-in-modal" width="251" height="410">Viktor Pelevin: P5 -&#xA0;Pindoszt&#xE1;n politikai pigmeusai</strong></p> <p dir="ltr"><span>Az orosz szt&#xE1;rszerz&#x151; &#xF6;t elbesz&#xE9;l&#xE9;s&#xE9;t egybegy&#x171;jt&#x151; k&#xF6;tet bor&#xED;t&#xF3;j&#xE1;n nem v&#xE9;letlen&#xFC;l &#xE9;keskedik az </span><span>Igaz t&#xF6;rt&#xE9;net alapj&#xE1;n</span><span> felirat. Az elk&#xE9;peszt&#x151; fant&#xE1;zi&#xE1;j&#xFA; Pelevin a </span><span>Pindoszt&#xE1;n politikai pigmeusai &#x2013; P&#xE1;, pederaszt&#xE1;k</span><span> alc&#xED;m&#x171; k&#xF6;nyv&#xE9;ben minden benne van, ami&#xE9;rt az &#xED;r&#xF3;t im&#xE1;dni vagy &#xE9;ppen ut&#xE1;lni lehet: a csavaros, groteszk t&#xF6;rt&#xE9;netek sz&#xED;nhelye minden v&#xE1;ratlan &#xE9;s hihetetlen fordulat ellen&#xE9;re a jelenkori Oroszorsz&#xE1;g. Az oligarch&#xE1;k uralta vil&#xE1;gban nemcsak a hatalom, de a bulv&#xE1;rm&#xE9;dia &#xE9;s annak kritika n&#xE9;lk&#xFC;li fogyaszt&#xF3;i is pelleng&#xE9;re &#xE1;ll&#xED;ttatnak. Mindehhez persze n&#xE9;lk&#xFC;l&#xF6;zhetetlen a Pelevinre mindig is jellemz&#x151; cybervil&#xE1;g, no &#xE9;s n&#xE9;mi keleti filoz&#xF3;fia.</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2010/09/07/pelevin_p5" target="_blank"><span><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></span></a></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/859607_5_masolata.jpg" alt="859607_5_masolata.jpg" class="imgright" width="250" height="370">Dmitry Glukhovsky: Orosz n&#xE9;pellenes mes&#xE9;k</strong><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><span>Miut&#xE1;n az orosz fantasztikus irodalom egyik legn&#xE9;pszer&#x171;bb szerz&#x151;je diszkr&#xE9;ten visszautas&#xED;totta a felk&#xE9;r&#xE9;st, hogy vegye &#xE1;t Nyikita Mihalkov hely&#xE9;t Putyin tan&#xE1;csad&#xF3; bizotts&#xE1;g&#xE1;ban, gyorsan tett r&#xF3;la, hogy a hatalomnak m&#xE9;g egyszer esz&#xE9;be se jusson a neve, ha loj&#xE1;lis &#xE9;rtelmis&#xE9;git keresnek. Ezzel a k&#xF6;tettel Glukhovsky sikeresen bizony&#xED;tja, hogy nemcsak a sci-fi m&#x171;faj&#xE1;ban k&#xE9;pes nagyot alkotni. A n&#xE9;pellenes mes&#xE9;kben pontosan mutatja be a korrupci&#xF3;val &#xE1;tsz&#x151;tt orosz mindennapokat. Az &#xE1;llami szint&#x171; n&#xE9;pbut&#xED;t&#xE1;st, a tekint&#xE9;lyelv&#x171;s&#xE9;g elfogad&#xE1;s&#xE1;t le&#xED;r&#xF3; t&#xF6;rt&#xE9;netekb&#x151;l term&#xE9;szetesen nem hi&#xE1;nyozhatnak az&#xE9;rt a szerz&#x151;re jellemz&#x151; fantasztikus elemek sem, de mindezek t&#xF6;k&#xE9;letesen illeszkednek a nagyon is hihet&#x151; elbesz&#xE9;l&#xE9;sek cselekm&#xE9;ny&#xE9;be.&#xA0;</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_nepellenes_mesek" target="_blank"><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_647" target="_blank"><span>Interj&#xFA;nk&#xA0;Dmitry Glukhovskyval&gt;&gt;</span></a></p> <p><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/735666f_masolata.gif" alt="735666f_masolata.gif" class="imgleft" width="249" height="351">Anna Arutunyan: A Putyin-var&#xE1;zs</strong></p> <p>Az orosz-amerikai &#xFA;js&#xE1;g&#xED;r&#xF3; hossz&#xFA; ideje igyekszik meg&#xE9;rteni a jelenlegi orosz rendszer &#xE9;s az eln&#xF6;k titk&#xE1;t. Nem egyszer&#x171;en egy politikus &#xE9;letrajz&#xE1;t &#xED;rja meg ebben a k&#xF6;nyv&#xE9;ben, hanem t&#xF6;rt&#xE9;nelmi tapasztalatokb&#xF3;l pr&#xF3;b&#xE1;lja felfejteni a l&#xE1;tszatdemokr&#xE1;cia m&#x171;k&#xF6;d&#xE9;s&#xE9;nek logik&#xE1;j&#xE1;t, bemutatni a mindent &#xE1;tsz&#xF6;v&#x151; korrupci&#xF3;t, az elhatalmasod&#xF3; b&#xFC;rokr&#xE1;ci&#xE1;t. Feszegeti azt a k&#xE9;rd&#xE9;st is, hogy vajon a maffiaszer&#x171;en m&#x171;k&#xF6;d&#x151; oligarch&#xE1;k ir&#xE1;ny&#xED;tj&#xE1;k-e t&#xE9;nylegesen Oroszorsz&#xE1;got, illetve azt, hogy mi a c&#xE1;r atyuska szerep&#xE9;t bet&#xF6;lt&#x151; Putyin var&#xE1;zs&#xE1;nak titka.</p> <p><a href="http://konyves.blog.hu/2014/09/08/mindenki_benne_van_anna_arutunyan_putyin-varazs" target="_blank">Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</a></p> <p style="text-align: right;"><strong>Szerz&#x151;:&#xA0;Di&#xF3;szegi-Horv&#xE1;th N&#xF3;ra</strong></p> <p style="text-align: right;">&#xA0;<em><span id="docs-internal-guid-e3e8a6be-02f5-97d0-7f87-82ef17091dcb">A cikk eredetileg a K&#xF6;nyvesMagazin t&#xE9;li sz&#xE1;m&#xE1;ban jelent meg.</span></em></p> <!-- <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:trackback="http://madskills.com/public/xml/rss/module/trackback/"><rdf:Description rdf:about="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:identifier="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:title="5 reg&eacute;ny, amib&#337;l jobban meg&eacute;rthetj&uuml;k Oroszorsz&aacute;got" dc:subject="Trackback" dc:description="Vlagyimir Putyin meglehet&#337;sen sz&#369;kszav&uacute;, ha irodalomr&oacute;l van sz&oacute;, annyit viszont tudni lehet, hogy a t&ouml;rt&eacute;nelem &eacute;s a filoz&oacute;fia kiemelten &eacute;rdekli, f&#337;k&eacute;nt ha olyan orosz kiv&aacute;l&oacute;s&aacute;gok &eacute;letrajz&aacute;r&oacute;l van sz.." dc:creator=".konyvesblog." dc:date="Tue, 20 Jan 2015 09:11:00 +0100" trackback:ping=""></rdf:Description></rdf:RDF> --> <div class="clear"></div>'}, 
{'id': 5, 'title': '5 regény, amibõl jobban megérthetjük Oroszországot','url': 'http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot','author': '.konyvesblog.','entry' :'<p dir="ltr"><span> 5 Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan orosz kiv&#xE1;l&#xF3;s&#xE1;gok &#xE9;letrajz&#xE1;r&#xF3;l van sz&#xF3;, mint Rettegett Iv&#xE1;n vagy &#xE9;ppen I. P&#xE9;ter c&#xE1;r. Ha k&#xE9;rdezik, megeml&#xED;ti, hogy a XI. sz&#xE1;zadi perzsa k&#xF6;lt&#x151;, Omar Khajj&#xE1;m l&#xED;r&#xE1;ja k&#xF6;zel &#xE1;ll a sz&#xED;v&#xE9;hez (kedves k&#xF6;tet&#xE9;t egy&#xE9;bk&#xE9;nt volt feles&#xE9;g&#xE9;t&#x151;l kapta), emellett list&#xE1;j&#xE1;n Ernest Hemingway, Jack London &#xE9;s Jules Verne is megfordult m&#xE1;r, hazafias &#xE9;rzelmeit pedig Tolsztoj &#xE9;s Dosztojevszkij sorol&#xE1;s&#xE1;val szokta letudni. Saj&#xE1;t bevall&#xE1;sa szerint kifejezetten &#xE9;lvezte Alexandre Dumas m&#x171;v&#xE9;t, </span><span>A h&#xE1;rom test&#x151;r</span><span>t, de &#xE1;ll&#xED;t&#xF3;lag egyszer, m&#xE9;g 2006-ban l&#xE1;tt&#xE1;k a fiatal &#xED;r&#xF3;, Zahar Prilepin egyik thriller&#xE9;t, a </span><span>Szankj&#xE1;</span><span>t is a kez&#xE9;ben. A hozz&#xE1; k&#xF6;zel &#xE1;ll&#xF3;k szerint viszont az eln&#xF6;k nem kifejezetten a bet&#x171;k szerelmese.</span></p> <p dir="ltr"><span>&#xC9;rdekes egy&#xE9;bk&#xE9;nt, hogy Putyin &#xED;zl&#xE9;se valamelyest lek&#xE9;pezi az orosz t&#xE1;rsadalom irodalmi &#xE9;rdekl&#x151;d&#xE9;s&#xE9;t is &#x2013; l&#xE9;tezik m&#xE1;r egy sz&#xE1;zas lista, amire b&#xE1;rki szavazhat a <a href="http://www.100bestbooks.ru/" target="_blank">100bestbooks.ru</a> oldalon, jelenleg a lista els&#x151; hely&#xE9;n Bulgakov &#xE1;ll &#xE9;s </span><span>A Mester &#xE9;s Margarita</span><span>, a top 10-ben Tolsztoj k&#xE9;tszer, Dosztojevszkij h&#xE1;romszor szerepel, Dumas Putyin &#xE1;ltal is kedvelt m&#x171;ve viszont kicsit lecs&#xFA;szott, az 55. helyen fesz&#xED;t jelenleg. </span></p> <p dir="ltr"><span>Mutatunk &#xF6;t k&#xF6;nyvet, ami val&#xF3;sz&#xED;n&#x171;leg soha nem ker&#xFC;l fel a&#xA0;<span>f&#xE9;nyes homlok&#xFA;&#xA0;</span><span>KGB</span><span>-tiszt kedvenceinek list&#xE1;j&#xE1;ra, de kicsit jobban meg&#xE9;rthet&#x151; bel&#x151;l&#xFC;k, hogy milyen is keleti bar&#xE1;taink &#xE9;lete.&#xA0;</span></span></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_39849_masolata.jpg" alt="covers_39849_masolata.jpg" class="imgleft" width="251" height="391">Vlagyimir Szorokin: Az opricsnyik egy napja</strong></p> <p dir="ltr"><span>2028-ban Oroszorsz&#xE1;gban gy&#x151;z&#xF6;tt a nemzeti eszme, &#xE9;s visszat&#xE9;r Rettegett Iv&#xE1;n modellje. A Nyugati Fal m&#xF6;g&#xF6;tt ism&#xE9;t a c&#xE1;r atyuska az &#xFA;r, minden nyugati szabads&#xE1;gjogot elt&#xF6;r&#xF6;ltek, &#xE9;s m&#x171;k&#xF6;dik az opricsnyina, a mag&#xE1;nhadsereg, amelynek legf&#x151;bb feladata a k&#xF6;ny&#xF6;rtelen b&#xFC;ntet&#xE9;s. A reg&#xE9;ny egy Komjaga nev&#x171; opricsnyik egy napj&#xE1;t mes&#xE9;li el, aki lecsillap&#xED;tva k&#xED;nz&#xF3; m&#xE1;snaposs&#xE1;g&#xE1;t elindul a szok&#xE1;sos napi feny&#xED;t&#x151; k&#xF6;r&#xFA;tj&#xE1;ra. Szorokin sz&#xFC;rre&#xE1;lis, kegyetlen reg&#xE9;nye egy&#xE9;bk&#xE9;nt Szolzsenyicin h&#xED;res l&#xE1;gerreg&#xE9;ny&#xE9;nek, az Ivan Gyenyiszovics egy napj&#xE1;nak a parodisztikus parafr&#xE1;zisa. B&#xE1;r a szerz&#x151; tagadta, hogy Putyin rendszer&#xE9;r&#x151;l &#xED;rta volna m&#x171;v&#xE9;t, az orosz viszonyokat ismerve lehetetlen nem gondolni arra, hogy val&#xF3;j&#xE1;ban a jelenkori Oroszorsz&#xE1;g szat&#xED;r&#xE1;ja ez a reg&#xE9;ny.</span></p> <p dir="ltr"><a href="http://Dmitry%20Glukhovsky A posztapokaliptikus irodalom mindent elt&#xF6;r&#xF6;l" target="_blank"><span>Interj&#xFA;nk Vlagyimir Szorokinnal&gt;&gt;</span></a></p> <p><a id="more7089193" name="more7089193"></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2015/01/12/szorokin_az_orosz_lelek_tomjen_ho_es_ver" target="_blank"><span><br class="kix-line-break"></span></a><strong>Dmitrij Bikov: ZSD &#x2013; avagy ki&#xE9; Oroszorsz&#xE1;g</strong></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_90505_masolata.jpg" alt="covers_90505_masolata.jpg" class="imgright" width="251" height="371"></strong><span>A monument&#xE1;lis, csaknem egykil&#xF3;s, 745 oldalas reg&#xE9;ny szint&#xE9;n a j&#xF6;v&#x151;ben j&#xE1;tsz&#xF3;dik. M&#xE9;ghozz&#xE1; egy olyan vil&#xE1;gban, ahol az orsz&#xE1;g bels&#x151; etnikai fesz&#xFC;lts&#xE9;gei felsz&#xED;nre t&#xF6;rnek, &#xE9;s v&#xE9;res h&#xE1;bor&#xFA; robban ki a var&#xE9;gok &#xE9;s a kaz&#xE1;rok k&#xF6;z&#xF6;tt. A harc m&#xE1;r az elej&#xE9;t&#x151;l fogva &#xE9;rtelmetlen, de t&#xF6;rt&#xE9;nelmi m&#xED;toszok &#xE9;s babon&#xE1;k m&#xE1;r teljesen rabul ejtett&#xE9;k az egym&#xE1;s kiirt&#xE1;s&#xE1;n f&#xE1;radoz&#xF3; feleket, mik&#xF6;zben a t&#xF6;rzs&#xF6;k&#xF6;s lakoss&#xE1;g v&#xE1;rja, hogy a szemben &#xE1;ll&#xF3; &#x151;sellens&#xE9;gek v&#xE9;gre d&#xF6;nt&#xE9;sre vigy&#xE9;k a h&#xE1;bor&#xFA;t. Bikov nem hi&#xE1;ba dolgozott egy &#xE9;vtizeden &#xE1;t a reg&#xE9;nyen, hiszen a ZSD val&#xF3;s&#xE1;gos kultk&#xF6;nyv lett, &#xE9;s minden bizonnyal az egyik legk&#xFC;l&#xF6;nlegesebb &#xE9;s leghumorosabb ut&#xF3;pia az ut&#xF3;bbi &#xE9;vekben, amely minden t&#xFA;lz&#xE1;sa ellen&#xE9;re m&#xE9;gis r&#xE1;mutat arra a t&#xE9;nyre, hogy a jelenkor Oroszorsz&#xE1;g&#xE1;ban milyen puszt&#xED;t&#xF3; erej&#x171; etnikai ellent&#xE9;tek fesz&#xFC;lnek.</span><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/viktor-pelevin-p51.jpg" alt="viktor-pelevin-p51.jpg" class="imgleft open-in-modal" width="251" height="410">Viktor Pelevin: P5 -&#xA0;Pindoszt&#xE1;n politikai pigmeusai</strong></p> <p dir="ltr"><span>Az orosz szt&#xE1;rszerz&#x151; &#xF6;t elbesz&#xE9;l&#xE9;s&#xE9;t egybegy&#x171;jt&#x151; k&#xF6;tet bor&#xED;t&#xF3;j&#xE1;n nem v&#xE9;letlen&#xFC;l &#xE9;keskedik az </span><span>Igaz t&#xF6;rt&#xE9;net alapj&#xE1;n</span><span> felirat. Az elk&#xE9;peszt&#x151; fant&#xE1;zi&#xE1;j&#xFA; Pelevin a </span><span>Pindoszt&#xE1;n politikai pigmeusai &#x2013; P&#xE1;, pederaszt&#xE1;k</span><span> alc&#xED;m&#x171; k&#xF6;nyv&#xE9;ben minden benne van, ami&#xE9;rt az &#xED;r&#xF3;t im&#xE1;dni vagy &#xE9;ppen ut&#xE1;lni lehet: a csavaros, groteszk t&#xF6;rt&#xE9;netek sz&#xED;nhelye minden v&#xE1;ratlan &#xE9;s hihetetlen fordulat ellen&#xE9;re a jelenkori Oroszorsz&#xE1;g. Az oligarch&#xE1;k uralta vil&#xE1;gban nemcsak a hatalom, de a bulv&#xE1;rm&#xE9;dia &#xE9;s annak kritika n&#xE9;lk&#xFC;li fogyaszt&#xF3;i is pelleng&#xE9;re &#xE1;ll&#xED;ttatnak. Mindehhez persze n&#xE9;lk&#xFC;l&#xF6;zhetetlen a Pelevinre mindig is jellemz&#x151; cybervil&#xE1;g, no &#xE9;s n&#xE9;mi keleti filoz&#xF3;fia.</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2010/09/07/pelevin_p5" target="_blank"><span><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></span></a></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/859607_5_masolata.jpg" alt="859607_5_masolata.jpg" class="imgright" width="250" height="370">Dmitry Glukhovsky: Orosz n&#xE9;pellenes mes&#xE9;k</strong><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><span>Miut&#xE1;n az orosz fantasztikus irodalom egyik legn&#xE9;pszer&#x171;bb szerz&#x151;je diszkr&#xE9;ten visszautas&#xED;totta a felk&#xE9;r&#xE9;st, hogy vegye &#xE1;t Nyikita Mihalkov hely&#xE9;t Putyin tan&#xE1;csad&#xF3; bizotts&#xE1;g&#xE1;ban, gyorsan tett r&#xF3;la, hogy a hatalomnak m&#xE9;g egyszer esz&#xE9;be se jusson a neve, ha loj&#xE1;lis &#xE9;rtelmis&#xE9;git keresnek. Ezzel a k&#xF6;tettel Glukhovsky sikeresen bizony&#xED;tja, hogy nemcsak a sci-fi m&#x171;faj&#xE1;ban k&#xE9;pes nagyot alkotni. A n&#xE9;pellenes mes&#xE9;kben pontosan mutatja be a korrupci&#xF3;val &#xE1;tsz&#x151;tt orosz mindennapokat. Az &#xE1;llami szint&#x171; n&#xE9;pbut&#xED;t&#xE1;st, a tekint&#xE9;lyelv&#x171;s&#xE9;g elfogad&#xE1;s&#xE1;t le&#xED;r&#xF3; t&#xF6;rt&#xE9;netekb&#x151;l term&#xE9;szetesen nem hi&#xE1;nyozhatnak az&#xE9;rt a szerz&#x151;re jellemz&#x151; fantasztikus elemek sem, de mindezek t&#xF6;k&#xE9;letesen illeszkednek a nagyon is hihet&#x151; elbesz&#xE9;l&#xE9;sek cselekm&#xE9;ny&#xE9;be.&#xA0;</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_nepellenes_mesek" target="_blank"><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_647" target="_blank"><span>Interj&#xFA;nk&#xA0;Dmitry Glukhovskyval&gt;&gt;</span></a></p> <p><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/735666f_masolata.gif" alt="735666f_masolata.gif" class="imgleft" width="249" height="351">Anna Arutunyan: A Putyin-var&#xE1;zs</strong></p> <p>Az orosz-amerikai &#xFA;js&#xE1;g&#xED;r&#xF3; hossz&#xFA; ideje igyekszik meg&#xE9;rteni a jelenlegi orosz rendszer &#xE9;s az eln&#xF6;k titk&#xE1;t. Nem egyszer&#x171;en egy politikus &#xE9;letrajz&#xE1;t &#xED;rja meg ebben a k&#xF6;nyv&#xE9;ben, hanem t&#xF6;rt&#xE9;nelmi tapasztalatokb&#xF3;l pr&#xF3;b&#xE1;lja felfejteni a l&#xE1;tszatdemokr&#xE1;cia m&#x171;k&#xF6;d&#xE9;s&#xE9;nek logik&#xE1;j&#xE1;t, bemutatni a mindent &#xE1;tsz&#xF6;v&#x151; korrupci&#xF3;t, az elhatalmasod&#xF3; b&#xFC;rokr&#xE1;ci&#xE1;t. Feszegeti azt a k&#xE9;rd&#xE9;st is, hogy vajon a maffiaszer&#x171;en m&#x171;k&#xF6;d&#x151; oligarch&#xE1;k ir&#xE1;ny&#xED;tj&#xE1;k-e t&#xE9;nylegesen Oroszorsz&#xE1;got, illetve azt, hogy mi a c&#xE1;r atyuska szerep&#xE9;t bet&#xF6;lt&#x151; Putyin var&#xE1;zs&#xE1;nak titka.</p> <p><a href="http://konyves.blog.hu/2014/09/08/mindenki_benne_van_anna_arutunyan_putyin-varazs" target="_blank">Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</a></p> <p style="text-align: right;"><strong>Szerz&#x151;:&#xA0;Di&#xF3;szegi-Horv&#xE1;th N&#xF3;ra</strong></p> <p style="text-align: right;">&#xA0;<em><span id="docs-internal-guid-e3e8a6be-02f5-97d0-7f87-82ef17091dcb">A cikk eredetileg a K&#xF6;nyvesMagazin t&#xE9;li sz&#xE1;m&#xE1;ban jelent meg.</span></em></p> <!-- <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:trackback="http://madskills.com/public/xml/rss/module/trackback/"><rdf:Description rdf:about="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:identifier="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:title="5 reg&eacute;ny, amib&#337;l jobban meg&eacute;rthetj&uuml;k Oroszorsz&aacute;got" dc:subject="Trackback" dc:description="Vlagyimir Putyin meglehet&#337;sen sz&#369;kszav&uacute;, ha irodalomr&oacute;l van sz&oacute;, annyit viszont tudni lehet, hogy a t&ouml;rt&eacute;nelem &eacute;s a filoz&oacute;fia kiemelten &eacute;rdekli, f&#337;k&eacute;nt ha olyan orosz kiv&aacute;l&oacute;s&aacute;gok &eacute;letrajz&aacute;r&oacute;l van sz.." dc:creator=".konyvesblog." dc:date="Tue, 20 Jan 2015 09:11:00 +0100" trackback:ping=""></rdf:Description></rdf:RDF> --> <div class="clear"></div>'},
{'id': 6, 'title': '6 regény, amibõl jobban megérthetjük Oroszországot','url': 'http://konyves.blog.hu/2015/01/20/6_regeny_amibol_jobban_megerthetjuk_oroszorszagot','author': '.konyvesblog.','entry' :'<p dir="ltr"><span> 6 Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan orosz kiv&#xE1;l&#xF3;s&#xE1;gok &#xE9;letrajz&#xE1;r&#xF3;l van sz&#xF3;, mint Rettegett Iv&#xE1;n vagy &#xE9;ppen I. P&#xE9;ter c&#xE1;r. Ha k&#xE9;rdezik, megeml&#xED;ti, hogy a XI. sz&#xE1;zadi perzsa k&#xF6;lt&#x151;, Omar Khajj&#xE1;m l&#xED;r&#xE1;ja k&#xF6;zel &#xE1;ll a sz&#xED;v&#xE9;hez (kedves k&#xF6;tet&#xE9;t egy&#xE9;bk&#xE9;nt volt feles&#xE9;g&#xE9;t&#x151;l kapta), emellett list&#xE1;j&#xE1;n Ernest Hemingway, Jack London &#xE9;s Jules Verne is megfordult m&#xE1;r, hazafias &#xE9;rzelmeit pedig Tolsztoj &#xE9;s Dosztojevszkij sorol&#xE1;s&#xE1;val szokta letudni. Saj&#xE1;t bevall&#xE1;sa szerint kifejezetten &#xE9;lvezte Alexandre Dumas m&#x171;v&#xE9;t, </span><span>A h&#xE1;rom test&#x151;r</span><span>t, de &#xE1;ll&#xED;t&#xF3;lag egyszer, m&#xE9;g 2006-ban l&#xE1;tt&#xE1;k a fiatal &#xED;r&#xF3;, Zahar Prilepin egyik thriller&#xE9;t, a </span><span>Szankj&#xE1;</span><span>t is a kez&#xE9;ben. A hozz&#xE1; k&#xF6;zel &#xE1;ll&#xF3;k szerint viszont az eln&#xF6;k nem kifejezetten a bet&#x171;k szerelmese.</span></p> <p dir="ltr"><span>&#xC9;rdekes egy&#xE9;bk&#xE9;nt, hogy Putyin &#xED;zl&#xE9;se valamelyest lek&#xE9;pezi az orosz t&#xE1;rsadalom irodalmi &#xE9;rdekl&#x151;d&#xE9;s&#xE9;t is &#x2013; l&#xE9;tezik m&#xE1;r egy sz&#xE1;zas lista, amire b&#xE1;rki szavazhat a <a href="http://www.100bestbooks.ru/" target="_blank">100bestbooks.ru</a> oldalon, jelenleg a lista els&#x151; hely&#xE9;n Bulgakov &#xE1;ll &#xE9;s </span><span>A Mester &#xE9;s Margarita</span><span>, a top 10-ben Tolsztoj k&#xE9;tszer, Dosztojevszkij h&#xE1;romszor szerepel, Dumas Putyin &#xE1;ltal is kedvelt m&#x171;ve viszont kicsit lecs&#xFA;szott, az 55. helyen fesz&#xED;t jelenleg. </span></p> <p dir="ltr"><span>Mutatunk &#xF6;t k&#xF6;nyvet, ami val&#xF3;sz&#xED;n&#x171;leg soha nem ker&#xFC;l fel a&#xA0;<span>f&#xE9;nyes homlok&#xFA;&#xA0;</span><span>KGB</span><span>-tiszt kedvenceinek list&#xE1;j&#xE1;ra, de kicsit jobban meg&#xE9;rthet&#x151; bel&#x151;l&#xFC;k, hogy milyen is keleti bar&#xE1;taink &#xE9;lete.&#xA0;</span></span></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_39849_masolata.jpg" alt="covers_39849_masolata.jpg" class="imgleft" width="251" height="391">Vlagyimir Szorokin: Az opricsnyik egy napja</strong></p> <p dir="ltr"><span>2028-ban Oroszorsz&#xE1;gban gy&#x151;z&#xF6;tt a nemzeti eszme, &#xE9;s visszat&#xE9;r Rettegett Iv&#xE1;n modellje. A Nyugati Fal m&#xF6;g&#xF6;tt ism&#xE9;t a c&#xE1;r atyuska az &#xFA;r, minden nyugati szabads&#xE1;gjogot elt&#xF6;r&#xF6;ltek, &#xE9;s m&#x171;k&#xF6;dik az opricsnyina, a mag&#xE1;nhadsereg, amelynek legf&#x151;bb feladata a k&#xF6;ny&#xF6;rtelen b&#xFC;ntet&#xE9;s. A reg&#xE9;ny egy Komjaga nev&#x171; opricsnyik egy napj&#xE1;t mes&#xE9;li el, aki lecsillap&#xED;tva k&#xED;nz&#xF3; m&#xE1;snaposs&#xE1;g&#xE1;t elindul a szok&#xE1;sos napi feny&#xED;t&#x151; k&#xF6;r&#xFA;tj&#xE1;ra. Szorokin sz&#xFC;rre&#xE1;lis, kegyetlen reg&#xE9;nye egy&#xE9;bk&#xE9;nt Szolzsenyicin h&#xED;res l&#xE1;gerreg&#xE9;ny&#xE9;nek, az Ivan Gyenyiszovics egy napj&#xE1;nak a parodisztikus parafr&#xE1;zisa. B&#xE1;r a szerz&#x151; tagadta, hogy Putyin rendszer&#xE9;r&#x151;l &#xED;rta volna m&#x171;v&#xE9;t, az orosz viszonyokat ismerve lehetetlen nem gondolni arra, hogy val&#xF3;j&#xE1;ban a jelenkori Oroszorsz&#xE1;g szat&#xED;r&#xE1;ja ez a reg&#xE9;ny.</span></p> <p dir="ltr"><a href="http://Dmitry%20Glukhovsky A posztapokaliptikus irodalom mindent elt&#xF6;r&#xF6;l" target="_blank"><span>Interj&#xFA;nk Vlagyimir Szorokinnal&gt;&gt;</span></a></p> <p><a id="more7089193" name="more7089193"></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2015/01/12/szorokin_az_orosz_lelek_tomjen_ho_es_ver" target="_blank"><span><br class="kix-line-break"></span></a><strong>Dmitrij Bikov: ZSD &#x2013; avagy ki&#xE9; Oroszorsz&#xE1;g</strong></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_90505_masolata.jpg" alt="covers_90505_masolata.jpg" class="imgright" width="251" height="371"></strong><span>A monument&#xE1;lis, csaknem egykil&#xF3;s, 745 oldalas reg&#xE9;ny szint&#xE9;n a j&#xF6;v&#x151;ben j&#xE1;tsz&#xF3;dik. M&#xE9;ghozz&#xE1; egy olyan vil&#xE1;gban, ahol az orsz&#xE1;g bels&#x151; etnikai fesz&#xFC;lts&#xE9;gei felsz&#xED;nre t&#xF6;rnek, &#xE9;s v&#xE9;res h&#xE1;bor&#xFA; robban ki a var&#xE9;gok &#xE9;s a kaz&#xE1;rok k&#xF6;z&#xF6;tt. A harc m&#xE1;r az elej&#xE9;t&#x151;l fogva &#xE9;rtelmetlen, de t&#xF6;rt&#xE9;nelmi m&#xED;toszok &#xE9;s babon&#xE1;k m&#xE1;r teljesen rabul ejtett&#xE9;k az egym&#xE1;s kiirt&#xE1;s&#xE1;n f&#xE1;radoz&#xF3; feleket, mik&#xF6;zben a t&#xF6;rzs&#xF6;k&#xF6;s lakoss&#xE1;g v&#xE1;rja, hogy a szemben &#xE1;ll&#xF3; &#x151;sellens&#xE9;gek v&#xE9;gre d&#xF6;nt&#xE9;sre vigy&#xE9;k a h&#xE1;bor&#xFA;t. Bikov nem hi&#xE1;ba dolgozott egy &#xE9;vtizeden &#xE1;t a reg&#xE9;nyen, hiszen a ZSD val&#xF3;s&#xE1;gos kultk&#xF6;nyv lett, &#xE9;s minden bizonnyal az egyik legk&#xFC;l&#xF6;nlegesebb &#xE9;s leghumorosabb ut&#xF3;pia az ut&#xF3;bbi &#xE9;vekben, amely minden t&#xFA;lz&#xE1;sa ellen&#xE9;re m&#xE9;gis r&#xE1;mutat arra a t&#xE9;nyre, hogy a jelenkor Oroszorsz&#xE1;g&#xE1;ban milyen puszt&#xED;t&#xF3; erej&#x171; etnikai ellent&#xE9;tek fesz&#xFC;lnek.</span><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/viktor-pelevin-p51.jpg" alt="viktor-pelevin-p51.jpg" class="imgleft open-in-modal" width="251" height="410">Viktor Pelevin: P5 -&#xA0;Pindoszt&#xE1;n politikai pigmeusai</strong></p> <p dir="ltr"><span>Az orosz szt&#xE1;rszerz&#x151; &#xF6;t elbesz&#xE9;l&#xE9;s&#xE9;t egybegy&#x171;jt&#x151; k&#xF6;tet bor&#xED;t&#xF3;j&#xE1;n nem v&#xE9;letlen&#xFC;l &#xE9;keskedik az </span><span>Igaz t&#xF6;rt&#xE9;net alapj&#xE1;n</span><span> felirat. Az elk&#xE9;peszt&#x151; fant&#xE1;zi&#xE1;j&#xFA; Pelevin a </span><span>Pindoszt&#xE1;n politikai pigmeusai &#x2013; P&#xE1;, pederaszt&#xE1;k</span><span> alc&#xED;m&#x171; k&#xF6;nyv&#xE9;ben minden benne van, ami&#xE9;rt az &#xED;r&#xF3;t im&#xE1;dni vagy &#xE9;ppen ut&#xE1;lni lehet: a csavaros, groteszk t&#xF6;rt&#xE9;netek sz&#xED;nhelye minden v&#xE1;ratlan &#xE9;s hihetetlen fordulat ellen&#xE9;re a jelenkori Oroszorsz&#xE1;g. Az oligarch&#xE1;k uralta vil&#xE1;gban nemcsak a hatalom, de a bulv&#xE1;rm&#xE9;dia &#xE9;s annak kritika n&#xE9;lk&#xFC;li fogyaszt&#xF3;i is pelleng&#xE9;re &#xE1;ll&#xED;ttatnak. Mindehhez persze n&#xE9;lk&#xFC;l&#xF6;zhetetlen a Pelevinre mindig is jellemz&#x151; cybervil&#xE1;g, no &#xE9;s n&#xE9;mi keleti filoz&#xF3;fia.</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2010/09/07/pelevin_p5" target="_blank"><span><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></span></a></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/859607_5_masolata.jpg" alt="859607_5_masolata.jpg" class="imgright" width="250" height="370">Dmitry Glukhovsky: Orosz n&#xE9;pellenes mes&#xE9;k</strong><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><span>Miut&#xE1;n az orosz fantasztikus irodalom egyik legn&#xE9;pszer&#x171;bb szerz&#x151;je diszkr&#xE9;ten visszautas&#xED;totta a felk&#xE9;r&#xE9;st, hogy vegye &#xE1;t Nyikita Mihalkov hely&#xE9;t Putyin tan&#xE1;csad&#xF3; bizotts&#xE1;g&#xE1;ban, gyorsan tett r&#xF3;la, hogy a hatalomnak m&#xE9;g egyszer esz&#xE9;be se jusson a neve, ha loj&#xE1;lis &#xE9;rtelmis&#xE9;git keresnek. Ezzel a k&#xF6;tettel Glukhovsky sikeresen bizony&#xED;tja, hogy nemcsak a sci-fi m&#x171;faj&#xE1;ban k&#xE9;pes nagyot alkotni. A n&#xE9;pellenes mes&#xE9;kben pontosan mutatja be a korrupci&#xF3;val &#xE1;tsz&#x151;tt orosz mindennapokat. Az &#xE1;llami szint&#x171; n&#xE9;pbut&#xED;t&#xE1;st, a tekint&#xE9;lyelv&#x171;s&#xE9;g elfogad&#xE1;s&#xE1;t le&#xED;r&#xF3; t&#xF6;rt&#xE9;netekb&#x151;l term&#xE9;szetesen nem hi&#xE1;nyozhatnak az&#xE9;rt a szerz&#x151;re jellemz&#x151; fantasztikus elemek sem, de mindezek t&#xF6;k&#xE9;letesen illeszkednek a nagyon is hihet&#x151; elbesz&#xE9;l&#xE9;sek cselekm&#xE9;ny&#xE9;be.&#xA0;</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_nepellenes_mesek" target="_blank"><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_647" target="_blank"><span>Interj&#xFA;nk&#xA0;Dmitry Glukhovskyval&gt;&gt;</span></a></p> <p><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/735666f_masolata.gif" alt="735666f_masolata.gif" class="imgleft" width="249" height="351">Anna Arutunyan: A Putyin-var&#xE1;zs</strong></p> <p>Az orosz-amerikai &#xFA;js&#xE1;g&#xED;r&#xF3; hossz&#xFA; ideje igyekszik meg&#xE9;rteni a jelenlegi orosz rendszer &#xE9;s az eln&#xF6;k titk&#xE1;t. Nem egyszer&#x171;en egy politikus &#xE9;letrajz&#xE1;t &#xED;rja meg ebben a k&#xF6;nyv&#xE9;ben, hanem t&#xF6;rt&#xE9;nelmi tapasztalatokb&#xF3;l pr&#xF3;b&#xE1;lja felfejteni a l&#xE1;tszatdemokr&#xE1;cia m&#x171;k&#xF6;d&#xE9;s&#xE9;nek logik&#xE1;j&#xE1;t, bemutatni a mindent &#xE1;tsz&#xF6;v&#x151; korrupci&#xF3;t, az elhatalmasod&#xF3; b&#xFC;rokr&#xE1;ci&#xE1;t. Feszegeti azt a k&#xE9;rd&#xE9;st is, hogy vajon a maffiaszer&#x171;en m&#x171;k&#xF6;d&#x151; oligarch&#xE1;k ir&#xE1;ny&#xED;tj&#xE1;k-e t&#xE9;nylegesen Oroszorsz&#xE1;got, illetve azt, hogy mi a c&#xE1;r atyuska szerep&#xE9;t bet&#xF6;lt&#x151; Putyin var&#xE1;zs&#xE1;nak titka.</p> <p><a href="http://konyves.blog.hu/2014/09/08/mindenki_benne_van_anna_arutunyan_putyin-varazs" target="_blank">Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</a></p> <p style="text-align: right;"><strong>Szerz&#x151;:&#xA0;Di&#xF3;szegi-Horv&#xE1;th N&#xF3;ra</strong></p> <p style="text-align: right;">&#xA0;<em><span id="docs-internal-guid-e3e8a6be-02f5-97d0-7f87-82ef17091dcb">A cikk eredetileg a K&#xF6;nyvesMagazin t&#xE9;li sz&#xE1;m&#xE1;ban jelent meg.</span></em></p> <!-- <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:trackback="http://madskills.com/public/xml/rss/module/trackback/"><rdf:Description rdf:about="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:identifier="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:title="5 reg&eacute;ny, amib&#337;l jobban meg&eacute;rthetj&uuml;k Oroszorsz&aacute;got" dc:subject="Trackback" dc:description="Vlagyimir Putyin meglehet&#337;sen sz&#369;kszav&uacute;, ha irodalomr&oacute;l van sz&oacute;, annyit viszont tudni lehet, hogy a t&ouml;rt&eacute;nelem &eacute;s a filoz&oacute;fia kiemelten &eacute;rdekli, f&#337;k&eacute;nt ha olyan orosz kiv&aacute;l&oacute;s&aacute;gok &eacute;letrajz&aacute;r&oacute;l van sz.." dc:creator=".konyvesblog." dc:date="Tue, 20 Jan 2015 09:11:00 +0100" trackback:ping=""></rdf:Description></rdf:RDF> --> <div class="clear"></div>'},  
{'id': 7, 'title': '7 regény, amibõl jobban megérthetjük Oroszországot','url': 'http://konyves.blog.hu/2015/01/20/7_regeny_amibol_jobban_megerthetjuk_oroszorszagot','author': '.konyvesblog.','entry' :'<p dir="ltr"><span> 7 Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan orosz kiv&#xE1;l&#xF3;s&#xE1;gok &#xE9;letrajz&#xE1;r&#xF3;l van sz&#xF3;, mint Rettegett Iv&#xE1;n vagy &#xE9;ppen I. P&#xE9;ter c&#xE1;r. Ha k&#xE9;rdezik, megeml&#xED;ti, hogy a XI. sz&#xE1;zadi perzsa k&#xF6;lt&#x151;, Omar Khajj&#xE1;m l&#xED;r&#xE1;ja k&#xF6;zel &#xE1;ll a sz&#xED;v&#xE9;hez (kedves k&#xF6;tet&#xE9;t egy&#xE9;bk&#xE9;nt volt feles&#xE9;g&#xE9;t&#x151;l kapta), emellett list&#xE1;j&#xE1;n Ernest Hemingway, Jack London &#xE9;s Jules Verne is megfordult m&#xE1;r, hazafias &#xE9;rzelmeit pedig Tolsztoj &#xE9;s Dosztojevszkij sorol&#xE1;s&#xE1;val szokta letudni. Saj&#xE1;t bevall&#xE1;sa szerint kifejezetten &#xE9;lvezte Alexandre Dumas m&#x171;v&#xE9;t, </span><span>A h&#xE1;rom test&#x151;r</span><span>t, de &#xE1;ll&#xED;t&#xF3;lag egyszer, m&#xE9;g 2006-ban l&#xE1;tt&#xE1;k a fiatal &#xED;r&#xF3;, Zahar Prilepin egyik thriller&#xE9;t, a </span><span>Szankj&#xE1;</span><span>t is a kez&#xE9;ben. A hozz&#xE1; k&#xF6;zel &#xE1;ll&#xF3;k szerint viszont az eln&#xF6;k nem kifejezetten a bet&#x171;k szerelmese.</span></p> <p dir="ltr"><span>&#xC9;rdekes egy&#xE9;bk&#xE9;nt, hogy Putyin &#xED;zl&#xE9;se valamelyest lek&#xE9;pezi az orosz t&#xE1;rsadalom irodalmi &#xE9;rdekl&#x151;d&#xE9;s&#xE9;t is &#x2013; l&#xE9;tezik m&#xE1;r egy sz&#xE1;zas lista, amire b&#xE1;rki szavazhat a <a href="http://www.100bestbooks.ru/" target="_blank">100bestbooks.ru</a> oldalon, jelenleg a lista els&#x151; hely&#xE9;n Bulgakov &#xE1;ll &#xE9;s </span><span>A Mester &#xE9;s Margarita</span><span>, a top 10-ben Tolsztoj k&#xE9;tszer, Dosztojevszkij h&#xE1;romszor szerepel, Dumas Putyin &#xE1;ltal is kedvelt m&#x171;ve viszont kicsit lecs&#xFA;szott, az 55. helyen fesz&#xED;t jelenleg. </span></p> <p dir="ltr"><span>Mutatunk &#xF6;t k&#xF6;nyvet, ami val&#xF3;sz&#xED;n&#x171;leg soha nem ker&#xFC;l fel a&#xA0;<span>f&#xE9;nyes homlok&#xFA;&#xA0;</span><span>KGB</span><span>-tiszt kedvenceinek list&#xE1;j&#xE1;ra, de kicsit jobban meg&#xE9;rthet&#x151; bel&#x151;l&#xFC;k, hogy milyen is keleti bar&#xE1;taink &#xE9;lete.&#xA0;</span></span></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_39849_masolata.jpg" alt="covers_39849_masolata.jpg" class="imgleft" width="251" height="391">Vlagyimir Szorokin: Az opricsnyik egy napja</strong></p> <p dir="ltr"><span>2028-ban Oroszorsz&#xE1;gban gy&#x151;z&#xF6;tt a nemzeti eszme, &#xE9;s visszat&#xE9;r Rettegett Iv&#xE1;n modellje. A Nyugati Fal m&#xF6;g&#xF6;tt ism&#xE9;t a c&#xE1;r atyuska az &#xFA;r, minden nyugati szabads&#xE1;gjogot elt&#xF6;r&#xF6;ltek, &#xE9;s m&#x171;k&#xF6;dik az opricsnyina, a mag&#xE1;nhadsereg, amelynek legf&#x151;bb feladata a k&#xF6;ny&#xF6;rtelen b&#xFC;ntet&#xE9;s. A reg&#xE9;ny egy Komjaga nev&#x171; opricsnyik egy napj&#xE1;t mes&#xE9;li el, aki lecsillap&#xED;tva k&#xED;nz&#xF3; m&#xE1;snaposs&#xE1;g&#xE1;t elindul a szok&#xE1;sos napi feny&#xED;t&#x151; k&#xF6;r&#xFA;tj&#xE1;ra. Szorokin sz&#xFC;rre&#xE1;lis, kegyetlen reg&#xE9;nye egy&#xE9;bk&#xE9;nt Szolzsenyicin h&#xED;res l&#xE1;gerreg&#xE9;ny&#xE9;nek, az Ivan Gyenyiszovics egy napj&#xE1;nak a parodisztikus parafr&#xE1;zisa. B&#xE1;r a szerz&#x151; tagadta, hogy Putyin rendszer&#xE9;r&#x151;l &#xED;rta volna m&#x171;v&#xE9;t, az orosz viszonyokat ismerve lehetetlen nem gondolni arra, hogy val&#xF3;j&#xE1;ban a jelenkori Oroszorsz&#xE1;g szat&#xED;r&#xE1;ja ez a reg&#xE9;ny.</span></p> <p dir="ltr"><a href="http://Dmitry%20Glukhovsky A posztapokaliptikus irodalom mindent elt&#xF6;r&#xF6;l" target="_blank"><span>Interj&#xFA;nk Vlagyimir Szorokinnal&gt;&gt;</span></a></p> <p><a id="more7089193" name="more7089193"></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2015/01/12/szorokin_az_orosz_lelek_tomjen_ho_es_ver" target="_blank"><span><br class="kix-line-break"></span></a><strong>Dmitrij Bikov: ZSD &#x2013; avagy ki&#xE9; Oroszorsz&#xE1;g</strong></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_90505_masolata.jpg" alt="covers_90505_masolata.jpg" class="imgright" width="251" height="371"></strong><span>A monument&#xE1;lis, csaknem egykil&#xF3;s, 745 oldalas reg&#xE9;ny szint&#xE9;n a j&#xF6;v&#x151;ben j&#xE1;tsz&#xF3;dik. M&#xE9;ghozz&#xE1; egy olyan vil&#xE1;gban, ahol az orsz&#xE1;g bels&#x151; etnikai fesz&#xFC;lts&#xE9;gei felsz&#xED;nre t&#xF6;rnek, &#xE9;s v&#xE9;res h&#xE1;bor&#xFA; robban ki a var&#xE9;gok &#xE9;s a kaz&#xE1;rok k&#xF6;z&#xF6;tt. A harc m&#xE1;r az elej&#xE9;t&#x151;l fogva &#xE9;rtelmetlen, de t&#xF6;rt&#xE9;nelmi m&#xED;toszok &#xE9;s babon&#xE1;k m&#xE1;r teljesen rabul ejtett&#xE9;k az egym&#xE1;s kiirt&#xE1;s&#xE1;n f&#xE1;radoz&#xF3; feleket, mik&#xF6;zben a t&#xF6;rzs&#xF6;k&#xF6;s lakoss&#xE1;g v&#xE1;rja, hogy a szemben &#xE1;ll&#xF3; &#x151;sellens&#xE9;gek v&#xE9;gre d&#xF6;nt&#xE9;sre vigy&#xE9;k a h&#xE1;bor&#xFA;t. Bikov nem hi&#xE1;ba dolgozott egy &#xE9;vtizeden &#xE1;t a reg&#xE9;nyen, hiszen a ZSD val&#xF3;s&#xE1;gos kultk&#xF6;nyv lett, &#xE9;s minden bizonnyal az egyik legk&#xFC;l&#xF6;nlegesebb &#xE9;s leghumorosabb ut&#xF3;pia az ut&#xF3;bbi &#xE9;vekben, amely minden t&#xFA;lz&#xE1;sa ellen&#xE9;re m&#xE9;gis r&#xE1;mutat arra a t&#xE9;nyre, hogy a jelenkor Oroszorsz&#xE1;g&#xE1;ban milyen puszt&#xED;t&#xF3; erej&#x171; etnikai ellent&#xE9;tek fesz&#xFC;lnek.</span><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/viktor-pelevin-p51.jpg" alt="viktor-pelevin-p51.jpg" class="imgleft open-in-modal" width="251" height="410">Viktor Pelevin: P5 -&#xA0;Pindoszt&#xE1;n politikai pigmeusai</strong></p> <p dir="ltr"><span>Az orosz szt&#xE1;rszerz&#x151; &#xF6;t elbesz&#xE9;l&#xE9;s&#xE9;t egybegy&#x171;jt&#x151; k&#xF6;tet bor&#xED;t&#xF3;j&#xE1;n nem v&#xE9;letlen&#xFC;l &#xE9;keskedik az </span><span>Igaz t&#xF6;rt&#xE9;net alapj&#xE1;n</span><span> felirat. Az elk&#xE9;peszt&#x151; fant&#xE1;zi&#xE1;j&#xFA; Pelevin a </span><span>Pindoszt&#xE1;n politikai pigmeusai &#x2013; P&#xE1;, pederaszt&#xE1;k</span><span> alc&#xED;m&#x171; k&#xF6;nyv&#xE9;ben minden benne van, ami&#xE9;rt az &#xED;r&#xF3;t im&#xE1;dni vagy &#xE9;ppen ut&#xE1;lni lehet: a csavaros, groteszk t&#xF6;rt&#xE9;netek sz&#xED;nhelye minden v&#xE1;ratlan &#xE9;s hihetetlen fordulat ellen&#xE9;re a jelenkori Oroszorsz&#xE1;g. Az oligarch&#xE1;k uralta vil&#xE1;gban nemcsak a hatalom, de a bulv&#xE1;rm&#xE9;dia &#xE9;s annak kritika n&#xE9;lk&#xFC;li fogyaszt&#xF3;i is pelleng&#xE9;re &#xE1;ll&#xED;ttatnak. Mindehhez persze n&#xE9;lk&#xFC;l&#xF6;zhetetlen a Pelevinre mindig is jellemz&#x151; cybervil&#xE1;g, no &#xE9;s n&#xE9;mi keleti filoz&#xF3;fia.</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2010/09/07/pelevin_p5" target="_blank"><span><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></span></a></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/859607_5_masolata.jpg" alt="859607_5_masolata.jpg" class="imgright" width="250" height="370">Dmitry Glukhovsky: Orosz n&#xE9;pellenes mes&#xE9;k</strong><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><span>Miut&#xE1;n az orosz fantasztikus irodalom egyik legn&#xE9;pszer&#x171;bb szerz&#x151;je diszkr&#xE9;ten visszautas&#xED;totta a felk&#xE9;r&#xE9;st, hogy vegye &#xE1;t Nyikita Mihalkov hely&#xE9;t Putyin tan&#xE1;csad&#xF3; bizotts&#xE1;g&#xE1;ban, gyorsan tett r&#xF3;la, hogy a hatalomnak m&#xE9;g egyszer esz&#xE9;be se jusson a neve, ha loj&#xE1;lis &#xE9;rtelmis&#xE9;git keresnek. Ezzel a k&#xF6;tettel Glukhovsky sikeresen bizony&#xED;tja, hogy nemcsak a sci-fi m&#x171;faj&#xE1;ban k&#xE9;pes nagyot alkotni. A n&#xE9;pellenes mes&#xE9;kben pontosan mutatja be a korrupci&#xF3;val &#xE1;tsz&#x151;tt orosz mindennapokat. Az &#xE1;llami szint&#x171; n&#xE9;pbut&#xED;t&#xE1;st, a tekint&#xE9;lyelv&#x171;s&#xE9;g elfogad&#xE1;s&#xE1;t le&#xED;r&#xF3; t&#xF6;rt&#xE9;netekb&#x151;l term&#xE9;szetesen nem hi&#xE1;nyozhatnak az&#xE9;rt a szerz&#x151;re jellemz&#x151; fantasztikus elemek sem, de mindezek t&#xF6;k&#xE9;letesen illeszkednek a nagyon is hihet&#x151; elbesz&#xE9;l&#xE9;sek cselekm&#xE9;ny&#xE9;be.&#xA0;</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_nepellenes_mesek" target="_blank"><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_647" target="_blank"><span>Interj&#xFA;nk&#xA0;Dmitry Glukhovskyval&gt;&gt;</span></a></p> <p><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/735666f_masolata.gif" alt="735666f_masolata.gif" class="imgleft" width="249" height="351">Anna Arutunyan: A Putyin-var&#xE1;zs</strong></p> <p>Az orosz-amerikai &#xFA;js&#xE1;g&#xED;r&#xF3; hossz&#xFA; ideje igyekszik meg&#xE9;rteni a jelenlegi orosz rendszer &#xE9;s az eln&#xF6;k titk&#xE1;t. Nem egyszer&#x171;en egy politikus &#xE9;letrajz&#xE1;t &#xED;rja meg ebben a k&#xF6;nyv&#xE9;ben, hanem t&#xF6;rt&#xE9;nelmi tapasztalatokb&#xF3;l pr&#xF3;b&#xE1;lja felfejteni a l&#xE1;tszatdemokr&#xE1;cia m&#x171;k&#xF6;d&#xE9;s&#xE9;nek logik&#xE1;j&#xE1;t, bemutatni a mindent &#xE1;tsz&#xF6;v&#x151; korrupci&#xF3;t, az elhatalmasod&#xF3; b&#xFC;rokr&#xE1;ci&#xE1;t. Feszegeti azt a k&#xE9;rd&#xE9;st is, hogy vajon a maffiaszer&#x171;en m&#x171;k&#xF6;d&#x151; oligarch&#xE1;k ir&#xE1;ny&#xED;tj&#xE1;k-e t&#xE9;nylegesen Oroszorsz&#xE1;got, illetve azt, hogy mi a c&#xE1;r atyuska szerep&#xE9;t bet&#xF6;lt&#x151; Putyin var&#xE1;zs&#xE1;nak titka.</p> <p><a href="http://konyves.blog.hu/2014/09/08/mindenki_benne_van_anna_arutunyan_putyin-varazs" target="_blank">Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</a></p> <p style="text-align: right;"><strong>Szerz&#x151;:&#xA0;Di&#xF3;szegi-Horv&#xE1;th N&#xF3;ra</strong></p> <p style="text-align: right;">&#xA0;<em><span id="docs-internal-guid-e3e8a6be-02f5-97d0-7f87-82ef17091dcb">A cikk eredetileg a K&#xF6;nyvesMagazin t&#xE9;li sz&#xE1;m&#xE1;ban jelent meg.</span></em></p> <!-- <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:trackback="http://madskills.com/public/xml/rss/module/trackback/"><rdf:Description rdf:about="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:identifier="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:title="5 reg&eacute;ny, amib&#337;l jobban meg&eacute;rthetj&uuml;k Oroszorsz&aacute;got" dc:subject="Trackback" dc:description="Vlagyimir Putyin meglehet&#337;sen sz&#369;kszav&uacute;, ha irodalomr&oacute;l van sz&oacute;, annyit viszont tudni lehet, hogy a t&ouml;rt&eacute;nelem &eacute;s a filoz&oacute;fia kiemelten &eacute;rdekli, f&#337;k&eacute;nt ha olyan orosz kiv&aacute;l&oacute;s&aacute;gok &eacute;letrajz&aacute;r&oacute;l van sz.." dc:creator=".konyvesblog." dc:date="Tue, 20 Jan 2015 09:11:00 +0100" trackback:ping=""></rdf:Description></rdf:RDF> --> <div class="clear"></div>'}
]


 $scope.titles =[
{'id': 1,  'author': '.konyvesblog.', 'date': '2014-12-12', 'lead': '1 Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan o', 'title': '1 regény, amibõl jobban megérthetjük Oroszországot'},
{'id': 2,  'author': '.konyvesblog.', 'date': '2014-12-12', 'lead': '2 Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan o', 'title': '2 regény, amibõl jobban megérthetjük Oroszországot'},
{'id': 3,  'author': '.konyvesblog.', 'date': '2014-12-12', 'lead': '3 Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan o', 'title': '3 regény, amibõl jobban megérthetjük Oroszországot'},
{'id': 4,  'author': '.konyvesblog.', 'date': '2014-12-12', 'lead': '4 Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan o', 'title': '4 regény, amibõl jobban megérthetjük Oroszországot'},
{'id': 5,  'author': '.konyvesblog.', 'date': '2014-12-12', 'lead': '5 Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan o', 'title': '5 regény, amibõl jobban megérthetjük Oroszországot'},
{'id': 6,  'author': '.konyvesblog.', 'date': '2014-12-12', 'lead': '6 Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan o', 'title': '6 regény, amibõl jobban megérthetjük Oroszországot'},
{'id': 7,  'author': '.konyvesblog.', 'date': '2014-12-12', 'lead': '7 Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan o', 'title': '7 regény, amibõl jobban megérthetjük Oroszországot'}
]

 $scope.getDetails = function(id) {
					$scope.detail= {'title' : 'Nincs', 'entry' : 'Nincs'};
					//for (x in $scope.articles) {
					var i;
					for	(i = 0; i < $scope.articles.length; i++) {
						console.log($scope.articles[i].id); 	
						if ($scope.articles[i].id === id) {
							$scope.detail= {'title' : $scope.articles[i].title, 'entry' : $scope.articles[i].entry};
							$scope.showDetails=false;
							return $scope.detail; 
						}
					}
					return $scope.detail;
};



}]);


*/
/*  unit: kBlog.load-go-getDetails   v1.0

<!DOCTYPE html>
<html ng-app="myApp" >

<head>
<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>

<body>

	<div  ng-controller="c1" > 
		<ul>
			<li ng-repeat="x in titles" ng-click="getDetails(x.id)">
				<p ng-bind="x.title"></p>
				<p ng-bind="x.lead"></p>
			</li>
		</ul>
		<span ng-bind="detail"></span> 

	</div>

	
<script>
// unit: load-go-getDetails   v1.0
// a tömbökben az elsõ id=1  és nem id=0 kell !!!
var app = angular.module('myApp', []);
app.controller('c1', function($scope, $http) {
	//alert("hello");
	$http.get("server1.php")
		.success(function (response) {$scope.titles = response;})
		.error(function(response, status, headers, config) {/*error status*//*});
	$http.get("server2.php")
		.success(function (response) {$scope.entries = response;})
		.error(function(response, status, headers, config) {/*error status*//*});
	$scope.showTitles=true;
	$scope.getDetails = function(id) {
		$scope.showTitles==false;
		$scope.detail= {'id' : id, 'entry' : 'Nincs'};
		var numid = parseInt(id, 10)-1;  // parseInt with radix
		//alert($scope.entries.length);
		if (numid  < $scope.entries.length) {
			//console.log("naa");
			//console.log($scope.entries[numid]); 	
			$scope.detail= $scope.entries[numid].Entry;
			//alert("go");
			//console.log($scope.detail);
		} 	
		else 
		{
			//console.log("helloo1");
			var i;
			for	(i = 0; i < $scope.entries.length; i++) {
				//console.log("hellooka1");
				//console.log($scope.entries[i].id); 	
				if (parseInt($scope.entries[i].id, 10)=== numid) {
					//console.log($scope.entries[i].id);
					$scope.detail= $scope.entries[i].Entry;
					//alert("get");
					return $scope.detail;  // a forból való kiugrás miatt 
				}
			}				
			//alert("Noget");
			//console.log("helloo2");
		}
	};
});
  
</script>

</body>
</html>

server1.php
[
{
"id" : "1",
"title" : "title Alfreds Futterkiste",
"lead" : "lead Berlin",
"author" : "author Germany"
},
{
"id" : "3",
"title" : "title Berglunds snabbköp",
"lead" : "lead Lulea",
"author" : "author  Sweden"
}
]

server2.php
[
{
"id" : "1",
"Entry" : "entry  2Germany"
},
{
"id" : "3",
"Entry" : "entry   2Sweden"
}
]



*/
/*  unit: kBlog.load-getDetails   	 v1.1
<!DOCTYPE html>
<html ng-app="kBlog" >

<head>
<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>

<body>

	<div  ng-controller="c1" > 
		<ul>
		<ul ng-if="showTitles" >	
			<li ng-repeat="x in titles" ng-click="getDetails(x.id)">
				<p ng-bind="x.title"></p>
				<p ng-bind="x.lead"></p>
			</li>
		</ul>
		<span ng-bind="detail"></span> 

	</div>

	
<script>
// unit: kBlog.load-go-getDetails   v1.1
// a tömbökben az elsõ id=1  és nem id=0 kell !!!
// id=1 tõl induló folyamatos sorszám --> mindkét tömbben azonos sorozat

var app = angular.module('kBlog', []);
app.controller('c1', function($scope, $http) {
	//alert("hello");	
	$scope.dbsOk=false;	 // check datafiles 

	$http.get("server1.php")
		.success(function (response) {
			$scope.titles = response;
			//alert("hello");			
			//.log($scope.titles);	
			//console.log($scope.titles.length);			
			$scope.dbsOk=true;	
			//return($scope.titles);
		})
		.error(function(response, status, headers, config) { 
			//alert("Loading error! (A) ");
		});
	
	$http.get("server2.php")
		.success(function (response) {
			$scope.entries = response;
			//ha dbsOk=true akkor ne csináljon semmi, ha false akkor pláne :)
			//console.log($scope.entries.length);	
		})
		.error(function(response, status, headers, config) {
			//alert("Loading error! (B) ");
			$scope.dbsOk=false;	// ha true volt akkor legyen false, ha nem akkor pláne
		});
	if	($scope.dbsOk) {  // azért kell mert az angular betöltö fázisban undefined a scope.title és entris!!
		//alert("dbsok= " + $scope.dbsOk);
		//console.log($scope.titles);	
		//console.log($scope.entries);	
		if ($scope.titles.length != $scope.entries.length) { 
			$scope.dbsOk=false; 
		}
	}
	
	$scope.showTitles=true;
	
	$scope.getDetails = function(id) {
		if ($scope.dbsOk) {
			$scope.showTitles=false;
			$scope.detail= 'Nincs';
			var numid = parseInt(id, 10)-1;  // parseInt with radix
			//alert($scope.entries.length);
			//test: titles[numid].id === entries[numid].id / 

			if (parseInt($scope.titles[numid].id, 10)=== parseInt($scope.entries[numid].id, 10)) {
				//console.log("naa");
				//console.log($scope.entries[numid]); 	
				$scope.detail= $scope.entries[numid].Entry;
				//alert("go");
				//console.log($scope.detail);
			} 	
			else 
			{
				//console.log("helloo1");
				//alert("Noget");
				//console.log("helloo2");
			}
		}
	};
});
  
</script>

</body>
</html>


*/
/*	unit: kBlog.load-list   	     v2.0
<!DOCTYPE html>
<html ng-app="kBlog" >

<head>

<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>

<body>
www
	<div  ng-controller="listTitles" > 
		<ul>	
			<li ng-repeat="x in titles" >
				<p ng-bind="x.id"></p>
				<p ng-bind="x.title"></p>
				<p ng-bind="x.lead"></p>
				<p ng-bind="x.author"></p>
			</li>
		</ul>
	</div>
	<div  ng-controller="listDetails" > 
		<ul>	
			<li ng-repeat="x in details" >
				<p ng-bind="x.id"></p>
				<p ng-bind="x.Entry"></p>
			</li>
		</ul>
	</div>
	
<script>
//unit: kBlog.load-list   	 v2.0
// a tömbökben az elsõ id=1  és nem id=0 kell !!!
// id=1 tõl induló folyamatos sorszám --> mindkét tömbben azonos sorozat

var app = angular.module('kBlog', []);

app.fname1='server1.php';
app.fname2='server2.php';
app.dbsOk=false;

app.factory('loadBlogService1', function($http) {
  var loadBlogService1 = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get(app.fname1).then(function (response) {
        // The then function here is an opportunity to modify the response
		//console.log('response:');
		//console.log(response);
		//console.log('app.dbsOk:');
		//console.log(app.dbsOk);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller	  
	  //console.log('promi');
	  //console.log(promise);
	  //console.log('app.dbsOk:');
	  //console.log(app.dbsOk);
      return promise;
    }
  };
  return loadBlogService1;
})
app.factory('loadBlogService2', function($http) {
  var loadBlogService2 = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get(app.fname2).then(function (response) {
        // The then function here is an opportunity to modify the response
		//console.log('response:');
		//console.log(response);
		//console.log('app.dbsOk:');
		//console.log(app.dbsOk);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller	  
	  //console.log('promi');
	  //console.log(promise);
	  //console.log('app.dbsOk:');
	  //console.log(app.dbsOk);
      return promise;
    }
  };
  return loadBlogService2;
})
app.controller('listTitles', function( loadBlogService1,$scope) {
  // Call the async method and then do stuff with what is returned inside our own then function
  loadBlogService1.async().then(function(d) {
    $scope.titles = d;
	console.log('$scope.titles');
	console.log($scope.titles);
    console.log('d=');
	console.log(d);
	$scope.dbsOk=true;	
  });
 // console.log('$scope.details');
  //console.log($scope.details);

})
app.controller('listDetails', function( loadBlogService2,$scope) {
  // Call the async method and then do stuff with what is returned inside our own then function
  loadBlogService2.async().then(function(d) {
    $scope.details = d;
	console.log('$scope.details');
	console.log($scope.details);
    console.log('d2=');
	console.log(d);
	$scope.dbsOk=true;	
  });
 // console.log('$scope.details');
  //console.log($scope.details);

});


</script>

</body>
</html>


*/
/*  unit: kBlog.load-list   	 	 v2.1
<!DOCTYPE html>
<html ng-app="kBlog" >

<head>

<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>

<body>
kk
	<div ng-controller="ListTitlesController" > 
		<ul>	
			<li  ng-controller="GetDetailController" ng-repeat="x in gVars.titles" ng-click="getDetails(x.id)">
				<p ng-bind="x.id"></p>
				<p ng-bind="x.title"></p>
				<p ng-bind="x.lead"></p>
				<p ng-bind="x.author"></p>
			</li>
		</ul>
		<span ng-bind="gVars.detail"></span> 
	</div>
	
	
<script>
//unit: kBlog.load-list   	 v2.1
// a tömbökben az elsõ id=1  és nem id=0 kell !!!
// id=1 tõl induló folyamatos sorszám --> mindkét tömbben azonos sorozat


var app = angular.module('kBlog', []);

app.fname1='server1.php';
app.fname2='server2.php';
app.dbsOk=false;

app.factory('loadBlogService1', function($http) {
  var loadBlogService1 = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get(app.fname1).then(function (response) {
        // The then function here is an opportunity to modify the response
		//console.log('response:');
		//console.log(response);
		//console.log('app.dbsOk:');
		//console.log(app.dbsOk);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller	  
	  //console.log('promi');
	  //console.log(promise);
	  //console.log('app.dbsOk:');
	  //console.log(app.dbsOk);
      return promise;
    }
  };
  return loadBlogService1;
})
app.factory('loadBlogService2', function($http) {
  var loadBlogService2 = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get(app.fname2).then(function (response) {
        // The then function here is an opportunity to modify the response
		//console.log('response:');
		//console.log(response);
		//console.log('app.dbsOk:');
		//console.log(app.dbsOk);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller	  
	  //console.log('promi');
	  //console.log(promise);
	  //console.log('app.dbsOk:');
	  //console.log(app.dbsOk);
      return promise;
    }
  };
  return loadBlogService2;
})
app.controller('ListTitlesController', function( loadBlogService1,$scope) {
  // Call the async method and then do stuff with what is returned inside our own then function
  $scope.gVars = {
    titles: [],
	details: [],
	detail: '',
	dbsOk: false	
  };
  
  loadBlogService1.async().then(function(d) {
    $scope.gVars.titles = d;
	//console.log('$scope.gVars.titles');
	//console.log($scope.gVars.titles);
    //console.log('d=');
	//console.log(d);
	$scope.gVars.dbsOk=true;	
  });
 // console.log('$scope.gVars.details');
  //console.log($scope.gVars.details);

})
app.controller('ListDetailsController', function( loadBlogService2,$scope) {
  // Call the async method and then do stuff with what is returned inside our own then function
  loadBlogService2.async().then(function(d) {
    $scope.gVars.details = d;
	//console.log('$scope.gVars.details');
	//console.log($scope.gVars.details);
   // console.log('d2=');
	//console.log(d);
	$scope.gVars.dbsOk=true;	
  });
 // console.log('$scope.gVars.details');
  //console.log($scope.gVars.details);

});
app.controller('GetDetailController', function(loadBlogService2,$scope) {
		//console.log('$scope.gVars.details'); 
		//console.log($scope.gVars.details); 
		
		
	$scope.gVars.dbsOk=false;	 // check datafiles 
	$scope.gVars.showTitles=true;
	
  loadBlogService2.async().then(function(d) {
    $scope.gVars.details = d;
	//console.log('$scope.gVars.details');
	//console.log($scope.gVars.details);
    //console.log('d2=');
	//console.log(d);
	$scope.gVars.dbsOk=true;	
  });
	
	
	$scope.getDetails = function(id) {	
		//console.log('dello'); 
		//console.log($scope.gVars.details); 
		//alert("hello   " + $scope.gVars.dbsOk +' ' + id);	
		if ($scope.gVars.dbsOk) {
			$scope.gVars.showTitles=false;
			$scope.gVars.detail= 'Nincs';
			var numid = parseInt(id, 10)-1;  // parseInt with radix
			//alert($scope.gVars.details.length);
			//test: titles[numid].id === details[numid].id / 
		    //console.log('$scope.gVars.details[numid]  ' + numid); 
			//console.log($scope.gVars.details); 
			//console.log($scope.gVars.details[numid]); 
			
			if (parseInt($scope.gVars.titles[numid].id, 10)=== parseInt($scope.gVars.details[numid].id, 10)) {
				//console.log("naa");
				//console.log($scope.gVars.details[numid]); 	
				$scope.gVars.detail= $scope.gVars.details[numid].Entry;
				console.log('$scope.gVars.detail');
				console.log($scope.gVars.detail);
			} 	
			else 
			{
				//console.log("helloo1");
				//alert("Noget");
				//console.log("helloo2");
			}
		}
	};
});

</script>

</body>
</html>

*/
/*  unit: kBlog load-chk-getDetails  v2.2
<!DOCTYPE html>
<html ng-app="kBlog" >

<head>

<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>

<body>

	<div ng-controller="MainController" > 
		<ul ng-controller="GetDetailController" ng-if="gVars.showTitles" >	
			<li   ng-repeat="x in gVars.titles" ng-click="getDetails(x.id)">
				<p ng-bind="x.id"></p>
				<p ng-bind="x.title"></p>
				<p ng-bind="x.lead"></p>
				<p ng-bind="x.author"></p>
			</li>
		</ul>
		<span ng-bind="gVars.detail"ng-if="!gVars.showTitles" ></span> 
	</div>
	
	
<script>
//unit: kBlog.load-list   	 v2.2
// a tömbökben az elsõ id=1  és nem id=0 kell !!!
// id=1 tõl induló folyamatos sorszám --> mindkét tömbben azonos sorozat


var app = angular.module('kBlog', []);

app.fname1='server1.php';
app.fname2='server2.php';

app.factory('loadBlogService1', function($http) {
  var loadBlogService1 = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get(app.fname1).then(function (response) {
        // The then function here is an opportunity to modify the response
		//console.log('response:');
		//console.log(response);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller	  
	  //console.log('promi');
	  //console.log(promise);

      return promise;
    }
  };
  return loadBlogService1;
})
app.factory('loadBlogService2', function($http) {
  var loadBlogService2 = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get(app.fname2).then(function (response) {
        // The then function here is an opportunity to modify the response
		//console.log('response:');
		//console.log(response);

        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller	  
	  //console.log('promi');
	  //console.log(promise);

      return promise;
    }
  };
  return loadBlogService2;
})
app.controller('MainController', function(loadBlogService1,loadBlogService2,$scope) {
	$scope.gVars = {
		titles: [],
		details: [],
		detail: 'Nincs!',
		dbsOk: {
			db1Ok: false, 
			db2Ok: false, 
			dbOk: function() {
				return (this.db1Ok && this.db2Ok);
			},
			setdb1Ok: function(oke) {
				this.db1Ok=oke;
			},
			setdb2Ok: function(oke) {
				this.db2Ok=oke;
			}
		},
		err: {
			was: false,
			msg: '', 
			see: function() {
				if (this.was) {
					console.log('Error report: ');
					console.log(this.msg);
				} else {
					console.log('No error !');
				}
			},
			set: function(errm) {
				this.was=true;
				errm += '\n'; 
				this.msg += errm;
			},
			clear: function() {
				this.msg = '';
			}
		},
		msgs: {
			msg1: "A két tömb hossza különbözõ! ", 
			msg2: "Az utolsó azonosító (id) eltér a két tömbben!",
		},
		showTitles: true
	};
 	loadBlogService1.async().then(function(d) {
		$scope.gVars.titles = d;
		$scope.gVars.dbsOk.setdb1Ok(true);	
		if ($scope.gVars.dbsOk.dbOk()) {
			dbChk();
		};
	});
	loadBlogService2.async().then(function(d) {
		$scope.gVars.details = d;
		$scope.gVars.dbsOk.setdb2Ok(true);		
		if ($scope.gVars.dbsOk.dbOk()) {
			dbChk();
		};
	});
	function dbChk() {	
		if ($scope.gVars.titles.length != $scope.gVars.details.length) { 
			$scope.gVars.dbsOk.setdb1Ok(false);
			$scope.gVars.err.set($scope.gVars.msgs.msg1);
		};
		var ida=parseInt($scope.gVars.titles[$scope.gVars.titles.length-1].id,10)-1;
		var idb=parseInt($scope.gVars.details[$scope.gVars.details.length-1].id,10)-1;
		if (ida != idb) { 
				$scope.gVars.dbsOk.setdb1Ok(false);
				$scope.gVars.err.set($scope.gVars.msgs.msg2);
		}
		$scope.gVars.err.see();
	};

})
app.controller('GetDetailController', function($scope) {
	$scope.getDetails = function(id) {	
		if ($scope.gVars.dbsOk.dbOk()) {
			$scope.gVars.showTitles=false;
			$scope.gVars.detail= 'Nincs';
			var numid = parseInt(id, 10)-1;  
			if (parseInt($scope.gVars.titles[numid].id, 10)=== parseInt($scope.gVars.details[numid].id, 10)) {
				$scope.gVars.detail= $scope.gVars.details[numid].Entry;
			} 	
			else {

			}
		}
	};
});

</script>

</body>
</html>

*/
/*  unit: kBlog lstr v1.0
<!DOCTYPE html>
<html ng-app="app">

<head>
	<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
    <script src="lib/ngStorage.min.js"></script>

</head>
jjj
<body>
<div id='' ng-controller='mainCtrl'>
  <div id='' ng-controller='listCtrl'>
	<button ng-click="$storage.x = $storage.x + 1">{{$storage.x}}</button> + <button ng-click="$storage.y = $storage.y + 1">{{$storage.y}}</button> = {{$storage.x + $storage.y}}

  
    </div>
  </div>
<script>
// unit: lstr v1.0
// 2x2 tömb: 
// 1a. legutolsó X db letöltött cim  
// 1b. legutolsó X db letöltött entri
// 2a. legutolsó X db post cim
// 2b. legutolsó X db post entri

var app=angular.module('app', ['ngStorage']);

app.controller('mainCtrl', function($scope,$localStorage){
        
		//$scope.$storage = $localStorage.$default({x: 12});
		
		function setLstr() {
			var item={id:'2', detail:"e2"};
			//$localStorage.posts=posts;	
			$localStorage.posts=[];	
			//$localStorage.posts.push();	
			console.log('$localStorage set');
			console.log($localStorage);
        };
		function addLstr() {
			var item={id:4, detail:"e4"};
			var iitem=$localStorage;
			console.log('iitem get add');
			console.log(iitem);
			iitem.posts.push(item);
			console.log('iitem add push után');
			console.log(iitem);

			//$localStorage=iitem;
			console.log('$localStorage add');			
			console.log($localStorage);
        };
		function resetLstr() {
			$localStorage.$reset();
			console.log('$localStorage reset');
			console.log($localStorage);
		};		
		function loadLstr() {
			console.log('$localStorage.posts');
			console.log($localStorage.posts);
		};
		
		//resetLstr();
		//setLstr();
	    //addLstr();
		loadLstr();
});
</script>
  
  
</body>
</html>
*/
/*  unit: kBlog load-chk-getDetails v3.0  
<!DOCTYPE html>
<html ng-app="kBlog" >

<head>

<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>

<body>

	<div ng-controller="MainController" > 
		<ul ng-controller="GetDetailController" ng-if="gVars.showTitles" >	
			<li   ng-repeat="x in gVars.fantitles" ng-click="getDetails(x.id)">
				<p ng-bind="x.id"></p>
				<p ng-bind="x.title"></p>
				<p ng-bind="x.lead"></p>
				<p ng-bind="x.author"></p>
			</li>
		</ul>
		<span ng-bind="gVars.detail"ng-if="!gVars.showTitles" ></span> 
	</div>
	
	
<script>
//unit: kBlog.load-list   	 v2.2
// a tömbökben az elsõ id=1  és nem id=0 kell !!!
// id=1 tõl induló folyamatos sorszám --> mindkét tömbben azonos sorozat


var app = angular.module('kBlog', []);

app.fname1='fantitles.php';
app.fname2='fandetails.php';
app.fname3='lasttitles.php';
app.fname4='lastdetails.php';

app.factory('loadBlogService1', function($http) {
  var loadBlogService1 = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get(app.fname1).then(function (response) {
        // The then function here is an opportunity to modify the response
		//console.log('response:');
		//console.log(response);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller	  
	  //console.log('promi');
	  //console.log(promise);

      return promise;
    }
  };
  return loadBlogService1;
})
app.factory('loadBlogService2', function($http) {
  var loadBlogService2 = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get(app.fname2).then(function (response) {
        // The then function here is an opportunity to modify the response
		//console.log('response:');
		//console.log(response);

        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller	  
	  //console.log('promi');
	  //console.log(promise);

      return promise;
    }
  };
  return loadBlogService2;
})
app.factory('loadBlogService3', function($http) {
  var loadBlogService3 = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get(app.fname3).then(function (response) {
        // The then function here is an opportunity to modify the response
		//console.log('response:');
		//console.log(response);

        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller	  
	  //console.log('promi');
	  //console.log(promise);

      return promise;
    }
  };
  return loadBlogService3;
})
app.factory('loadBlogService4', function($http) {
  var loadBlogService4 = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get(app.fname4).then(function (response) {
        // The then function here is an opportunity to modify the response
		//console.log('response:');
		//console.log(response);

        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller	  
	  //console.log('promi');
	  //console.log(promise);

      return promise;
    }
  };
  return loadBlogService4;
})
app.controller('MainController', function(loadBlogService1,loadBlogService2,loadBlogService3,loadBlogService4,$scope) {
	$scope.gVars = {
		fantitles: [],
		fandetails: [],
		lasttitles: [],
		lastdetails: [],
		detail: 'Nincs!',
		dbs1Ok: {
			db1Ok: false, 
			db2Ok: false, 
			dbOk: function() {
				return (this.db1Ok && this.db2Ok);
			},
			setdb1Ok: function(oke) {
				this.db1Ok=oke;
			},
			setdb2Ok: function(oke) {
				this.db2Ok=oke;
			}
		},
		dbs2Ok: {
			db1Ok: false, 
			db2Ok: false, 
			dbOk: function() {
				return (this.db1Ok && this.db2Ok);
			},
			setdb1Ok: function(oke) {
				this.db1Ok=oke;
			},
			setdb2Ok: function(oke) {
				this.db2Ok=oke;
			}
		},
		err: {
			was: false,
			msg: '', 
			see: function() {
				if (this.was) {
					console.log('Error report: ');
					console.log(this.msg);
				} else {
					console.log('No error !');
				}
			},
			set: function(errm) {
				this.was=true;
				errm += '\n'; 
				this.msg += errm;
			},
			clear: function() {
				this.msg = '';
			}
		},
		msgs: {
			msg10: "A két fan tömb hossza különbözõ! ", 
			msg11: "A két last tömb hossza különbözõ! ",
			msg20: "Az utolsó azonosító (id) eltér a két fan tömbben!",
			msg21: "Az utolsó azonosító (id) eltér a két last tömbben!"
		},
		showTitles: true
	};
 	loadBlogService1.async().then(function(d) {
		$scope.gVars.fantitles = d;
		$scope.gVars.dbs1Ok.setdb1Ok(true);	
		if ($scope.gVars.dbs1Ok.dbOk()) {
			db1Chk();
		};
	});
	loadBlogService2.async().then(function(d) {
		$scope.gVars.fandetails = d;
		$scope.gVars.dbs1Ok.setdb2Ok(true);		
		if ($scope.gVars.dbs1Ok.dbOk()) {
			db1Chk();
		};
	});
	loadBlogService3.async().then(function(d) {
		$scope.gVars.lasttitles = d;
		$scope.gVars.dbs2Ok.setdb1Ok(true);		
		if ($scope.gVars.dbs2Ok.dbOk()) {
			db2Chk();
		};
	});
	loadBlogService4.async().then(function(d) {
		$scope.gVars.lastdetails= d;
		$scope.gVars.dbs2Ok.setdb2Ok(true);		
		if ($scope.gVars.dbs2Ok.dbOk()) {
			db2Chk();
		};
	});
	
	function db1Chk() {	
		if ($scope.gVars.fantitles.length != $scope.gVars.fandetails.length) { 
			$scope.gVars.dbs1Ok.setdb1Ok(false);
			$scope.gVars.err.set($scope.gVars.msgs.msg10);
		};
		var ida=parseInt($scope.gVars.fantitles[$scope.gVars.fantitles.length-1].id,10)-1;
		var idb=parseInt($scope.gVars.fandetails[$scope.gVars.fandetails.length-1].id,10)-1;
		if (ida != idb) { 
				$scope.gVars.dbs1Ok.setdb1Ok(false);
				$scope.gVars.err.set($scope.gVars.msgs.msg20);
		}
		$scope.gVars.err.see();
	};
	function db2Chk() {	
		if ($scope.gVars.lasttitles.length != $scope.gVars.lastdetails.length) { 
			$scope.gVars.dbs2Ok.setdb1Ok(false);
			$scope.gVars.err.set($scope.gVars.msgs.msg11);
		};
		var ida=parseInt($scope.gVars.lasttitles[$scope.gVars.lasttitles.length-1].id,10)-1;
		var idb=parseInt($scope.gVars.lastdetails[$scope.gVars.lastdetails.length-1].id,10)-1;
		if (ida != idb) { 
				$scope.gVars.dbs2Ok.setdb1Ok(false);
				$scope.gVars.err.set($scope.gVars.msgs.msg21);
		}
		$scope.gVars.err.see();
	};
})
app.controller('GetDetailController', function($scope) {
	$scope.getDetails = function(id) {	
		if ($scope.gVars.dbs1Ok.dbOk()) {
			$scope.gVars.showTitles=false;
			$scope.gVars.detail= 'Nincs';
			var numid = parseInt(id, 10)-1;  
			$scope.gVars.detail= $scope.gVars.fandetails[numid].entry;
				console.log("Hello Kitty1" + numid);
				console.log($scope.gVars.detail);
		};
	};
});

</script>

</body>
</html>


*/
/*  unit: kBlog load-chk-getDetails v3.1 
<!DOCTYPE html>
<html ng-app="kBlog" >

<head>

<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>

<body>

	<div ng-controller="MainController" > 
		<ul ng-controller="GetDetailController" ng-if="gVars.showTitles" >	
			<li   ng-repeat="x in gVars.titles" ng-click="getDetails(x.id)">
				<p ng-bind="x.id"></p>
				<p ng-bind="x.title"></p>
				<p ng-bind="x.lead"></p>
				<p ng-bind="x.author"></p>
			</li>
		</ul>
		<span ng-bind="gVars.detail"ng-if="!gVars.showTitles" ></span> 
	</div>
	
	
<script>
//unit: kBlog.load-list   	 v2.2
// a tömbökben az elsõ id=1  és nem id=0 kell !!!
// id=1 tõl induló folyamatos sorszám --> mindkét tömbben azonos sorozat


var app = angular.module('kBlog', []);

app.fname1='fantitles.php';
app.fname2='fandetails.php';
app.fname3='lasttitles.php';
app.fname4='lastdetails.php';

app.factory('loadBlogService1', function($http) {
  var loadBlogService1 = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get(app.fname1).then(function (response) {
        // The then function here is an opportunity to modify the response
		//console.log('response:');
		//console.log(response);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller	  
	  //console.log('promi');
	  //console.log(promise);

      return promise;
    }
  };
  return loadBlogService1;
})
app.factory('loadBlogService2', function($http) {
  var loadBlogService2 = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get(app.fname2).then(function (response) {
        // The then function here is an opportunity to modify the response
		//console.log('response:');
		//console.log(response);

        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller	  
	  //console.log('promi');
	  //console.log(promise);

      return promise;
    }
  };
  return loadBlogService2;
})
app.factory('loadBlogService3', function($http) {
  var loadBlogService3 = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get(app.fname3).then(function (response) {
        // The then function here is an opportunity to modify the response
		//console.log('response:');
		//console.log(response);

        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller	  
	  //console.log('promi');
	  //console.log(promise);

      return promise;
    }
  };
  return loadBlogService3;
})
app.factory('loadBlogService4', function($http) {
  var loadBlogService4 = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get(app.fname4).then(function (response) {
        // The then function here is an opportunity to modify the response
		//console.log('response:');
		//console.log(response);

        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller	  
	  //console.log('promi');
	  //console.log(promise);

      return promise;
    }
  };
  return loadBlogService4;
})
app.controller('MainController', function(loadBlogService1,loadBlogService2,loadBlogService3,loadBlogService4,$scope) {
	$scope.gVars = {
		fantitles: [],
		fandetails: [],
		lasttitles: [],
		lastdetails: [],
		titles:[],
		details:[],
		detail: 'Nincs!',
		dbs1Ok: {
			db1Ok: false, 
			db2Ok: false, 
			dbOk: function() {
				return (this.db1Ok && this.db2Ok);
			},
			setdb1Ok: function(oke) {
				this.db1Ok=oke;
			},
			setdb2Ok: function(oke) {
				this.db2Ok=oke;
			}
		},
		dbs2Ok: {
			db1Ok: false, 
			db2Ok: false, 
			dbOk: function() {
				return (this.db1Ok && this.db2Ok);
			},
			setdb1Ok: function(oke) {
				this.db1Ok=oke;
			},
			setdb2Ok: function(oke) {
				this.db2Ok=oke;
			}
		},
		err: {
			was: false,
			msg: '', 
			see: function() {
				if (this.was) {
					console.log('Error report: ');
					console.log(this.msg);
				} else {
					console.log('No error !');
				}
			},
			set: function(errm) {
				this.was=true;
				errm += '\n'; 
				this.msg += errm;
			},
			clear: function() {
				this.msg = '';
			}
		},
		msgs: {
			msg10: "A két fan tömb hossza különbözõ! ", 
			msg11: "A két last tömb hossza különbözõ! ",
			msg20: "Az utolsó azonosító (id) eltér a két fan tömbben!",
			msg21: "Az utolsó azonosító (id) eltér a két last tömbben!"
		},
		showTitles: true
	};

	function db1Chk() {	

	
		if ($scope.gVars.fantitles.length != $scope.gVars.fandetails.length) { 
			$scope.gVars.dbs1Ok.setdb1Ok(false);
			$scope.gVars.err.set($scope.gVars.msgs.msg10);
		};
		var ida=parseInt($scope.gVars.fantitles[$scope.gVars.fantitles.length-1].id,10)-1;
		var idb=parseInt($scope.gVars.fandetails[$scope.gVars.fandetails.length-1].id,10)-1;
		if (ida != idb) { 
				$scope.gVars.dbs1Ok.setdb1Ok(false);
				$scope.gVars.err.set($scope.gVars.msgs.msg20);
		};
		$scope.gVars.err.see();

	};
	function db2Chk() {	
		if ($scope.gVars.lasttitles.length != $scope.gVars.lastdetails.length) { 
			$scope.gVars.dbs2Ok.setdb1Ok(false);
			$scope.gVars.err.set($scope.gVars.msgs.msg11);
		};
		var ida=parseInt($scope.gVars.lasttitles[$scope.gVars.lasttitles.length-1].id,10)-1;
		var idb=parseInt($scope.gVars.lastdetails[$scope.gVars.lastdetails.length-1].id,10)-1;
		if (ida != idb) { 
				$scope.gVars.dbs2Ok.setdb1Ok(false);
				$scope.gVars.err.set($scope.gVars.msgs.msg21);
		}
		$scope.gVars.err.see();

	};
 	loadBlogService1.async().then(function(d) {
		$scope.gVars.fantitles = d;
		if ($scope.gVars.titles.length == 0 ) {
			$scope.gVars.titles= $scope.gVars.titles.concat($scope.gVars.fantitles);
		} else {
			$scope.gVars.titles= $scope.gVars.titles.concat($scope.gVars.fantitles);
			var h;
			for (var i=0;i<$scope.gVars.titles.length; i++) {
				h=i+1;
				$scope.gVars.titles[i].id=h.toString();
				console.log($scope.gVars.titles[i].id +'/n');
			};
		};
		$scope.gVars.dbs1Ok.setdb1Ok(true);	
		if ($scope.gVars.dbs1Ok.dbOk()) {
			db1Chk();
		};
		if ($scope.gVars.dbs1Ok.dbOk()) {
			//$scope.gVars.titles= $scope.gVars.titles.concat($scope.gVars.fantitles);
		};
	});
	loadBlogService2.async().then(function(d) {
		$scope.gVars.fandetails = d;
		if ($scope.gVars.details.length == 0 ) {
			$scope.gVars.details= $scope.gVars.details.concat($scope.gVars.fandetails);
		} else {
			$scope.gVars.details= $scope.gVars.details.concat($scope.gVars.fandetails);
			var h;
			for (var i=0;i<$scope.gVars.details.length; i++) {
				h=i+1;
				$scope.gVars.details[i].id=h.toString();
				console.log($scope.gVars.details[i].id +'/n');
			};
		};
		$scope.gVars.dbs1Ok.setdb2Ok(true);		
		if ($scope.gVars.dbs1Ok.dbOk()) {
			db1Chk();
		};
		if ($scope.gVars.dbs1Ok.dbOk()) {
			//$scope.gVars.details= $scope.gVars.details.concat($scope.gVars.fandetails);
		};
	});
	loadBlogService3.async().then(function(d) {
		$scope.gVars.lasttitles = d;
		if ($scope.gVars.titles.length == 0 ) {
			$scope.gVars.titles= $scope.gVars.titles.concat($scope.gVars.lasttitles);
		} else {
			$scope.gVars.titles= $scope.gVars.titles.concat($scope.gVars.lasttitles);
			var h;
			for (var i=0;i<$scope.gVars.titles.length; i++) {
				h=i+1;
				$scope.gVars.titles[i].id=h.toString();
				console.log(' hhh  /n');
				console.log($scope.gVars.titles[i].id +'/n');
			};
		};
		$scope.gVars.dbs2Ok.setdb1Ok(true);		
		if ($scope.gVars.dbs2Ok.dbOk()) {
			db2Chk();
		};
		if ($scope.gVars.dbs2Ok.dbOk()) {
			//$scope.gVars.titles= $scope.gVars.titles.concat($scope.gVars.lasttitles);
		};
	});
	loadBlogService4.async().then(function(d) {
		$scope.gVars.lastdetails= d;
		if ($scope.gVars.details.length == 0 ) {
			$scope.gVars.details= $scope.gVars.details.concat($scope.gVars.lastdetails);
		} else {

			$scope.gVars.details= $scope.gVars.details.concat($scope.gVars.lastdetails);
			var h;
			for (var i=0;i<$scope.gVars.details.length; i++) {
				h=i+1;
				$scope.gVars.details[i].id=h.toString();
				console.log($scope.gVars.details[i].id +'/n');
			};
		};

		$scope.gVars.dbs2Ok.setdb2Ok(true);		
		if ($scope.gVars.dbs2Ok.dbOk()) {
			db2Chk();
		};
		if ($scope.gVars.dbs2Ok.dbOk()) {
			//$scope.gVars.details= $scope.gVars.details.concat($scope.gVars.lastdetails);
		};
	});

})
app.controller('GetDetailController', function($scope) {
	$scope.getDetails = function(id) {	
			
				console.log("Hello Kikktty 1");
				console.log($scope.gVars.titles);
	
		if ($scope.gVars.dbs1Ok.dbOk()) {
		
				console.log("Hello Kikktty 11");
				console.log($scope.gVars.details);
				
			$scope.gVars.showTitles=false;
			$scope.gVars.detail= 'Nincs';
			var numid = parseInt(id, 10)-1;  
			$scope.gVars.detail= $scope.gVars.details[numid].entry;
				console.log("Hello Kittyhhh  1" + numid);
				console.log($scope.gVars.detail);
		};
	};
});

</script>

</body>
</html>


*/
/*  unit: kBlog load-chk-getDetails v3.2 
<!DOCTYPE html>
<html ng-app="kBlog" >

<head>

<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>

<body>

	<div ng-controller="MainController" > 
		<ul ng-controller="GetDetailController" ng-if="gVars.showTitles" >	
			<li   ng-repeat="x in gVars.fantitles" ng-click="getfDetails(x.id)">
				<p ng-bind="x.id"></p>
				<p ng-bind="x.title"></p>
				<p ng-bind="x.lead"></p>
				<p ng-bind="x.author"></p>
			</li>
			hhhh
			<li   ng-repeat="y in gVars.lasttitles" ng-click="getlDetails(y.id)">
				<p ng-bind="y.id"></p>
				<p ng-bind="y.title"></p>
				<p ng-bind="y.lead"></p>
				<p ng-bind="y.author"></p>
			</li>
		</ul>
		<span ng-bind="gVars.detail" ng-if="!gVars.showTitles" ></span> 
	</div>
	
	
<script>
//unit: kBlog.load-list   	 v2.2
// a tömbökben az elsõ id=1  és nem id=0 kell !!!
// id=1 tõl induló folyamatos sorszám --> mindkét tömbben azonos sorozat


var app = angular.module('kBlog', []);

app.fname1='fantitles.php';
app.fname2='fandetails.php';
app.fname3='lasttitles.php';
app.fname4='lastdetails.php';

app.factory('loadBlogService1', function($http) {
  var loadBlogService1 = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get(app.fname1).then(function (response) {
        // The then function here is an opportunity to modify the response
		//console.log('response:');
		//console.log(response);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller	  
	  //console.log('promi');
	  //console.log(promise);

      return promise;
    }
  };
  return loadBlogService1;
})
app.factory('loadBlogService2', function($http) {
  var loadBlogService2 = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get(app.fname2).then(function (response) {
        // The then function here is an opportunity to modify the response
		//console.log('response:');
		//console.log(response);

        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller	  
	  //console.log('promi');
	  //console.log(promise);

      return promise;
    }
  };
  return loadBlogService2;
})
app.factory('loadBlogService3', function($http) {
  var loadBlogService3 = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get(app.fname3).then(function (response) {
        // The then function here is an opportunity to modify the response
		//console.log('response:');
		//console.log(response);

        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller	  
	  //console.log('promi');
	  //console.log(promise);

      return promise;
    }
  };
  return loadBlogService3;
})
app.factory('loadBlogService4', function($http) {
  var loadBlogService4 = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get(app.fname4).then(function (response) {
        // The then function here is an opportunity to modify the response
		//console.log('response:');
		//console.log(response);

        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller	  
	  //console.log('promi');
	  //console.log(promise);

      return promise;
    }
  };
  return loadBlogService4;
})
app.controller('MainController', function(loadBlogService1,loadBlogService2,loadBlogService3,loadBlogService4,$scope) {
	$scope.gVars = {
		fantitles: [],
		fandetails: [],
		lasttitles: [],
		lastdetails: [],
		detail: 'Nincs!',
		dbs1Ok: {
			db1Ok: false, 
			db2Ok: false, 
			dbOk: function() {
				return (this.db1Ok && this.db2Ok);
			},
			setdb1Ok: function(oke) {
				this.db1Ok=oke;
			},
			setdb2Ok: function(oke) {
				this.db2Ok=oke;
			}
		},
		dbs2Ok: {
			db1Ok: false, 
			db2Ok: false, 
			dbOk: function() {
				return (this.db1Ok && this.db2Ok);
			},
			setdb1Ok: function(oke) {
				this.db1Ok=oke;
			},
			setdb2Ok: function(oke) {
				this.db2Ok=oke;
			}
		},
		err: {
			was: false,
			msg: '', 
			see: function() {
				if (this.was) {
					console.log('Error report: ');
					console.log(this.msg);
				} else {
					console.log('No error !');
				}
			},
			set: function(errm) {
				this.was=true;
				errm += '\n'; 
				this.msg += errm;
			},
			clear: function() {
				this.msg = '';
			}
		},
		msgs: {
			msg10: "A két fan tömb hossza különbözõ! ", 
			msg11: "A két last tömb hossza különbözõ! ",
			msg20: "Az utolsó azonosító (id) eltér a két fan tömbben!",
			msg21: "Az utolsó azonosító (id) eltér a két last tömbben!"
		},
		showTitles: true
	};

	function db1Chk() {	

		if ($scope.gVars.fantitles.length != $scope.gVars.fandetails.length) { 
			$scope.gVars.dbs1Ok.setdb1Ok(false);
			$scope.gVars.err.set($scope.gVars.msgs.msg10);
		};
		var ida=parseInt($scope.gVars.fantitles[$scope.gVars.fantitles.length-1].id,10)-1;
		var idb=parseInt($scope.gVars.fandetails[$scope.gVars.fandetails.length-1].id,10)-1;
		if (ida != idb) { 
				$scope.gVars.dbs1Ok.setdb1Ok(false);
				$scope.gVars.err.set($scope.gVars.msgs.msg20);
		};
		$scope.gVars.err.see();

	};
	function db2Chk() {	
		if ($scope.gVars.lasttitles.length != $scope.gVars.lastdetails.length) { 
			$scope.gVars.dbs2Ok.setdb1Ok(false);
			$scope.gVars.err.set($scope.gVars.msgs.msg11);
		};
		var ida=parseInt($scope.gVars.lasttitles[$scope.gVars.lasttitles.length-1].id,10)-1;
		var idb=parseInt($scope.gVars.lastdetails[$scope.gVars.lastdetails.length-1].id,10)-1;
		if (ida != idb) { 
				$scope.gVars.dbs2Ok.setdb1Ok(false);
				$scope.gVars.err.set($scope.gVars.msgs.msg21);
		}
		$scope.gVars.err.see();
	};
 	loadBlogService1.async().then(function(d) {
		$scope.gVars.fantitles = d;
		$scope.gVars.dbs1Ok.setdb1Ok(true);	
		if ($scope.gVars.dbs1Ok.dbOk()) {
			db1Chk();
		};

	});
	loadBlogService2.async().then(function(d) {
		$scope.gVars.fandetails = d;
		$scope.gVars.dbs1Ok.setdb2Ok(true);		
		if ($scope.gVars.dbs1Ok.dbOk()) {
			db1Chk();
		};
	});
	loadBlogService3.async().then(function(d) {
		$scope.gVars.lasttitles = d;
		$scope.gVars.dbs2Ok.setdb1Ok(true);		
		if ($scope.gVars.dbs2Ok.dbOk()) {
			db2Chk();
		};
	});
	loadBlogService4.async().then(function(d) {
		$scope.gVars.lastdetails= d;
			$scope.gVars.dbs2Ok.setdb2Ok(true);		
		if ($scope.gVars.dbs2Ok.dbOk()) {
			db2Chk();
		};
	});

})
app.controller('GetDetailController', function($scope) {
	$scope.getfDetails = function(id) {	
		if ($scope.gVars.dbs1Ok.dbOk()) {
			$scope.gVars.showTitles=false;
			$scope.gVars.detail= 'Nincs';
			var numid = parseInt(id, 10)-1;  
			$scope.gVars.detail= $scope.gVars.fandetails[numid].entry;
		};
	}
	$scope.getlDetails = function(id) {	
		if ($scope.gVars.dbs2Ok.dbOk()) {
			$scope.gVars.showTitles=false;
			$scope.gVars.detail= 'Nincs';
			var numid = parseInt(id, 10)-1;  
			$scope.gVars.detail=$scope.gVars.lastdetails[numid].entry;
		};
	};
});



</script>

</body>
</html>


*/
/*  unit: kBlog load-chk-getposts v4.0 -- one array -- 500 records
<!DOCTYPE html>
<html ng-app="kBlog" >

<head>

<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>

<body>

	<div ng-controller="MainController" > 
		<ul ng-controller="GetPostController" ng-if="gVars.showTitles" >	
			<li   ng-repeat="x in gVars.posts" ng-click="getPost(x.id)">
				<p ng-bind="x.id"></p>
				<p ng-bind="x.title"></p>
				<p ng-bind="x.lead"></p>
				<p ng-bind="x.author"></p>
				<p ng-bind="x.date"></p>
			</li>
		</ul>
		<div ng-if="!gVars.showTitles" >
				<p> {{gVars.post.id }}</p>
				<p> {{gVars.post.title }}</p>
				<p> {{gVars.post.lead }}</p>
				<p> {{gVars.post.date }}</p>
				<p> {{gVars.post.entry }}</p>
		</div> 
	</div>
	
	
<script>
//unit: kBlog load-chk-getposts v4.0 -- egy array



var app = angular.module('kBlog', []);

app.fname='posts.php';

app.factory('loadPosts', function($http) {
  var loadPosts = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get(app.fname).then(function (response) {
        // The then function here is an opportunity to modify the response
		//console.log('response:');
		//console.log(response);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller	  
	  //console.log('promi');
	  //console.log(promise);

      return promise;
    }
  };
  return loadPosts;
})
app.controller('MainController', function(loadPosts,$scope) {
	$scope.gVars = {
		posts: [],
		post: 'Nincs!',
		log:[],
		err: {
			was: false,
			msg: '', 
			see: function() {
				if (this.was) {
					console.log('Error report: ');
					console.log(this.msg);
				} else {
					console.log('No error !');
				}
			},
			set: function(errm) {
				this.was=true;
				errm += '\n'; 
				this.msg += errm;
			},
			clear: function() {
				this.msg = '';
			}
		},
		msgs: {
			msg10: "Hiba1", 
			msg20: "Hiba2", 
		},
		showTitles: true
	};

 	loadPosts.async()
	.then(function(data,error,update) {
			$scope.gVars.posts = data;
			$scope.gVars.log.push(Date.now() + ' - SUCCESS = ' + JSON.stringify(data));
			console.log('Hello Kitty xx');
			//console.log($scope.gVars.posts);
			console.log($scope.gVars.log);
		},
		function(error) {
			$scope.gVars.log.push(Date.now() + ' - ERROR - calls failed, error is\n\n' + JSON.stringify(error));
					console.log('Hello Kitty 2xx');
			//console.log($scope.gVars.posts);
			console.log($scope.gVars.log);
		},
		function(update) {
			$scope.gVars.log.push(Date.now() + ' - UPDATE - ' + update);
						console.log('Hello Kitty3xx');
			//console.log($scope.gVars.posts);
			console.log($scope.gVars.log);
		}
	);

})
app.controller('GetPostController', function($scope) {
	$scope.getPost = function(id) {	

			$scope.gVars.showTitles=false;
			$scope.gVars.post= 'Nincs';
			var numid = parseInt(id, 10)-1;  
			$scope.gVars.post= $scope.gVars.posts[numid];
			console.log("hello");
			console.log($scope.gVars.post);
	};
});



</script>

</body>
</html>




*/
/*  unit: kBlog load-chk-getposts v4.1 -- one array -- 500 records -- search
<!DOCTYPE html>
<html ng-app="kBlog" >

<head>

<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>
<body>

	<div ng-controller="MainController" > 
		<ul ng-controller="GetPostController" ng-if="gVars.showTitles" >	
			<li   ng-repeat="x in gVars.posts" ng-click="getPost(x.id)">
				<p ng-bind="x.id"></p>
				<p ng-bind="x.title"></p>
				<p ng-bind="x.lead"></p>
				<p ng-bind="x.author"></p>
				<p ng-bind="x.date"></p>
			</li>
		</ul>
		<div ng-if="!gVars.showTitles" >
				<p> {{gVars.post.id }}</p>
				<p> {{gVars.post.title }}</p>
				<p> {{gVars.post.lead }}</p>
				<p> {{gVars.post.date }}</p>
				<p> {{gVars.post.entry }}</p>
		</div> 
	</div>
<script>


//unit: kBlog load-chk-getposts v4.1   one array + search
var app = angular.module('kBlog', []);
app.fname='posts.php';
app.factory('loadPosts', function($http) {
  var loadPosts = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get(app.fname).then(function (response) {
        // The then function here is an opportunity to modify the response
		//console.log('response:');
		//console.log(response);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller	  
	  //console.log('promi');
	  //console.log(promise);

      return promise;
    }
  };
  return loadPosts;
})
app.controller('MainController', function(loadPosts,$scope) {
	$scope.gVars = {
		posts: [],
		post: 'Nincs!',
		log:[],
		err: {
			was: false,
			msg: '', 
			see: function() {
				if (this.was) {
					console.log('Error report: ');
					console.log(this.msg);
				} else {
					console.log('No error !');
				}
			},
			set: function(errm) {
				this.was=true;
				errm += '\n'; 
				this.msg += errm;
			},
			clear: function() {
				this.msg = '';
			}
		},
		msgs: {
			msg10: "Hiba1", 
			msg20: "Hiba2", 
		},
		showTitles: true
	};
	
	loadPosts.async()
	.then(function(data,error,update) {
			$scope.gVars.posts = data;
			$scope.gVars.log.push(Date.now() + ' - SUCCESS = ' + JSON.stringify(data));
		},
		function(error) {
			$scope.gVars.log.push(Date.now() + ' - ERROR - calls failed, error is\n\n' + JSON.stringify(error));
					console.log('Hello Kitty 2xx');
			//console.log($scope.gVars.posts);
			console.log($scope.gVars.log);
		},
		function(update) {
			$scope.gVars.log.push(Date.now() + ' - UPDATE - ' + update);
						console.log('Hello Kitty3xx');
			//console.log($scope.gVars.posts);
			console.log($scope.gVars.log);
		}
	);

})
app.controller('GetPostController', function($scope) {
	function isId(id) {
		for	(var i = 0; i < $scope.gVars.posts.length; i++) {
			if ($scope.gVars.posts[i].id === id) return i;
		};
		return -1;
	};
	
	$scope.getPost = function(id) {	
		$scope.gVars.showTitles=false;
		var idd=isId(id);
		if (idd > -1) {
			$scope.gVars.post= $scope.gVars.posts[idd];
		} else {
				$scope.gVars.post= 'Nincs';
		};
	};
});



</script>
</body>
</html>




*/

/* **********

*/


/*  itt tartunk 19:27

<!DOCTYPE html>
<html ng-app="kBlog" >

<head>

<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
<script src="lib/ngStorage.min.js"></script>
</head>
<body>

	<div ng-controller="MainController" > 
		<ul ng-controller="GetPostController" ng-if="gVars.showTitles" >	
			<li   ng-repeat="x in gVars.posts" ng-click="getPost(x.id)">
				<p ng-bind="x.id"></p>
				<p ng-bind="x.title"></p>
				<p ng-bind="x.lead"></p>
				<p ng-bind="x.author"></p>
				<p ng-bind="x.date"></p>
			</li>
		</ul>
		<div ng-if="!gVars.showTitles" >
				<p> {{gVars.post.id }}</p>
				<p> {{gVars.post.title }}</p>
				<p> {{gVars.post.lead }}</p>
				<p> {{gVars.post.date }}</p>
				<p> {{gVars.post.entry }}</p>
		</div> 
	</div>
<script>


//unit: kBlog load-chk-getposts v4.0 
var app = angular.module('kBlog', ["ngStorage"]);
app.fname='pposts.php';
app.factory('loadPosts', function($http, $localStorage) {
  var loadPosts = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get(app.fname).then(function (response) {
			// The then function here is an opportunity to modify the response  The return value gets picked up by the then in the controller.
			if ($localStorage.posts==undefined) $localStorage.posts=[];
			if ($localStorage.posts.length == 1 && $localStorage.posts[0].id=="zero") {
				$localStorage.posts=[];
			};
			if ($localStorage.selected==undefined) $localStorage.selected=[];

			$localStorage.posts=[];
			$localStorage.posts=$localStorage.posts.concat($localStorage.selected,response.data.slice(0,10));
			return response.data;
			},function(data) {	 
				//reset
				//$localStorage.$reset();
				//set
				//$localStorage.posts=[];
				//$localStorage.posts.push({"id" : "1","title" : "1 both  title ","lead" : "1 both  lead ","author" : "1 both  author ","date" : "1 both  date ","entry" : "1 both  entry "});
				//$localStorage.posts.push({"id" : "2","title" : "2 both  title ","lead" : "2 both  lead ","author" : "2 both  author ","date" : "2 both  date ","entry" : "2 both  entry "});
				//$localStorage.posts.push({"id" : "3","title" : "3 both  title ","lead" : "3 both  lead ","author" : "3 both  author ","date" : "3 both  date ","entry" : "3 both  entry "});
				
				if ($localStorage.posts==undefined) {
					$localStorage.posts=[];
					$localStorage.posts.push({"id" : "zero","title" : "Nincs kapcsolat és ","lead" : "nincs lementett adat sem !","author" : "","date" : "","entry" : "Kérem várjon a következõ kapcsolatra!"}); 
				}; 
				return $localStorage.posts;
			}
		);
      // Return the promise to the controller	  
	  //console.log('promi');
	  //console.log(promise);

      return promise;
    }
  };
  return loadPosts;
})
app.controller('MainController', function(loadPosts,$scope,$localStorage) {
	$scope.gVars = {
		posts: [],
		post: 'Nincs!',
		log:[],
		err: {
			was: false,
			msg: '', 
			see: function() {
				if (this.was) {
					console.log('Error report: ');
					console.log(this.msg);
				} else {
					console.log('No error !');
				}
			},
			set: function(errm) {
				this.was=true;
				errm += '\n'; 
				this.msg += errm;
			},
			clear: function() {
				this.msg = '';
			}
		},
		msgs: {
			msg10: "Hiba1", 
			msg20: "Hiba2", 
		},
		showTitles: true
	};

	
	loadPosts.async()
	.then(function(data,error,update) {
			$scope.gVars.posts = data;
			$scope.gVars.log.push(Date.now() + ' - SUCCESS = ' + JSON.stringify(data));
		},
		function(error) {
			$scope.gVars.log.push(Date.now() + ' - ERROR - calls failed, error is\n\n' + JSON.stringify(error));
			console.log($scope.gVars.log);
		},
		function(update) {
			$scope.gVars.log.push(Date.now() + ' - UPDATE - ' + update);
						console.log('Hello Kitty3xx');
			//console.log($scope.gVars.posts);
			console.log($scope.gVars.log);
		}
	);

})
app.controller('GetPostController', function($scope) {
	function isId(id) {
		for	(var i = 0; i < $scope.gVars.posts.length; i++) {
			if ($scope.gVars.posts[i].id === id) return i;
		};
		return -1;
	};
	function isId2(id) {
		for	(var i = 0; i < $scope.gVars.posts.length; i++) {
			if ($scope.gVars.posts[i].id === id) return i;
		};
		return -1;
	};
	
	$scope.getPost = function(id) {	
		$scope.gVars.showTitles=false;
		var idd=isId(id);
		if (idd > -1) {
			$scope.gVars.post= $scope.gVars.posts[idd];
		} else {
				$scope.gVars.post= 'Nincs';
		};
	};
});



</script>
</body>
</html>




*/

/*

*/
/*

*/

/*

*/



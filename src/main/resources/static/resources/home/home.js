var app=angular.module("RAS");

app.controller("HomePanel",function($scope,$rootScope,homeDataService){
	$scope.refreshAll=function(){
		homeDataService.getAllPlacements(function(response){
				$scope.placements=response.data;
				$rootScope.lazilyInitializeDataTable("PlacementTable");
			},
			function(){
				$rootScope.lazilyInitializeDataTable("PlacementTable");
			}
		);
		homeDataService.getAllInterviews(function(response){
				$scope.interviews=response.data;
				$rootScope.lazilyInitializeDataTable("InterviewTable");
			},
			function(){
				$rootScope.lazilyInitializeDataTable("SubmissionTable");
			}
		);
		homeDataService.getAllSubmissions(function(response){
				$scope.submissions=response.data;
				$rootScope.lazilyInitializeDataTable("SubmissionTable");
			},
			function(){
				$rootScope.lazilyInitializeDataTable("SubmissionTable");
			}
		);
	};
	$scope.refreshAll();

	// Navbar highlighting
	$(".navSelected").removeClass("navSelected");
	$("#navHome").addClass("navSelected");
});

app.service("homeDataService",function($http){
	this.getAllPlacements=function(callback,fallback){
		$http.get('placements').then(callback,fallback);
	};
	this.getAllInterviews=function(callback,fallback){
		$http.get('interviews').then(callback,fallback);
	};
	this.getAllSubmissions=function(callback,fallback){
		$http.get('submissions').then(callback,fallback);
	};
});
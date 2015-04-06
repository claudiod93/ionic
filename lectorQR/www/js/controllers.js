angular.module('lector.controllers',['ionic','ngCordova'])
	.controller("lectorController", function($scope, $cordovaBarcodeScanner){
		$scope.leerCodigo = function(){
			alert("Funciona");
			$cordovaBarcodeScanner.scan().then ( function(imagenEscaneada) {
				alert(imagenEscaneada.text);
			}, function(error){
				alert("A ocurrido un error " + error);
			});
		}
	});
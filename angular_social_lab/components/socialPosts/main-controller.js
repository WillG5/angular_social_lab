"use strict";//PARENT SOCIAL POST
{
    angular.module('app')
    .controller('MainController', function(){
        const $ctrl = this;

        $ctrl.listed = [
            {name: 'Dog', post: 'Dogs are cool'},
            {name: 'Cat', post: 'Cats are cool'},
            {name: 'Pig', post: 'Pigs are cool'},
            {name: 'Cow', post: 'Cows are cool'},
            {name: 'Whale', post: 'Whales are cool'}
        ];

        $ctrl.delete = function(index){
            $ctrl.listed.splice(index, 1);

        };

    });
        
    
}
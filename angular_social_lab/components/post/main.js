"use strict";
{
    angular.module('app')
    .component('post', {
            templateUrl: 'components/post/main.html',
            controller: 'PostController',
            bindings: {
                item: '<',
                onClick: '<'
            }
    })
}
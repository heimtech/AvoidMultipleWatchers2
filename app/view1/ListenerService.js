/**
 * Created by UC8456 on 18.01.2018.
 */
var module = angular.module('myApp.view1');

module.service('ListenerService', [ "$q" , function ($q) {


    /**
     * The Raw CuttingAngleData how received from CAPP
     */

    this.deferredList = [];


    this.listenCuttingDirection = function (pModel) {

        var deferred = $q.defer();
        this.deferredList.push(deferred);
        return deferred.promise;

    }


    this.notifyCuttingDirection = function (pModel) {

        for(var lKey in this.deferredList) {

            var lEntity = this.deferredList[lKey];
            lEntity.notify(pModel);
        }


    }

}]);
/**
 * Created by UC8456 on 18.01.2018.
 */
angular.module('myApp.view1')

    .controller('ListenerView2Ctrl', [ "ListenerService" , function(ListenerService) {



        ListenerService.listenCuttingDirection().then(

            function (answer) {

                // Set CuttingAngleDataRaw of Parent IndexableMilling Scope


            },

            function (error) {

            },

            function (progress) {
                console.log("ListenerView2Ctrl: " + progress);


            });

    }]);
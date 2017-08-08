/*
* @Author: Shiv Chawla
* @Date:   2017-04-07 14:34:31
* @Last Modified by:   Shiv Chawla
* @Last Modified time: 2017-08-03 22:07:16
*/

(function(window){
    'use strict';
    function dateLib(){
        var _dateLib = {};
        
        _dateLib.formatDate = function (date) {

            var today = new Date(date);
            today.setDate(today.getDate());
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();

            if (dd < 10) {
                dd = '0' + dd
            }

            if (mm < 10) {
                mm = '0' + mm
            }

            today = dd + '/' + mm + '/' + yyyy;
            return today;
        };

        _dateLib.formatDateForTable = function (date) {

            var today = new Date(date);
            today.setDate(today.getDate());
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();

            if (dd < 10) {
                dd = '0' + dd
            }

            if (mm < 10) {
                mm = '0' + mm
            }

            today = yyyy+' - '+mm+' - '+dd;
            return today;
        };

        _dateLib.formatDateTime = function (date) {
            date = new Date(date);
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            var mm = date.getMonth() + 1;
            mm = mm > 9 ? mm : '0' + mm.toString();
            var dd = date.getDate();
            dd = dd > 9 ? dd : '0' + dd.toString();
            return dd + "/" + mm + "/" + date.getFullYear() + "  " + strTime;
        };

        return _dateLib;
    }

    if(typeof(window.date) === 'undefined'){
        window.date = dateLib();
    }
})(window);
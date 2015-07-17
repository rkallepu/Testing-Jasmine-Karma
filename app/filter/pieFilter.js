/**
 * Created by Rashmika on 16-07-2015.
 */
myApp.filter('pieFilter', function() {
    return function(pieString) {
        return pieString.toUpperCase();
    };
});
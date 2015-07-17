/**
 * Created by Rashmika on 16-07-2015.
 */
myApp.value('pieValues', {pies: [
    {flavour: 'lemon', price:50},
    {flavour: 'cherry', price: 60},
    {flavour: 'apple', price: 70}
]}).factory('pieManager', ['pieValues', function (pieValues){
    return {
        pieFlavour: function (){
            return pieValues.pies.map(function(pie){
                return pie.flavour;
            });
        },
        pieSorted: function (){
            return pieValues.pies.sort(function(a, b){
                if(a.flavour > b.flavour){
                    return 1;
                }
                if(a.flavour < b.flavour){
                    return -1;
                }
                return 0;
            });
        }
    }
}]);
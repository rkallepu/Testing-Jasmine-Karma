describe('testing service', function(){
   var value, flavour;
    beforeEach(function(){
        module('pieApp');
        inject(function (_pieValues_, _pieManager_){
            value = _pieValues_;
            flavour = _pieManager_;
        });
    });
    it('should initialize values', function (){
        expect(value.pies).toEqual([
            {flavour: 'lemon', price:50},
            {flavour: 'cherry', price: 60},
            {flavour: 'apple', price: 70}
        ]);
    });
    it('service should return a flavour', function (){
       var myflavour = flavour.pieFlavour();
        expect(myflavour[1]).toEqual('cherry');
    });
    it('service should sort flavours', function (){
        var flavoursort = flavour.pieSorted();
        expect(flavoursort).toEqual([
            {flavour: 'apple', price: 70},
            {flavour: 'cherry', price: 60},
            {flavour: 'lemon', price:50}
        ]);
    });
});
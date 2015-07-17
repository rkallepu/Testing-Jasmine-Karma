/**
 * Created by Rashmika on 16-07-2015.
 */
describe('testing filter', function(){
    var myfilter;
    beforeEach(function(){
        module('pieApp');
        inject(function (pieFilterFilter){
            myfilter = pieFilterFilter;
        });
    });
    it('should give string in uppercase', function (){
        var str = myfilter('rashmika');
        expect(str).toEqual('RASHMIKA');
    });
});
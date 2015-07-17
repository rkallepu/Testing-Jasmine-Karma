/**
 * Created by Rashmika on 16-07-2015.
 */
describe('user testing', function (){
    var user;
    beforeEach(function() {
        user = new User();
    });
   it('user say hello', function (){
       var hello = user.sayHello();
       expect(hello).toEqual('Hello World..!!!');
   });
    it('returns phone number', function(){
        var phone = user.getContact('rashmika');
        expect(phone).toEqual(123456);
    })
});
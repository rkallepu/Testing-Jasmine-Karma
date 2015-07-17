/**
 * Created by Rashmika on 16-07-2015.
 */
function User(){

}
User.prototype.sayHello = function () {
    this.hello = "Hello World..!!!";
    return this.hello;
};
User.prototype.getContact = function(name){
    var tel = {
        'rashmika': 123456,
        'bp': 456788,
        'jui': 988634672
    };
    if(tel[name]){
        return tel[name];
    }else{
        return null;
    }
};

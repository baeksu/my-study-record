var relationship1 = {
  name: 'zero',
  friends: ['nero','hero','xero'],
  logFriends: function(){
    var that =  this;
    this.friends.forEach(function(friend){
      console.log(that.name,friend);//이건 'zero'
      console.log(this.name,friend);//이건 undefined
    });
  },
};

relationship1.logFriends();
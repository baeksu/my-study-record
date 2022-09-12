var relationship1 = {
  name: 'zero',
  friends: ['nero','hero','xero'],
  logFriends: function(){
    var that =  this;//relationship1 을 가리키는 this 저장
    this.friends.forEach(function(friend){
      console.log(that.name,friend);//이건 'zero'
      //이건 undefined : 다른 변수에 한번 담아야 하는 꼼수를 써줘야되네.
      //function() 은 자기만의 this를 가지기 때문에 
      //화살표 함수는 부모의 this를 가지고 옴
      console.log(this.name,friend);
    });
  },
};

relationship1.logFriends();
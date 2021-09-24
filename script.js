var enter
var number = ["0,1,2,3,4,5,6,7,8,9"];
var upper = ["A,B,C,D,E,F,G,H,I,J,K,L,O,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];
var lower =["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
var special =["!,@,#,$,%,^,&,*,(,)"];
var passwordOptions = [];

 var generateBtn = document.querySelector("generate");

  generate.addEventListener("click", function(){
  generate= generatePassword();
  document.getElementById("password").placeholder=ps;
  });

 function generatePassword() {
   enter = parseInt(prompt("Password must be between 8-124 characters. how many characters would you like to use?"));
   if (enter < 8 || enter > 124){
   alert("This character quantity is not valid")
   }
   if(confirm("Would you like to include numbers?")){
     passwordOptions = passwordOptions.concat(number);
     if(confirm("Would you like to include Uppercase letters?")){
       passwordOptions = passwordOptions.concat(upper);
     }
   if(confirm("Would you like to include lowercase letters?")){
     passwordOptions = passwordOptions.concat(lower);
   }
   if(confirm("Would you like to include special characters?")){
     passwordOptions = passwordOptions.concat(special);
   }
   var passwordCharacters=""
  var randomPassword = "" 
  for(var i = 0; i < enter; i++) {
    randomPassword = randomPassword + choices[Math.floor(math.random() * passwordCharacters.length)];
    password.push(choices)
  }
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("password");
   passwordText.value = password;

  }}}
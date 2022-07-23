
function language(){
    if (user==1){
        var a= "English"
    }
    else{
        var a= "Hindi"
    }
    return user
}
const n=require("readline-sync");
var user =n.questionInt("1.English \n2.Hindi \n...Choose your Langugae :- ");
function pin_code(){
    if(user==1){
        var i=0
        var c=1
        while(i<3){
            var pin=n.questionInt("enter your four digit pin number:- ");
            if(pin== 5050){
                console.log("correct");
                break
            }
            else{
                console.log("inncorect Pin!");
                c+=1
            }
            i+=1
        }
        if(c==3){
            console.log("your card is block");
        }
        // console.log("your card is block");
        
    }
    else{
        var i=0
        while(i<3){
            var pin=n.questionInt("Apna char number ka pin daliye:- ");
            if(pin== 5050){
                console.log("Aapka pin sahi hai");
                break
            }
            else{
                console.log("Fir se apna pin daliye");
            }
            i+=1
        }
        console.log("aapka card block ho geya");
        
    }
    return pin
}  
var code=pin_code()
function options(){
    if(user==1){
        if(code==5050){
            balance=10000
            console.log('please press 1 for your balance inquiry');
            console.log('please press 2 for your withdrawl');
            console.log('please press 3 for your pay in');
            console.log('please press 4 for your return card/ Exit');
            console.log(".............");
            option=n.questionInt('what would you like to choose=');
            if(option ==1){
                var ans= `${balance} Your current balance`
            }
            else if(option ==2){
                var withdrwal=n.questionInt("enter how much money would you like to withdrawl=");
                var ans=`${balance-withdrwal} Your Current balance`
            }
            else if(option ==3){
                var pay=n.questionInt("enter how much money you want to pay in=");
                var ans= `${balance + pay} you current balance`
            }
            else if(option==4){
                var ans= "collect your card"
                console.log("THANK YOU FOR VISIT");
            }
            else{
                var ans="incorrect choose"
                console.log("incorrect choose")
            }
            return ans
        }
    }
    else{
        if(code==5050){
            balance=20000
            console.log('Kripya karke 1 daliye :- apni prse ke bare me janne ke liye');
            console.log('Pese nikalne keliye 2 Dabaiye');
            console.log('Pese rakhne keliye 3 dabaiye');
            console.log('Apna card wwapas lene ke liye 4 dabaiye');
            console.log("...........");
            option=n.questionInt("kripya karke apna Vikalp daliye:- ");
            if(option ==1){
                var ans= `${balance} Apki pura jma pese`
            }
            else if(option ==2){
                var withdrwal=n.questionInt("Aap kitni pese nikalna chahoge?:- ");
                var ans=`${balance-withdrwal} apki pura pese`
            }
            else if(option ==3){
                var pay=n.questionInt("Aap kitna pese rakhna chahoge?:- ");
                var ans= `${balance + pay} Apki pura pese`
            }
            else{
                var ans= "Apna card Jma kar lijiye"
                console.log("Dhanyawad Aane Ke liye");
            }
            return ans
        }
    }
}
function main(){
    language()
    console.log(options());
}
main()
let team1Score=Number(localStorage.getItem('team1Score'));
let team2Score=Number(localStorage.getItem('team2Score'));
var h1=document.createElement('h1');
if(team1Score>team2Score){
    h1.innerText="TEAM 1 IS THE WINNER";
}
else{
    h1.innerText="TEAM 2 IS THE WINNER";
}
document.body.append(h1);
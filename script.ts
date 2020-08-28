import {team1} from "./teamone.js";
import {team2} from "./teamtwo.js";

localStorage.setItem('team1Score','0');
localStorage.setItem('team2Score','0');

var a=new team1();
var b=new team2();

var tab=document.createElement('table');
tab.setAttribute('id','team1PointsTable')
tab.innerHTML=`<tr><th>Team1</th>
                   <th>B1</th>
                   <th>B2</th>
                   <th>B3</th>
                   <th>B4</th>
                   <th>B5</th>
                   <th>B6</td>
                   <th>Total</th>
                   </tr>`;
for(let i=0;i<10;i++){
    var tr=document.createElement('tr');
    var th=document.createElement('th');
    tab.append(tr);
    th.innerHTML=`Player${i+1}`;
    tr.append(th);
    for(let j=0;j<7;j++){
        var i1=String(i);
        var j1=String(j);
        var td=document.createElement('td');
        td.setAttribute('id',`${i1+j1}`)
        tr.append(td);
    }
}   
document.body.append(tab);

var tab2=document.createElement('table');
tab2.setAttribute('id','team2PointsTable')
tab2.innerHTML=`<tr><th>Team1</th>
                   <th>B1</th>
                   <th>B2</th>
                   <th>B3</th>
                   <th>B4</th>
                   <th>B5</th>
                   <th>B6</td>
                   <th>Total</th>
                   </tr>`;
for(let i=0;i<10;i++){
    var tr=document.createElement('tr');
    var th=document.createElement('th');
    tab2.append(tr);
    th.innerHTML=`Player${i+1}`;
    tr.append(th);
    for(let j=0;j<7;j++){
        var i1=String(i);
        var j1=String(j);
        var td=document.createElement('td');
        td.setAttribute('id',`${i1+j1}a`)
        tr.append(td);
    }
}   
document.body.append(tab2);

document.getElementById('hit1')?.addEventListener('click',function(){
    let table1=document.getElementById('team1PointsTable');
    let sumTotal=0;
    for(let i=0;i<10;i++){
        let total=0;
        for(let j=0;j<6;j++){
            let iString=String(i);
            let jString=String(j);
            let randomNumber=Math.floor(Math.random()*7);
            total+=randomNumber;
            let tableDatas=document.getElementById(`${iString+jString}`);
            if(tableDatas!=null){
                tableDatas.innerText=`${randomNumber}`;
            }
            if(randomNumber==0){
                break;
            }
            let totalCell=document.getElementById(`${iString+'6'}`);
            if(totalCell!=null){
                totalCell.innerText=`${total}`;
            }
        }

    }
    for(let k=0;k<10;k++){
        let kString=String(k);
       let totalElementValue=document.getElementById(`${kString+6}`);
       let summer=Number(totalElementValue?.innerText)
       sumTotal+=summer;
    }
    let sum1Display=document.getElementById('team1score')
    if(sum1Display!=null){
    sum1Display.innerText=`${sumTotal}`;
    localStorage.setItem('team1Score',`${sumTotal}`);
    }
    var button1=document.getElementById('hit1');
    button1?.setAttribute('disabled','disabled');
})

document.getElementById('hit2')?.addEventListener('click',function(){
    let table1=document.getElementById('team2PointsTable');
    let sumTotal=0;
    for(let i=0;i<10;i++){
        let total=0;
        for(let j=0;j<6;j++){
            let iString=String(i);
            let jString=String(j);
            let randomNumber=Math.floor(Math.random()*7);
            total+=randomNumber;
            let tableDatas=document.getElementById(`${iString+jString}a`);
            if(tableDatas!=null){
                tableDatas.innerText=`${randomNumber}`;
            }
            if(randomNumber==0){
                break;
            }
            let totalCell=document.getElementById(`${iString+'6'}a`);
            if(totalCell!=null){
                totalCell.innerText=`${total}`;
            }
        }

    }
    for(let k=0;k<10;k++){
        let kString=String(k);
       let totalElementValue=document.getElementById(`${kString+6}a`);
       let summer=Number(totalElementValue?.innerText)
       sumTotal+=summer;
    }
    let sum1Display=document.getElementById('team2score')
    if(sum1Display!=null){
    sum1Display.innerText=`${sumTotal}`;
    localStorage.setItem('team2Score',`${sumTotal}`);
    }
    var button2=document.getElementById('hit2');
    button2?.setAttribute('disabled','disabled');
});

document.getElementById('genResult')?.addEventListener('click',function(){
      window.location.href="/result/result.html";
});
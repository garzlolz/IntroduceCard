//切換大頭照
var myImage = document.querySelector('img');
myImage.onclick = function()
{
    let mySrc = myImage.getAttribute('src');
    if(mySrc ==='images/myself.jpg')
    {
       this.setAttribute('src','images/myself2.jpg');
    }
    else
    {
       this.setAttribute('src','images/myself.jpg');
    }
}
//歷史紀錄
var numh = window.history;
document.getElementById("historyc").innerHTML= "歷史瀏覽紀錄 :" + numh.length;
//函式
var mybuttun = document.querySelector('button');
var myheading = document.querySelector('h1');
function setUserName()
{
    let myName = prompt('Who are you?','guest');
    if(!myName || myName===null)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem = ('name',myName);
        myheading.innerHTML = 'Hello '+myName+' , here is GarZ!';
    }
}

//之前的用戶
if(!localStorage.getItem('name'))
{
    setUserName();
}
else
{
    let stordname = localStorage.getItem('name');
    myheading.innerHTML = 'Hello '+storedname+', here is GarZ!';
}

//點擊按鍵更換用戶名
mybuttun.onclick = function()
{
    setUserName();
}

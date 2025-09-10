let timer;
let s = 0;
let m=0;
let h=0;
let mili=0;
isrunning  = false;
function update()
{
    const hours = String(h).padStart(2,'0');
    const munites = String(m).padStart(2,'0');
    const seconds = String(s).padStart(2,'0');
    const miliseconds = String(mili).padStart(2,'0');
    document.getElementById("time").textContent = `${hours}:${munites}:${seconds}:${miliseconds}`;
}
function startTimer()
{
    if(isrunning) return;
    isrunning =true;
    timer = setInterval(()=>
        {
            mili++;
            if(mili>=99)
            {
                mili =0;
                s++;
            }
            if(s>=59)
            {
                s=0;
                m++
            }
            if(m>=59)
            {
                m=0;
                h++;
            }
            update();

        },10)
}
function pauseTimer()
{
    clearInterval(timer);
    update();
    isrunning =false;
}
function resetTimer()
{
    pauseTimer();
    h=m=s=mili=0;
    update();
    

}
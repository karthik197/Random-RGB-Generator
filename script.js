const randomNumber=(min,max)=>{
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min+1))+min;
}
//Setting rgb value
const randomRGB=()=>[
    randomNumber(0,255),
    randomNumber(0,255),
    randomNumber(0,255)
];
//current rgb value
const currentValue=document.getElementById('value');
//Changing the rgb color
document.getElementById('generate').addEventListener('click',event=>{
    const rgb=randomRGB();
    const content=`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
    document.documentElement.style.setProperty('--current-value',content);
    currentValue.textContent=content;
})
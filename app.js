const spans = document.querySelectorAll("span")

const randomRGB = function(){
    const r = Math.round(Math.random() * 256);
    const g = Math.round(Math.random() * 256);
    const b = Math.round(Math.random() * 256);
    const color = `rgb(${r}, ${g}, ${b})`
    return color
}

for (let span of spans){
    setInterval(function(){
        span.style.color = randomRGB()
    }, 1000)
}
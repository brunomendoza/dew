function Ball (diameter) {
    this.diameter = diameter
    this.elem = document.createElement('div')
    this.elem.style.position = 'absolute'
    this.elem.style.width = this.diameter + 'rem'
    this.elem.style.height = this.diameter + 'rem'
    this.elem.style.borderRadius = '50%'
    this.elem.style.backgroundColor = 'silver'
}

let ball = new Ball(1)
document.body.style.height = '100vh'
document.body.appendChild(ball.elem)

let start
let vy = 5

let dy

function update(timestamp) {
    if (start === undefined)
        start = timestamp
    
    elapsed = timestamp - start
    dy = vy * elapsed

    console.log(ball.elem.getBoundingClientRect().top)

    ball.elem.style.top = ball.elem.getBoundingClientRect().top + vy + 'px'

    if (ball.elem.getBoundingClientRect().bottom >= document.body.clientHeight || ball.elem.getBoundingClientRect().y <= 0){
        console.log("Border reached!")
        vy *= -1
    }

    if (elapsed <= 10000)
        window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)


const container = document.querySelector('.container')

const rain = () => {
    let j = 0

    while (j <= 80){
        let gout = document.createElement('i')
        let x = innerWidth * Math.random()
        let time = 1 * Math.random()


        gout.style.animationDuration = time <= 0.4 ? (time + 0.4) + 's'  : time + 's'
        gout.style.animationDelay = time + 's'
        gout.style.left = x + 'px'

        container.appendChild(gout)

        j++
    }
}

rain()

/** @type {HTMLCanvasElement} */
var canvas1 = document.querySelector('#canv');
//画笔
var cxt = canvas1.getContext('2d');
//格子
(
    function () {
        ready()
    }())
var snake, direction, food, n;
var score = 0;
function ready() {
    //绘制格子
    for (i = 0; i < 400; i++) {
        draw(i, '#313131')
    }
    snake = [66, 65, 64];
    food = 344;
    direction = 1;
    draw(food, 'yellow')
    snake.forEach(v => {
        draw(v, 'skyblue')
    })

}
var start = false
//移动
var btn = document.querySelector('#start')
var pause
function run() {
    start = !start
    if (start) {
        btn.innerHTML = '暂停游戏'
        pause = setInterval(() => {
            snake.unshift(n = snake[0] + direction);
            if (snake.indexOf(n, 1) > 0 || n < 0 || n > 399 || (direction == -1 && n % 20 == 19) || (direction == 1) && n % 20 == 0) {
                alert('游戏结束，您的得分是:' + score)
                location.reload()
            }
            draw(n, 'skyblue')
            if (n == food) {
                score++
                food = ~~(Math.random() * 400)
                if (snake.indexOf(food) >= 0) {
                    food = ~~(Math.random() * 400);
                } else {
                    draw(food, 'yellow')
                }
            } else {
                draw(snake.pop(), '#313131')
            }
        }, 200);
    } else {
        btn.innerHTML = '开始游戏'
        clearInterval(pause)    
    }
}

//键盘事件
document.onkeydown = function (e) {

    if (direction == 1 || direction == -1) {
        if (e.key == "ArrowUp") {
            direction = -20
        } if (e.key == "ArrowDown") {
            direction = 20
        }

    }
    if (direction == 20 || direction == -20) {
        if (e.key == "ArrowRight") {
            direction = 1
        } if (e.key == "ArrowLeft") {
            direction = -1
        }

    }

}






function draw(point, color) {
    cxt.fillStyle = color;
    cxt.lineWidth = 1
    cxt.fillRect(point % 20 * 20 + 1, ~~(point / 20) * 20 + 1, 18, 18)


}
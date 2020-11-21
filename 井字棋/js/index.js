let cells = document.querySelectorAll("li")
var currentPlayer = true
var winArr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
var player = currentPlayer == true ? player = "x" : player = 'o'
var click = 0
cells.forEach((v, i) => {

    v.addEventListener('mouseover', (e) => {
        player = currentPlayer == true ? player = "x" : player = 'o'
        if (e.target.classList[0] == undefined) {
            e.target.classList.add(player + "1")
        }

    })
    v.addEventListener('mouseout', (e) => {
        e.target.classList.remove('x1', 'o1')
    })
    v.addEventListener('click', (e) => {
        click++
        player = currentPlayer == true ? player = "x" : player = 'o'
        console.log(player);
        e.target.classList.remove('x1', 'o1')
        //点击事件   
        e.target.classList.add(player)
        //判断获胜
        let isWin = checkWin(player)
        if (isWin) {
            alert(player + '获胜！点击确定重新开始。')
            location.reload()
        } else if (click == 9) {
            alert('平局！点击确定重新开始。')
            location.reload()
        }
        currentPlayer = !currentPlayer
    }, { once: true })

})
function checkWin(player) {
    let win = winArr.some(v => {
        let cellIndex1 = v[0]
        let cellIndex2 = v[1]
        let cellIndex3 = v[2]
        let cell1 = cells[cellIndex1]
        let cell2 = cells[cellIndex2]
        let cell3 = cells[cellIndex3]
        if (cell1.classList.contains(player) && cell2.classList.contains(player) && cell3.classList.contains(player)) {
            return true
        }
        return false
    })
    return win
}
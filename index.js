var n=1;
var arr=[["0","1","2"],
        ["3","4","5"],
        ["6","7","8"]];
var win="";
$(".col img").click(function(){
    if(n%2!==0 && !( $(this).hasClass("X") || $(this).hasClass("O") ) ){
        playmusic("./sounds/tap-notification-180637.mp3");
    $(this).attr("src","./images/cross.svg");
    $(this).addClass("X");
    var row=this.dataset.row;
    var col=this.dataset.col;
    arr[row][col]="X";
    }
    else if(n%2===0 && !( $(this).hasClass("O") || $(this).hasClass("X") ) ){
        playmusic("./sounds/tap-notification-180637.mp3");
        $(this).attr("src","./images/control-record.svg");
        $(this).addClass("O");
        var row=this.dataset.row;
        var col=this.dataset.col;
        arr[row][col]="O";
    }
    if(check(arr)){
        playmusic("./sounds/tadaa-47995.mp3");
        $("h1").text(win+" wins!!")
        $(".col img").off("click");
        reload();
    }
    else if(n>8){
        $("h1").text("It's a draw");
        playmusic("./sounds/mixkit-negative-guitar-tone-2324.wav");
        reload();
    }
    n++;
})
function check(arr){
    return checkRows(arr)||checkColumns(arr)||checkDiagonals(arr);
}
function checkRows(board) {         
    for (let i = 0; i < 3; i++) {
        if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            win=board[i][0];
            return true;
        }
    }
    return false;
}

function checkColumns(board) {
    for (let i = 0; i < 3; i++) {
        if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            win=board[0][i];
            return true;
        }
    }
    return false;
}

function checkDiagonals(board) {
    if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        win=board[0][0];
        return true;
    }
    if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        win=board[0][2];
        return true;
    }
    return false;
}
function playmusic(audio){
    var audio = new Audio(audio);
    audio.play();
}
function reload(){
    setTimeout(function(){
    $("h1").text("Press any key to RESTART..!!")
    $(document).keydown(function(){
    location.reload();
    });
},5000);
}
let inp = document.getElementById('demo').value
let btn = document.getElementById('btn')

btn.onclick = function Show() {
    if (inp.slice(1,2) === '1') {
        document.body.style.backgroundColor = 'yellow'
    }
    if (inp.slice(1,2) === '2') {
        document.body.style.backgroundColor = 'red'
    }
    if(inp.slice(1,2) === '3'){
        document.body.style.backgroundColor = 'black'
    }
}

function myFunction() {
    let person = prompt("Please enter your age");
    if (person < 18) {
      alert('Yas 18dan kicikdir')
    }
}
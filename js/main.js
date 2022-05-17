const boxes = document.querySelectorAll('.box')


let tttToggler = "X"

boxes.forEach(box =>{
    box.addEventListener('click', function handleClick(event){
        console.log('box clicked',event);

        if(box.innerHTML == ""){
        box.innerHTML = tttToggler;
        if(tttToggler === "X"){
            tttToggler = "O"
        }else {
            tttToggler = "X"
        }
        }


        let one = document.querySelector('.one')
        let two = document.querySelector('.two')
        let three = document.querySelector('.three')
        let four = document.querySelector('.four')
        let five = document.querySelector('.five')
        let six = document.querySelector('.six')
        let seven = document.querySelector('.seven')
        let height = document.querySelector('.height')
        let nine = document.querySelector('.nine')



        if(one.innerHTML == "X" && two.innerHTML == "X" &&  three.innerHTML == "X" || one.innerHTML == "O" && two.innerHTML == "O" &&  three.innerHTML == "O"){
            console.log('Tik Tak Toe')
            // if(tttToggler == "O"){
            //     document.querySelector('.result').innerHTML = `Winner is O !`
            // } else {
            //     document.querySelector('.result').innerHTML = `Winner is X !`
            // }
        }  else if(four.innerHTML == "X" && five.innerHTML == "X" &&  six.innerHTML == "X" || four.innerHTML == "O" && five.innerHTML == "O" &&  six.innerHTML == "O"){
            console.log('Tik Tak Toe')
        }  else if(seven.innerHTML == "X" && height.innerHTML == "X" &&  nine.innerHTML == "X" || seven.innerHTML == "O" && height.innerHTML == "O" &&  nine.innerHTML == "O"){
            console.log('Tik Tak Toe')
        }  else if(one.innerHTML == "X" && four.innerHTML == "X" &&  seven.innerHTML == "X" || one.innerHTML == "O" && four.innerHTML == "O" &&  seven.innerHTML == "O"){
            console.log('Tik Tak Toe')
        }  else if(two.innerHTML == "X" && five.innerHTML == "X" &&  height.innerHTML == "X" || two.innerHTML == "O" && five.innerHTML == "O" &&  height.innerHTML == "O"){
            console.log('Tik Tak Toe')
        }else if(three.innerHTML == "X" && six.innerHTML == "X" &&  nine.innerHTML == "X" || three.innerHTML == "O" && six.innerHTML == "O" &&  nine.innerHTML == "O"){
            console.log('Tik Tak Toe')
        }
    })
})
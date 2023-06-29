


window.onload = () => {
    let count = document.getElementById("count")
    let wish = document.getElementById("wish")
    wish.style.visibility="hidden"
 let timer = 10
 count.innerHTML =`You Wil Be Get Message Within ${timer} seconds`
  
    setTimeout(() => {
        count.innerHTML = `You Wil Be Get Message Within ${timer - 1} seconds`
        setTimeout(() => {
            count.innerHTML = `You Wil Be Get Message Within ${timer - 2} seconds`
            setTimeout(() => {
                count.innerHTML = `You Wil Be Get Message Within ${timer - 3} seconds`
                setTimeout(() => {
                    count.innerHTML = `You Wil Be Get Message Within ${timer - 4} seconds`
                    setTimeout(() => {
                        count.innerHTML = `You Wil Be Get Message Within ${timer - 5} seconds`
                        setTimeout(() => {
                            count.innerHTML = `You Wil Be Get Message Within ${timer - 6} seconds`
                            setTimeout(() => {
                                count.innerHTML = `You Wil Be Get Message Within ${timer - 7} seconds`


                                setTimeout(() => {
                                    count.innerHTML = `You Wil Be Get Message Within ${timer - 8} seconds`
                                    setTimeout(() => {
                                        count.innerHTML = `You Wil Be Get Message Within ${timer - 9} seconds`
                                        setTimeout(() => {
                                            count.innerHTML = `You Wil Be Get Message Within ${timer - 10} seconds`
                                          setTimeout(()=>{
                                            wish.style.visibility = 'visible';
                                            
                                             count.style.visibility = 'hidden';

                                          },1000)

                                        },1000);
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000);

            }, 1000)
        }, 1000)

    }, 1000)

}
let totalPrice = 0 ;
let counter = 0;
let totalSeat = [];
const seats = document.querySelectorAll('.allSeat');
for (let seat of seats){
    seat.addEventListener('click', function(set){
        const seatId = set.target.id
        if(counter === 4){
            return alert('You can not buy more seat');
        }
 
        
        if(totalSeat.includes(seatId)){
            return alert('We do not sell one seat at two times')
        }
        totalSeat.push(seatId);
        counter++;

        
        const totalSeat = document.getElementById('totalSeat');
        const totalSeatText = totalSeat.innerText;
        const setNewSeat = totalSeatText - 1;
        totalSeat.innerText = setNewSeat;
        if(setNewSeat <= 35){
             alert('one person can buy 4 tickets not more than');
             return 
                
        }

        //  change background color

        const BgChange = seat;
        seat.classList.add('bg-[#1DD100]' , 'text-white');
        BgChange.classList.add('bg-[#1DD100]');

        // set seat count
        const chooseSeat = document.getElementById('chooseSeat');
        const chooseSeatText = chooseSeat.innerText;
        const chooseSeatTextInt = parseInt(chooseSeatText);
        const newSeat = chooseSeatTextInt + 1;
        chooseSeat.innerText = newSeat;
     
    
    const seatNumber = seat.innerText;
    const showSeat = document.getElementById('showSeat');
    const p = document.createElement('p');
    p.innerText = seatNumber;
    showSeat.appendChild(p)
    // create seat class name

    const showClass = document.getElementById('showClass');
    const className = 'Economoy'
    const classNameP = document.createElement('p');
    classNameP.innerText = className;
    showClass.appendChild(classNameP);

    //  create price 

    const showPrice = document.getElementById('showPrice');
    const price = 550 ;
    const motPrice = document.createElement('p');
    motPrice.innerText = price;
    const finalPrice = showPrice.appendChild(motPrice);
    
    //  sum of price
        totalPrice += price
    const priceCoount = document.getElementById('priceCount')
    const priceCoountText = sumPrice.innerText;
    priceCoount.innerText = totalPrice;
    const motTaka = document.getElementById('motTaka');
            const motTakaText = motTaka.innerText;
            motTaka.innerText = totalPrice;
    });
}






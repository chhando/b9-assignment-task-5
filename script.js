let totalPrice = 0;
let counter = 0;
let totalSeat = [];
const seats = document.querySelectorAll('.allSeat');
for(let seat of seats){
    seat.addEventListener('click', function(ide){
        const seatId = ide.target.id;
        if(counter === 4){
            return alert('You can not buy more than 4 tickets');
        }

        if(totalSeat.includes(seatId)){
            return alert('We can not buy a tickets two times');
        }
        totalSeat.push(seatId);
        counter++;

        // seat left 

        const totalSeatLeft = document.getElementById('totalSeatLeft');
        const totalSeatLeftText = totalSeatLeft.innerText;
        const newSeat = totalSeatLeftText -1;
        totalSeatLeft.fffinnerText = newSeat ;
        if(newSeat <= 35){
            alert ('You can not buy more than 4 ticket')
            return
        }

        // background 
        
        const backgroundChange = seat;
        seat.classList.add('bg-[#1DD100]' , 'text-white');
        backgroundChange.classList.add('bg-[#1DD100]');

        // count
        const chooseSeat = document.getElementById('chooseSeat');
        const chooseSeatText = chooseSeat.innerText;
        const chooseSeatTextInt = parseInt(chooseSeatText);
        const setchooseSeat = chooseSeatTextInt + 1;
        chooseSeat.innerText = setchooseSeat;
        

        const seatNumber = seat.innerText;
        const showSeat = document.getElementById('showSeat');
        const p = document.createElement('p');
        p.innerText = seatNumber;
        showSeat.appendChild(p)
        // inject seat class name
    
        const showClass = document.getElementById('showClass');
        const className = 'Economoy'
        const classNameP = document.createElement('p');
        classNameP.innerText = className;
        showClass.appendChild(classNameP)
    
        //  inject price 
    
        const showPrice = document.getElementById('showPrice');
        const price = 550 ;
        const priceP = document.createElement('p');
        priceP.innerText = price;
        const finalPrice = showPrice.appendChild(priceP);

        totalPrice += price 
        const priceCount = document.getElementById('priceCount');
        const priceCountText = priceCount.innerText;
        priceCount.innerText = totalPrice;

        const motTaka = document.getElementById('motTaka');
        const motTakaText = motTaka.innerText;
        motTaka.innerText = totalPrice;
    });
}

// price discount

const apply = document.getElementById('applybtn');
applybtn.addEventListener('click', function(){
    const discountPrice = document.getElementById('discount');
    const cuppon = discountPrice.value;
    if ( totalPrice >= 2200){
        if(cuppon === 'NEW15'){
            const getDiscount = totalPrice * 0.15;
            const totalDiscount = totalPrice - getDiscount;

            const motTaka = document.getElementById('motTaka');
            const motTakaText = motTaka.innerText;
            motTaka.innerText = totalDiscount;

            const discountLabel = document.getElementById('discountLabel');
            discountLabel.classList.add('hidden');
        }

        else if(cuppon === 'Couple 20'){
            const getDiscount =totalPrice * 0.2;
            const totalDiscount = totalPrice -getDiscount;
            const motTaka = document.getElementById('motTaka');
            const motTakaText = motTaka.innerText;
            motTaka.innerText = totalDiscount;
            const discountLabel = document.getElementById('discountLabel');
            discountLabel.classList.add('hidden');
        }
        else {
            alert('Copy the cuppon code and paste');
            cuppon = remove();
        }
    }
    else{
        alert('First You will buy 4 ticket than We give you discount');
        cuppon = remove();
    }
})


// Buyer information 

const name = document.getElementById('name');
const number = document.getElementById('number');
const email = document.getElementById('email');

Submit.addEventListener('click', function(){
    const valueOfName = name.value;
    const valueOfNumber = number.value;
    const valueOfEmail = email.value;
    if(valueOfName === '' || valueOfNumber === '' || valueOfEmail === ''){
        const successBox = document.getElementById('successBox');
        alert('Please fill up your information first');
        return
    }
})
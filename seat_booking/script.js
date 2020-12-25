let theatre = document.querySelector('.theatre_hall');
let seat = document.querySelectorAll('.row .seat:not(.occupied)');
let tickets = document.getElementById('tickets');
let total = document.getElementById('total');

let movieSelector = document.getElementById('movie');

let bookTickets = document.querySelector('.book_tickets');

let ticketPrice = +movieSelector.value;



function updateSelectedSeats(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const totalSeats = selectedSeats.length;

  tickets.innerHTML = totalSeats;

  total.innerHTML = totalSeats * ticketPrice;
  

}

//movie change
movieSelector.addEventListener('change',(e)=>{
  ticketPrice = +e.target.value;
  updateSelectedSeats();
})


//seat select
theatre.addEventListener('click',(e)=>{
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){

    e.target.classList.toggle('selected');

    updateSelectedSeats();
  }
})


//book tickets

bookTickets.addEventListener('click',()=>{
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const totalSeats = selectedSeats.length;
  alert(`You have Booked ${totalSeats} Tickets`);
})

// I learnt how to do the cursor from a youtube tutorial, but I changed it a bit
// https://www.youtube.com/watch?v=rfpRZ2t_BrQ&t=15s

// cursor
let innerCursor = document.querySelector('.inner-cursor');

document.addEventListener('mousemove', moveCursor);

function moveCursor(e){
	let x = e.clientX;
	let y = e.clientY;



	innerCursor.style.left = `${x}px`;
	innerCursor.style.top = `${y}px`;
}

import React, {useState} from 'react';
import {MdKeyboardArrowUp} from 'react-icons/md';

export  const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	console.log(visible)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};
const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};
window.addEventListener('scroll', toggleVisible);
return (
	<button className='ScrollTopButton'>
	<MdKeyboardArrowUp onClick={scrollToTop}/>
	</button>
);
};

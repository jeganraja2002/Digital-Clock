console.log()


const Hours = document.querySelector(".Hours")
const Minutes = document.querySelector(".Minutes")
const AMPM = document.querySelector(".AMPM")
const Seconds = document.querySelector(".Seconds")
const shadow = document.querySelector('.own-shadow')
const date = document.querySelector(".date")


const  Timer = () =>{

	const arr = [7,"a",1,"b",2,"c",3,8,"d",4,"e",9,5,"f",6]
	const monthArr = ["Jan","Feb","Mar","Apr","May","Jun" ,"Jul" ,"Aug","Sep","Oct","Nov","Dec"]
	const weekArr = ["Sunday","Monday","Tuesday","Wedensday","Thursday","Friday","Saturday"] 
		let color = ""
	for (var i = 0; i < 6; i++) {
		const colorRan = Math.floor(Math.random()*arr.length)
		color+=arr[colorRan]
	}
	shadow.style.boxShadow=`0px 0px 1000px #${color}  `
	const today = new Date()

	date.innerHTML = `${monthArr[today.getMonth()]},${weekArr[today.getDay()]} ${today.getDate()} ,${today.getFullYear()}`

	Hours.innerHTML = today.getHours()<10 ? "0"+(today.getHours()-12):(today.getHours()-12) 	
	Seconds.innerHTML = today.getSeconds()<10 ? "0"+today.getSeconds():today.getSeconds() 	
	Minutes.innerHTML = today.getMinutes()<10 ? "0"+today.getMinutes():today.getMinutes() 	
	AMPM.innerHTML = today.getHours()>11 ? "PM":"AM" 	

}
Timer()


setInterval(Timer, 1000);






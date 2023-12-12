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

	const todays = new Date()
	date.innerHTML = `${monthArr[todays.getMonth()]},${weekArr[todays.getDay()]} ${todays.getDate()}`

	const today = new Date().toLocaleTimeString()
	
	if (Number(today[0]+today[1])>9) {

		Hours.innerHTML = today[0]+today[1]
		Minutes.innerHTML = today[3]+today[4]
		AMPM.innerHTML = today[9]+today[10]
		const min =  new Date().getSeconds()
		Seconds.innerHTML =min<10 ? "0" + min : min
	}
	else{
		Hours.innerHTML = "0" + today[0]
		Minutes.innerHTML = today[2]+today[3]
		AMPM.innerHTML = today[8]+today[9]
		const min =  new Date().getSeconds()
		Seconds.innerHTML =min<10 ? "0" + min:min
	}

}
Timer()


setInterval(Timer, 1000);






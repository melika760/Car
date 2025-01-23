export async function CarApis (make,year){
    const headers={
		'X-RapidAPI-Key': 'fdbea6f56fmsh3fe550d44d49f10p165624jsn8d7052fb83cf',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	};
const response= await fetch( `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&year=${year}`
, { method:"GET",
    headers:headers
});
if(!response.ok){return;}
const result= await response.json();

return result;
}

export function Calculation(car){
const baseRent=30;
const CurrentYear=new Date().getFullYear()
const CarAge=CurrentYear-car.year;
const AgeDiscount=baseRent*0.01*Math.max(0,CarAge-5);
const fuelEfficiencyBonus = car.combination_mpg > 25 ? 2 : 0;
const dailyRent = baseRent - AgeDiscount + fuelEfficiencyBonus;
return dailyRent.toFixed(2);
}
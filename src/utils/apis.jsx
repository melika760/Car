export async function CarApis (){
    const headers={
		'X-RapidAPI-Key': 'fdbea6f56fmsh3fe550d44d49f10p165624jsn8d7052fb83cf',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	};
const response= await fetch( `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=camry`
, { method:"GET",
    headers:headers
});
const result= await response.json();
console.log(result)
return result;
}


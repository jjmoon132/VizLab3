let cities;
d3.csv(
	'cities.csv', d3.autoType).then(data=>{
		cities = data;
		console.log('cities', cities);

		var europes = ["Austria", "Belgium","Bulgaria","Croatia","Cyprus","Czech Republic","Denmark","Estonia","Finland","France","Germany","Greece",
		"Hungary","Ireland","Italy","Latvia","Lithuania","Luxembourg","Malta","Netherlands","Poland","Portugal","Romania","Slovakia","Slovenia","Spain",
		"Sweden","United Kingdom"];

		var filtered_cities = cities.filter(d => europes.includes(d.country));
		console.log(filtered_cities);

		console.log(cities.length);
		console.log(filtered_cities.length);

		d3.select('.city-count').text("Number of cities: "+ filtered_cities.length);

		const width = 700;
		const height = 550;
		const svg = d3.select('.population-plot')
			.append('svg')
			.attr('width', width)
			.attr('height', height);

		svg.selectAll('circle')
			.attr("class","circles")
			.data(filtered_cities)
			.enter()
			.append('circle')
			.attr("cy",(d,_)=>d.y)
			.attr("cx",(d,_)=>d.x)
			.attr("r",(d,_)=>{
				if(d.population>=1000000){
					return 8;
				}else{
					return 4;
				}
			})
			.attr("fill","blue")
			.attr("stroke","black");
		svg.selectAll('text')
			.data(filtered_cities)
			.enter()
			.append("text")
			.attr("x",(d,_)=>d.x)
			.attr("y",(d,_)=>d.y+18)
			.text((d,_)=>d.city)
			.attr("opacity",(d,_)=>{
				if(d.population>=1000000){
					return 1;
				}else{
					return 0;}
			})
			.attr("text-anchor","middle")
			.attr("font-size", 11);
			

});
/*assign class names in svg to reference in first svg.selectAll("class name")

for  image url change
d3.select(".image").text("")
attr("Src",)
*/
window.onload = init;

function init() {
	//추가1
	getSales();
}

function getSales() {
    //추가1
		var url = "sales.json";
		var request = new XMLHttpRequest();
		request.open("GET", url);
		request.onload = function() {
			if(request.status == 200) {
				updateSales(request.responseText);
			}
		};
		request.send(null);
}

function updateSales(responseText) {
    //추가1
		var salesDiv = document.getElementById("sales");
		// salesDiv.innerHTML = responseText;
		var sales = JSON.parse(responseText);
		// JSON.parse는 객체로 변환
		for(var i = 0; i < sales.length; i++) {
			var sale = sales[i];
			var div = document.createElement("div");
			div.setAttribute("class", "saleItem");
			div.innerHTML = sale.name + "에서 볼을 " + sale.sales + "개 판매하였습니다.";
			salesDiv.appendChild(div);
		}
}
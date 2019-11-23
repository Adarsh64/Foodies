export default class listHotelsController {
	static get $inject() {
		return ["authService", "$location","dataService"];
	}


	constructor(authService, $location,dataService) {
		this.authService = authService;
		this.$location = $location;
		this.dataService = dataService;
		this.getHotelsList();
	}

	getHotelsList(){
		const ctrl = this;
		this.dataService.getHotelsList().then(function(response) {
			console.log(response.data);
			ctrl.hotels = response.data["hotels"];	
		});
	}

	getMenu(item_id,long,lat){		
		console.log(item_id);

		sessionStorage.hotelId = item_id;
		sessionStorage.Latdest = lat;
		sessionStorage.Lngdest = long;
		console.log("lat ",sessionStorage.Latdest);
		console.log("long ",sessionStorage.Lngdest);
		this.$location.path("/dine-or-take");
	}
}
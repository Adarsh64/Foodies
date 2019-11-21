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
}
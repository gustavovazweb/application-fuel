import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	public result: String = "Result"

	calc(){

		//Validating fields
		if( this.valueAlcohol && this.valueGasoline ){
			
			var vAlcohol = parseFloat(this.valueAlcohol)
			var vGasoline = parseFloat(this.valueGasoline)

			var res = vAlcohol / vGasoline
			if( res >= 0.7){
				this.result = "Gasoline is better"
			}else{
				this.result = "Alcohol is better"
			}

		}else{
			this.result = "Fill all fields correctly!"
		}

	}

}

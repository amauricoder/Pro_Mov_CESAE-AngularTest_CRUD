import { Component } from '@angular/core';
import { S } from '../../assets/dados';
import { CommonModule } from '@angular/common';
import { CrewMembers } from '../services/crew-members';
import { SInterface } from '../models/S.interface';
import { RouterLink } from '@angular/router';


@Component({
	selector: 'app-home',
	imports: [CommonModule, RouterLink],
	templateUrl: './home.html',
	styleUrl: './home.scss'
})
export class Home {
	crew: SInterface[] = [];

	constructor(private crewService: CrewMembers) { }

	ngOnInit(): void {
		this.crewService.getCrewMembers().subscribe(members => {
			this.crew = members; // Assign the emitted array of members to this.crew
		});
	}

	deleteMember(id_todelete: number) {
		console.log(id_todelete);
		this.crewService.deleteCrewMember(id_todelete);
	}

	getEstadoStyle(estado: string) {
		estado = estado.toLowerCase();

		if (estado === 'ativo') {
			return { 'background-color': '#d4edda', 'color': '#155724' };
		} else if (estado === 'em missão') {
			return { 'background-color': '#f8d7da', 'color': '#721c24' };
		} else if (estado === 'em descanso') {
			return { 'background-color': '#fff3cd', 'color': '#856404' };
		} else {
			return {};
		}
	}

}

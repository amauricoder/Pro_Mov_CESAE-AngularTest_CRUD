import { Component } from '@angular/core';
import { SInterface } from '../models/S.interface';
import { ActivatedRoute } from '@angular/router';
import { CrewMembers } from '../services/crew-members';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-member-detail',
	imports: [CommonModule, RouterModule],
	templateUrl: './member-detail.html',
	styleUrl: './member-detail.scss'
})
export class MemberDetail {
	member: SInterface | undefined;

    //has ActivatedRoute injected to get the id
	constructor(
		private route: ActivatedRoute,
		private crewService: CrewMembers
	) { }

    // ngOnInit initializes the component's data properties and sets up its initial state.
	ngOnInit(): void {
        //Get route parameter and subscribe to the changes
        this.route.paramMap.subscribe(params => {
            const memberId = Number(params.get('id'));

            if (memberId) {
                this.crewService.getCrewMemberById(memberId).subscribe(
                    foundMember => {
                        this.member = foundMember; //put Foundmember on Member list
                        if (!this.member) {
                            console.log(`Membro com ID ${memberId} não encontrado.`);
                        }
                    },
                    error => {
                        console.log('Erro ao buscar membro:', error);
                    }
                );
            } else {
                console.log('ID do membro não fornecido na URL.');
            }
        });
    }

}

import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SInterface } from '../models/S.interface';
import { CommonModule } from '@angular/common';
import { CrewMembers } from '../services/crew-members';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { take } from 'rxjs';

@Component({
	selector: 'app-member-edit',
	imports: [RouterModule, CommonModule, ReactiveFormsModule],
	templateUrl: './member-edit.html',
	styleUrl: './member-edit.scss'
})
export class MemberEdit {

	crewForm!: FormGroup;
	member: SInterface | undefined;

	constructor(
		private crewService: CrewMembers,
		private route: ActivatedRoute,
		private fb: FormBuilder,
		private router: Router
	) { }

	//ngOnInit initializes the component's data properties and sets up its initial state.
	//.subscribe is depreciated, but I will use it this way for now.
	ngOnInit(): void {
		this.crewForm = this.fb.group({
			id: [{ value: '', disabled: true }],
			nome: ['', Validators.required],
			especie: ['', Validators.required],
			funcao: ['', Validators.required],
			estado: ['', Validators.required],
			dataNascimentoCriacao: ['', Validators.required],
			setorDepartamento: ['', Validators.required],
			contactosEmergencia: ['', Validators.required],
			notasObservacoes: ['']
		});

		this.route.paramMap.subscribe(params => {
			const memberId = Number(params.get('id'));

			if (memberId) {
				this.crewService.getCrewMemberById(memberId)
					.pipe(take(1))
					.subscribe(
						foundMember => {
							if (foundMember) {
								this.member = foundMember;
								this.crewForm.patchValue(this.member);
							} else {
								console.log(`Membro com ID ${memberId} não encontrado.`);
								this.router.navigate(['/home']);
							}
						},
						error => {
							console.error('Erro ao buscar membro:', error);
							this.router.navigate(['/home']);
						}
					);
			} else {
				console.warn('ID do membro não fornecido na URL ou inválido.');
				this.router.navigate(['/home']);
			}
		});
	}

	//onSubmit is triggered when I click the button on form
	//send the value of the edited member and update the value
	//on the array using updateCrewMember from crewservice injected on constructor.
	onSubmit(): void {
		if (this.crewForm.valid && this.member) {
			const updatedMember: SInterface = {
				...this.crewForm.getRawValue(),
				id: this.member.id
			};

			this.crewService.updateCrewMember(updatedMember);
			alert('Membro atualizado com sucesso!');
			this.router.navigate(['member-detail/', this.member.id]);
		} else {
			console.log('Formulário inválido. Por favor, preencha todos os campos obrigatórios.');
			this.crewForm.markAllAsTouched();
		}
	}


}

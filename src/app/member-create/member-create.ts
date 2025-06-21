import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { CrewMembers } from '../services/crew-members';
import { Router, RouterLink } from '@angular/router';
import { SInterface } from '../models/S.interface';



@Component({
	selector: 'app-member-create',
	imports: [CommonModule, ReactiveFormsModule, RouterLink],
	templateUrl: './member-create.html',
	styleUrl: './member-create.scss'
})
export class MemberCreate {
	control = new FormControl('');
	crewForm!: FormGroup;
	
	constructor(
		private fb: FormBuilder,
		private crewService: CrewMembers,
		private router: Router
	) { }

	//ngOnInit initializes the component's data properties and sets up its initial state.
	ngOnInit(): void {
		this.crewForm = this.fb.group({
			nome: ['', Validators.required],
			especie: ['', Validators.required],
			funcao: [''],
			estado: [''],
			dataNascimentoCriacao: [''],
			setorDepartamento: [''],
			contactosEmergencia: [''],
			notasObservacoes: ['']
		});
	}

	onSubmit(): void {
		if (this.crewForm.valid) {
			
			const newMember: SInterface = {
				id: this.crewService.getLastMemberId() + 1,
				nome: this.crewForm.value.nome,
				especie: this.crewForm.value.especie,
				funcao: this.crewForm.value.funcao,
				estado: this.crewForm.value.estado,
				dataNascimentoCriacao: this.crewForm.value.dataNascimentoCriacao,
				setorDepartamento: this.crewForm.value.setorDepartamento,
				contactosEmergencia: this.crewForm.value.contactosEmergencia,
				notasObservacoes: this.crewForm.value.notasObservacoes
			}

			this.crewService.addCrewMember(newMember);
			alert('Usuário adicionado com sucesso!');
			this.crewForm.reset();

		} else {
			alert('Formulário inválido. Por favor, preencha todos os campos obrigatórios.');
			this.crewForm.markAllAsTouched();
		}
	}

}


import { Injectable } from '@angular/core';
import { S } from '../../assets/dados';
import { SInterface } from '../models/S.interface';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class CrewMembers {

	//Class Values
	private _crewMembers = new BehaviorSubject<SInterface[]>([]);
	crewMembers$ = this._crewMembers.asObservable();

	constructor() {
		this._crewMembers.next(new S().data);
	}

	//GETTERS
	getCrewMembers() {
		return this._crewMembers;
	}
	
	getCrewMemberById(id: number): Observable<SInterface | undefined> {
		return this.crewMembers$.pipe(
			map(members => members.find(member => member.id === id))
		);
	}

	getLastMemberId(){
		const currentMembers = this._crewMembers.value;
		if (currentMembers.length === 0)
			return 1;
		const lastId = Math.max(...currentMembers.map(member => member.id));
		return lastId;
	}

	deleteCrewMember(id_todelete: number) {
		const currentMembers = this._crewMembers.value;
		const updatedMembers = currentMembers.filter(member => member.id !== id_todelete);
		this._crewMembers.next(updatedMembers);

	}

	//METHODS
	//Add a new member to crewMembers.
	//.next is from rxjx
	addCrewMember(newMember: SInterface){
		const currentMembers = this._crewMembers.value;
        const updatedMembers = [...currentMembers, newMember];
        this._crewMembers.next(updatedMembers);
	}

	//Update member value on array
	updateCrewMember(toUpdateMember: SInterface){
		const currentMembers = this._crewMembers.value;
        const index = currentMembers.findIndex(member => member.id === toUpdateMember.id);

		if (index > -1) {
            // Create a NEW array with the updated member
            const updatedMembers = [
                ...currentMembers.slice(0, index),
                toUpdateMember,                   
                ...currentMembers.slice(index + 1)
            ];
            this._crewMembers.next(updatedMembers);//Emit the new array
        } else {
            console.warn(`Member with ID ${toUpdateMember.id} not found for update.`);
        }
	}
}

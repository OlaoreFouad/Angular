export class PatientsService {
    patients = [
        {
            fname: 'Fouad',
            lname: 'Olaore',
            ailment: 'None'
        },
        {
            fname: 'Darmian',
            lname: 'Foreshaw',
            ailment: 'Cholera'
        }
    ];

    addPatient(fname: string, lname: string, ailment: string) {
        this.patients.push({fname: fname, lname: lname, ailment: ailment});
    }

    updateAilment(ailment: string, id: number) {
        this.patients[id].ailment = ailment;
        console.log('New ailment status : ' + ailment);
    }
}
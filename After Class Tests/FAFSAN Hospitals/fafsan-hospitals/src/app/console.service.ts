export class ConsoleService {
    logPatient(fname: string) {
        console.log('A new patient with the name ' + fname + ' is created!');
    }

    logAilment(ailment: string, id: number) {
        console.log('Patient with id ' + id + ' changed to ' + ailment);
    }
}
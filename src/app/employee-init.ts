  
export class Init {
    load() {
      if(localStorage.getItem('employees') === null || localStorage.getItem('employees') == undefined) {
        console.log('No employees Found... Creating...');
        let emps = [
          {
            id:1,
            firstName:'Prashant',
            lastName:'Panigrahi',
            username : 'Prashant',
            age  : 35,
            salary : 100000,
            cardno : 5103720443269006,
          }, 
          {
            id:2,
            firstName:'shant',
            lastName:'Panigrahi',
            username : 'shant',
            age  : 25,
            salary : 15000,
            cardno : 5103720443262006,
          }, {
            id:3,
            firstName:'Rajan',
            lastName:'anigrahi',
            username : 'rajan',
            age  : 36,
            salary : 50000,
            cardno : 5103720443262116,
          },
        ];
  
        localStorage.setItem('employees', JSON.stringify(emps));
        return 
      } else {
        console.log('Found employees...');
      }
    }
  }
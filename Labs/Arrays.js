const icecream_flavors = ['chocolate', 'vanilla', 'strawberry', 'coffee', 'mint chip', 
'bunny tracks', 'banana', 'rocky road', 'sherbert raspberry', 'sherbert orange', 'sherbert lime' ]

const flavorList=() => {
    for (choice of icecream_flavors) {
        console.log(choice);
    }
}
flavorList();

function flavorVariable(flavorchoices){
    const variable=icecream_flavors[flavorchoices]
    console.log(variable);
}
flavorVariable(9)
    
const flavorChoice =() => {
    const joinedFlavors=icecream_flavors.join(' & ')
    console.log(joinedFlavors);
}
flavorChoice();



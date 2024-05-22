const colorList=()=> {
    const colors= new Map();
    colors.set(1, 'Red');
    colors.set(2, 'Orange');
    colors.set(3, 'Yellow');
    colors.set(4, 'Green');
    colors.set(5, 'Blue');
    colors.set(6, 'Indigo');
    colors.set(7, 'Violet');
    return colors;
}

const colorElement =(value, key)=>{
    console.log(`${key} is the number for ${value}`);
}

const forEachColor = () => {
    const myColor = colorList();
    myColor.forEach(colorElement);
}
forEachColor();

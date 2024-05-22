
fs.writeFile('input.txt', 'Some content', (err) => {
    if(err) console.log(err);

    console.log('File saved!');
});

const writeFileFunc = async () => {
    try {
        const content = 'some content here.';
        await fsPromise.writeFile('input2.txt', content)
    } catch (error) {
        console.log(error);
    }
}
writeFileFunc();
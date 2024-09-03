//Seperates exercises in an orderly fashion
export function topicSeperator(title) {
    console.log();
    console.log();
    console.log(title);

    let seperator = '';

    for (let i = 0; i < title.length; i++) {
        seperator += '-'
    };

    console.log(seperator);
    console.log();
};
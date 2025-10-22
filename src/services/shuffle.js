export function shuffle(array) {

    let n = array.length;
    for (let i = n - 1; i >= 0; i--) {
        let rand = i + Math.floor(Math.random() * (n - i));
        [array[i], array[rand]] = [array[rand], array[i]];
    }

}
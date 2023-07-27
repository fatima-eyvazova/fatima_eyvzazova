const array = [1, 2, 3, 4, 5]
const url = `https://catfact.ninja/fact`;
const factElements = document.querySelectorAll('.factDesription');


const text = []

const fetchCatFact = async () => {
    const promise = await fetch(url);
    const result = await promise.json();
    return result?.fact;
}

//  first method
const promises = array.map(item => fetchCatFact());
const getFacts2 = async () => {
    const res = await Promise.all(promises);
    factElements.forEach((el, index) => {
        el.textContent = res[index];
    })
}


// second method

// const getFacts = async () => {
//     for (let i = 0; i < 5; i++) {
//         text[i] = await fetchCatFact();
//     }
// }

// getFacts();
getFacts2();





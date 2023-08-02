const factItems = document.querySelectorAll('.factItem');
const factDesription = document.querySelectorAll('.factDesription span');
const url = 'https://catfact.ninja/fact'
const fetchCatFact = async (index) => {
    try {
        const promise = await fetch(url);
        const result = await promise.json();
        factDesription[index].textContent = result?.fact;
    }
    catch (error) {
        console.log(error);
    }
}

const factNumber = document.querySelectorAll(".factNumber");

factNumber.forEach((item, index) => {
    const toggleBtn = item.querySelector('.toggle-btn');

    item.addEventListener("click", async () => {
        const content = item.nextElementSibling;

        if (content.style.display === "none" || !content.style.display) {
            await fetchCatFact(index);
            content.style.display = "flex";
            toggleBtn.textContent = '-';

        } else {
            content.style.display = "none";
            toggleBtn.textContent = '+';
            factDesription[index].textContent = "";
        }
    });
});

const imgParent = document.getElementById('imgParent');
const icon = document.getElementById('icon');
const defaultImageSrc = '/images/blueicon.png';
const alternativeImageSrc = '/images/redicon.png';

const changeImage = () => {
    icon.src = alternativeImageSrc;
};

const revertImage = () => {
    icon.src = defaultImageSrc;
};

imgParent.addEventListener('mouseover', changeImage);
imgParent.addEventListener('mouseout', revertImage);


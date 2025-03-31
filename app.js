const galleryItems = [
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
        description: 'Hokkaido Flower',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
    },
];
const galleryList = document.createElement('ul')

galleryList.style.listStyle = "none";
galleryList.style.display = "flex";
galleryList.style.flexWrap = "wrap";
galleryList.style.gap = "50px";
galleryList.style.justifyContent = "center";

const finalGallery = galleryItems.map(galleryItem => {
    const elementOfLi = `
    <li data-info="${galleryItem.original}" data-alt="${galleryItem.description}" class="gallery__item">
<a
class="gallery__link"
href=""
>
<img
class="gallery__image"
src="${galleryItem.original}"
data-source=""
alt="${galleryItem.description}"
/>
</a>
</li>
    `
    return elementOfLi
})
const galleryString = finalGallery.join('')
galleryList.innerHTML = galleryString

document.body.append(galleryList)


const backdrop = document.querySelector(".lightbox");


galleryList.addEventListener("click", (event) => {
    event.preventDefault()
    if (event.target.nodeName === "IMG") {
        backdrop.classList.add("is-open")
        const closeBtn = document.querySelector(".lightbox__button");
        console.log(closeBtn)
        closeBtn.addEventListener("click", (event) => {
            backdrop.classList.remove("is-open")
        });
        const modalImg = document.querySelector(".lightbox__image");
        const modalSource = event.target.closest("li").dataset.info;
        const modalAlt = event.target.closest("li").dataset.alt;
        modalImg.src = modalSource;
        modalImg.alt = modalAlt;
    }
});

// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles').
then(res => {
    let res1 = res.data.articles.javascript;
    console.log(res1);
    res1.forEach(item => {
        console.log(item);
        createCards(item);
    })
}).
catch(res => {
    console.log('error bruh');
});

axios.get('https://lambda-times-backend.herokuapp.com/articles').
then(res => {
    let res1 = res.data.articles.bootstrap;
    console.log(res);
    res1.forEach(item => {
        //console.log(item);
        createCards(item);
    })
}).
catch(res => {
    console.log('error bruh');
});

axios.get('https://lambda-times-backend.herokuapp.com/articles').
then(res => {
    let res1 = res.data.articles.technology;
    //console.log(res1);
    res1.forEach(item => {
        //console.log(item);
        createCards(item);
    })
}).
catch(res => {
    console.log('error bruh');
});

axios.get('https://lambda-times-backend.herokuapp.com/articles').
then(res => {
    let res1 = res.data.articles.jquery;
    //console.log(res1);
    res1.forEach(item => {
       // console.log(item);
        createCards(item);
    })
}).
catch(res => {
    console.log('error bruh');
});


axios.get('https://lambda-times-backend.herokuapp.com/articles').
then(res => {
    let res1 = res.data.articles.node;
    //console.log(res1);
    res1.forEach(item => {
        //console.log(item);
        createCards(item);
    })
}).
catch(res => {
    console.log('error bruh');
});



function createCards (card) {

    let mainCard = document.createElement('div'),
        headline = document.createElement('div'),
        author = document.createElement('div'),
        imgContainer = document.createElement('div'),
        img = document.createElement('img'),
        span = document.createElement('span');

        headline.textContent = card.headline;
        span.textContent = card.authorName;
        img.src = card.authorPhoto;

        mainCard.append(headline);
        mainCard.append(author);
        author.append(imgContainer);
        imgContainer.append(img);
        author.append(span);


        mainCard.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imgContainer.classList.add('img-container');

        let cardsContainer = document.querySelector('.cards-container');

        cardsContainer.append(mainCard);

        return mainCard;


        
}

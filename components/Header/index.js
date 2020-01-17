// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(header) {
    let headerDiv = document.createElement('div'),
        spanDate = document.createElement('span'),
        title =document.createElement('h1'),
        spanTemp = document.createElement('span');


        spanDate.textContent = 'March 28, 2019';
        title.textContent = 'Lambda Times';
        spanTemp.textContent = '98 degrees';

        headerDiv.classList.add('header');
        spanDate.classList.add('date');
        spanTemp.classList.add('temp');

        headerDiv.append(spanDate);
        headerDiv.append(title);
        headerDiv.append(spanTemp);


        return headerDiv
};

const headerContainer = document.querySelector('.header-container');

headerContainer.append(Header());

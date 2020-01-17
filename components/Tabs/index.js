// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics').
then(res => {
    let res1 = res.data.topics;
    //console.log(res1);
    res1.forEach(item => {
        createTabs(item);
    })
}).
catch(res => {
    console.log('error my guy');
});


function createTabs (tabs) {

    let tab = document.createElement('div');

    tab.classList.add('tab');

    let topics = document.querySelector('.topics');

    tab.textContent = tabs

    topics.append(tab);

}
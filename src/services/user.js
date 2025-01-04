
//CRUD Subscription
export function addSubscription(newSub) {
    // code to add subscription
    let tempSubs = JSON.parse(localStorage.getItem('subscriptions'));
    let tempNewSub = {...newSub, id: tempSubs.length + 1};
    tempSubs = [...tempSubs, tempNewSub]
    localStorage.setItem('subscriptions', JSON.stringify(tempSubs));
    return tempSubs; 
}

export function deleteSubscription(newListSubs) {
    // code to delete subscription

}

export function updateSubscription(newListSubs) {
    localStorage.setItem('subscriptions', JSON.stringify(newListSubs))
}

export function getAllSubscriptions(){
    const userSubs = localStorage.getItem('subscriptions') || [];
    return userSubs;
}

//CRUD Category
export function addCategory(newCat) {
    // code to add category
    let tempCats = JSON.parse(localStorage.getItem('categories'));
    let tempNewCat = {...newCat, id: tempCats.length + 1};
    tempCats = [...tempCats, tempNewCat]
    localStorage.setItem('categories', JSON.stringify(tempCats));
    return tempCats;
}

export function deleteCategory() {
    // code to delete category
}

export function updateCategory() {

}

export function getAllCategories() {
    const userCats = localStorage.getItem('categories') || [];
    return userCats;
}

//INIT User
export function initUser() {
    if(!localStorage.getItem('categories')){
        localStorage.setItem('categories', '[]');
    }
    if(!localStorage.getItem('subscriptions')){
        localStorage.setItem('subscriptions', '[]');
    }
}
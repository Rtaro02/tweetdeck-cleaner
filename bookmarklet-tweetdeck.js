javascript:(function(){
    let a = document. querySelectorAll("a");
    for(var i = 0; i < a.length; i++) {
            if(a[i].hasAttribute("class") && a[i].getAttribute("class") === 'js-action-header-button column-header-link column-settings-link'){
                  a[i].click();
            }
    }
    let b = document. querySelectorAll("button");
    for(var i = 0; i < b.length; i++) {
            if(b[i].hasAttribute("class") && b[i].getAttribute("data-action") === 'clear'){
                  b[i].click();
            }
    }
    for(var i = 0; i < a.length; i++) {
            if(a[i].hasAttribute("class") && a[i].getAttribute("class") === 'js-action-header-button column-header-link column-settings-link'){
                  a[i].click();
            }
    }
})();

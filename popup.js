let active = false;

document.querySelector('#decrease').addEventListener('click', () => {
    if (!active) return;

    browser.tabs.query({active: true, currentWindow: true})
        .then((tabs) => {
            browser.tabs.sendMessage(tabs[0].id, {
                command: 'change-speed',
                amount: -0.5,
            });
        });
});

document.querySelector('#increase').addEventListener('click', () => {
    if (!active) return;

    browser.tabs.query({active: true, currentWindow: true})
        .then((tabs) => {
            browser.tabs.sendMessage(tabs[0].id, {
                command: 'change-speed',
                amount: 0.5,
            });
        });
});

browser.tabs.executeScript({file: "/content-script.js"})
    .then(() => active = true)
    .then(() => console.log('Successfully added sanic.'))
    .catch((e) => {});

const { app, BrowserWindow, TouchBar } = require('electron')
const { TouchBarLabel, TouchBarButton, TouchBarSpacer } = TouchBar

// birthdayButton
const birthdayButton = new TouchBarButton({
    label: '🎂🎂🎂 Happy Birthday, Jeason!',
    backgroundColor: '#fff',
    click: function () {
        birthdayButton.label = ''
    }
})

const touchBar = new TouchBar([birthdayButton])

app.once('ready', () => {
    let window = new BrowserWindow({
        frame: false,
        titleBarStyle: 'hiddenInset',
        width: 200,
        height: 200,
        backgroundColor: '#000'
    })
    window.loadURL('about:blank')
    window.setTouchBar(touchBar)
})
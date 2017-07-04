const {
    app,
    BrowserWindow,
    TouchBar
} = require('electron')




const {
    TouchBarLabel,
    TouchBarButton,
    TouchBarSpacer
} = TouchBar




// birthdayButton
const birthdayButton = new TouchBarButton({
    label: '   🎂🎂🎂 Happy Birthday, Jeason!      1996 - 2017                                                                                         ',
    backgroundColor: '#42299a',
    click: function () {}
})

const labels = new TouchBarLabel({
    label: '🎂🎂🎂 Happy Birthday, Jeason!'
})

const touchBar = new TouchBar([
    birthdayButton
])

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
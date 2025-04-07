import displaySpotify from './components/apps/spotify';
import { displayPhotoshop } from './components/apps/photoshop';
import { displayTerminal } from './components/apps/terminal';
import { displaySettings } from './components/apps/settings';
import { displayChrome } from './components/apps/chrome';
import { displayTrash } from './components/apps/trash';
import { displayGedit } from './components/apps/gedit';
import { displayAboutOusHtm } from './components/apps/oushtm';
import { displayTerminalCalc } from './components/apps/calc';
import { displayMyWorks } from './components/apps/my-works';

const apps = [
    {
        id: "my-works",
        title: "My Works",
        icon: './themes/Yaru/system/folder.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayMyWorks,
    },
    {
        id: "chrome",
        title: "Google Chrome",
        icon: './themes/Yaru/apps/chrome.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayChrome,
    },
    {
        id: "calc",
        title: "Calc",
        icon: './themes/Yaru/apps/calc.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminalCalc,
    },
    {
        id: "about-oushtm",
        title: "About OusHtm",
        icon: './themes/Yaru/system/user-home.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayAboutOusHtm,
    },
    {
        id: "photoshop",
        title: "Adobe Photoshop",
        icon: './themes/Yaru/apps/photoshop.svg',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayPhotoshop,
    },
    {
        id: "terminal",
        title: "Terminal",
        icon: './themes/Yaru/apps/bash.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminal,
    },
    {
        id: "spotify",
        title: "Spotify",
        icon: './themes/Yaru/apps/spotify.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySpotify, // India Top 50 Playlist 😅
    },
    {
        id: "settings",
        title: "Settings",
        icon: './themes/Yaru/apps/gnome-control-center.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySettings,
    },
    {
        id: "trash",
        title: "Trash",
        icon: './themes/Yaru/system/user-trash-full.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayTrash,
    },
    {
        id: "gedit",
        title: "Contact Me",
        icon: './themes/Yaru/apps/gedit.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayGedit,
    },
    {
        id: "github",
        title: "GitHub",
        icon: './themes/Yaru/apps/github.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        isExternalApp: true,
        url: "https://github.com/oushtm",
        screen: () => {},
    },
    {
        id: "instagram",
        title: "Instagram",
        icon: './themes/Yaru/apps/instagram.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        isExternalApp: true,
        url: "https://www.instagram.com/htm._.designer/"
    },
]

export default apps;
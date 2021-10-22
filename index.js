//Dependencies
const Fs = require("fs")

//Main
Fs.unlinkSync(`C:\\Program Files (x86)\\Steam\\crashhandler.dll`)
Fs.unlinkSync(`C:\\Program Files (x86)\\Steam\\crashhandler64.dll`)
Fs.unlinkSync(`C:\\Program Files (x86)\\Steam\\steam.exe`)
Fs.unlinkSync(`C:\\Program Files (x86)\\Steam\\steamclient.dll`)
Fs.unlinkSync(`C:\\Program Files (x86)\\Steam\\steamclient64.dll`)

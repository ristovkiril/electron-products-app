import {app, BrowserWindow} from "electron";
import path from 'path';

app.on("ready", async () => {
  const mainWindow = new BrowserWindow({});

  await mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
})
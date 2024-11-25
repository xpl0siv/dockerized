// src/index.ts
import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import path from 'path'

dotenv.config();

const app: Express = express();
const port = +process.env.PORT! || 3005;
// use '0.0.0.0' to only allow connections from the same machine
// + Run the app inside a container, it has its own network environment, separate from the host machine
// + '0.0.0.0' allows the server to listen on all available network interfaces
const host = '0.0.0.0';

const MOCK_FOLDER = path.join(__dirname, 'mock');
const COMMON_FOLDER = path.join(MOCK_FOLDER, 'common');
const TARGET_FOLDER = path.join(MOCK_FOLDER, 'target');

const File = {
    FEDERATION_MANIFEST: 'federation.manifest.json',
    CONFIGURATION: 'configuration.json'
}

const MANIFEST_PATH = path.join(MOCK_FOLDER, File.FEDERATION_MANIFEST);
const CONFIG_PATH = path.join(COMMON_FOLDER, File.CONFIGURATION);

const DynamicFiles = (param: string, target?: string) => ({
    I18N: `i18n-${param}${target ? `-${target}` : ''}.json`,
});

const LANGUAGE_PATH = (language: string) => path.join(COMMON_FOLDER, DynamicFiles(language).I18N);
const SPECIFIC_LANGUAGE_PATH = (language: string, target: string) => path.join(TARGET_FOLDER, DynamicFiles(language, target).I18N);

app.get("/", (req: Request, res: Response) => {
    res.sendFile(MANIFEST_PATH);
});

app.get("/common/configuration", (req: Request, res: Response) => {
    res.sendFile(CONFIG_PATH);
});

app.get(`/common/:language/:target?`, (req: Request, res: Response) => {
    const {language, target} = req.params;
    console.log(`[server]: Language: ${language}`);
    console.log(`[target]: Target: ${target}`);
    res.sendFile(target && SPECIFIC_LANGUAGE_PATH(language, target) || LANGUAGE_PATH(language));
});

// Start the server, without using a host.
app.listen(port,host, () => {
    console.log(`[server]: running on http://${host}:${port}`);
});
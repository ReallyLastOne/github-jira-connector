import Resolver from '@forge/resolver';
import {storage} from "@forge/api";

const resolver = new Resolver();

const generateStorageKey = (keyPrefix, projectKey) => `${keyPrefix}-${projectKey}`;

const log = (message, data) => console.log(`${message} ${JSON.stringify(data)}`);

resolver.define('saveProjectGithubURL', async (req) => {
    log("addProjectGithubURL", req);

    const projectKey = req.context.extension.project.key;
    const storageKey = generateStorageKey("github-url", projectKey);
    await storage.set(storageKey, req.payload.url);

    return req.payload.url;
});

resolver.define('getProjectGithubURL', async (req) => {
    log("getProjectGithubURL", req);

    const storageKey = generateStorageKey("github-url", req.payload.key);
    return await storage.get(storageKey);
});

resolver.define('getProjectKey', async (req) => {
    return req.context.extension.project.key;
});

export const handler = resolver.getDefinitions();
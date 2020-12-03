## How to use:

1. Run `npm install` to install dependencies
2. Run `npm run build` or `npm run watch` to compile app
3. In first terminal run `npx http-server -p 8081` in root rep folder
4. In second terminal run _ngrok_ for https: `npx ngrok http 8081`
5. Get https-url from _ngrok_ and paste it in `Web-plugin url` in your app settings


## Amplify Backend

1. Install amplify `npm install -g @aws-amplify/cli`
2. Install amplify library `npm install npm i aws-amplify`
2. Integrate backend into client repo `amplify pull --appId d2oveujq8uapz3 --envName staging`
3. Generate GraphQL and data schema `amplify codegen add` or `amplify codegen` if already exists
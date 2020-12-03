## How to use:

1. Run `npm install` to install dependencies
2. Run `npm run build` or `npm run watch` to compile app
3. In first terminal run `npx http-server -p 8081` in root rep folder
4. In second terminal run _ngrok_ for https: `npx ngrok http 8081`
5. Get https-url from _ngrok_ and paste it in `Web-plugin url` in your app settings


## Amplify Backend:

* Install amplify `npm install -g @aws-amplify/cli`
* Install amplify library `npm install aws-amplify @aws-amplify/ui-react`
* Integrate backend into client repo `amplify pull --appId d2oveujq8uapz3 --envName staging`
  * `whatever`
  * `javascript`
  * `react`
  * `src`
  * `dist`
  * `npm run build`
  * `npm run serve`
* Generate GraphQL and data schema `amplify codegen add` or `amplify codegen` if already exists
  * `typescript`
  * `src/graphql/**/*.ts`
  * `Yes`
  * `4` (probably?)
  * `src/API.ts`
  * `Yes`
  
Use `Amplify` object to make GraphQL API requests or interact with DataStore 
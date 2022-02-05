# Weather App
Aplicativo de clima / previsao do tempo em react.js

# Iniciando com o docker
## Crie o container com:
`docker build -t weatherapp:dev .`
## Execute o container com: 
`docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm weatherapp:dev`
 ou
`docker compose up`
## Visualizando o aplicativo quando o docker estiver no ar
[http://localhost:3001/](http://localhost:3001/)

#Inciando sem o docker
### Install dependencies
`$ npm install`

### Run the app
`$ npm start`

## Visualizando o aplicativo
[http://localhost:3000/](http://localhost:3000/)

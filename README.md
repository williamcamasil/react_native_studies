# Rest API Json Service

### Json Service (CRUD)

How to create json service API (Steps):

* create folder ('backend')

* in terminal inside this new folder, install json server with command:
  
  * ```
    npm install -g json-server
    ```

* inside backend folder create db.json file

* insert json information like this example and save:
  
  * ```json
    {
      "alunos": [
        {
          "id": 1,
          "nome": "William",
          "nota": "10"
        }
      ]
    }
    ```

*  in terminal execute this command:
  
  * ```
    json-server --watch db.json
    ```

* if you want to create some tests, open postman and try these:
  
  * GET > http://localhost:3000/alunos
  
  * POST > http://localhost:3000/alunos (insert json body)
    
    * ```json
      {
          "nome": "Joaquim",
          "nota": 8
      }
      ```
  
  * PUT > http://localhost:3000/alunos/2 (insert json body)
    
    * ```json
      {
          "nome": "Joaquim Alfonso",
          "nota": 4
      }
      ```
  
  * DELETE > http://localhost:3000/alunos/3



**Important:** When execute project run backend command: **json-server --watch db.json**



### Folders

```
src
	components
	Interfaces
	routes
	screens
	services
	Utils
```





### Libs in project

* axios > yarn add axios



### Links

* [React Native: REST APIs com JSON server | Alura](https://www.alura.com.br/artigos/react-native-rest-apis-json-server)

* [Network error with axios and react native - Stack Overflow](https://stackoverflow.com/questions/49370747/network-error-with-axios-and-react-native)

* [📱🤘🏾Calling API Data with TypeScript and React Native - YouTube](https://www.youtube.com/watch?v=JUiacuYwEvc)

* [react-native-toast-message/quick-start.md at main · calintamas/react-native-toast-message · GitHub](https://github.com/calintamas/react-native-toast-message/blob/main/docs/quick-start.md)

* [javascript - How to re-render component on going back using back button in react native? - Stack Overflow](https://stackoverflow.com/questions/60362589/how-to-re-render-component-on-going-back-using-back-button-in-react-native)

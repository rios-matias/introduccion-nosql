# nosql-mongodb-practice

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) 
- Install [npm](https://www.npmjs.com/) 


# Getting started
- Clone the repository
```
git clone  https://github.com/rios-matias/nosql-mongodb-practice
```
- Install dependencies
```
cd nosql-mongodb-practice
npm install
```
- Run the project
```
npm start
```
  Navigate to `http://localhost:8000`

- Swagger endpoints

  swagger Spec Endpoint : http://localhost:8000/api-docs 

  swagger-ui  Endpoint : http://localhost:8000/docs 
  
- API Enpoints
  
  


# Javascript Script + Node + MongoDB
The main purpose of this repository is to learn and practice nosql using MongoDB. The Rest APIs will be using the Swagger (OpenAPI) Specification.


## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **src**                  | Contains  source code that will be compiled to the dist dir                               | 
| **src/controllers**      | Controllers define functions to serve various express routes.   
| **src/routes**           | Contain all express routes, separated by module/area of application                       
| **src/models**           | Models define schemas that will be used in storing and retrieving data from Application database  |
| **src**/index.js         | Entry point to express app                                                               |
| package.json             | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)   |
| .env                     | Project's required environment variables.    |

# Swagger
## Specification
The swagger specification file is named as swagger.yaml. The file is located under definition folder.
Example:
```
paths:
  /hello:
    get:
      x-swagger-router-controller: helloWorldRoute
      operationId: helloWorldGet
      tags:
        - /hello
      description: >-
        Returns the current weather for the requested location using the
        requested unit.
      parameters:
        - name: greeting
          in: query
          description: Name of greeting
          required: true
          type: string
      responses:
        '200':
          description: Successful request.
          schema:
            $ref: '#/definitions/Hello'
        default:
          description: Invalid request.
          schema:
            $ref: '#/definitions/Error'
definitions:
  Hello:
    properties:
      msg:
        type: string
    required:
      - msg
  Error:
    properties:
      message:
        type: string
    required:
      - message
```
### Highlights of the swagger.yaml File

- /hello:
  
  Specifies how users should be routed when they make a request to this endpoint.
- x-swagger-router-controller: helloWorldRoute

  Specifies  which code file acts as the controller for this endpoint.
- get:

  Specifies the method being requested (GET, PUT, POST, etc.).
- operationId: hello
  
  Specifies the direct method to invoke for this endpoint within the controller/router 
- parameters:
  
   This section defines the parameters of your endpoint. They can be defined as path, query, header, formData, or body.
- definitions:
   
   This section defines the structure of objects used in responses or as parameters.



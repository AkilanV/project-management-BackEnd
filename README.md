Project Management Backend (NestJS)

      Node.js `v18+
      npm 
      npm install
      npm run start:dev


      DB_HOST=localhost
      DB_PORT=""
      DB_USERNAME=userName
      DB_PASSWORD=password
      DB_NAME=dbname
      this details i have setted in  app.module.ts


Technologies i have Used in this Project

    NestJS
    TypeORM
    MYSql
    Socket.IO

API Endpoints

   Auth

      POST /auth/register — Register a user
      POST /auth/login — Login with credentials

   Projects

      GET /projects — Get all projects
      POST /projects — Create new project
      PUT /projects/:id — Update a project
      DELETE /projects/:id — Delete a project   


  Real-time updates are emitted via Socket.IO (projectCreated, projectUpdated, projectDeleted)

   


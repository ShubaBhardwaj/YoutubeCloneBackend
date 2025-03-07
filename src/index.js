import {app} from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
});

const port = process.env.PORT || 3001;


connectDB()
.then(()=>{
    app.listen(port, () => {  
    console.log(`Server Listening on port ${port}`);
  });
})
.catch((err)=>{
    console.log("MongooDB conection error from the index.js file(main) ", err);
})


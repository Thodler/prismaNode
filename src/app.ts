import express, {Application, Router} from 'express'
import userRouter from './routes/userRouter'
import commandeRouter from './routes/commandeRouter'
import produitRouter from "./routes/produitRouter"

const app: Application = express()
const port = 3000

app.use(express.json())

//Liste des routes
app.use('/users', userRouter)
app.use('/commandes', commandeRouter)
app.use('/produits', produitRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
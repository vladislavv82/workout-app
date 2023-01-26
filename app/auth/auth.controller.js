import { prisma } from "../prisma.js"

//description   Auth user
//Route POST /api/auth/login
//access Public тип доступа

export const authUser = async (req, res) => {
//     const user = await prisma.user.findMany() //findMany возвращает все записи user
    
//     res.json(user)

 res.json({message: 'You ara autorize'})
}

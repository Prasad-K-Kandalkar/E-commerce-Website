import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Adimn User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'PKK',
        email: 'pkk@example.com',
        password: bcrypt.hashSync('123456',10),
        
    },
    {
        name: 'RKK',
        email: 'rkk@example.com',
        password: bcrypt.hashSync('123456',10),
        
    },
]

export default users
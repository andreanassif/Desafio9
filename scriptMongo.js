let connection = new Mongo();
let database = connect('localhost:27017/ecommerce')

database.productos.insertMany([
    {
        stock: 20,
        name: "llaveros personalizados",
        price: 120,
        url: "https://res.cloudinary.com/dhndpus6m/image/upload/v1659133158/Locosen3D/llavero-foto-dado_t7slhm.jpg",
    },
    {
        stock: 20,
        name: "pulpo articulado",
        price: 580,
        url: "https://res.cloudinary.com/dhndpus6m/image/upload/v1659133158/Locosen3D/pulpoarticulado_plywvr.jpg"
    },
    {
        stock: 20,
        name: "deco-homero",
        price: 900,
        url: "https://res.cloudinary.com/dhndpus6m/image/upload/v1659133158/Locosen3D/deco-homero-dona_hmfm8w.jpg",
    },
    {
        stock: 20,
        name: "juego didactico balancin",
        price: 1280,
        url: "https://res.cloudinary.com/dhndpus6m/image/upload/v1659131864/Locosen3D/tetrix-balancin_rwzqmh.jpg",
    },
    {
        stock: 20,
        name: "soportes notebook",
        price: 1700,
        url: "https://res.cloudinary.com/dhndpus6m/image/upload/v1659133159/Locosen3D/soportenotebook_yyickv.jpg",
    },
    {
        stock: 20,
        name: "lapiceros personalizados",
        price: 2300,
        url: "https://res.cloudinary.com/dhndpus6m/image/upload/v1659133158/Locosen3D/lapicero-mojo-gris_dr2hxb.jpg",
    },
    {
        stock: 20,
        name: "mates personalizados",
        price: 2860,
        url: "https://res.cloudinary.com/dhndpus6m/image/upload/v1659133159/Locosen3D/mates-personalizados_ucepdr.jpg",
    },
    {
        stock: 20,
        name: "velador fucsia",
        price: 3350,
        url: "https://res.cloudinary.com/dhndpus6m/image/upload/v1659131863/Locosen3D/velador-fucsia-modelo3_nm8asz.jpg",
    },
    {
        stock: 20,
        name: "velador naranja",
        price: 4320,
        url: "https://res.cloudinary.com/dhndpus6m/image/upload/v1659131863/Locosen3D/velador-naranja-modelo33_vtknpl.jpg",
    },
    {
        stock: 20,
        name: "velador azul",
        price: 4990,
        url: "https://res.cloudinary.com/dhndpus6m/image/upload/v1659131863/Locosen3D/velador-on-azul-modelo5_zk1lwl.jpg",
    }
])

database.mensajes.insertMany([
    {email:"matias@gmail.com",mensaje:"hola!"},
    {email:"andrea@gmail.com",mensaje:"como estas?"},
    {email:"ana@gmail.com",mensaje:"hola!"},
    {email:"fede@gmail.com",mensaje:"bien"},
    {email:"ramiro@gmail.com",mensaje:"hola!"},
    {email:"flavio@gmail.com",mensaje:"bien"},
    {email:"sofia@gmail.com",mensaje:"hola!"},
    {email:"martin@gmail.com",mensaje:"bien"},
    {email:"vero@gmail.com",mensaje:"como estas?"},
    {email:"franco@gmail.com",mensaje:"hola!"},
])
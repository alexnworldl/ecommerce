export default {
    categoria_list: (categoria) => {
        return {
            _id: categoria._id, // Accede al _id en lugar de id
            title: categoria.title,
            imagen: categoria.imagen,
            state: categoria.state,
        };
    }
}

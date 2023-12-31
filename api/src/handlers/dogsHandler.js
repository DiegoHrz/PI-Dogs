const {
  getAllBreeds,
  getBreedId,
  createDogs,
  deletedDog,
} = require("../controllers/dogsController");

const dogsHandler = {};

dogsHandler.getAllBreedsHandler = async (req, res) => {
  try {
    const respuesta = await getAllBreeds();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

dogsHandler.getBreedIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getBreedId(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

dogsHandler.getDogsNameHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const respuesta = await getAllBreeds(name);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

dogsHandler.createDogsHandler = async (req, res) => {
  try {
    const {
      name,
      min_height,
      max_height,
      min_weight,
      max_weight,
      lifespan,
      image,
      temperaments,
    } = req.body;
    const respuesta = await createDogs(
      name,
      min_height,
      max_height,
      min_weight,
      max_weight,
      lifespan,
      image || "https://images.creativefabrica.com/products/previews/2023/06/02/HMYYv29D8/2QefNo5bZ4K6CUbK7vqZJNS84pT-mobile.jpg",
      temperaments
    );
    res.status(201).json(respuesta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

dogsHandler.deleteDogHandler = async(req,res)=>{
  try {
    const {id } = req.params
    const response = await deletedDog(id)
    res.status(200).json(response)
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

module.exports = dogsHandler;

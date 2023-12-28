const prisma = require("../config/db");

// get all tutorials limit-offset pagination

const getAllTutorials = async (req, res) => {
  try {
    let tutorials;
    if ((req.query.published === 'true')) {
      tutorials = await prisma.tutorial.findMany({
        where: {
          published: true,
        },
      });
    } else {
      tutorials = await prisma.tutorial.findMany({
        skip: +req.query.skip || 0,
        take: +req.query.take || 5
      });
    }
    res.json(tutorials);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
};

// create a tutorial
const createTutorial = async (req, res) => {
  const { title, description, published } = req.body;
  try {
    const newTutorial = await prisma.tutorial.create({
      data: {
        title,
        description,
        published: published === "true",
      },
    });
    res.json(newTutorial);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error  can process post" });
  }
};

//find single tutorial by id

const getTutorialByID = async (req, res) => {
  const { id } = req.params;
  try {
    const tutorial = await prisma.tutorial.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!tutorial) {
      res.status(404).json({ error: "tutorial not fund" });
      return;
    }
    res.json(tutorial);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
};

//update  a tutorial with id

const UpdateTutorial = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, published } = req.body;
    const updatedTutorial = await prisma.tutorial.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title,
        description,
        published: published === "true",
      },
    });
    res.json(updatedTutorial);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error can't update" });
  }
};

// delete a Tutorial with id

const deleteTutorialById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTutorial = await prisma.tutorial.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.json(deletedTutorial);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
};

//delete all Tutorials from db

const deleteAllTutorials = async (req, res) => {
  try {
    const deletedAll = await prisma.tutorial.deleteMany();
    res.json(deletedAll);
  } catch (error) {
    console.log(error);
    res.status(500).json("server error");
  }
};

// get published tutorials

const getPublishedTutorials = async (req, res) => {
  try {
    const publishedTutorials = await prisma.tutorial.findMany({
      where: {
        published: true,
      },
    });
    res.json(publishedTutorials);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
};

// get published tutorials

const getNotPublishedTutorials = async (req, res) => {
  try {
    const NotPublishedTutorials = await prisma.tutorial.findMany({
      where: {
        published: false,
      },
    });
    res.json(NotPublishedTutorials);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
};

module.exports = {
  getAllTutorials,
  createTutorial,
  getTutorialByID,
  UpdateTutorial,
  deleteTutorialById,
  deleteAllTutorials,
  getPublishedTutorials,
  getNotPublishedTutorials,
};

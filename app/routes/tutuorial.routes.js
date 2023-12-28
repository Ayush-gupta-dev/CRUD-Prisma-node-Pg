const express= require("express")
const router = express.Router()
const tutorialControllers = require("../controllers/tutorial.controller")

router.get("/tutorials",tutorialControllers.getAllTutorials);
router.get("/tutorials/:id",tutorialControllers.getTutorialByID);
router.get("/tutorials/published/true",tutorialControllers.getPublishedTutorials);
router.get("/tutorials/published/false",tutorialControllers.getNotPublishedTutorials);

router.post("/tutorials",tutorialControllers.createTutorial);
router.put("/tutorials/:id",tutorialControllers.UpdateTutorial);

router.delete("/tutorials/:id",tutorialControllers.deleteTutorialById)
router.delete("/tutorials",tutorialControllers.deleteAllTutorials)


 


module.exports = router;
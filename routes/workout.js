const router = require("express").Router();
const Workout = require("../model/workout");

router.get("/", async (req, res) => {
  const workouts = await Workout.find({});
  let x = JSON.parse(JSON.stringify(workouts));
  for (let i = 0; i < x.length; i++) {
    delete x[i]._id;
    delete x[i].schedule;
  }
  res.status(200).send(x);
});
router.get("/:id", async (req, res) => {
  const exercises = await Workout.find({ name: req.params.id });
  console.log(exercises + " " + req.params.id);
  let x = JSON.parse(JSON.stringify(exercises[0])).schedule;
  res.status(200).send(x);
});

module.exports = router;

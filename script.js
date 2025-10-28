"use strict";

const dayButtons = document.querySelectorAll("[data-day]");
const exercisesList = document.querySelector(".exercises-wrapper");

let gymPlan = [
  {
    day: "Monday",
    workouts: [
      {
        title: "Push Day",
        exercises: [
          {
            name: "Bench Press",
            sets: 3,
            reps: 12,
          },
          {
            name: "Incline Dumbbell Press",
            sets: 3,
            reps: 12,
          },
          {
            name: "Cable Chest Flyes",
            sets: 3,
            reps: 12,
          },
          {
            name: "Machine Shoulder Press",
            sets: 3,
            reps: 12,
          },
          {
            name: "Seated Dumbell Press",
            sets: 3,
            reps: 12,
          },
          {
            name: "Dumbell Lateral Raises & Front Raises",
            sets: 3,
            reps: 12,
          },
        ],
      },
    ],
  },
  {
    day: "Tuesday",
    workouts: [
      {
        title: "Pull Day",
        exercises: [
          {
            name: "Pull Ups",
            sets: 5,
            reps: 10,
          },
          {
            name: "Incline Dumbbell Press",
            sets: 3,
            reps: 12,
          },
          {
            name: "Cable Chest Flyes",
            sets: 3,
            reps: 12,
          },
        ],
      },
    ],
  },

  {
    day: "Wednesday",
    workouts: [
      {
        title: "Leg Day",
        exercises: [
          {
            name: "Pull Ups",
            sets: 5,
            reps: 10,
          },
          {
            name: "Incline Dumbbell Press",
            sets: 3,
            reps: 12,
          },
          {
            name: "Cable Chest Flyes",
            sets: 3,
            reps: 12,
          },
        ],
      },
    ],
  },
];

// Lopping the buttons and adding event listeners
dayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const day = button.getAttribute("data-day");
    // passing day variable as an argument to showExercises function
    showExercises(day);
  });
});

const showExercises = function (day) {
  exercisesList.innerHTML = "";
  // Loop through exercises
  const dayPlan = gymPlan.find((p) => p.day === day);

  if (!dayPlan) {
    exercisesList.innerHTML = "<p>No workouts planned for this day.</p>";
  } else {
    // Display the exercises for the selected day
    let exercisesHTML = dayPlan.workouts
      // Outer loop for workouts
      .map(
        (workout) => `<h2>${workout.title}</h2>
        ${workout.exercises
          // Inner loop for exercises
          .map(
            (exercise) => `<div class="exercise">
            <p>${exercise.name}</p>
            <span>Sets: ${exercise.sets} Reps: ${exercise.reps}</span>
            </div>
          `
            // here join merges everything into a single string
          )
          .join("")}
      `
      )
      .join("");
    exercisesList.innerHTML = exercisesHTML;
  }
};

// Object.keys(gymPlan).forEach((day) => {
//   console.log(day); // "monday"
//   console.log(gymPlan[day]);
// });

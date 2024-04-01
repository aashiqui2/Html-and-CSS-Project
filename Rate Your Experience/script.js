const stars = document.querySelectorAll(".star");
// console.log(stars);
const emojiEl = document.querySelector(".emoji");
// console.log(emojiEl);
const statusEl = document.querySelector(".status");
// console.log(statusEl);
const defaultRatingIndex = 0;
let currentRatingIndex = 0;

const ratings = [
    { emoji: "🎯", name: "Rate Your Experience" },
    { emoji: "😔", name: "Very Poor" },
    { emoji: "🙁", name: "Poor" },
    { emoji: "🙂", name: "Good" },
    { emoji: "🤩", name: "Very Good" },
    { emoji: "🥰", name: "Excellent" }
  ];

  // !  ----------------------------------------------
  
  const checkSelectedStar = (star) => {
      if (parseInt(star.getAttribute("data-rate")) === currentRatingIndex) {
        return true;
      } else {
        return false;
      }
    };

  // ? This function is called when the star is cliked and the corresponding emoji of the data-rate and the name is changed to the innerHTML
  const setRating = (index) => {
    stars.forEach((star) => star.classList.remove("selected"));
     // ? here you have to pass the integer/Number values to pass through
    if (index > 0 && index <= stars.length) {
      document
        .querySelector('[data-rate="' + index + '"]')
        .classList.add("selected");
        // console.log(index);
    }
    emojiEl.innerHTML = ratings[index].emoji;
    statusEl.innerHTML = ratings[index].name;
  };
  
  // !  ----------------------------------------------
  const resetRating = () => {
    currentRatingIndex = defaultRatingIndex;
    setRating(defaultRatingIndex);
  };

// !  ----------------------------------------------

  stars.forEach((star) => {
     // ? when you click the div with class name as `star` the corresponding index is passed as argument to the setRating function. 
    //! and the current Rating index 0 is changed to the new index that you have clicked.
    star.addEventListener("click", function () {
      if (checkSelectedStar(star)) {
         //! if the data-rate and currentrating index is same the reset the index to 0
        resetRating();
        return;
      }
      const index = parseInt(star.getAttribute("data-rate"));
      currentRatingIndex = index;
      setRating(index);
    });
   //? when you hover the mosue to the star the data-rate custom attribute value is passed as index to the setRating function
    star.addEventListener("mouseover", function () {
      const index = parseInt(star.getAttribute("data-rate"));
      setRating(index);
    });
    // ? when you hover out the mouse the `0th` index is passed as argument to the setRating function
    star.addEventListener("mouseout", function () {
      setRating(currentRatingIndex);
    });
  });

  // !  ----------------------------------------------

//  ? when the dom loaded  the default index is passed as `0`
document.addEventListener("DOMContentLoaded",function(){
    setRating(defaultRatingIndex);
   
})
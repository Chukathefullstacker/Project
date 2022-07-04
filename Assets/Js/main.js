const showUniversityButton = document.getElementById("showUniversityButton");
const showUniversityCountry = document.getElementById("showUniversityCountry");

const showUniversityName = document.getElementById("showUniversityName");

console.log(showUniversityButton, showUniversityName);

let numberOfUinversities;

//  a function that returns list of all universities
const handleFetchesUniversities = async () => {
  try {
    const response = await fetch(
      "http://universities.hipolabs.com/search?country=United+Kingdom"
    );
    // this
    if (response.status === 200) {
      const data = await response.json();
      numberOfUinversities = data.length;
      let selectedUniversity = data[handleFetchRandomNumber()];
      let universityName = selectedUniversity.name;
      let universityCountry = selectedUniversity.country;
      showUniversityName.innerText = universityName;
      showUniversityCountry.innerText = universityCountry;
    } else {
      alert("Nothing to fetch");
    }
  } catch (error) {
    console.log(error);
  }
};

// a function that fetches randon number
const handleFetchRandomNumber = () => {
  const generateRandomNumber = Math.floor(Math.random() * numberOfUinversities);
  return generateRandomNumber;
};

// button that shows different universities when clicked
showUniversityButton.addEventListener("click", () => {
  try {
    handleFetchesUniversities();
  } catch (error) {
    console.log(error);
  }
});

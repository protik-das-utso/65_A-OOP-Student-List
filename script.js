// Array of student data
const students = [
  { id: "232-15-388", name: "Nafis Sadik", img: "./images/232-15-388.jpg" },
  { id: "232-15-785", name: "Sumaiya Islam Lamia", img: "./images/232-15-785.jpg" },
  { id: "232-15-425", name: "MD. Abdullah Khan", img: "./images/232-15-425.jpg" },
  { id: "232-15-897", name: "MD FOYSAL BHUIYAN", img: "./images/232-15-897.jpg" },
  { id: "232-15-210", name: "Kazi Anamul Haque", img: "./images/232-15-210.jpg" },
  { id: "232-15-008", name: "Sirajum Munir", img: "./images/232-15-008.jpg" },
  { id: "232-15-231", name: "Najrin Alam Orna", img: "./images/232-15-231.jpg" },
  { id: "232-15-487", name: "Touhidul Islam", img: "./images/232-15-487.jpg" },
  { id: "232-15-074", name: "Lamia Akter", img: "./images/232-15-074.png" },
  { id: "232-15-827", name: "MD. ANWAR HOSSEN", img: "./images/232-15-827.jpg" },
  { id: "232-15-647", name: "Tasnim Arafat", img: "./images/232-15-647.jpg" },
  { id: "232-15-817", name: "Naiful Islam", img: "./images/232-15-817.jpg" },
  { id: "232-15-567", name: "Tawfiq Uddin Samin", img: "./images/232-15-567.jpg" },
  { id: "232-15-923", name: "Fouzia Farhin Khan", img: "./images/232-15-923.jpg" },
  { id: "232-15-825", name: "ABU HASAN MONDAL", img: "./images/232-15-825.png" },
  { id: "232-15-405", name: "Samonty Roy", img: "./images/232-15-405.jpg" },
  { id: "232-15-810", name: "Abu Dazana", img: "./images/232-15-810.jpg" },
  { id: "232-15-752", name: "Swapnil Chowdhury", img: "./images/232-15-752.jpg" },
  { id: "232-15-085", name: "SAKIB AHMED", img: "./images/232-15-085.jpg" },
  { id: "232-15-681", name: "Mrs.Jannatul Ferdus Lubaba", img: "./images/232-15-681.jpg" },
  { id: "232-15-225", name: "Safayet islam abir", img: "./images/232-15-225.jpg" },
  { id: "232-15-768", name: "Tasmia Kamal", img: "./images/232-15-768.jpg" },
  { id: "232-15-110", name: "RATUL DEB SARKER", img: "./images/232-15-110.jpg" },
  { id: "232-15-678", name: "Yousuf Imam", img: "./images/232-15-678.jpg" },
  { id: "232-15-184", name: "Shafin Ahmed", img: "./images/232-15-184.jpg" },
  { id: "232-15-552", name: "Hasnat Bin Hossain Sakib", img: "./images/232-15-552.jpeg" },
  { id: "232-15-203", name: "M M Yamin Islam Elan", img: "./images/232-15-203.jpg" },
  { id: "232-15-051", name: "Abdul Alim", img: "./images/232-15-051.jpeg" },
  { id: "232-15-893", name: "Sobeha Prova", img: "./images/232-15-893.jpg" },
  { id: "232-15-363", name: "Md. Sarowar Hossain", img: "./images/232-15-363.jpg" },
  { id: "232-15-566", name: "Nayeem Siddique Bijoy", img: "./images/232-15-566.jpg" },
  { id: "232-15-234", name: "Shahriar Rifat", img: "./images/232-15-234.jpg" },
  { id: "232-15-783", name: "Tazim Hossen", img: "./images/232-15-783.jpg" },
  { id: "232-15-798", name: "Mahfuzur Rahman Mahfuz", img: "./images/232-15-798.jpeg" },
  { id: "232-15-404", name: "SALMAN", img: "./images/232-15-404.jpg" },
  { id: "232-15-336", name: "GULAM MURSHED", img: "./images/232-15-336.jpg" },
  { id: "232-15-296", name: "TANZINA RAHMAN", img: "./images/232-15-296.jpg" },
  { id: "232-15-152", name: "Zubaer Rahman Jisan", img: "./images/232-15-152.jpeg" },
  { id: "232-15-180", name: "Md Abdullah Al Maruf", img: "./images/232-15-180.jpg" },
  { id: "232-15-180", name: "Md Muntaqim Meherab ", img: "./images/232-15-354.jpg" },
  { id: "232-15-180", name: "PROTIK DAS UTSO", img: "./images/232-15-197.jpg" },
];

// Function to generate student cards dynamically
function generateStudentCards() {
  const container = document.getElementById("student-container");

  students.forEach(student => {
    const card = document.createElement("div");
    card.className = "student-card";

    const img = document.createElement("img");
    img.src = student.img;
    img.alt = `${student.name}'s Image`;
    img.className = "student-img";

    // Add the image click event to open the popup
    img.onclick = function() {
      openPopup(img);
    };

    const info = document.createElement("div");
    info.className = "student-info";

    const studentId = document.createElement("p");
    studentId.className = "student-id";
    studentId.textContent = student.id;

    const studentName = document.createElement("p");
    studentName.className = "student-name";
    studentName.textContent = student.name;

    info.appendChild(studentId);
    info.appendChild(studentName);

    card.appendChild(img);
    card.appendChild(info);

    container.appendChild(card);
  });
}

// Function to filter student cards based on search input and selected criteria
function filterStudents() {
  const input = document.getElementById('searchInput').value.toLowerCase(); // Get the search query
  const criteria = document.getElementById('searchCriteria').value; // Get the selected criteria (Name or ID)
  const cards = document.querySelectorAll('.student-card'); // Select all student cards
  let foundMatch = false; // Flag to track if any match is found

  cards.forEach(card => {
    const studentName = card.querySelector('.student-name').textContent.toLowerCase(); // Get the student name
    const studentId = card.querySelector('.student-id').textContent.trim().toLowerCase(); // Get the student ID and remove any extra spaces

    // Check if the search input matches the selected criteria (Name or ID)
    if ((criteria === 'name' && studentName.includes(input)) || (criteria === 'id' && studentId.includes(input))) {
      card.style.display = 'block'; // Show card if match
      foundMatch = true; // Set flag to true if a match is found
    } else {
      card.style.display = 'none'; // Hide card if no match
    }
  });

  // Handle "No match found" message
  const container = document.getElementById("student-container");
  const noMatchMessage = document.getElementById("no-match-message"); // Get the message element

  if (!foundMatch && input !== "") {
    if (!noMatchMessage) {
      // Create and display the "No match found" message if it doesn't exist
      const message = document.createElement("p");
      message.id = "no-match-message";
      message.textContent = "No match found";
      container.appendChild(message);
    }
  } else {
    // If matches are found or input is cleared, remove the "No match found" message
    if (noMatchMessage) {
      container.removeChild(noMatchMessage);
    }
  }
}

// Add event listeners to the search input and dropdown
document.getElementById('searchInput').addEventListener('input', filterStudents);
document.getElementById('searchCriteria').addEventListener('change', filterStudents);

// Call the function to generate cards when the page loads
generateStudentCards();

// Open the popup with the clicked image
function openPopup(image) {
  var popup = document.getElementById("imagePopup");
  var popupImage = document.getElementById("popupImage");
  popupImage.src = image.src;  // Set the popup image source
  popup.style.display = "flex"; // Show the popup
}

// Close the popup when the close button is clicked
function closePopup() {
  var popup = document.getElementById("imagePopup");
  popup.style.display = "none"; // Hide the popup
}

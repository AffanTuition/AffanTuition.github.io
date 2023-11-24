document.addEventListener("DOMContentLoaded", function () {
    const botResponses = {
        "about us": "Affan's Tuition is committed to providing exceptional educational experiences for students. Our team is dedicated to nurturing talents and inspiring a love for learning.",
        "contact": "You can reach us via phone at +91 9852766154 or email us at mdaffanshoaib@gmail.com.",
        "image gallery": "Our image gallery showcases various educational experiences and facilities at Affan's Tuition.",
        "tuition schedule": "The tuition timings are from 9 AM to 11 AM, Monday to Saturday.",
        "homework": "Homework for various classes can be found on our 'Homework' page.",
        "customer support": "For any assistance, our customer support team is available through the 'Customer Support' page featuring an AI-powered chatbot.",
        "games": "You can enjoy by playing games in the game page.",
        "news": "Any update or news related to tuition can be found here.",
        "study tool": "Study materials of the subject 'Math','Science','English' and 'S.S.T' can be found here"
    };

    const chatContainer = document.getElementById("chat-container");

    // Function to handle user input
    function handleUserInput(input) {
        const lowercaseInput = input.toLowerCase();

        // Check for specific queries and provide appropriate responses
        if (lowercaseInput.includes("about us")) {
            return "We are a dedicated team committed to providing quality education.";
        } else if (lowercaseInput.includes("homework")) {
            return "You can find your homework assignments in the homework section.";
        } else if (lowercaseInput.includes("contact")) {
            return "You can reach us via phone at +91 9852766154 or email us at mdaffanshoaib@gmail.com.";
        } else if (lowercaseInput.includes("image gallery")) {
            return "Our image gallery showcases various educational experiences and facilities at Affan's Tuition.";
        } else if (lowercaseInput.includes("tuition schedule")) {
            return "The tuition timings are from 9 AM to 11 AM, Monday to Saturday.";
        } else if (lowercaseInput.includes("customer support")) {
            return "For any assistance, our customer support team is available through the 'Customer Support' page featuring an AI-powered chatbot.";
        } else if (lowercaseInput.includes("games")) {
            return "You can enjoy by playing games in the game page.";
        } else if (lowercaseInput.includes("news")) {
            return "Any update or news related to tuition can be found here.";
        } else {
            return "Sorry, I'm not sure how to respond to that. Feel free to ask about homework or our services!";
        }
    }

    // Function to display bot message
    function displayBotMessage(message) {
        const botMessageDiv = document.createElement('div');
        botMessageDiv.className = 'bot-message';
        botMessageDiv.textContent = message;
        chatContainer.appendChild(botMessageDiv);
    }

    // Function to add clickable options to the chat
    function displayOptions(options) {
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = ''; // Clear previous options

        options.forEach((option) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.textContent = option;
            optionDiv.onclick = function () {
                sendMessage(option); // Send the selected option as a message
            };
            optionsContainer.appendChild(optionDiv);
        });
    }

    // Function to handle user messages
    function sendMessage(userInput) {
        const userMessage = userInput || document.getElementById('user-input').value;
        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'user-message';
        userMessageDiv.textContent = userMessage;
        chatContainer.appendChild(userMessageDiv);

        // Handle user input and display bot message
        const botResponse = handleUserInput(userMessage);
        displayBotMessage(botResponse);

        // Provide clickable options based on the response
        const options = getOptionsForResponse(botResponse);
        displayOptions(options);
    }

    // Function to get clickable options based on bot response
    function getOptionsForResponse(response) {
        // For simplicity, always return the initial options
        const initialOptions = ["About Us", "Homework", "News", "Image Gallery", "Contact", "Tuition Schedule", "Games", "Customer Support"];
        return initialOptions;
    }

    // Initial options to be displayed
    const initialOptions = ["About Us", "Homework", "News", "Image Gallery", "Contact", "Tuition Schedule", "Games", "Customer Support"];
    displayOptions(initialOptions);

    // Search functionality
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const botResponse = botResponses[searchTerm] || "Sorry, no results found for your search.";
        displayBotMessage(botResponse);
        searchInput.value = ''; // Clear the search input
    });
});

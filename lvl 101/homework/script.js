const personForm = document.getElementById('personForm');
        const personList = document.getElementById('personList');

        function generateEmail(firstName, lastName, age) {
            const randomNum = Math.floor(Math.random() * 1000);
            return `${firstName.toLowerCase()}.${lastName.toLowerCase()}${age}@example.com`;
        }
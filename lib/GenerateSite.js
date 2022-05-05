const fs = require('fs');

class GenerateSite {
    constructor(employees){
        this.employees = employees
    }

    createMembersCards() {
        let managerCards = "";
        let engineerCards = "";
        let internCards = "";
        for (let i = 0; i < this.employees.length; i++) {
            let employee = this.employees[i];
            let role = employee.role

            switch(role) {
                case "Manager":
                managerCards += `
        <div class="flex flex-col items-center p-5 mb-4">
            <div class="max-w p-2 rounded-lg bg-red-200 border shadow-lg border-gray-900">
                <h5 class="m-1 text-2xl font-medium text-gray-900">${employee.name}</h5>
                <i class="fa-solid fa-user-tie"></i><span class="m-1 text-xl text-gray-600">${employee.role}</span><hr class="border-t-2 border-gray-900 mb-6">
                <div class="flex mt-4 mb-4 lg:mt-6 rounded-lg border border-gray-400 shadow-lg bg-red-50 border-gray-900">
                    <ul class="m-4 text-l text-gray-900">
                        <li><span class="text-base font-bold text-gray-900">ID: </span>${employee.id}</li><hr class="border-t-2 border-gray-900 mb-4">
                        <li><span class="text-base font-bold text-gray-900">Email: </span><a href="mailto:${employee.email}">${employee.email}</a></li><hr class="border-t-2 border-gray-900 mb-4">
                        <li><span class="text-base font-bold text-gray-900">Office Number: </span>${employee.officeNumber}</li><hr class="border-t-2 border-gray-900 mb-4">
                    </ul>
                </div>
            </div>
        </div>
        `;
                break;
                case "Engineer":
                engineerCards += `
        <div class="flex flex-col items-center p-5 mb-4">
            <div class="max-w p-2 rounded-lg bg-red-200 border shadow-lg border-gray-900">
                <h5 class="m-1 text-2xl font-medium text-gray-900">${employee.name}</h5>
                <i class="fa-solid fa-list-check"></i><span class="m-1 text-xl text-gray-600">${employee.role}</span><hr class="border-t-2 border-gray-900 mb-6">
                <div class="flex mt-4 mb-4 lg:mt-6 rounded-lg border border-gray-400 shadow-lg bg-red-50 border-gray-900">
                    <ul class="m-4 text-l text-gray-900">
                        <li><span class="text-base font-bold text-gray-900">ID: </span>${employee.id}</li><hr class="border-t-2 border-gray-900 mb-4">
                        <li><span class="text-base font-bold text-gray-900">Email: </span><a href="mailto:${employee.email}">${employee.email}</a></li><hr class="border-t-2 border-gray-900 mb-4">
                        <li><span class="text-base font-bold text-gray-900">GitHub: </span><a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></li><hr class="border-t-2 border-gray-900 mb-4">
                    </ul>
                </div>
            </div>
        </div>
        `;
                break;
                case "Intern":
                internCards += `
        <div class="flex flex-col items-center p-5 mb-4">
            <div class="max-w p-2 rounded-lg bg-red-200 border shadow-lg border-gray-900">
                <h5 class="m-1 text-2xl font-medium text-gray-900">${employee.name}</h5>
                <i class="fa-solid fa-graduation-cap"></i><span class="m-1 text-xl text-gray-600">${employee.role}</span><hr class="border-t-2 border-gray-900 mb-6">
                <div class="flex mt-4 mb-4 lg:mt-6 rounded-lg border border-gray-400 shadow-lg bg-red-50 border-gray-900">
                    <ul class="m-4 text-l text-gray-900">
                        <li><span class="text-base font-bold text-gray-900">ID: </span>${employee.id}</li><hr class="border-t-2 border-gray-900 mb-4">
                        <li><span class="text-base font-bold text-gray-900">Email: </span><a href="mailto:${employee.email}">${employee.email}</a></li><hr class="border-t-2 border-gray-900 mb-4">
                        <li><span class="text-base font-bold text-gray-900">School: </span>${employee.school}</li><hr class="border-t-2 border-gray-900 mb-4">
                    </ul>
                </div>
            </div>
        </div>
        `;
                break;
            }
        }
        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous" referrerpolicy="no-referrer" 
    />
    <title>Team Summary</title>
</head>
<body>
    <header class="bg-white ml-10 mr-10 mb-4 border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-red-400">
        <h1 class="text-center text-6xl p-5 m-5 font-semibold whitespace-nowrap text-black">Team Summary</Summary></h1>
    </header>
    <div id="manager-cards" class="flex justify-around max-w rounded-lg border shadow-lg bg-gray-300 border-gray-200 m-10">
    ${managerCards}
    </div>
    <div id="engineer-cards" class="flex justify-around max-w rounded-lg border shadow-lg bg-gray-200 border-gray-200 m-10">
    ${engineerCards}
    </div>
    <div id="intern-cards" class="flex justify-around max-w rounded-lg border shadow-lg bg-gray-100 border-gray-200 m-10">
    ${internCards}
    </div>
    <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
</body>
</html>
        `;
    }

    generateHtmlFile() {
        fs.writeFile("./dist/index.html", this.createMembersCards(), (err) => {
            if (err)
                console.log(err);
            else {
                console.log('\x1b[92m%s\x1b[0m',">>>>>>>>>> The index.html file has been written successfully under /dist folder! <<<<<<<<<<\n");
            }
        });
    }

}

module.exports = GenerateSite;
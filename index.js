const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./Develop/lib/Engineer.js");
const Intern = require("./Develop/lib/Intern.js");
const Manager = require("./Develop/lib/Manager.js");

const employee = [];

function initApp() {
    startingHTML();
    addMember();
}

function addMember() {
    inquirer.prompt([{
        message: "Enter team member's name",
        name: "name"
    },
    {
        type: "list",
        message: " Select team member's role",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name:"role"
    },
    {
        message: "Enter team member's id",
        name: "id"
    },
    {
        message: `Enter team member's ${roleInfo}`,
        name: "roleInfo"

    },
    {
        type: "list",
        message: " Would you like to add mre team members?",
        choices: [
            "yes",
            "no"
        ],
        name: "addingMembers"

    }])
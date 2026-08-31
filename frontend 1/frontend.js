const API_URL = "http://localhost:3000/api";


// ========================================
// GET ALL PROBLEMS
// ========================================

async function getProblems() {

    try {

        const response = await fetch(`${API_URL}/problems`);

        if (!response.ok) {
            throw new Error("Failed to fetch problems");
        }

        const problems = await response.json();

        console.log(problems);

        return problems;

    } catch (error) {

        console.error("Error:", error);

        return [];

    }

}


// ========================================
// GET ONE PROBLEM
// ========================================

async function getProblem(id) {

    try {

        const response = await fetch(
            `${API_URL}/problems/${id}`
        );

        if (!response.ok) {
            throw new Error("Problem not found");
        }

        const problem = await response.json();

        return problem;

    } catch (error) {

        console.error("Error:", error);

    }

}


// ========================================
// CREATE PROBLEM
// ========================================

async function createProblem(problemData) {

    try {

        const response = await fetch(
            `${API_URL}/problems`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(problemData)
            }
        );


        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error);
        }

        console.log(result);

        return result;

    } catch (error) {

        console.error("Error:", error);

    }

}
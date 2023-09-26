const COHORT = "2306-FTB-ET-WEB-PT";
const baseUrl = ' https://fsa-puppy-bowl.herokuapp.com/api/2306-FTB-ET-WEB-PT/${COHORT}';

export async function fetchAllPlayers() {
    try {
        const response = await fetch('${baseUrl}/players')
const result = await response.json()
return result;
    } catch (error) {

    }
}
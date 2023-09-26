import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../api";

const AllPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useState("");
    console.log(searchParams)


    useEffect(() => {
        async function getAllPlayers() {
            const APIResponse = await fetchAllPlayers();
            if (APIResponse.success) {
                setPlayers(APIResponse.data.players)
            } else {
                setError(APIResponse.error.message);
            }
        }
        getAllPlayers();
    }, [])


    const playersToDisplay = searchParams
    ? players.filter((player) =>
    player.name.toLowerCase().includes(searchParams)
    )
    : players;


    return(
        <>
        <div>
            <label>
                search{""}
                <input
                type="text"
                placeholder="search"
                onChange={(e) => searchParams(e.target.value.toLowerCase())}
                />
            </label>
        </div>
        {playersToDisplay.map((player) => {
            return <h3 key={player.id}>{player.name}</h3>;
        })}
        </>
    )
};

export default AllPlayers;
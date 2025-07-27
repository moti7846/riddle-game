export async function getRiddles() {
    try {
        const response = await fetch("http://localhost:3200/riddle");
        if (response.status !== 200)
            throw "Server error: " + response.status;
        const riddle = await response.json();
        return riddle
    } catch (err) {
        throw err
    }
}

export async function createRiddle(riddle) {
    try {
        const response = await fetch("http://localhost:3200/riddle", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(riddle)
        });
        if (response.status !== 201)
            throw "Server error: " + response.status;
        return await response.json();
    } catch (err) {
        return err;
    }
}
export async function updateRiddle(id, riddle) {
    try {
        const response = await fetch(`http://localhost:3200/riddle/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(riddle)
        });
        if (response.status !== 200)
            throw "Server error: " + response.status;
        return await response.json();
    } catch (err) {
        return err;
    }
}
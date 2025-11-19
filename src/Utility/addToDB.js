const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList");
    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else {
        return [];
    }
}
// Utility/addToDB.js

export const removeFromStoredBook = (id) => {
    const stored = getStoredBook();
    const updated = stored.filter(bookId => parseInt(bookId) !== id);
    localStorage.setItem("readList", JSON.stringify(updated));
};

const addToStoredDB = (id) => {
    const storedBookData = getStoredBook();
    if (storedBookData.includes(id)) {
        alert("bhai ei id already ase");
    }
    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data)
        // console.log(storedBookData);

    }
}
export { addToStoredDB, getStoredBook };
const ABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"]
const COUNT_CELLS = 11

const createCells = (cant: number) => {
	const cells: Map<string, Array<number>> = new Map();
	for (let i = 0; i < cant; i++) {
		const columns = []
		for (let j = 0; j < cant; j++) {
			columns.push(j)
		}
		cells.set(ABC[i], columns)
	}

	return cells
}


export {
	createCells,
	ABC,
	COUNT_CELLS
}
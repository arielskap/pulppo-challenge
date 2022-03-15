import { useState } from "react"
import Columns from "../components/Columns"
import { createCells, ABC, COUNT_CELLS } from "../utils/cells"


const Excel = () => {
	const [cells, setCells] = useState(createCells(COUNT_CELLS))

	return (
		<section className="min-h-screen bg-black text-white">
			<h1 className="text-xl text-center py-4 font-bold">Super Excel!</h1>
			<section className="grid grid-cols-12 border-y border-gray-700">
				<div className="border border-gray-700"/>
				{Array.from(Array(COUNT_CELLS).keys()).map((_, i) => (
					<h2 key={`title-row-${i}`} className="flex items-center justify-center font-bold border border-gray-700">{ABC[i]}</h2>
				))}
				{Array.from(cells).map((row, i) => {
					return (
						<Columns key={`row-${i}`} rowPosition={i + 1} columns={row[1]} />
					)
				})}
			</section>
		</section>
	)
}

export default Excel
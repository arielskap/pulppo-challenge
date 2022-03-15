import { FocusEvent, useRef, useState } from "react"

interface Props {
	position: string
}

const Column = ({ position }: Props) => {
	const inputRef = useRef<HTMLInputElement>(null)

	const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
		const value = e.target.value
		const operation = value.includes("+") ? "+" :  value.includes("-") ? "-" : ""

		if (operation) {
			const cells = value.split(operation)
			const firstCell = cells[0]
			const secondCell = cells[1]
			if (firstCell && secondCell) {
				const inputFirstCellElement: HTMLInputElement | null = document.querySelector(`#${firstCell.toUpperCase().trim()}`)
				const inputSecondCellElement: HTMLInputElement | null = document.querySelector(`#${secondCell.toUpperCase().trim()}`)
				const thisInputElement = inputRef.current

				if (inputFirstCellElement && inputSecondCellElement && thisInputElement) {
					const valueFirstCell = parseInt(inputFirstCellElement.value || "0") || 0
					const valueSecondCell = parseInt(inputSecondCellElement.value || "0") || 0
					const result = operation === "+" ? valueFirstCell + valueSecondCell : valueFirstCell - valueSecondCell

					thisInputElement.value = `${result}`
				} else {
					alert("One or more cells selected no exist")
				}
			} else {
				alert("One or more cells selected no exist")
			}
		}
	}

	return (
		<input id={position} onBlur={handleBlur} ref={inputRef} type="text" className="p-1 bg-black border border-gray-700"/>
	)
}

export default Column
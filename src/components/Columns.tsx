import { ABC } from "../utils/cells"
import Column from "./Column"

interface Props {
	columns: Array<number>
	rowPosition: number
}

const Columns = ({ columns, rowPosition }: Props) => {
	return (
		<>
			<h2 className="flex items-center justify-center font-bold border border-gray-700">{rowPosition}</h2>
			{columns.map((column, i) => <Column key={`column-${column}-${i}`} position={`${ABC[i]}${rowPosition}`} />)}
		</>
	)
}

export default Columns
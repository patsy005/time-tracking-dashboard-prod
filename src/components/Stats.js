import { data } from '../data'
import StatsBox from './StatsBox'

export default function Stats({ timeLaps }) {
	return (
		<section className="stats">
			{data.map(data => (
				<StatsBox data={data} key={crypto.randomUUID()} timeLaps={timeLaps} />
			))}
		</section>
	)
}

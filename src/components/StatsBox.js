import eclipsisIcon from '../images/icon-ellipsis.svg'

export default function StatsBox({ data, timeLaps }) {
	return (
		<div
			className={`stats__box ${
				data.title === 'Self Care' ? 'stats__box--self-care' : `stats__box--${data.title.toLowerCase()}`
			}`}>
			<div className="background">
				<img src={data.icon} alt="" />
			</div>

			<div className="stats__stat">
				<div className="category">
					<h4>{data.title}</h4>
					<div className="elipses">
						<img src={eclipsisIcon} alt="" />
					</div>
				</div>

				<div className="hours">
					<h3>{data.timeframes[timeLaps].current}hrs</h3>
					<p>
						{timeLaps === 'daily' && 'Yesterday'} {timeLaps === 'weekly' && 'Last week'}{' '}
						{timeLaps === 'monthly' && 'Last month'} - <span>{data.timeframes[timeLaps].previous}hrs</span>
					</p>
				</div>
			</div>
		</div>
	)
}

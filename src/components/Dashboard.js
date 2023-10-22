import user from '../images/image-jeremy.png'
import Button  from './Button'

export default function Dashboard({ setTimeLaps, timeLaps }) {
	return (
		<section className="dashboard">
			<div className="dashboard__box">
				<div className="report-for">
					<img src={user} alt="Jeremy Robson" className="report-for__img" />
					<div className="report-for__person-data">
						<p>Raport for</p>
						<h3>Jeremy Robson</h3>
					</div>
				</div>
				<div className="report-time">
					<Button onClick={setTimeLaps} timeLaps={timeLaps}>
						Daily
					</Button>
					<Button onClick={setTimeLaps} timeLaps={timeLaps}>
						Weekly
					</Button>
					<Button onClick={setTimeLaps} timeLaps={timeLaps}>
						Monthly
					</Button>
				</div>
			</div>
		</section>
	)
}

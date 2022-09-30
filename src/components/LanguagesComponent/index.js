import React from 'react'
import Flag from './Flag'
import { languagesSet as langSet } from './Languages'
import './LanguagesComponent.scss'

function LanguagesComponent(pros) {
	const languagesKey = Object.keys(langSet)
	return (
		<div className="languages-container-O7CoEJqjxht4ZSHkopFh">
			<div className="languages-current-DO5hZvvS5TMHxepEZ7lr">
				<Flag id={pros.lang.id} flag={pros.lang.flag} />
				<p className="language-name-yC1TdjJB5iTA64OYLIwd">{pros.lang.name}</p>
			</div>
			<div className="languages-menu-DO5hZvvS5TMHxepEZ7lr">
				{languagesKey.map((key, index) => (
					<React.Fragment key={`${index}`}>
						<div
							className={`language-menu-content-DO5hZvvS5TMHxepEZ7lr language-menu-content-${index}`}
							onClick={() => {
								document.querySelector(
									'.languages-container-O7CoEJqjxht4ZSHkopFh',
								).style.pointerEvents = 'none'
								document.querySelector(
									'.languages-container-O7CoEJqjxht4ZSHkopFh',
								).style.pointerEvents = 'all'
								pros.callback(key)
							}}
						>
							<Flag id={langSet[key].id} flag={langSet[key].flag} />
							<p className="language-name-yC1TdjJB5iTA64OYLIwd">{langSet[key].name}</p>
						</div>
					</React.Fragment>
				))}
			</div>
		</div>
	)
}

export default LanguagesComponent

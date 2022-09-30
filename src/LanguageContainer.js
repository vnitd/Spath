import { useEffect, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import App from './App'
import LanguagesComponent from './components/LanguagesComponent'
import { languagesSet } from './components/LanguagesComponent/Languages'
import NoneSelectableLayout from './components/NoneSelectableLayout'
import MobileApp from './MobileApp'
import Cookies from 'universal-cookie'

function LanguageContainer() {
	const cookie = new Cookies()
	cookie.get('language') || cookie.set('language', 'vn')
	const [language, setLanguage] = useState(cookie.get('language'))
	const languageElem = languagesSet[language]

	useEffect(() => {
		const cookie = new Cookies()
		cookie.set('language', language)
	}, [language])

	return (
		<div className="lang-container">
			<BrowserView>
				<App lang={languageElem} />
			</BrowserView>
			<MobileView>
				<MobileApp />
			</MobileView>
			<NoneSelectableLayout>
				<LanguagesComponent lang={languageElem} callback={setLanguage} />
			</NoneSelectableLayout>
		</div>
	)
}

export default LanguageContainer

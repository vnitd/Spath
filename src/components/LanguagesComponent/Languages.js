// logo
import VNLanguageLogo from 'res/flags/vn.svg'
import ENLanguageLogo from 'res/flags/us.svg'

// languages
import VNLanguageResource from 'res/languages/vi-vn.json'
import ENLanguageResource from 'res/languages/en-us.json'

const languagesSet = {
	vn: {
		id: 'vn',
		name: 'Tiếng Việt',
		flag: VNLanguageLogo,
		resource: VNLanguageResource,
	},
	en: {
		id: 'us',
		name: 'English',
		flag: ENLanguageLogo,
		resource: ENLanguageResource,
	},
}

export { languagesSet }

import {ActiveBooksRow} from '@/widgets/activeBooksRow'
import {AllBooksRow} from '@/widgets/allBooksRow'
import {DoneBooksRow} from '@/widgets/doneBooksRow'

export default function Home() {
	return (
		<main>
			<ActiveBooksRow />
			<AllBooksRow />
			<DoneBooksRow />
		</main>
	)
}

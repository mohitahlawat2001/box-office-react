import ActorCard from './ActorCard';
import { FlexGrid } from '../common/FlexGrid';
import NotFound from '../../lib/not-found.png'

const ActorGrid = ({actors}) => {
    return (
        <FlexGrid>
            {
                actors.map(person => (
                    <ActorCard
                        key={person.person.id}
                        name={person.person.name}
                        country={person.person.country ? person.person.country.name : null}
                        birthday={person.person.birthday}
                        deathday={person.person.deathday}
                        gender={person.person.gender}
                        image={
                            person.person.image ? person.person.image.medium : NotFound
                        }
                    />
                    )

                )
                    
            }

        </FlexGrid>
    )
}

export default ActorGrid;
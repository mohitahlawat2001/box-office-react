import ActorCard from './ActorCard';

const ActorGrid = ({actors}) => {
    return (
        <div>
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
                            person.person.image ? person.person.image.medium : 'not-found.png'
                        }
                    />
                    )

                )
                    
            }

        </div>
    )
}

export default ActorGrid;
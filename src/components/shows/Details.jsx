const Details = ({ status ,premiered ,network}) => {
    return (
        <div>
            <p>Status: {status}</p>
            <p>Premiered: {premiered}</p>
            <p>Network: {network ? network.name : ''}</p>
        </div>
    )
}

export default Details;
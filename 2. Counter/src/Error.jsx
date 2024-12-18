function Error({ value }) {
    if (value) {
        return (
            <>
                <p>Error: Counter out of Range</p>
            </>
        )
    }
    else {
        return (
            <>
                <p>Enjoy Counting</p>
            </>
        )
    }
}

export default Error;
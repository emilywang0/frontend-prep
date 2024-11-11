
const URL = `INSERTURL`

function App() {
    const [temp, setTemp] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            // fetch() will return a PROMISE so we must AWAIT
            const result = await fetch(URL)
            // result.json() will return a Promise
            result.json()
            // This will return the json:
            result.json().then(json => {
                setTemp(json.current.temp_f)
            })
        }
        fetchData();
        // Empty dependency means response only called once
    }, []);

    return (
        <div className="App">
            Vancouver temp now: {temp}C
        </div>
    )


}
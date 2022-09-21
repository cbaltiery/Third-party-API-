import { useEffect, useState } from "react"

const Weather = (props) => {
    let apiID = "08ad130570fc59a228a7e124c9b22b31"
    let lat = "44.347831398677656"
    let lon = "-72.7569562382555"
    const [currentTemp, setCurrentTemp] = useState("")
    const [currentHumdity, setCurrentHumidity] = useState("")
    const [currentDescription, setDescription] = useState("")

    async function fetchWeather(){
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiID}`
            let response = await fetch(url)
            let data = await response.json()
            setCurrentTemp(data.main.temp)
            setCurrentHumidity(data.main.humidity)
            setDescription(data.weather[0].description)

            return (data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchWeather()
    }, []);


    return ( 
        <>
        <h1>Hello from Weather</h1>
        <ul>
            <li>Current Temperature: {currentTemp}</li>
            <li>Current Humidity: {currentHumdity}</li>
            <li>Current Conditions {currentDescription}</li>
        </ul>
        </>
     );
}
 
export default Weather;
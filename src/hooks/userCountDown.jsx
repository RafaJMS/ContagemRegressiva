import { useState } from "react"

const userCountDown = (date) => {
    const countDate = new Date(date).getTime()
    const now = new Date().getTime()
    const interval = countDate - now
    console.log(interval)

    const seconds = 1000
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours * 24
    const dayNumber = Math.floor(interval/days)
    const hourNumber = Math.floor((interval%days)/hours)
    const minuteNumber = Math.floor((interval%hours)/minutes)
    const secondNumber = Math.floor((interval%minutes)/seconds)
        
    console.log(dayNumber,hourNumber,minuteNumber,secondNumber)
    return{
        dayNumber,hourNumber,minuteNumber,secondNumber
    }
}

export default userCountDown
import React, { useEffect } from 'react'

export default function Timer() {
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('interval') 
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
  return (
    <div>Timer dese interval</div>
  )
}

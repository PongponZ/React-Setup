import React from 'react'
import HeaderCompo from '../components/header/header.component'
export default function Home() {
    return (
        <div key="homePage">
            <HeaderCompo />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                    <h1> Home Page</h1>
                </div>
            </div>
        </div>
    )
}

"use client"
import React, { useEffect } from 'react'

export default function BootstrapClient() {
    useEffect(()=>{
        require("bootstrap/dist/js/bootstrap.bundle.js")
    },[]);
    return null;
}

import React, { useState, useEffect } from 'react';
import './App.css';
import { accessUrl } from "./hooks/Spotify";

export function BeforeLogin() {
  return (
    <div className="BeforeLogin">
      <a href={accessUrl}>spotifyへログイン</a>
    </div>
  )
}

export default BeforeLogin;

import React from "react";
import { useState } from "react";

export default function SelectedContact(){
    async function fetchSelectedContact() {
     try { const response = await fetch (`https://jsonplace-univclone.herokuapp.com/users/${selectedContactId}`);

     
     const results = await response.json();

    } catch {

    }
}}


// Copyright (c) 2022 Brayden Blank All rights reserved
//
// Created by: Brayden Blank
// Created on: March 10 2022
// This file contains the JS functions for index.html

/**
 * This function gets the users input and calculates the area of a trapezoid
 */
function calculateClicked() {
  //input
  const length = parseInt(document.getElementById("length").value)
  const width = parseInt(document.getElementById("width").value)
  const height = parseInt(document.getElementById("height").value)

  //process
  const volume = (length * width * height) / 3
  
  //output
  document.getElementById("volume-of-pyramid").innerHTML = "The volume of the pyramid is: " +  volume.toFixed(2) + " cm³!"
}
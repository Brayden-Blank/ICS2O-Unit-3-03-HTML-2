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
  const radius = parseInt(document.getElementById("radius").value)

  //process
  const volume = (4 / 3) * Math.PI * (radius**3)
  
  //output
  document.getElementById("volume-of-sphere").innerHTML = "The volume of the sphere is: " +  volume.toFixed(2) + " cm³!"
}
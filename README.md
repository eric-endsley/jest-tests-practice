# Beep-Boop Machine

#### A machine that returns a patterned series of beeps, boops and 'welcome to the neighborhood's, 11/4/20

#### By Eric Endsley

## Description
This webpage consists of a single input form which prompts the user to enter a number, and a submit button. The number inputted by the user determines the length of an array, which is then displayed to the user as a string of terms, in a specific pattern, separated by commas. The terms in the string are patterned as follows: 1. All terms in the string which don't follow any other rule display as the number corresponding to their position in the string (e.g. the 4th term is 4) 2. All terms whose position in the string contains a 3 will display as "Won't you be my neighbor?" (e.g. the 30th term is "Won't you be my neighbor?"). All terms whose position in the string contains a 2 AND do not contiain a 3 will display as "Boop" (e.g. the 12th term is "Boop"). Lastly a term whose position in the string contain a 1 but NOT a 2 or 3 will dipslay as "Beep" (e.g. the 14th term is "Beep"). 

## Tests & Specs
#### Tests
Describe: .beepBoop

Test: "It should return an array from 0 to whatever number is passed as an argument" <br>
Expect(beepBoop(0).toEqual([0]);

Test: "It should replace numbers in the returned array containing a 3 with 'Won't you be my neighbor?'<br>
Expect(beepBoop(3)).toEqual([0, 1, 2, "Won't you be my neighbor"]);

Test: "It should replace numbers in the returned array containing a 2 and not containing a 3 with "Boop"."<br>
Expect(beepBoop(23)).toEqual([0, ... 19, "Boop", "Boop", "Boop", "Won't you be my neighbor", "Boop"]);

Test: "It should replaces numbers in the returned array containing a 1 and not containing a 2 or a 3 with "Beep""<br>
Expect(beepBoop(14)).toEqual([0, ... 9, "Beep", "Beep", "Boop", "Won't you be my neighbor", "Beep"]);

#### Specs
| Test | Input | Output |
| :----------- | :----------------------| :----------- |
| Beep Boop Machine |||
| should return an array from 0 to whatever number is passed as an argument | 0 | 0 |
| should replace numbers in the returned array containing a 3 with 'Won't you be my neighbor?'| 3 | [0, 1, 2, "won't you be my neighbor"] |
| should replace numbers in the returned array containing a 2 and not containing a 3 with "Boop" | 23 | [0, ... 19, "Boop", "Boop", "Boop", "Won't you be my neighbor", "Boop"] |
| should replace numbers in the returned array containing a 1 and not containing a 2 or a 3 with "Beep"|14| [0, ... 9, "Beep", "Beep", "Boop", "Won't you be my neighbor", "Beep"] |

## Setup
#### Clone and Open Locally
 1. Open the [programming language quiz github page](https://github.com/eric-endsley/week-3-project.git) by clicking the link or copy/pasting https://github.com/eric-endsley/week-3-project.git in the navigator bar of a web browser application.

 2. Click the green Code button in the upper-right part of the window and then EITHER:

 3. a. Copy the HTTPS URL for the repo and use it in the git clone command in git-bash or another git terminal by inputting: "git clone https://github.com/eric-endsley/week-3-project.git"<br> 
 OR b. Click "Download Zip" and unzip the file to an accessible location on your machine.

 4. Select the index.html file and open it with a web-browser application of your choice.

## Technologies Used
HTML, CSS, Bootstrap, Javascript and JQuery

## Known Bugs
None

## Contact Information

To ask questions or report a bug, contact [Eric Endsley](mailto:eric.endsley4@gmail.com)

## Legal

This software is licensed under the MIT license.
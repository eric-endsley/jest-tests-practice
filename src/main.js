import './css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { beepBoop } from "./beep-boop.js";

$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();

    let numberInput = parseInt($("input#number-input").val());
    let outputArray = beepBoop(numberInput);
    $(".output").text(outputArray);
  });
});
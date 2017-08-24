$(function () {
  'use strict';

  // Constructor
  function Validate(id) {
    this.id = id;
    this.value = this.id.val().trim();
  }

  // Methods in prototype
  Validate.prototype.checkByFocus = function () {
    this.id.focusout(this.checkField);
    this.id.focusin(this.clearWarning);
  }

  Validate.prototype.checkField = function () {
    if (this.value === '') {
      $(this).siblings('.mistakes').toggleClass('hidden');
      $(this).siblings().children('.empty-field').toggleClass('hidden');
      $(this).toggleClass('mistake');
      $(this).siblings('label').toggleClass('mistake');
    } else {
      var pattern = new RegExp(this.pattern);
      if (pattern.test(this.value)) {
        $(this).addClass('success');
        $(this).siblings('label').addClass('success');
      } else {
        $(this).siblings('.mistakes').toggleClass('hidden');
        $(this).siblings().children('.mistake-explanation').toggleClass('hidden');
        $(this).toggleClass('mistake');
        $(this).siblings('label').toggleClass('mistake');
      }
    }
  };

  Validate.prototype.checkValue = function (val) {
    if (val === '') {
      $(this).siblings('.mistakes').toggleClass('hidden');
      $(this).siblings().children('.empty-field').toggleClass('hidden');
      $(this).toggleClass('mistake');
      $(this).siblings('label').toggleClass('mistake');
      return false;
    } else {
      var pattern = new RegExp(this.pattern);
      if (pattern.test(val)) {
        $(this).addClass('success');
        $(this).siblings('label').addClass('success');
        return true;
      } else {
        $(this).siblings('.mistakes').toggleClass('hidden');
        $(this).siblings().children('.mistake-explanation').toggleClass('hidden');
        $(this).toggleClass('mistake');
        $(this).siblings('label').toggleClass('mistake');
        return false;
      }
    }
  };

  Validate.prototype.clearWarning = function () {
    $(this).siblings('.mistakes').addClass('hidden');
    $(this).siblings().children('.empty-field').addClass('hidden');
    $(this).siblings().children('.mistake-explanation').addClass('hidden');

    $(this).removeClass('mistake');
    $(this).siblings('label').removeClass('mistake');

    $(this).removeClass('success');
    $(this).siblings('label').removeClass('success');
  }

  // Classes' instances
  var nameHandle = new Validate($('#name'));
  var loginHandle = new Validate($('#login'));
  var emailHandle = new Validate($('#email'));
  var passwordHandle = new Validate($('#password'));


  // Call validation for focusout event:
  nameHandle.checkByFocus();
  loginHandle.checkByFocus();
  emailHandle.checkByFocus();
  passwordHandle.checkByFocus();


  // Call validation when form is submitted
  $('#reg-button').click(function (e) {
    e.preventDefault();

    var name = $('#reg-form input[name="name"]').val().trim();
    var login = $('#reg-form input[name="login"]').val().trim();
    var email = $('#reg-form input[name="email"]').val().trim();
    var password = $('#reg-form input[name="password"]').val().trim();

    var validResults = [nameHandle.checkValue(name), loginHandle.checkValue(login), emailHandle.checkValue(email), passwordHandle.checkValue(password)];
    var resultsSum = validResults.reduce(function (sum, current) {
      return sum + current;
    });

    if (resultsSum === 4) {
      $('#reg-form').trigger('reset');
      $('.success').removeClass('success');

      addRecord(name, login, email, password);
    }
  });

  // Save new user in localStorage
  function addRecord(name, login, email, password) {
    var catalogue = (localStorage.getItem('catalogue') === null) ? [] : JSON.parse(localStorage.getItem('catalogue'));
    var newRecord = [name, login, email, password];
    catalogue.push(newRecord);
    localStorage.setItem('catalogue', JSON.stringify(catalogue));

    // Add new record to the catalogue
    $('#table').append('<tr><td>' + name + '</td><td>' + login + '</td><td>' + email + '</td></tr>');
  }
});

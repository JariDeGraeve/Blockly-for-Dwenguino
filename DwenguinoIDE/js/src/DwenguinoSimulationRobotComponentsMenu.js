var DwenguinoSimulationRobotComponentsMenu = {
  maxNumberOfServos: 5,
  maxNumberOfLeds: 3,
  maxNumberOfPirs: 1,

  /** 
  * Initializes the robot components menu environment when loading 
  * the social robot scenario.
  */
  setupEnvironment: function(socialRobotScenario) {
    DwenguinoSimulationRobotComponentsMenu.initMenu(socialRobotScenario);
    DwenguinoSimulationRobotComponentsMenu.translateRobotComponents();
  },

  /**
   * Initialize the robot components menu 
   * when the scenario is loaded. 
   */
  initMenu: function(socialRobotScenario) {
    $('#robot_components_menu').append('<div id="rc_servo" class="robot_components_item"></div>');
    $('#rc_servo').append('<div id="rc_servo_tag"></div>');
    $('#rc_servo').append('<div id="rc_servo_img"></div>');
    $('#rc_servo').append('<div id="rc_servo_options"></div>');

    $('#robot_components_menu').append('<div id="rc_led" class="robot_components_item"></div>');
    $('#rc_led').append('<div id="rc_led_tag"></div>');
    $('#rc_led').append('<div id="rc_led_img"></div>');
    $('#rc_led').append('<div id="rc_led_options"></div>');

    $('#robot_components_menu').append('<div id="rc_pir" class="robot_components_item"></div>');
    $('#rc_pir').append('<div id="rc_pir_tag"></div>');
    $('#rc_pir').append('<div id="rc_pir_img"></div>');
    $('#rc_pir').append('<div id="rc_pir_options"></div>');

    DwenguinoSimulationRobotComponentsMenu.initButtons(socialRobotScenario);
  },

  /** 
   * Add buttons to the robot components menu to add or remove components 
   * in the scenario.
   */
  initButtons: function(socialRobotScenario) {
  //  robotComponentPlusButton = "<div class=\"center\"> \
  //  <div class=\"input-group\"> \
  //  <span class=\"input-group-btn\"> \
  //  <button type=\"button\" id=\"rc_servo_minus_button\" class=\"btn btn-default btn-number\" disabled=\"disabled\" data-type=\"minus\" data-field=\"quant[1]\"><span class=\"glyphicon glyphicon-minus\"></span></button></span> \
  //  <div class=\"rc_input\"><input type=\"text\" name=\"quant[1]\" class=\"form-control input-number\" value=\"0\" min=\"0\" max=\"3\"></div> \
  //  <span class=\"input-group-btn\"> \
  //  <button type=\"button\" id=\"rc_servo_plus_button\" class=\"btn btn-default btn-number\" data-type=\"plus\" data-field=\"quant[1]\"> \
  //  <span class=\"glyphicon glyphicon-plus\"></span></button></span></div></div>"
  //  .append(robotComponentPlusButton);
  
  // TODO: rewrite this in a more readable way
  $('#rc_servo_options').append('<div class="center"><p></p><div class="input-group"><span class="input-group-btn"><button type="button" id="rc_servo_minus_button" class="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]"><span class="glyphicon glyphicon-minus" id="rc_servo_minus_button"></span></button></span><input type="text" name="quant[1]" class="form-control input-number" value="0" min="0" max="3"><span class="input-group-btn"><button type="button" id="rc_servo_plus_button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]"><span class="glyphicon glyphicon-plus" id="rc_servo_plus_button"></span></button></span></div>');

  $('#rc_led_options').append('<div class="center"><p></p><div class="input-group"><span class="input-group-btn"><button type="button" id="rc_led_minus_button" class="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[2]"><span class="glyphicon glyphicon-minus" id="rc_led_minus_button"></span></button></span><input type="text" name="quant[2]" class="form-control input-number" value="0" min="0" max="5"><span class="input-group-btn"><button type="button" id="rc_led_plus_button" class="btn btn-default btn-number" data-type="plus" data-field="quant[2]"><span class="glyphicon glyphicon-plus" id="rc_led_plus_button"></span></button></span></div>');

  $('#rc_pir_options').append('<div class="center"><p></p><div class="input-group"><span class="input-group-btn"><button type="button" id="rc_pir_minus_button" class="btn btn-default btn-number" disable="disabled" data-type="minus" data-field="quant[3]"><span class="glyphicon glyphicon-minus" id="rc_pir_plus_button"></span></button></span><input type="text" name="quant[3]" class="form-control input-number" value="0" min="0" max="1"><span class="input-group-btn"><button type="button" id="rc_pir_plus_button" class="btn btn-default btn-number" data-type="plus" data-field="quant[3]"><span class="glyphicon glyphicon-plus" id="rc_pir_plus_button"></span></button></span></div>');

    // Event handlers
    $('.btn-number').click(function(e){
      e.preventDefault();
      
      fieldName = $(this).attr('data-field');
      type      = $(this).attr('data-type');
      var input = $("input[name='"+fieldName+"']");
      var currentVal = parseInt(input.val());
      if (!isNaN(currentVal)) {
          if(type == 'minus') {
              
              if(currentVal > input.attr('min')) {
                  input.val(currentVal - 1).change();
                  console.log('e.target', e.target);
                  console.log('e.target.id', e.target.id);
                  DwenguinoSimulationRobotComponentsMenu.removeRobotComponent(e.target.id, socialRobotScenario);
              } 
              if(parseInt(input.val()) == input.attr('min')) {
                  $(this).attr('disabled', true);
              }

          } else if(type == 'plus') {
              if(currentVal < input.attr('max')) {
                  input.val(currentVal + 1).change();
                  console.log('e.target', e.target);
                  console.log('e.target.id', e.target.id);
                  DwenguinoSimulationRobotComponentsMenu.addRobotComponent(e.target.id, socialRobotScenario);
              }
              if(parseInt(input.val()) == input.attr('max')) {
                  $(this).attr('disabled', true);
              }
          }
      } else {
          input.val(0);
      }
    });

    $('.input-number').focusin(function(){
        $(this).data('oldValue', $(this).val());
    });

    $('.input-number').change(function() {
        
        minValue =  parseInt($(this).attr('min'));
        maxValue =  parseInt($(this).attr('max'));
        valueCurrent = parseInt($(this).val());
        
        name = $(this).attr('name');
        if(valueCurrent >= minValue) {
            $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
        } else {
            alert('Sorry, the minimum value was reached');
            $(this).val($(this).data('oldValue'));
        }
        if(valueCurrent <= maxValue) {
            $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
        } else {
            alert('Sorry, the maximum value was reached');
            $(this).val($(this).data('oldValue'));
        }
    });

    $(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
              // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
              // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                  // let it happen, don't do anything
                  return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
  },

  translateRobotComponents: function() {
    document.getElementById('rc_servo_tag').textContent = MSG.simulator['servo'];
    document.getElementById('rc_led_tag').textContent = MSG.simulator['led'];
    document.getElementById('rc_pir_tag').textContent = MSG.simulator['pir'];
  },

  /*
   * This functions adds the specified robot component to the 
   * social robot scenario.
   */
  addRobotComponent: function(id, socialRobotScenario) {
    switch (id) {
      case "rc_servo_plus_button":
        socialRobotScenario.addServo();
        break;
      case "rc_led_plus_button":
        socialRobotScenario.addLed();
        break;
      case "rc_pir_plus_button":
        socialRobotScenario.addPir();
        break;
      case "default":
        break;
    }
  },

  /*
   * This functions removes the last created specified robot component
   * from the social robot scenario.
   */
  removeRobotComponent: function(id, socialRobotScenario) {
    switch (id) {
      case "rc_servo_minus_button":
        socialRobotScenario.removeServo();
        break;
      case "rc_led_minus_button":
        socialRobotScenario.removeLed();
        break;
      case "rc_pir_minus_button":
        socialRobotScenario.removePir();
        break;
      case "default":
        break;
    }
  }
};

 
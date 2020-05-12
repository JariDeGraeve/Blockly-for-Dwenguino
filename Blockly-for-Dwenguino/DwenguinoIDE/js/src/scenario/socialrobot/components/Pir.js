import { RobotComponent } from './RobotComponent.js'
import { TypesEnum } from '../RobotComponentsFactory.js';

export { Pir }

class Pir extends RobotComponent{
    constructor(id, pin = 0, state = 0, visible = true, width = 50, height = 50, offsetLeft = 5, offsetTop = 5, htmlClasses = 'sim_canvas pir_canvas'){
        super(htmlClasses);

        this._id = id;
        this._type = TypesEnum.PIR;
        this._width = width;
        this._height = height;
        this._offset = { 'left': offsetLeft, 'top': offsetTop };
        this._image = new Image();
        this._image.src = './DwenguinoIDE/img/socialrobot/pir.png';
        this._pin = pin;
        this._state = state;
        this._stateUpdated = false;
        this._canvasId = 'sim_pir_canvas' + this._id;

        this.insertHtml();
        this.toggleVisibility(visible);
    }

    toString(){
        return 'pir';
    }

    insertHtml(){
        $('#sim_container').append("<div id='sim_" + this.getType() + this.getId() + "' class='sim_element sim_element_" + this.getType() + " draggable'><div><span class='grippy'></span>" + MSG.simulator[this.getType()] + " " + this.getId() + "</div></div>");
        $('#sim_' + this.getType() + this.getId()).css('top', this.getOffset()['top'] + 'px');
        $('#sim_' + this.getType() + this.getId()).css('left', this.getOffset()['left'] + 'px');
        $('#sim_' + this.getType() + this.getId()).append("<canvas id='" + this.getCanvasId() + "' class='" + this.getHtmlClasses() + "'></canvas>");
    
        let buttonLabel = 'button' + this.getId() + '_label';
        let pirButtonId = 'pir_button' + this.getId();
        
        if (!document.getElementById(pirButtonId)) {
            $('#sensor_options').append("<div id='" + buttonLabel + "' class='sensor_options_label' alt='Load'>" + MSG.pirButtonLabel + ' ' + this.getId() + "</div>");
            $('#sensor_options').append("<div id='" + pirButtonId + "' class='pir_button' alt='Load'></div>");

            this.addPirEventHandler(pirButtonId, this.getCanvasId());
        }
    }

    addPirEventHandler(pirButtonId, pirCanvasId) {
        var self = this;
        // console.log(pirButtonId);
        $("#" + pirButtonId).on('mousedown', function () {
          if (document.getElementById(pirButtonId).className === "pir_button") {
            document.getElementById(pirButtonId).className = "pir_button pir_button_pushed";
            self.setImage('./DwenguinoIDE/img/socialrobot/pir_on.png');
            self.setState(1);
            self._stateUpdated = true; // TODO
          }
        });
    
        $("#" + pirButtonId).on('mouseup', function () {
          if (document.getElementById(pirButtonId).className === "pir_button pir_button_pushed") {
            document.getElementById(pirButtonId).className = "pir_button";
            self.robot[pirCanvasId].image.src = self.robot.imgPir;
            self.robot[pirCanvasId].state = 0;
            self._stateUpdated = true; // TODO
          }
        });
    }

    removeHtml(){
        $('#sim_pir' + this.getId()).remove();

        let buttonLabel = '#button' + this.getId() + '_label';
        let pirButtonId = '#pir_button' + this.getId();
        $(buttonLabel).remove();
        $(pirButtonId).remove();
    }

    toggleVisibility(visible){
        if (visible) {
            $('#sim_pir' + this.getId()).css('visibility', 'visible');
        } else {
            $('#sim_pir' + this.getId()).css('visibility', 'hidden');
        }
    }

    toXml(){
        let data = '';
        
        data = data.concat("<Item ");
        data = data.concat(" Type='", this.getType(), "'");
        data = data.concat(" Id='", this.getId(), "'");
        data = data.concat(" Width='", this.getWidth(), "'");
        data = data.concat(" Height='", this.getHeight(), "'");

        let simId = '#sim_' + this.getType() + this.getId();
        if ($(simId).attr('data-x')) {
            data = data.concat(" OffsetLeft='", parseFloat(this.getOffset()['left']) + parseFloat($(simId).attr('data-x')), "'");
        } else {
            data = data.concat(" OffsetLeft='", parseFloat(this.getOffset()['left']), "'");
        }
        if ($(simId).attr('data-y')) {
            data = data.concat(" OffsetTop='", parseFloat(this.getOffset()['top']) + parseFloat($(simId).attr('data-y')), "'");
        } else {
            data = data.concat(" OffsetTop='", parseFloat(this.getOffset()['top']), "'");
        }

        data = data.concat(" Pin='", this.getPin(), "'");
        data = data.concat(" State='", this.getState(), "'");
        data = data.concat(" Classes='", this.getHtmlClasses(), "'");

        data = data.concat('></Item>');

        return data;
    }
    reset(){
        this.setState(0);
        this._stateUpdated = false;
    }

    getId(){
        return this._id;
    }

    getType(){
        return this._type;
    }

    setWidth(width){
        this._width = width;
    }

    getWidth(){
        return this._width;
    }

    setHeight(height){
        this._height = height;
    }

    getHeight(){
        return this._height;
    }

    setOffset(offset){
        this._offset = offset;
    }

    getOffset(){
        return this._offset;
    }

    setImage(image){
        this._image.src = image;
    }

    getImage(){
        return this._image;
    }
    
    setPin(pin){
        this._pin = pin;
    }

    getPin(){
        return this._pin;
    }

    setState(state){
        this._state = state;
    }

    getState(){
        return this._state;
    }

    isStateUpdated(){
        return this._stateUpdated;
    }

    getCanvasId(){
        return this._canvasId;
    }
}